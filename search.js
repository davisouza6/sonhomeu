// SEARCH.JS - Busca de produtos (usa o produtosDB de produtos.js)

document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('searchInput');
  const resultsBox = document.getElementById('searchResults');
  const searchBox = document.getElementById('searchBox');

  // Página não tem a caixa de busca no header -> não faz nada
  if (!input || !resultsBox || !searchBox) return;

  // produtosDB vem de produtos.js, que precisa ser carregado ANTES deste arquivo
  if (typeof produtosDB === 'undefined') {
    console.warn('produtosDB não encontrado. Confirme que produtos.js está carregado antes de search.js.');
    return;
  }

  // normalização (ignora acento e caixa alta/baixa na comparação)

  function normalizar(texto) {
    return (texto || '')
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  // busca

  function buscarProdutos(termo) {
    const termoLimpo = termo.trim();
    if (termoLimpo.length < 2) return [];

    const termoNorm = normalizar(termoLimpo);

    return Object.values(produtosDB)
      .filter((p) =>
        normalizar(p.nome).includes(termoNorm) ||
        normalizar(p.marca).includes(termoNorm) ||
        normalizar(p.categoria).includes(termoNorm)
      )
      .slice(0, 8);
  }

  // renderização do dropdown

  function escapeHTML(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
  }

  function renderResultados(produtos, termo) {
    if (termo.trim().length < 2) {
      resultsBox.classList.remove('active');
      resultsBox.innerHTML = '';
      return;
    }

    if (produtos.length === 0) {
      resultsBox.innerHTML = `<p class="search-empty">Nenhum produto encontrado para "${escapeHTML(termo)}"</p>`;
      resultsBox.classList.add('active');
      return;
    }

    resultsBox.innerHTML = produtos
      .map(
        (p) => `
      <a href="produto.html?sku=${encodeURIComponent(p.sku)}" class="search-result-item">
        <img src="${p.imagem || 'img/placeholder-instrumento.png'}" alt="${escapeHTML(p.nome)}">
        <div>
          <strong>${escapeHTML(p.nome)}</strong>
          <span>${escapeHTML(p.marca)}</span>
        </div>
      </a>
    `
      )
      .join('');

    resultsBox.classList.add('active');
  }

  // eventos (com debounce pra não buscar a cada tecla)

  let timeoutId;

  input.addEventListener('input', function () {
    clearTimeout(timeoutId);
    const termo = input.value;

    timeoutId = setTimeout(function () {
      const resultados = buscarProdutos(termo);
      renderResultados(resultados, termo);
    }, 250);
  });

  // Reabre o dropdown se a pessoa clicar de novo no input com texto já digitado
  input.addEventListener('focus', function () {
    if (input.value.trim().length >= 2) {
      renderResultados(buscarProdutos(input.value), input.value);
    }
  });

  // Fecha ao clicar fora da caixa de busca
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#searchBox')) {
      resultsBox.classList.remove('active');
    }
  });

  // Fecha com Esc
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      resultsBox.classList.remove('active');
      input.blur();
    }
  });
});
