// ============================================================
// CART.JS - Sistema completo de carrinho e galeria (CORRIGIDO)
// ============================================================

const WHATSAPP_NUMERO = "553186421895"; // apenas números, com DDI+DDD

// ============================================================
// 1. FUNÇÕES DO CARRINHO (localStorage)
// ============================================================

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("carrinho", JSON.stringify(cart));
  updateCartBadge();
}

// Função para limpar duplicados com nomes parecidos ou iguais
function limparDuplicados(cart) {
  const vistos = new Set();
  return cart.filter(item => {
    const nomeLimpo = item.nome.trim().toLowerCase();
    if (vistos.has(nomeLimpo)) {
      return false; 
    }
    vistos.add(nomeLimpo);
    return true;
  });
}

function addToCart(produto) {
  let cart = getCart();
  
  // Garante que o nome seja uma string e remove espaços extras
  const nomeProduto = (produto.nome || 'Produto').trim();
  
  // Limpa duplicados existentes no carrinho
  cart = limparDuplicados(cart);

  const existente = cart.find((item) => item.nome.trim().toLowerCase() === nomeProduto.toLowerCase());

  if (existente) {
    existente.quantidade = (existente.quantidade || 0) + 1;
  } else {
    cart.push({ 
      ...produto, 
      nome: nomeProduto, // Salva o nome limpo
      quantidade: 1,
      imagem: produto.imagem || "img/produto-orgao-md10.png"
    });
  }

  saveCart(cart);
  return cart;
}

function removeFromCart(nome) {
  const cart = getCart().filter((item) => item.nome !== nome);
  saveCart(cart);
  renderCart();
}

function alterarQuantidade(nome, delta) {
  const cart = getCart();
  const item = cart.find((item) => item.nome === nome);
  if (!item) return;

  item.quantidade += delta;

  if (item.quantidade <= 0) {
    removeFromCart(nome);
    return;
  }

  saveCart(cart);
  renderCart();
}

function limparCarrinho() {
  if (confirm("Tem certeza que deseja limpar o carrinho?")) {
    localStorage.removeItem("carrinho");
    updateCartBadge();
    renderCart();
  }
}

// ============================================================
// 2. FORMATAÇÃO
// ============================================================

function formatarPreco(valor) {
  if (valor === null || valor === undefined || valor === "" || isNaN(valor)) {
    return "À combinar";
  }
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function calcularTotal(cart) {
  return cart.reduce((total, item) => {
    const preco = item.preco ? Number(item.preco) : 0;
    return total + preco * (item.quantidade || 0);
  }, 0);
}

function temItemACombinar(cart) {
  return cart.some((item) => !item.preco || item.preco === null);
}

function getTotalItens(cart) {
  return cart.reduce((soma, item) => soma + (item.quantidade || 0), 0);
}

// ============================================================
// 3. BADGE DO CARRINHO
// ============================================================

function updateCartBadge() {
  const badge = document.querySelector(".cart-badge");
  if (!badge) return;
  
  const total = getTotalItens(getCart());
  badge.textContent = total;
  
  if (total === 0) {
    badge.style.display = "none";
  } else {
    badge.style.display = "flex";
  }
}

// ============================================================
// 4. GALERIA DE IMAGENS
// ============================================================

function initGallery() {
  const mainImage = document.getElementById('mainProductImage');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainContainer = document.querySelector('.main-image');
  
  if (!mainImage || !thumbnails.length) return;

  const firstActive = document.querySelector('.thumbnail.active');
  if (firstActive) {
    const src = firstActive.dataset.image || firstActive.querySelector('img')?.src;
    if (src) mainImage.src = src;
  }

  function changeImage(imageSrc) {
    if (mainContainer) mainContainer.classList.add('loading');
    
    const tempImage = new Image();
    tempImage.src = imageSrc;
    
    tempImage.onload = function() {
      mainImage.src = imageSrc;
      mainImage.alt = 'Órgão Tokai MD-10';
      if (mainContainer) mainContainer.classList.remove('loading');
      mainImage.style.animation = 'none';
      void mainImage.offsetHeight;
      mainImage.style.animation = 'fadeInImage 0.4s ease forwards';
    };
    
    tempImage.onerror = function() {
      mainImage.src = 'img/produto-orgao-md10.png';
      if (mainContainer) mainContainer.classList.remove('loading');
    };
  }

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const imageSrc = this.dataset.image || this.querySelector('img')?.src;
      if (imageSrc) {
        changeImage(imageSrc);
      }
    });

    thumb.setAttribute('tabindex', '0');
    thumb.setAttribute('role', 'button');
    thumb.setAttribute('aria-label', 'Ver imagem do produto');
    
    thumb.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

// ============================================================
// 5. RENDERIZAÇÃO DA PÁGINA DO CARRINHO
// ============================================================

function criarItemHTML(item) {
  return `
    <div class="cart-item" data-nome="${item.nome}">
      <div class="cart-item-image">
        <img src="${item.imagem || 'img/produto-orgao-md10.png'}" alt="${item.nome}" />
      </div>
      <div class="cart-item-info">
        <h3>${item.nome}</h3>
        <p class="brand">${item.marca || 'Marca'}</p>
        <p class="price">${formatarPreco(item.preco)}</p>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-control">
          <button type="button" class="qtd-menos" data-nome="${item.nome}" aria-label="Diminuir quantidade">−</button>
          <span>${item.quantidade || 1}</span>
          <button type="button" class="qtd-mais" data-nome="${item.nome}" aria-label="Aumentar quantidade">+</button>
        </div>
        <button type="button" class="remove-item" data-nome="${item.nome}" aria-label="Remover item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          Remover
        </button>
      </div>
    </div>
  `;
}

function criarCarrinhoVazioHTML() {
  return `
    <div class="cart-empty">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <h2>Seu carrinho está vazio</h2>
      <p>Adicione instrumentos musicais e continue suas compras.</p>
      <a href="todos-produtos.html" class="btn btn-primary">Conhecer produtos</a>
    </div>
  `;
}

function renderCart() {
  const cartPage = document.querySelector(".cart-page");
  if (!cartPage) return;

  const cart = getCart();
  const itensContainer = document.querySelector(".cart-items");
  const summaryContainer = document.querySelector(".cart-summary");
  const headerCount = document.querySelector(".cart-header h1 span");

  const totalItens = getTotalItens(cart);
  if (headerCount) {
    headerCount.textContent = `${totalItens} ${totalItens === 1 ? "item" : "itens"}`;
  }

  if (cart.length === 0) {
    if (itensContainer) itensContainer.remove();
    if (summaryContainer) summaryContainer.remove();
    if (!document.querySelector(".cart-empty")) {
      cartPage.insertAdjacentHTML("beforeend", criarCarrinhoVazioHTML());
    }
    const clearBtn = document.querySelector('.clear-cart-btn');
    if (clearBtn) clearBtn.remove();
    return;
  }

  const vazio = document.querySelector(".cart-empty");
  if (vazio) vazio.remove();

  if (itensContainer) {
    itensContainer.innerHTML = cart.map(criarItemHTML).join("");
  }

  if (summaryContainer) {
    const total = calcularTotal(cart);
    const combinar = temItemACombinar(cart);
    const totalItens = getTotalItens(cart);

    summaryContainer.innerHTML = `
      <h2>Resumo do pedido</h2>

      <div class="summary-row">
        <span>Subtotal (${totalItens} ${totalItens === 1 ? "item" : "itens"})</span>
        <span>${formatarPreco(total)}${combinar ? " + itens à combinar" : ""}</span>
      </div>
      <div class="summary-row">
        <span>Frete</span>
        <span>À calcular</span>
      </div>
      <div class="summary-row">
        <span>Total</span>
        <span class="total-price">${formatarPreco(total)}${combinar ? "*" : ""}</span>
      </div>
      ${combinar ? `<p style="font-size:13px;color:var(--text-light);margin-top:8px;">*Itens à combinar serão negociados via WhatsApp.</p>` : ""}

      <div class="summary-actions">
        <button type="button" class="btn btn-primary" onclick="finalizarPedido()">
          Finalizar pedido via WhatsApp
        </button>
        <a href="produto.html" class="btn btn-secondary-outline">
          Adicionar mais produtos
        </a>
      </div>
    `;

    if (!document.querySelector('.clear-cart-btn')) {
      const clearBtn = document.createElement('button');
      clearBtn.className = 'clear-cart-btn';
      clearBtn.textContent = 'Limpar carrinho';
      clearBtn.style.cssText = `
        background: none;
        border: none;
        color: #F18845;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        padding: 8px;
        margin-top: 8px;
        transition: color 0.3s;
      `;
      clearBtn.addEventListener('click', limparCarrinho);
      summaryContainer.appendChild(clearBtn);
    }
  }
}

// ============================================================
// 6. FINALIZAR PEDIDO (WHATSAPP)
// ============================================================

function finalizarPedido() {
  const cart = getCart();

  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  let mensagem = "*Olá! Tenho interesse nos seguintes produtos:*\n\n";

  cart.forEach((item) => {
    const preco = formatarPreco(item.preco);
    mensagem += `• *${item.nome}* (${item.marca || 'Marca'}) - Qtd: ${item.quantidade || 1} - ${preco}\n`;
  });

  const total = calcularTotal(cart);
  mensagem += `\n━━━━━━━━━━━━━━━━━━━━\n`;
  mensagem += `*Total: ${formatarPreco(total)}*`;
  
  if (temItemACombinar(cart)) {
    mensagem += `\n_*Itens à combinar serão negociados na conversa*_`;
  }
  
  mensagem += `\n━━━━━━━━━━━━━━━━━━━━\n\n`;
  mensagem += `📦 *Entrega:* À calcular\n`;
  mensagem += `💳 *Pagamento:* À combinar`;

  const link = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
}

// ============================================================
// 7. EVENTOS E INICIALIZAÇÃO
// ============================================================

// Delegação de eventos para botões do carrinho
document.addEventListener("click", (evento) => {
  const mais = evento.target.closest(".qtd-mais");
  const menos = evento.target.closest(".qtd-menos");
  const remover = evento.target.closest(".remove-item");

  if (mais) {
    evento.preventDefault();
    alterarQuantidade(mais.dataset.nome, 1);
  } else if (menos) {
    evento.preventDefault();
    alterarQuantidade(menos.dataset.nome, -1);
  } else if (remover) {
    evento.preventDefault();
    const nome = remover.dataset.nome;
    if (confirm(`Remover "${nome}" do carrinho?`)) {
      removeFromCart(nome);
    }
  }
});

// ============================================================
// 8. INICIALIZAÇÃO AO CARREGAR A PÁGINA
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Limpa carrinho de duplicados ao carregar a página
  const cartAtual = getCart();
  const cartLimpo = limparDuplicados(cartAtual);
  if (cartLimpo.length !== cartAtual.length) {
    saveCart(cartLimpo);
  }

  // Atualiza badge do carrinho
  updateCartBadge();
  
  // Inicializa galeria de imagens
  initGallery();
  
  // Renderiza carrinho
  renderCart();

  // ============================================================
  // 9. EVENTO DO BOTÃO ADICIONAR AO CARRINHO (página produto)
  // ============================================================
  
  const btnAddCart = document.getElementById("btn-add-cart");
  if (btnAddCart) {
    // Remove todos os listeners antigos clonando o botão
    const newBtn = btnAddCart.cloneNode(true);
    btnAddCart.parentNode.replaceChild(newBtn, btnAddCart);
    
    // Adiciona o novo listener
    newBtn.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const mainImage = document.getElementById('mainProductImage');
      const imagemAtual = mainImage ? mainImage.src : 'img/produto-orgao-md10.png';
      
      // Pega o nome de forma segura, garantindo que não haja espaços extras
      const nomeProduto = (this.dataset.nome || 'Órgão MD-10').trim();

      const produto = {
        nome: nomeProduto,
        marca: this.dataset.marca || 'Tokai',
        preco: this.dataset.preco ? parseFloat(this.dataset.preco) : null,
        imagem: imagemAtual
      };
      
      addToCart(produto);
      
      // Feedback visual
      const originalText = this.innerHTML;
      const originalBg = this.style.background;
      this.innerHTML = 'Adicionado!';
      this.style.background = '#f18845';
      this.style.transform = 'scale(0.99)';
      this.disabled = true;
      
      setTimeout(() => {
        this.innerHTML = originalText;
        this.style.background = originalBg || '';
        this.style.transform = '';
        this.disabled = false;
      }, 600);
    });
  }

  // ============================================================
  // 10. EXPORTA FUNÇÕES PARA USO GLOBAL
  // ============================================================
  
  window.addToCart = addToCart;
  window.getCart = getCart;
  window.finalizarPedido = finalizarPedido;
  window.limparCarrinho = limparCarrinho;
  window.formatarPreco = formatarPreco;
  window.calcularTotal = calcularTotal;
});

// ============================================================
// 11. SUPORTE PARA MÚLTIPLAS PÁGINAS
// ============================================================

window.addEventListener('storage', (e) => {
  if (e.key === 'carrinho') {
    updateCartBadge();
    renderCart();
  }
});
  // Captura os parâmetros da URL
  const urlParams = new URLSearchParams(window.location.search);
  const sku = urlParams.get('sku');
  const nomeUrl = urlParams.get('nome');
  const marcaUrl = urlParams.get('marca');
  const categoriaUrl = urlParams.get('categoria');

  if (sku || nomeUrl) {
    // Atualiza Título Principal
    const tituloProduto = document.querySelector('.product-title');
    if (tituloProduto && (nomeUrl || sku)) {
      tituloProduto.textContent = nomeUrl || `Produto ${sku}`;
      document.title = `${nomeUrl || sku} - Sonho Meu`;
    }

    // Atualiza Marca
    const marcaElement = document.querySelector('.product-brand');
    if (marcaElement && marcaUrl) {
      marcaElement.textContent = marcaUrl;
    }

    // Atualiza Breadcrumb
    const breadcrumbCurrent = document.querySelector('.breadcrumb .current');
    if (breadcrumbCurrent) {
      breadcrumbCurrent.textContent = nomeUrl || sku;
    }

    // Atualiza Botão de Adicionar ao Carrinho
    const btnAddCart = document.getElementById('btn-add-cart');
    if (btnAddCart) {
      if (nomeUrl) btnAddCart.dataset.nome = nomeUrl;
      if (marcaUrl) btnAddCart.dataset.marca = marcaUrl;
      // Categoria é enviada mas não usada no botão, pode ser usada no futuro para analytics
    }

    // Atualiza o texto da descrição curta (você pode trocar por um texto específico)
    const descricao = document.querySelector('.product-description p');
    if (descricao && nomeUrl) {
      descricao.textContent = `Este é o produto ${nomeUrl} da marca ${marcaUrl || 'Sonho Meu'}. Entre em contato para saber mais detalhes e valores.`;
    }
  }
console.log('🛒 Sistema de carrinho e galeria carregado com sucesso!');