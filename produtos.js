// Catálogo: 93 produtos, indexados pelo sku usado na URL de produto.html
const produtosDB = {
  // TOKAI - TECLAS (9 produtos)
  tokata: {
    sku: "tokata",
    nome: "Órgão Eletrônico TOKATA",
    marca: "Tokai",
    categoria: "Teclas",
    imagem: "img/tokata.png",
    preco: null,
    descricao:
      "Órgão eletrônico com 61 teclas sensíveis ao toque, ideal para estudo e apresentações. Possui mais de 100 timbres integrados, ritmos automáticos e conectividade USB. Design moderno e compacto, acompanha alto-falantes embutidos e saída para fone de ouvido.",
    features: [
      "61 teclas sensíveis ao toque",
      "100+ timbres integrados",
      "Conectividade USB",
      "Saída para fone de ouvido",
      "Alto-falantes embutidos",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Teclas: 61 teclas com sensibilidade",
          "Timbres: 100+ integrados",
          "Ritmos/Estilos: 50+",
          "Tela: LCD",
        ],
      },
      {
        titulo: "Conexões",
        itens: [
          "Saída de áudio: P10",
          "Saída para fone: P10",
          "USB TO HOST",
          "Entrada auxiliar",
        ],
      },
      {
        titulo: "Diferenciais",
        itens: [
          "Gravador integrado",
          "MP3 Player",
          "Bluetooth MIDI",
          "Fonte: DC 12V",
        ],
      },
    ],
  },
  md5: {
    sku: "md5",
    nome: "Órgão Eletrônico MD-5",
    marca: "Tokai",
    categoria: "Teclas",
    imagem: "img/md5.png",
    preco: null,
    descricao:
      "Órgão eletrônico de entrada com excelente custo-benefício. Conta com 61 teclas, 100 timbres e ritmos automáticos. Conectividade USB para gravação e reprodução de músicas. Ideal para iniciantes e estudantes de música.",
    features: [
      "61 teclas",
      "100 timbres integrados",
      "Ritmos automáticos",
      "Conectividade USB",
      "Saída para fone",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Teclas: 61 teclas", "Timbres: 100", "Ritmos: 50"],
      },
      { titulo: "Conexões", itens: ["Saída P10", "USB", "Entrada auxiliar"] },
      {
        titulo: "Diferenciais",
        itens: ["Gravador", "MP3 Player", "Fácil transporte"],
      },
    ],
  },
  md10: {
    sku: "md10",
    nome: "Órgão Eletrônico MD-10 EVO",
    marca: "Tokai",
    categoria: "Teclas",
    imagem: "img/md10.png",
    preco: null,
    descricao:
      'Órgão profissional com tecnologia avançada. Possui 61 teclas sensíveis ao toque, 850 timbres + 50 do usuário, 240 ritmos + 50 do usuário, tela LCD colorida 3,5", gravador de 16 faixas, MP3 player, Bluetooth MIDI e função Lesson. Ideal para músicos que buscam qualidade e versatilidade.',
    features: [
      "61 teclas sensíveis ao toque",
      "100+ timbres integrados",
      "Conectividade USB",
      "Bluetooth MIDI",
      "Gravador 16 faixas",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Teclas: 61 com sensibilidade",
          "Timbres: 850 + 50 do usuário",
          "Ritmos: 240 + 50 do usuário",
          'Tela: LCD colorida 3,5"',
        ],
      },
      {
        titulo: "Conexões",
        itens: [
          "Saída P10 (L/Mono e R)",
          "Saída para fone: P10",
          "USB TO HOST",
          "Entrada microfone",
        ],
      },
      {
        titulo: "Diferenciais",
        itens: [
          "Gravador 16 faixas",
          "MP3 Player",
          "Bluetooth MIDI",
          "Função Lesson",
        ],
      },
    ],
  },
  md750: {
    sku: "md750",
    nome: "Órgão Eletrônico MD-750 GOLD",
    marca: "Tokai",
    categoria: "Teclas",
    imagem: "img/md750.png",
    preco: null,
    descricao:
      "Órgão eletrônico de alta performance com design sofisticado. Equipado com 61 teclas com aftertouch, mais de 500 timbres de alta qualidade, ritmos profissionais, tela touch colorida, conectividade USB e Bluetooth. Ideal para músicos exigentes.",
    features: [
      "61 teclas com aftertouch",
      "500+ timbres de alta qualidade",
      "Ritmos profissionais",
      "USB e Bluetooth",
      "Tela touch colorida",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Teclas: 61 com aftertouch",
          "Timbres: 500+",
          "Ritmos: 200+",
          "Tela: Touch colorida",
        ],
      },
      {
        titulo: "Conexões",
        itens: [
          "Saída P10",
          "USB TO HOST",
          "Bluetooth",
          "Entrada para microfone",
        ],
      },
      {
        titulo: "Diferenciais",
        itens: [
          "Gravador profissional",
          "MP3 Player",
          "Bluetooth Audio",
          "Design Gold",
        ],
      },
    ],
  },
  t1spinet: {
    sku: "t1spinet",
    nome: "Órgão Eletrônico T-1 SPINET",
    marca: "Tokai",
    categoria: "Teclas",
    imagem: "img/t1spinet.png",
    preco: null,
    descricao:
      "Órgão eletrônico com design Spinet clássico. Combina a elegância do estilo tradicional com tecnologia moderna. Possui 61 teclas, timbres e ritmos variados, conectividade USB e alto-falantes embutidos. Perfeito para quem aprecia o design clássico.",
    features: [
      "61 teclas",
      "Timbres integrados",
      "Ritmos variados",
      "Design Spinet clássico",
      "USB",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Teclas: 61", "Timbres: 200", "Ritmos: 100", "Design: Spinet"],
      },
      {
        titulo: "Conexões",
        itens: ["Saída P10", "USB TO HOST", "Entrada auxiliar"],
      },
      {
        titulo: "Diferenciais",
        itens: ["Design Spinet", "Alto-falantes embutidos", "Fácil transporte"],
      },
    ],
  },
  t1concert: {
    sku: "t1concert",
    nome: "Órgão Eletrônico T-1 CONCERT",
    marca: "Tokai",
    categoria: "Teclas",
    imagem: "img/t1concert.png",
    preco: null,
    descricao:
      "Órgão eletrônico de concerto com design imponente. Oferece 61 teclas profissionais, timbres de alta qualidade, ritmos completos e conectividade USB e MIDI. Ideal para músicos profissionais e apresentações ao vivo.",
    features: [
      "61 teclas profissionais",
      "Timbres de alta qualidade",
      "Ritmos completos",
      "Design Concert",
      "USB e MIDI",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Teclas: 61", "Timbres: 300", "Ritmos: 150", "Design: Concert"],
      },
      {
        titulo: "Conexões",
        itens: ["Saída P10", "USB TO HOST", "MIDI", "Entrada auxiliar"],
      },
      {
        titulo: "Diferenciais",
        itens: ["Design Concert", "Som potente", "Alto-falantes premium"],
      },
    ],
  },
  tp200c: {
    sku: "tp200c",
    nome: "Piano Digital TP-200C Móvel Cauda",
    marca: "Tokai",
    categoria: "Teclas",
    imagem: "img/tp200c.png",
    preco: null,
    descricao:
      "Piano digital com design de cauda móvel. Possui 88 teclas com toque realista, polifonia de 128 notas, mais de 100 timbres, alto-falantes embutidos e conectividade USB e Bluetooth. Oferece a experiência de um piano acústico com a praticidade digital.",
    features: [
      "88 teclas com toque realista",
      "Design cauda elegante",
      "Conexões USB",
      "Alto-falantes embutidos",
      "Polifonia 128",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Teclas: 88 com toque realista",
          "Polifonia: 128",
          "Timbres: 100+",
        ],
      },
      {
        titulo: "Conexões",
        itens: ["USB TO HOST", "Saída P10", "Entrada auxiliar"],
      },
      {
        titulo: "Diferenciais",
        itens: ["Design Cauda Móvel", "Alto-falantes", "Bluetooth"],
      },
    ],
  },
  tp88c: {
    sku: "tp88c",
    nome: "Piano Digital TP-88C Móvel Cauda",
    marca: "Tokai",
    categoria: "Teclas",
    imagem: "img/tp88c.png",
    preco: null,
    descricao:
      "Piano digital com design de cauda e tecnologia avançada. Conta com 88 teclas de toque realista, polifonia de 128 notas, alto-falantes premium, conectividade USB e Bluetooth MIDI. Ideal para estudo e apresentações.",
    features: [
      "88 teclas com toque realista",
      "Design cauda",
      "Conexões USB e Bluetooth",
      "Alto-falantes",
      "Polifonia 128",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Teclas: 88", "Polifonia: 128", "Timbres: 100+"],
      },
      { titulo: "Conexões", itens: ["USB TO HOST", "Bluetooth", "Saída P10"] },
      {
        titulo: "Diferenciais",
        itens: ["Design Cauda", "Alto-falantes premium", "Bluetooth MIDI"],
      },
    ],
  },
  tp350c: {
    sku: "tp350c",
    nome: "Piano Digital TP-350C Móvel Cauda",
    marca: "Tokai",
    categoria: "Teclas",
    imagem: "img/tp350c.png",
    preco: null,
    descricao:
      "Piano digital premium com design de cauda. Possui 88 teclas de toque realista, polifonia de 256 notas, mais de 200 timbres premium, alto-falantes potentes e conectividade USB e Bluetooth. Perfeito para músicos exigentes.",
    features: [
      "88 teclas com toque realista",
      "Polifonia 256",
      "Timbres premium",
      "USB e Bluetooth",
      "Alto-falantes potentes",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Teclas: 88", "Polifonia: 256", "Timbres: 200+"],
      },
      { titulo: "Conexões", itens: ["USB TO HOST", "Bluetooth", "Saída P10"] },
      {
        titulo: "Diferenciais",
        itens: [
          "Design Cauda",
          "Timbres Premium",
          "Alto-falantes de alta potência",
        ],
      },
    ],
  },
  // TOKAI - SOPROS (31 produtos)
  tcl200: {
    sku: "tcl200",
    nome: "Clarinete Sib 17 Chaves Sistema Boehm",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tcl200.png",
    preco: null,
    descricao:
      "Clarinete profissional com sistema Boehm e 17 chaves. Corpo em ABS com acabamento brilhante e chaves niqueladas ergonômicas. Acompanha case extra luxo e acessórios.",
    features: [
      "Sistema Boehm",
      "17 chaves niqueladas",
      "Corpo em ABS acabamento brilhante",
      "Case extra luxo",
      "Boquilha com acessórios",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Sistema: Boehm", "Chaves: 17", "Corpo: ABS Brilhante"],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Extra Luxo", "Boquilha", "Acessórios"],
      },
    ],
  },
  tcl400: {
    sku: "tcl400",
    nome: "Clarinete Sib Ébano Chaves Prata",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tcl400.png",
    preco: null,
    descricao:
      "Clarinete profissional em ébano com chaves prateadas. Corpo em ébano com anéis de reforço e chaves prata ergonômicas. Acompanha case extra luxo e acessórios.",
    features: [
      "Corpo em Ébano",
      "17 chaves prateadas",
      "Sistema Boehm",
      "Anéis de reforço",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Corpo: Ébano", "Chaves: 17 prateadas", "Sistema: Boehm"],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Extra Luxo", "Boquilha", "Acessórios"],
      },
    ],
  },
  tfl200: {
    sku: "tfl200",
    nome: "Flauta Transversal Dó 16 Chaves Niquelada",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tfl200.png",
    preco: null,
    descricao:
      "Flauta transversal em Dó com 16 chaves niqueladas. Sistema Boehm com mecanismo de Mi e sapatilhas com ressonador metálico. Acompanha case extra luxo.",
    features: [
      "16 chaves niqueladas",
      "Sistema Boehm",
      "Mecanismo de Mi",
      "Sapatilhas com ressonador",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Chaves: 16 niqueladas", "Sistema: Boehm", "Calibre: 19.05mm"],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Extra Luxo", "Agulha de limpeza", "Flanela"],
      },
    ],
  },
  tfl400: {
    sku: "tfl400",
    nome: "Flauta Transversal Dó 17 Chaves Abertas",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tfl400.png",
    preco: null,
    descricao:
      "Flauta transversal profissional com 17 chaves abertas. Sistema Boehm com mecanismo de Mi e sapatilhas com ressonador metálico. Acompanha case extra luxo.",
    features: [
      "17 chaves abertas",
      "Sistema Boehm",
      "Mecanismo de Mi",
      "Sapatilhas com ressonador",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Chaves: 17 abertas", "Sistema: Boehm", "Calibre: 19.05mm"],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Extra Luxo", "Agulha de limpeza", "Flanela"],
      },
    ],
  },
  tfh400: {
    sku: "tfh400",
    nome: "Flugelhorn Sib Laqueado",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tfh400.png",
    preco: null,
    descricao:
      "Flugelhorn em Sib com acabamento laqueado. Instrumento de sopro de alta qualidade com sonoridade suave e envolvente. Acompanha case extra luxo e bocal.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Calibre 10.5mm",
      "Campana 153mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Calibre: 10.5mm", "Campana: 153mm"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tsa200: {
    sku: "tsa200",
    nome: "Saxofone Alto Mib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tsa200.png",
    preco: null,
    descricao:
      "Saxofone Alto em Mib com acabamento laqueado. Instrumento profissional com campana removível e chaves ergonômicas. Acompanha case extra luxo e acessórios.",
    features: [
      "Afinação Mib",
      "Acabamento laqueado",
      "Campana removível",
      "Fa# agudo e Sib grave",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Mib", "Acabamento: Laqueado", "Campana: Removível"],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Extra Luxo", "Boquilha", "Acessórios"],
      },
    ],
  },
  tsa300: {
    sku: "tsa300",
    nome: "Saxofone Alto Mib Série 300",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tsa300.png",
    preco: null,
    descricao:
      "Saxofone Alto profissional Série 300. Acabamento dourado com detalhes em prata, campana removível e mecanismo de alta precisão. Acompanha case super luxo.",
    features: [
      "Afinação Mib",
      "Acabamento dourado",
      "Campana removível",
      "Fa# agudo e Sib grave",
      "Case super luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Afinação: Mib",
          "Acabamento: Dourado/Prata",
          "Campana: Removível",
        ],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Super Luxo", "Boquilha", "Kit de limpeza"],
      },
    ],
  },
  tsb200: {
    sku: "tsb200",
    nome: "Saxofone Barítono Mib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tsb200.png",
    preco: null,
    descricao:
      "Saxofone Barítono em Mib com acabamento laqueado. Instrumento de sopro de alta qualidade com som encorpado e campana removível. Acompanha case extra luxo.",
    features: [
      "Afinação Mib",
      "Acabamento laqueado",
      "Campana removível",
      "Fa# agudo e La grave",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Mib", "Acabamento: Laqueado", "Campana: Removível"],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Extra Luxo", "Boquilha", "Acessórios"],
      },
    ],
  },
  tsb300: {
    sku: "tsb300",
    nome: "Saxofone Barítono Mib Série 300",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tsb300.png",
    preco: null,
    descricao:
      "Saxofone Barítono profissional Série 300. Acabamento dourado com detalhes em prata, campana removível e mecanismo de alta precisão. Acompanha case super luxo.",
    features: [
      "Afinação Mib",
      "Acabamento dourado",
      "Campana removível",
      "Fa# agudo e La grave",
      "Case super luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Afinação: Mib",
          "Acabamento: Dourado/Prata",
          "Campana: Removível",
        ],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Super Luxo", "Boquilha", "Kit de limpeza"],
      },
    ],
  },
  tss200: {
    sku: "tss200",
    nome: "Saxofone Soprano Reto Sib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tss200.png",
    preco: null,
    descricao:
      "Saxofone Soprano Reto em Sib com acabamento laqueado. Instrumento de sopro com sonoridade brilhante e mecanismo preciso. Acompanha case extra luxo.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Soprano reto",
      "Sol agudo e Sib grave",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Acabamento: Laqueado", "Tipo: Soprano Reto"],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Extra Luxo", "Boquilha", "Acessórios"],
      },
    ],
  },
  tss300: {
    sku: "tss300",
    nome: "Saxofone Soprano Reto Sib Série 300",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tss300.png",
    preco: null,
    descricao:
      "Saxofone Soprano Reto profissional Série 300. Acabamento dourado com mecanismo de alta precisão e sonoridade excepcional. Acompanha case super luxo.",
    features: [
      "Afinação Sib",
      "Acabamento dourado",
      "Soprano reto",
      "Fa# agudo e Sib grave",
      "Case super luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Acabamento: Dourado", "Tipo: Soprano Reto"],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Super Luxo", "Boquilha", "Kit de limpeza"],
      },
    ],
  },
  tsc200: {
    sku: "tsc200",
    nome: "Saxofone Soprano Curvo Sib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tsc200.png",
    preco: null,
    descricao:
      "Saxofone Soprano Curvo em Sib com acabamento laqueado. Design compacto e sonoridade característica dos saxofones soprano. Acompanha case extra luxo.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Soprano curvo",
      "Fa# agudo e Sib grave",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Acabamento: Laqueado", "Tipo: Soprano Curvo"],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Extra Luxo", "Boquilha", "Acessórios"],
      },
    ],
  },
  tst200: {
    sku: "tst200",
    nome: "Saxofone Tenor Sib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tst200.png",
    preco: null,
    descricao:
      "Saxofone Tenor em Sib com acabamento laqueado. Instrumento profissional com campana removível e chaves reforçadas. Acompanha case extra luxo.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Campana removível",
      "Fa# agudo e Sib grave",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Acabamento: Laqueado", "Campana: Removível"],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Extra Luxo", "Boquilha", "Acessórios"],
      },
    ],
  },
  tst300: {
    sku: "tst300",
    nome: "Saxofone Tenor Sib Série 300",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tst300.png",
    preco: null,
    descricao:
      "Saxofone Tenor profissional Série 300. Acabamento dourado com detalhes em prata, campana removível e mecanismo de alta precisão. Acompanha case super luxo.",
    features: [
      "Afinação Sib",
      "Acabamento dourado",
      "Campana removível",
      "Fa# agudo e Sib grave",
      "Case super luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Afinação: Sib",
          "Acabamento: Dourado/Prata",
          "Campana: Removível",
        ],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Super Luxo", "Boquilha", "Kit de limpeza"],
      },
    ],
  },
  tp200: {
    sku: "tp200",
    nome: "Trombone de Pisto Longo Sib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tp200.png",
    preco: null,
    descricao:
      "Trombone de Pisto Longo em Sib com acabamento laqueado. Instrumento de sopro de alta qualidade com pistos em aço inoxidável. Acompanha case extra luxo.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Pisto Longo",
      "Calibre 12.6mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Tipo: Pisto Longo", "Calibre: 12.6mm"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tp201: {
    sku: "tp201",
    nome: "Trombone de Pisto Curto Sib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tp201.png",
    preco: null,
    descricao:
      "Trombone de Pisto Curto em Sib com acabamento laqueado. Instrumento compacto e versátil para músicos de todos os níveis. Acompanha case extra luxo.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Pisto Curto",
      "Calibre 12.6mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Tipo: Pisto Curto", "Calibre: 12.6mm"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tv200: {
    sku: "tv200",
    nome: "Trombone de Vara Sib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tv200.png",
    preco: null,
    descricao:
      "Trombone de Vara em Sib com acabamento laqueado. Instrumento clássico com vara interna cromada e campana 235mm. Acompanha case extra luxo.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Vara",
      "Calibre 13.7mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Tipo: Vara", "Calibre: 13.7mm"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tr200: {
    sku: "tr200",
    nome: "Trompete Sib Laqueado",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tr200.png",
    preco: null,
    descricao:
      "Trompete em Sib com acabamento laqueado. Instrumento de sopro de alta qualidade com pistos em aço inoxidável. Acompanha case extra luxo e bocal.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Pistos aço inoxidável",
      "Campana 123mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Acabamento: Laqueado", "Calibre: 11.7mm"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tr400: {
    sku: "tr400",
    nome: "Trompete Sib Série 400",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tr400.png",
    preco: null,
    descricao:
      "Trompete profissional Série 400 em Sib. Acabamento gold brass com detalhes em alpaca e pistos em aço inoxidável. Acompanha case extra luxo.",
    features: [
      "Afinação Sib",
      "Acabamento Gold Brass",
      "Pistos aço inoxidável",
      "Campana 123mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Acabamento: Gold Brass", "Calibre: 11.7mm"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tr401: {
    sku: "tr401",
    nome: "Trompete Dó Série 401",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tr401.png",
    preco: null,
    descricao:
      "Trompete profissional em Dó com acabamento laqueado. Instrumento de sopro de alta qualidade para músicos exigentes. Acompanha case extra luxo.",
    features: [
      "Afinação Dó",
      "Acabamento laqueado",
      "Pistos aço inoxidável",
      "Campana 123mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Dó", "Acabamento: Laqueado", "Calibre: 11.7mm"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tct200: {
    sku: "tct200",
    nome: "Cornet Sib Laqueado",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tct200.png",
    preco: null,
    descricao:
      "Cornet em Sib com acabamento laqueado. Instrumento de sopro com sonoridade suave e versátil. Acompanha case extra luxo e bocal.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Pistos aço inoxidável",
      "Campana 123mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Acabamento: Laqueado", "Calibre: 11.5mm"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  ttp400: {
    sku: "ttp400",
    nome: "Trompa Fa/Sib 4 Rotores",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/ttp400.png",
    preco: null,
    descricao:
      "Trompa dupla em Fa/Sib com 4 rotores. Instrumento profissional de alta qualidade para músicos de orquestra. Acompanha case extra luxo.",
    features: [
      "Afinação Fa/Sib",
      "4 rotores",
      "Acabamento laqueado",
      "Porta lira",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Fa/Sib", "Rotores: 4", "Acabamento: Laqueado"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tep400: {
    sku: "tep400",
    nome: "Eufônio Bombardino 4 Pistos Sib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tep400.png",
    preco: null,
    descricao:
      "Eufônio Bombardino com 4 pistos em Sib. Instrumento de sopro de alta qualidade com sonoridade encorpada. Acompanha case extra luxo e bocal.",
    features: [
      "4 pistos",
      "Afinação Sib",
      "Acabamento niquelado",
      "Campana 280mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Pistos: 4", "Afinação: Sib", "Acabamento: Niquelado"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tep600: {
    sku: "tep600",
    nome: "Eufônio Bombardino Compensado Sib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tep600.png",
    preco: null,
    descricao:
      "Eufônio Bombardino 3+1 pistos compensado em Sib. Instrumento profissional de alta qualidade para músicos exigentes. Acompanha case extra luxo.",
    features: [
      "3+1 pistos compensado",
      "Afinação Sib",
      "Acabamento laqueado",
      "Campana 300mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Pistos: 3+1 compensado",
          "Afinação: Sib",
          "Acabamento: Laqueado",
        ],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tb200: {
    sku: "tb200",
    nome: "Tuba Bombardão 4/4 4 Pistos Sib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tb200.png",
    preco: null,
    descricao:
      "Tuba Bombardão 4/4 com 4 pistos em Sib. Instrumento de sopro de alta qualidade com sonoridade grave e imponente. Acompanha case extra luxo.",
    features: [
      "4 pistos",
      "Afinação Sib",
      "Acabamento laqueado",
      "Campana 381mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Pistos: 4", "Afinação: Sib", "Acabamento: Laqueado"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tb400: {
    sku: "tb400",
    nome: "Tuba 5/4 4 Rotores Sib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tb400.png",
    preco: null,
    descricao:
      "Tuba 5/4 com 4 rotores em Sib. Instrumento profissional de alta qualidade para músicos de orquestra. Acompanha case extra luxo.",
    features: [
      "4 rotores",
      "Afinação Sib",
      "Acabamento laqueado",
      "Campana 450mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Rotores: 4", "Afinação: Sib", "Acabamento: Laqueado"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tb402: {
    sku: "tb402",
    nome: "Tuba 4/4 5 Rotores Dó",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tb402.png",
    preco: null,
    descricao:
      "Tuba 4/4 com 5 rotores em Dó. Instrumento profissional de alta qualidade para músicos de orquestra. Acompanha case extra luxo.",
    features: [
      "5 rotores",
      "Afinação Dó",
      "Acabamento laqueado",
      "Campana 450mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Rotores: 5", "Afinação: Dó", "Acabamento: Laqueado"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tb403: {
    sku: "tb403",
    nome: "Tuba 4/4 3+1 Pistos Compensada Mib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tb403.png",
    preco: null,
    descricao:
      "Tuba 4/4 3+1 pistos compensada em Mib. Instrumento profissional de alta qualidade para músicos exigentes. Acompanha case extra luxo.",
    features: [
      "3+1 pistos compensado",
      "Afinação Mib",
      "Acabamento laqueado",
      "Campana 482mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Pistos: 3+1 compensado",
          "Afinação: Mib",
          "Acabamento: Laqueado",
        ],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tb600: {
    sku: "tb600",
    nome: "Tuba 5/4 4 Pistos e 1 Rotor Sib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tb600.png",
    preco: null,
    descricao:
      "Tuba 5/4 com 4 pistos e 1 rotor em Sib. Instrumento profissional de alta qualidade para músicos de orquestra. Acompanha case extra luxo.",
    features: [
      "4 pistos + 1 rotor",
      "Afinação Sib",
      "Acabamento laqueado",
      "Campana 472mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Pistos: 4 + 1 rotor", "Afinação: Sib", "Acabamento: Laqueado"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },
  tb601: {
    sku: "tb601",
    nome: "Tuba 5/4 4 Pistos Sib",
    marca: "Tokai",
    categoria: "Sopros",
    imagem: "img/tb601.png",
    preco: null,
    descricao:
      "Tuba 5/4 com 4 pistos em Sib. Instrumento profissional de alta qualidade para músicos de orquestra. Acompanha case extra luxo.",
    features: [
      "4 pistos",
      "Afinação Sib",
      "Acabamento laqueado",
      "Campana 442mm",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Pistos: 4", "Afinação: Sib", "Acabamento: Laqueado"],
      },
      { titulo: "Acompanha", itens: ["Case Extra Luxo", "Bocal"] },
    ],
  },

  // TOKAI - CORDAS ORQUESTRAIS (6 produtos)
  v200: {
    sku: "v200",
    nome: "Violino 4/4 Linden com Acabamento Envernizado",
    marca: "Tokai",
    categoria: "Cordas",
    imagem: "img/v200.png",
    preco: null,
    descricao:
      "Violino 4/4 com tampo em Linden laminado em Spruce. Acabamento envernizado, escala em ébano, braço em maple. Acompanha case térmico, arco com crina animal e breu.",
    features: [
      "Tampo Linden",
      "Acabamento envernizado",
      "Escala em Ébano",
      "Case térmica",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Tampo: Linden laminado Spruce",
          "Fundo/Lateral: Linden/Maple",
          "Braço: Maple",
        ],
      },
      { titulo: "Acompanha", itens: ["Case Térmico", "Arco", "Breu"] },
    ],
  },
  v250: {
    sku: "v250",
    nome: "Violino 4/4 Solid Spruce",
    marca: "Tokai",
    categoria: "Cordas",
    imagem: "img/v250.png",
    preco: null,
    descricao:
      "Violino 4/4 com tampo em Solid Spruce. Acabamento fosco, escala em ébano, fundo e lateral em maple. Acompanha case térmico, arco e breu.",
    features: [
      "Tampo Solid Spruce",
      "Acabamento fosco",
      "Escala em Ébano",
      "Case térmica",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Solid Spruce", "Fundo/Lateral: Maple", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Case Térmico", "Arco", "Breu"] },
    ],
  },
  v400: {
    sku: "v400",
    nome: "Violino 4/4 Solid Spruce Extra Luxo",
    marca: "Tokai",
    categoria: "Cordas",
    imagem: "img/v400.png",
    preco: null,
    descricao:
      "Violino 4/4 com tampo em Solid Spruce e acabamento envernizado. Arco octogonal com crina animal, case extra luxo com higrômetro. Ideal para músicos exigentes.",
    features: [
      "Tampo Solid Spruce",
      "Acabamento envernizado",
      "Escala em Ébano",
      "Arco octogonal",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Solid Spruce", "Fundo/Lateral: Maple", "Braço: Maple"],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Extra Luxo", "Arco octogonal", "Breu"],
      },
    ],
  },
  v450: {
    sku: "v450",
    nome: "Violino 4/4 Madeira Selecionada",
    marca: "Tokai",
    categoria: "Cordas",
    imagem: "img/v450.png",
    preco: null,
    descricao:
      "Violino 4/4 com tampo em Solid Spruce madeira selecionada. Fundo e lateral em maple rajado, acabamento envernizado. Acompanha arco octogonal e case extra luxo.",
    features: [
      "Tampo Solid Spruce selecionado",
      "Acabamento envernizado",
      "Maple rajado",
      "Arco octogonal",
      "Case extra luxo",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Tampo: Solid Spruce selecionado",
          "Fundo/Lateral: Maple rajado",
          "Braço: Maple",
        ],
      },
      {
        titulo: "Acompanha",
        itens: ["Case Extra Luxo", "Arco octogonal", "Breu"],
      },
    ],
  },
  c250: {
    sku: "c250",
    nome: "Violoncelo 4/4 Linden",
    marca: "Tokai",
    categoria: "Cordas",
    imagem: "img/c250.png",
    preco: null,
    descricao:
      "Violoncelo 4/4 com tampo em Linden laminado em Spruce. Acabamento fosco, escala em hardwood. Acompanha bag, arco com crina animal e breu.",
    features: [
      "Tampo Linden",
      "Acabamento fosco",
      "Escala em Hardwood",
      "Bag",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Tampo: Linden laminado Spruce",
          "Fundo/Lateral: Linden/Maple",
          "Braço: Maple",
        ],
      },
      { titulo: "Acompanha", itens: ["Bag", "Arco", "Breu"] },
    ],
  },
  c400: {
    sku: "c400",
    nome: "Violoncelo 4/4 Solid Spruce",
    marca: "Tokai",
    categoria: "Cordas",
    imagem: "img/c400.png",
    preco: null,
    descricao:
      "Violoncelo 4/4 com tampo em Solid Spruce. Acabamento fosco, escala em ébano, fundo e lateral em maple. Acompanha bag, arco e breu.",
    features: [
      "Tampo Solid Spruce",
      "Acabamento fosco",
      "Escala em Ébano",
      "Bag",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Solid Spruce", "Fundo/Lateral: Maple", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Bag", "Arco", "Breu"] },
    ],
  },

  // MICHAEL - CORDAS DEDILHADAS (17 produtos)
  vmi230: {
    sku: "vmi230",
    nome: "Violão Folk com Cutaway Imperial",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/vmi230.png",
    preco: null,
    descricao:
      "Violão Folk com cutaway da linha Imperial. Tampo em Sitka Spruce, fundo e lateral em Mahogany, braço em Mahogany e escala em ébano. Acabamento fosco.",
    features: [
      "Cutaway",
      "Tampo Sitka Spruce",
      "Fundo/lateral Mahogany",
      "Braço Mahogany",
      "Escala Ébano",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Tampo: Sitka Spruce",
          "Fundo/Lateral: Mahogany",
          "Braço: Mahogany",
        ],
      },
      { titulo: "Diferenciais", itens: ["Cutaway", "Escala em Ébano"] },
    ],
  },
  vmi240: {
    sku: "vmi240",
    nome: "Violão OM Imperial",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/vmi240.png",
    preco: null,
    descricao:
      "Violão OM da linha Imperial. Tampo em Sitka Spruce, fundo e lateral em Mahogany, braço em Mahogany e escala em ébano. Corpo OM para sonoridade equilibrada.",
    features: [
      "Corpo OM",
      "Tampo Sitka Spruce",
      "Fundo/lateral Mahogany",
      "Braço Mahogany",
      "Escala Ébano",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Corpo: OM", "Tampo: Sitka Spruce", "Fundo/Lateral: Mahogany"],
      },
      {
        titulo: "Diferenciais",
        itens: ["Escala em Ébano", "Acabamento fosco"],
      },
    ],
  },
  vmi280: {
    sku: "vmi280",
    nome: "Violão Clássico Imperial",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/vmi280.png",
    preco: null,
    descricao:
      "Violão Clássico da linha Imperial. Tampo em Sitka Spruce, fundo e lateral em Mahogany, braço em Mahogany e escala em ébano. Sonoridade clássica e aconchegante.",
    features: [
      "Corpo Clássico",
      "Tampo Sitka Spruce",
      "Fundo/lateral Mahogany",
      "Braço Mahogany",
      "Escala Ébano",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Corpo: Clássico",
          "Tampo: Sitka Spruce",
          "Fundo/Lateral: Mahogany",
        ],
      },
      {
        titulo: "Diferenciais",
        itens: ["Escala em Ébano", "Acabamento fosco"],
      },
    ],
  },
  vmi380: {
    sku: "vmi380",
    nome: "Violão Sitka Imperial",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/vmi380.png",
    preco: null,
    descricao:
      "Violão com tampo em Sitka Spruce da linha Imperial. Fundo e lateral em Mahogany, escala em ébano. Acabamento fosco e sonoridade encorpada.",
    features: [
      "Tampo Sitka Spruce",
      "Fundo/lateral Mahogany",
      "Braço Mahogany",
      "Escala Ébano",
      "Acabamento fosco",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Tampo: Sitka Spruce",
          "Fundo/Lateral: Mahogany",
          "Braço: Mahogany",
        ],
      },
      {
        titulo: "Diferenciais",
        itens: ["Escala em Ébano", "Acabamento fosco"],
      },
    ],
  },
  vmr250: {
    sku: "vmr250",
    nome: "Violão Clássico Renascence",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/vmr250.png",
    preco: null,
    descricao:
      "Violão Clássico da linha Renascence. Tampo em Sitka Spruce, fundo e lateral em Mahogany, escala em ébano. Design elegante e sonoridade equilibrada.",
    features: [
      "Corpo Clássico",
      "Tampo Sitka Spruce",
      "Fundo/lateral Mahogany",
      "Braço Mahogany",
      "Escala Ébano",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Corpo: Clássico",
          "Tampo: Sitka Spruce",
          "Fundo/Lateral: Mahogany",
        ],
      },
      {
        titulo: "Diferenciais",
        itens: ["Escala em Ébano", "Acabamento fosco"],
      },
    ],
  },
  vme610: {
    sku: "vme610",
    nome: "Violão Mini GS Enigma",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/vme610.png",
    preco: null,
    descricao:
      "Violão Mini GS da linha Enigma. Tampo em Sitka Spruce, fundo e lateral em Mahogany. Design compacto, perfeito para viagens e músicos de todos os níveis.",
    features: [
      "Corpo Mini GS",
      "Tampo Sitka Spruce",
      "Fundo/lateral Mahogany",
      "Braço Mahogany",
      "Escala Ébano",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Corpo: Mini GS",
          "Tampo: Sitka Spruce",
          "Fundo/Lateral: Mahogany",
        ],
      },
      {
        titulo: "Diferenciais",
        itens: ["Tamanho compacto", "Escala em Ébano"],
      },
    ],
  },
  vme620: {
    sku: "vme620",
    nome: "Violão Mini Jumbo Enigma",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/vme620.png",
    preco: null,
    descricao:
      "Violão Mini Jumbo da linha Enigma. Tampo em Sitka Spruce, fundo e lateral em Mahogany. Design compacto com sonoridade encorpada.",
    features: [
      "Corpo Mini Jumbo",
      "Tampo Sitka Spruce",
      "Fundo/lateral Mahogany",
      "Braço Mahogany",
      "Escala Ébano",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Corpo: Mini Jumbo",
          "Tampo: Sitka Spruce",
          "Fundo/Lateral: Mahogany",
        ],
      },
      {
        titulo: "Diferenciais",
        itens: ["Tamanho compacto", "Escala em Ébano"],
      },
    ],
  },
  vme630: {
    sku: "vme630",
    nome: "Violão Folk Enigma Série 630",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/vme630.png",
    preco: null,
    descricao:
      "Violão Folk da linha Enigma Série 630. Tampo em Sitka Spruce, fundo e lateral em Mahogany, escala em ébano. Acabamento fosco e sonoridade equilibrada.",
    features: [
      "Corpo Folk",
      "Tampo Sitka Spruce",
      "Fundo/lateral Mahogany",
      "Braço Mahogany",
      "Escala Ébano",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Corpo: Folk",
          "Tampo: Sitka Spruce",
          "Fundo/Lateral: Mahogany",
        ],
      },
      {
        titulo: "Diferenciais",
        itens: ["Escala em Ébano", "Acabamento fosco"],
      },
    ],
  },
  vmv570: {
    sku: "vmv570",
    nome: "Violão Parlor Venice",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/vmv570.png",
    preco: null,
    descricao:
      "Violão Parlor da linha Venice. Tampo em Sitka Spruce, fundo e lateral em Mahogany. Design compacto e sonoridade característica dos violões parlor.",
    features: [
      "Corpo Parlor",
      "Tampo Sitka Spruce",
      "Fundo/lateral Mahogany",
      "Braço Mahogany",
      "Escala Ébano",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: [
          "Corpo: Parlor",
          "Tampo: Sitka Spruce",
          "Fundo/Lateral: Mahogany",
        ],
      },
      {
        titulo: "Diferenciais",
        itens: ["Tamanho compacto", "Escala em Ébano"],
      },
    ],
  },
  gmv200: {
    sku: "gmv200",
    nome: "Guitarra ST Vangart",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/gmv200.png",
    preco: null,
    descricao:
      "Guitarra ST da linha Vangart. Corpo em Alder, braço em Maple, 3 captadores single-coils e ponte tremolo. Escala em Maple. Ideal para guitarristas de todos os estilos.",
    features: [
      "Corpo Alder",
      "Braço Maple",
      "3 single-coils",
      "Ponte tremolo",
      "Escala Maple",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Corpo: Alder", "Braço: Maple", "Escala: Maple"],
      },
      { titulo: "Diferenciais", itens: ["3 single-coils", "Ponte tremolo"] },
    ],
  },
  gms130: {
    sku: "gms130",
    nome: "Guitarra ST Mysticone",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/gms130.png",
    preco: null,
    descricao:
      "Guitarra ST da linha Mysticone. Corpo em Alder, braço em Maple, 3 captadores single-coils e ponte fixa. Escala em Maple.",
    features: [
      "Corpo Alder",
      "Braço Maple",
      "3 single-coils",
      "Ponte fixa",
      "Escala Maple",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Corpo: Alder", "Braço: Maple", "Escala: Maple"],
      },
      { titulo: "Diferenciais", itens: ["3 single-coils", "Ponte fixa"] },
    ],
  },
  gms100: {
    sku: "gms100",
    nome: "Guitarra ST Mysticone Short Scale",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/gms100.png",
    preco: null,
    descricao:
      "Guitarra ST Short Scale da linha Mysticone. Corpo em Alder, braço em Maple, 3 captadores single-coils e ponte fixa. Design compacto para músicos de menor estatura.",
    features: [
      "Corpo Alder",
      "Braço Maple",
      "3 single-coils",
      "Ponte fixa",
      "Short scale",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Corpo: Alder", "Braço: Maple", "Short Scale"],
      },
      { titulo: "Diferenciais", itens: ["3 single-coils", "Ponte fixa"] },
    ],
  },
  gmt142: {
    sku: "gmt142",
    nome: "Guitarra TL Retrosoul",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/gmt142.png",
    preco: null,
    descricao:
      "Guitarra TL da linha Retrosoul. Corpo em Alder, braço em Maple, 2 captadores single-coils e ponte fixa. Escala em Maple. Timbre clássico e versátil.",
    features: [
      "Corpo Alder",
      "Braço Maple",
      "2 single-coils",
      "Ponte fixa",
      "Escala Maple",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Corpo: Alder", "Braço: Maple", "Escala: Maple"],
      },
      { titulo: "Diferenciais", itens: ["2 single-coils", "Ponte fixa"] },
    ],
  },
  gmt132: {
    sku: "gmt132",
    nome: "Guitarra TL Retrosoul 132",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/gmt132.png",
    preco: null,
    descricao:
      "Guitarra TL da linha Retrosoul. Corpo em Alder, braço em Maple, 2 captadores single-coils e ponte fixa. Escala em Maple.",
    features: [
      "Corpo Alder",
      "Braço Maple",
      "2 single-coils",
      "Ponte fixa",
      "Escala Maple",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Corpo: Alder", "Braço: Maple", "Escala: Maple"],
      },
      { titulo: "Diferenciais", itens: ["2 single-coils", "Ponte fixa"] },
    ],
  },
  mk27: {
    sku: "mk27",
    nome: "Ukulele Tenor Zibra Wood",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/mk27.png",
    preco: null,
    descricao:
      "Ukulele Tenor em Zibra Wood. Braço em Mahogany e escala em ébano. Acabamento fosco, acompanha bag. Sonoridade equilibrada e design diferenciado.",
    features: [
      "Corpo Zibra Wood",
      "Braço Mahogany",
      "Escala Ébano",
      "Bag",
      "Acabamento fosco",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Corpo: Zibra Wood", "Braço: Mahogany", "Escala: Ébano"],
      },
      { titulo: "Acompanha", itens: ["Bag"] },
    ],
  },
  mk23: {
    sku: "mk23",
    nome: "Ukulele Concert Mahogany",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/mk23.png",
    preco: null,
    descricao:
      "Ukulele Concert em Mahogany. Braço em Mahogany e escala em ébano. Acabamento fosco, acompanha bag. Sonoridade quente e encorpada.",
    features: [
      "Corpo Mahogany",
      "Braço Mahogany",
      "Escala Ébano",
      "Bag",
      "Acabamento fosco",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Corpo: Mahogany", "Braço: Mahogany", "Escala: Ébano"],
      },
      { titulo: "Acompanha", itens: ["Bag"] },
    ],
  },
  mk21: {
    sku: "mk21",
    nome: "Ukulele Soprano Zibra Wood",
    marca: "Michael",
    categoria: "Cordas Dedilhadas",
    imagem: "img/mk21.png",
    preco: null,
    descricao:
      "Ukulele Soprano em Zibra Wood. Braço em Mahogany e escala em ébano. Design compacto, acompanha bag. Perfeito para músicos de todos os níveis.",
    features: [
      "Corpo Zibra Wood",
      "Braço Mahogany",
      "Escala Ébano",
      "Bag",
      "Acabamento fosco",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Corpo: Zibra Wood", "Braço: Mahogany", "Escala: Ébano"],
      },
      { titulo: "Acompanha", itens: ["Bag"] },
    ],
  },

  // MICHAEL - CORDAS ORQUESTRAIS (10 produtos)
  vnm49: {
    sku: "vnm49",
    nome: "Violino 4/4 Ébano Series",
    marca: "Michael",
    categoria: "Cordas",
    imagem: "img/vnm49.png",
    preco: null,
    descricao:
      "Violino 4/4 da linha Ébano Series. Tampo em Spruce, fundo em Maple, escala em ébano. Acabamento envernizado. Acompanha case térmico, arco e breu.",
    features: [
      "Tampo Spruce",
      "Fundo Maple",
      "Escala Ébano",
      "Case térmica",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Fundo: Maple", "Acabamento: Envernizado"],
      },
      { titulo: "Acompanha", itens: ["Case Térmico", "Arco", "Breu"] },
    ],
  },
  vnm40: {
    sku: "vnm40",
    nome: "Violino 4/4 Tradicional Series",
    marca: "Michael",
    categoria: "Cordas",
    imagem: "img/vnm40.png",
    preco: null,
    descricao:
      "Violino 4/4 da linha Tradicional Series. Tampo em Spruce, fundo em Maple, escala em ébano. Acabamento envernizado. Acompanha case térmico, arco e breu.",
    features: [
      "Tampo Spruce",
      "Fundo Maple",
      "Escala Ébano",
      "Case térmica",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Fundo: Maple", "Acabamento: Envernizado"],
      },
      { titulo: "Acompanha", itens: ["Case Térmico", "Arco", "Breu"] },
    ],
  },
  vnm130: {
    sku: "vnm130",
    nome: "Violino 3/4 Ébano Series",
    marca: "Michael",
    categoria: "Cordas",
    imagem: "img/vnm130.png",
    preco: null,
    descricao:
      "Violino 3/4 da linha Ébano Series. Tampo em Spruce, fundo em Maple, escala em ébano. Acompanha case térmico, arco e breu. Ideal para estudantes.",
    features: [
      "Tampo Spruce",
      "Fundo Maple",
      "Escala Ébano",
      "Case térmica",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Fundo: Maple", "Acabamento: Envernizado"],
      },
      { titulo: "Acompanha", itens: ["Case Térmico", "Arco", "Breu"] },
    ],
  },
  vnm11: {
    sku: "vnm11",
    nome: "Violino 1/2 Tradicional Series",
    marca: "Michael",
    categoria: "Cordas",
    imagem: "img/vnm11.png",
    preco: null,
    descricao:
      "Violino 1/2 da linha Tradicional Series. Tampo em Spruce, fundo em Basswood, escala em Black Maple. Acompanha case térmico, arco e breu.",
    features: [
      "Tampo Spruce",
      "Fundo Basswood",
      "Escala Black Maple",
      "Case térmica",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Fundo: Basswood", "Acabamento: Envernizado"],
      },
      { titulo: "Acompanha", itens: ["Case Térmico", "Arco", "Breu"] },
    ],
  },
  vnm10: {
    sku: "vnm10",
    nome: "Violino 1/4 Tradicional Series",
    marca: "Michael",
    categoria: "Cordas",
    imagem: "img/vnm10.png",
    preco: null,
    descricao:
      "Violino 1/4 da linha Tradicional Series. Tampo em Spruce, fundo em Basswood, escala em Black Maple. Acompanha case térmico, arco e breu.",
    features: [
      "Tampo Spruce",
      "Fundo Basswood",
      "Escala Black Maple",
      "Case térmica",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Fundo: Basswood", "Acabamento: Envernizado"],
      },
      { titulo: "Acompanha", itens: ["Case Térmico", "Arco", "Breu"] },
    ],
  },
  vnm08: {
    sku: "vnm08",
    nome: "Violino 1/8 Tradicional Series",
    marca: "Michael",
    categoria: "Cordas",
    imagem: "img/vnm08.png",
    preco: null,
    descricao:
      "Violino 1/8 da linha Tradicional Series. Tampo em Spruce, fundo em Basswood, escala em Black Maple. Acompanha case térmico, arco e breu.",
    features: [
      "Tampo Spruce",
      "Fundo Basswood",
      "Escala Black Maple",
      "Case térmica",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Fundo: Basswood", "Acabamento: Envernizado"],
      },
      { titulo: "Acompanha", itens: ["Case Térmico", "Arco", "Breu"] },
    ],
  },
  vcm140: {
    sku: "vcm140",
    nome: "Violoncelo 4/4 Ébano Series",
    marca: "Michael",
    categoria: "Cordas",
    imagem: "img/vcm140.png",
    preco: null,
    descricao:
      "Violoncelo 4/4 da linha Ébano Series. Tampo em Spruce, fundo em Maple, escala em ébano. Acompanha bag, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Fundo Maple",
      "Escala Ébano",
      "Bag",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Fundo: Maple", "Acabamento: Envernizado"],
      },
      { titulo: "Acompanha", itens: ["Bag", "Arco", "Breu"] },
    ],
  },
  vcm130: {
    sku: "vcm130",
    nome: "Violoncelo 3/4 Ébano Series",
    marca: "Michael",
    categoria: "Cordas",
    imagem: "img/vcm130.png",
    preco: null,
    descricao:
      "Violoncelo 3/4 da linha Ébano Series. Tampo em Spruce, fundo em Maple, escala em ébano. Acompanha bag, arco e breu.",
    features: [
      "Tampo Spruce",
      "Fundo Maple",
      "Escala Ébano",
      "Bag",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Fundo: Maple", "Acabamento: Envernizado"],
      },
      { titulo: "Acompanha", itens: ["Bag", "Arco", "Breu"] },
    ],
  },
  vbm140: {
    sku: "vbm140",
    nome: "Contrabaixo Acústico 4/4 Ébano Series",
    marca: "Michael",
    categoria: "Cordas",
    imagem: "img/vbm140.png",
    preco: null,
    descricao:
      "Contrabaixo Acústico 4/4 da linha Ébano Series. Tampo em Spruce, fundo em Basswood, braço em Maple. Acompanha bag, arco e breu.",
    features: [
      "Tampo Spruce",
      "Fundo Basswood",
      "Escala Black Maple",
      "Bag",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Fundo: Basswood", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Bag", "Arco", "Breu"] },
    ],
  },
  vbm130: {
    sku: "vbm130",
    nome: "Contrabaixo Acústico 3/4 Ébano Series",
    marca: "Michael",
    categoria: "Cordas",
    imagem: "img/vbm130.png",
    preco: null,
    descricao:
      "Contrabaixo Acústico 3/4 da linha Ébano Series. Tampo em Spruce, fundo em Basswood, braço em Maple. Acompanha bag, arco e breu.",
    features: [
      "Tampo Spruce",
      "Fundo Basswood",
      "Escala Black Maple",
      "Bag",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Fundo: Basswood", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Bag", "Arco", "Breu"] },
    ],
  },

  // MICHAEL - SOPROS (18 produtos)
  wtpm35n: {
    sku: "wtpm35n",
    nome: "Trombone de Pisto Sib",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wtpm35n.png",
    preco: null,
    descricao:
      "Trombone de Pisto em Sib com acabamento laqueado. Instrumento de sopro versátil para músicos de todos os níveis. Acompanha case e bocal.",
    features: ["Afinação Sib", "Pisto", "Acabamento laqueado", "Case", "Bocal"],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Tipo: Pisto", "Acabamento: Laqueado"],
      },
      { titulo: "Acompanha", itens: ["Case", "Bocal"] },
    ],
  },
  wtrm30n: {
    sku: "wtrm30n",
    nome: "Trompete Sib Laqueado",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wtrm30n.png",
    preco: null,
    descricao:
      "Trompete em Sib com acabamento laqueado. Pistos em aço inoxidável, acompanha case e bocal. Ideal para estudos e apresentações.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Pistos aço inox",
      "Case",
      "Bocal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Acabamento: Laqueado", "Pistos: Aço inox"],
      },
      { titulo: "Acompanha", itens: ["Case", "Bocal"] },
    ],
  },
  wpkm35n: {
    sku: "wpkm35n",
    nome: "Trompete Pocket Sib",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wpkm35n.png",
    preco: null,
    descricao:
      "Trompete Pocket em Sib com acabamento laqueado. Design compacto, perfeito para viagens e músicos que buscam praticidade. Acompanha case e bocal.",
    features: [
      "Afinação Sib",
      "Pocket",
      "Acabamento laqueado",
      "Case",
      "Bocal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Tipo: Pocket", "Acabamento: Laqueado"],
      },
      { titulo: "Acompanha", itens: ["Case", "Bocal"] },
    ],
  },
  wtrpm40: {
    sku: "wtrpm40",
    nome: "Trompete Piccolo Sib/Lá",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wtrpm40.png",
    preco: null,
    descricao:
      "Trompete Piccolo em Sib/Lá com acabamento laqueado. Instrumento de alta qualidade para músicos profissionais. Acompanha case e bocal.",
    features: [
      "Afinação Sib/Lá",
      "Piccolo",
      "Acabamento laqueado",
      "Case",
      "Bocal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib/Lá", "Tipo: Piccolo", "Acabamento: Laqueado"],
      },
      { titulo: "Acompanha", itens: ["Case", "Bocal"] },
    ],
  },
  wcorm45n: {
    sku: "wcorm45n",
    nome: "Cornet Sib Laqueado",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wcorm45n.png",
    preco: null,
    descricao:
      "Cornet em Sib com acabamento laqueado. Sonoridade suave e versátil. Acompanha case e bocal.",
    features: ["Afinação Sib", "Acabamento laqueado", "Case", "Bocal"],
    specs: [
      { titulo: "Geral", itens: ["Afinação: Sib", "Acabamento: Laqueado"] },
      { titulo: "Acompanha", itens: ["Case", "Bocal"] },
    ],
  },
  wflm34n: {
    sku: "wflm34n",
    nome: "Flauta Transversal Dó",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wflm34n.png",
    preco: null,
    descricao:
      "Flauta Transversal em Dó com sistema Boehm. Acompanha case e agulha de limpeza. Ideal para estudantes e músicos iniciantes.",
    features: ["Afinação Dó", "Sistema Boehm", "Case", "Agulha de limpeza"],
    specs: [
      { titulo: "Geral", itens: ["Afinação: Dó", "Sistema: Boehm"] },
      { titulo: "Acompanha", itens: ["Case", "Agulha de limpeza"] },
    ],
  },
  wflm33n: {
    sku: "wflm33n",
    nome: "Flauta Transversal Dó com Bocal Curvo",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wflm33n.png",
    preco: null,
    descricao:
      "Flauta Transversal em Dó com bocal curvo. Sistema Boehm, acompanha case e agulha de limpeza. Perfeita para músicos de pequena estatura.",
    features: [
      "Afinação Dó",
      "Bocal Curvo",
      "Sistema Boehm",
      "Case",
      "Agulha de limpeza",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Dó", "Bocal: Curvo", "Sistema: Boehm"],
      },
      { titulo: "Acompanha", itens: ["Case", "Agulha de limpeza"] },
    ],
  },
  wclm52: {
    sku: "wclm52",
    nome: "Clarinete Sib 18 Chaves",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wclm52.png",
    preco: null,
    descricao:
      "Clarinete em Sib com 18 chaves e sistema Boehm. Acompanha case e boquilha. Ideal para estudantes e músicos de todos os níveis.",
    features: [
      "Afinação Sib",
      "18 chaves",
      "Sistema Boehm",
      "Case",
      "Boquilha",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Chaves: 18", "Sistema: Boehm"],
      },
      { titulo: "Acompanha", itens: ["Case", "Boquilha"] },
    ],
  },
  wclm51: {
    sku: "wclm51",
    nome: "Clarinete Sib 18 Chaves Niquelado",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wclm51.png",
    preco: null,
    descricao:
      "Clarinete em Sib com 18 chaves niqueladas e sistema Boehm. Acompanha case e boquilha.",
    features: [
      "Afinação Sib",
      "18 chaves niqueladas",
      "Sistema Boehm",
      "Case",
      "Boquilha",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Chaves: 18 niqueladas", "Sistema: Boehm"],
      },
      { titulo: "Acompanha", itens: ["Case", "Boquilha"] },
    ],
  },
  wrem35n: {
    sku: "wrem35n",
    nome: "Requinta Mib",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wrem35n.png",
    preco: null,
    descricao:
      "Requinta em Mib com sistema Boehm. Instrumento de sopro compacto e versátil. Acompanha case e boquilha.",
    features: ["Afinação Mib", "Sistema Boehm", "Case", "Boquilha"],
    specs: [
      { titulo: "Geral", itens: ["Afinação: Mib", "Sistema: Boehm"] },
      { titulo: "Acompanha", itens: ["Case", "Boquilha"] },
    ],
  },
  wsbm35n: {
    sku: "wsbm35n",
    nome: "Saxofone Barítono Mib",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wsbm35n.png",
    preco: null,
    descricao:
      "Saxofone Barítono em Mib com acabamento laqueado. Instrumento de alta qualidade para músicos profissionais. Acompanha case e boquilha.",
    features: ["Afinação Mib", "Acabamento laqueado", "Case", "Boquilha"],
    specs: [
      { titulo: "Geral", itens: ["Afinação: Mib", "Acabamento: Laqueado"] },
      { titulo: "Acompanha", itens: ["Case", "Boquilha"] },
    ],
  },
  wtsm30n: {
    sku: "wtsm30n",
    nome: "Saxofone Tenor Sib",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wtsm30n.png",
    preco: null,
    descricao:
      "Saxofone Tenor em Sib com acabamento laqueado. Instrumento de alta qualidade para músicos profissionais. Acompanha case e boquilha.",
    features: ["Afinação Sib", "Acabamento laqueado", "Case", "Boquilha"],
    specs: [
      { titulo: "Geral", itens: ["Afinação: Sib", "Acabamento: Laqueado"] },
      { titulo: "Acompanha", itens: ["Case", "Boquilha"] },
    ],
  },
  wasm31n: {
    sku: "wasm31n",
    nome: "Saxofone Alto Mib",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wasm31n.png",
    preco: null,
    descricao:
      "Saxofone Alto em Mib com acabamento laqueado. Instrumento de alta qualidade para músicos profissionais. Acompanha case e boquilha.",
    features: ["Afinação Mib", "Acabamento laqueado", "Case", "Boquilha"],
    specs: [
      { titulo: "Geral", itens: ["Afinação: Mib", "Acabamento: Laqueado"] },
      { titulo: "Acompanha", itens: ["Case", "Boquilha"] },
    ],
  },
  whrm46n: {
    sku: "whrm46n",
    nome: "Trompa de Marcha",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/whrm46n.png",
    preco: null,
    descricao:
      "Trompa de Marcha com acabamento laqueado. Instrumento de sopro para bandas e conjuntos. Acompanha case e bocal.",
    features: ["Trompa de Marcha", "Acabamento laqueado", "Case", "Bocal"],
    specs: [
      { titulo: "Geral", itens: ["Tipo: Marcha", "Acabamento: Laqueado"] },
      { titulo: "Acompanha", itens: ["Case", "Bocal"] },
    ],
  },
  whrm45n: {
    sku: "whrm45n",
    nome: "Trompa Dupla Fa/Sib",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/whrm45n.png",
    preco: null,
    descricao:
      "Trompa Dupla em Fa/Sib. Instrumento profissional de alta qualidade. Acompanha case e bocal.",
    features: ["Afinação Fa/Sib", "Trompa dupla", "Case", "Bocal"],
    specs: [
      { titulo: "Geral", itens: ["Afinação: Fa/Sib", "Tipo: Trompa Dupla"] },
      { titulo: "Acompanha", itens: ["Case", "Bocal"] },
    ],
  },
  wepm454n: {
    sku: "wepm454n",
    nome: "Bombardino 4 Pistos Sib",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wepm454n.png",
    preco: null,
    descricao:
      "Bombardino com 4 pistos em Sib. Instrumento de sopro de alta qualidade. Acompanha case e bocal.",
    features: ["4 pistos", "Afinação Sib", "Case", "Bocal"],
    specs: [
      { titulo: "Geral", itens: ["Pistos: 4", "Afinação: Sib"] },
      { titulo: "Acompanha", itens: ["Case", "Bocal"] },
    ],
  },
  wepm45n: {
    sku: "wepm45n",
    nome: "Bombardino 3 Pistos Sib",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wepm45n.png",
    preco: null,
    descricao:
      "Bombardino com 3 pistos em Sib. Instrumento de sopro de alta qualidade. Acompanha case e bocal.",
    features: ["3 pistos", "Afinação Sib", "Case", "Bocal"],
    specs: [
      { titulo: "Geral", itens: ["Pistos: 3", "Afinação: Sib"] },
      { titulo: "Acompanha", itens: ["Case", "Bocal"] },
    ],
  },
  wbbm40n: {
    sku: "wbbm40n",
    nome: "Tuba 3/4 3 Pistos Sib",
    marca: "Michael",
    categoria: "Sopros",
    imagem: "img/wbbm40n.png",
    preco: null,
    descricao:
      "Tuba 3/4 com 3 pistos em Sib. Instrumento de sopro de alta qualidade. Acompanha case e bocal.",
    features: ["3 pistos", "Afinação Sib", "3/4", "Case", "Bocal"],
    specs: [
      {
        titulo: "Geral",
        itens: ["Pistos: 3", "Afinação: Sib", "Tamanho: 3/4"],
      },
      { titulo: "Acompanha", itens: ["Case", "Bocal"] },
    ],
  },

  // VOGGA - SOPROS (9 produtos)
  vscl701n: {
    sku: "vscl701n",
    nome: "Clarinete Sib 17 Chaves Niquelado",
    marca: "Vogga",
    categoria: "Sopros",
    imagem: "img/vscl701n.png",
    preco: null,
    descricao:
      "Clarinete em Sib com 17 chaves niqueladas. Sistema Boehm, corpo em ABS fosco, acompanha 2 barreletes, case e boquilha.",
    features: [
      "17 chaves niqueladas",
      "Sistema Boehm",
      "Corpo ABS fosco",
      "2 barreletes",
      "Case",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Chaves: 17 niqueladas", "Sistema: Boehm", "Corpo: ABS fosco"],
      },
      { titulo: "Acompanha", itens: ["Case", "2 barreletes", "Boquilha"] },
    ],
  },
  vscl702n: {
    sku: "vscl702n",
    nome: "Clarinete Sib 17 Chaves Prateado",
    marca: "Vogga",
    categoria: "Sopros",
    imagem: "img/vscl702n.png",
    preco: null,
    descricao:
      "Clarinete em Sib com 17 chaves prateadas. Sistema Boehm, corpo em ABS fosco, acompanha 2 barreletes, case e boquilha.",
    features: [
      "17 chaves prateadas",
      "Sistema Boehm",
      "Corpo ABS fosco",
      "2 barreletes",
      "Case",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Chaves: 17 prateadas", "Sistema: Boehm", "Corpo: ABS fosco"],
      },
      { titulo: "Acompanha", itens: ["Case", "2 barreletes", "Boquilha"] },
    ],
  },
  vsfl701n: {
    sku: "vsfl701n",
    nome: "Flauta Transversal Dó 16 Chaves Niquelada",
    marca: "Vogga",
    categoria: "Sopros",
    imagem: "img/vsfl701n.png",
    preco: null,
    descricao:
      "Flauta Transversal em Dó com 16 chaves niqueladas. Sistema Boehm com offset G e sapatilhas com ressonador metálico. Acompanha case e agulha de limpeza.",
    features: [
      "16 chaves niqueladas",
      "Sistema Boehm",
      "Offset G",
      "Sapatilhas com ressonador",
      "Case",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Chaves: 16 niqueladas", "Sistema: Boehm", "Offset G"],
      },
      { titulo: "Acompanha", itens: ["Case", "Agulha de limpeza"] },
    ],
  },
  vsfl702n: {
    sku: "vsfl702n",
    nome: "Flauta Transversal Dó 16 Chaves Prateada",
    marca: "Vogga",
    categoria: "Sopros",
    imagem: "img/vsfl702n.png",
    preco: null,
    descricao:
      "Flauta Transversal em Dó com 16 chaves prateadas. Sistema Boehm com offset G e sapatilhas com ressonador metálico. Acompanha case e agulha de limpeza.",
    features: [
      "16 chaves prateadas",
      "Sistema Boehm",
      "Offset G",
      "Sapatilhas com ressonador",
      "Case",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Chaves: 16 prateadas", "Sistema: Boehm", "Offset G"],
      },
      { titulo: "Acompanha", itens: ["Case", "Agulha de limpeza"] },
    ],
  },
  vsas701n: {
    sku: "vsas701n",
    nome: "Saxofone Alto Mib",
    marca: "Vogga",
    categoria: "Sopros",
    imagem: "img/vsas701n.png",
    preco: null,
    descricao:
      "Saxofone Alto em Mib com acabamento laqueado. Campana ornamentada, sapatilhas com ressonador metálico e botões anatômicos perolados. Acompanha case, boquilha e acessórios.",
    features: [
      "Afinação Mib",
      "Acabamento laqueado",
      "Campana ornamentada",
      "Case",
      "Boquilha",
    ],
    specs: [
      { titulo: "Geral", itens: ["Afinação: Mib", "Acabamento: Laqueado"] },
      { titulo: "Acompanha", itens: ["Case", "Boquilha", "Correia"] },
    ],
  },
  vssp701n: {
    sku: "vssp701n",
    nome: "Saxofone Soprano Sib",
    marca: "Vogga",
    categoria: "Sopros",
    imagem: "img/vssp701n.png",
    preco: null,
    descricao:
      "Saxofone Soprano em Sib com acabamento laqueado. Chave de G superagudo, campana ornamentada e sapatilhas com ressonador metálico. Acompanha case, boquilha e acessórios.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Chave G superagudo",
      "Case",
      "Boquilha",
    ],
    specs: [
      { titulo: "Geral", itens: ["Afinação: Sib", "Acabamento: Laqueado"] },
      { titulo: "Acompanha", itens: ["Case", "Boquilha", "Correia"] },
    ],
  },
  vsts701n: {
    sku: "vsts701n",
    nome: "Saxofone Tenor Sib",
    marca: "Vogga",
    categoria: "Sopros",
    imagem: "img/vsts701n.png",
    preco: null,
    descricao:
      "Saxofone Tenor em Sib com acabamento laqueado. Campana ornamentada, sapatilhas com ressonador metálico e botões anatômicos perolados. Acompanha case, boquilha e acessórios.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Campana ornamentada",
      "Case",
      "Boquilha",
    ],
    specs: [
      { titulo: "Geral", itens: ["Afinação: Sib", "Acabamento: Laqueado"] },
      { titulo: "Acompanha", itens: ["Case", "Boquilha", "Correia"] },
    ],
  },
  vstr701n: {
    sku: "vstr701n",
    nome: "Trompete Sib Laqueado",
    marca: "Vogga",
    categoria: "Sopros",
    imagem: "img/vstr701n.png",
    preco: null,
    descricao:
      "Trompete em Sib com acabamento laqueado. Pistos em aço inoxidável, bocal 7C e botões anatômicos. Acompanha case, óleo lubrificante, luva e flanela.",
    features: [
      "Afinação Sib",
      "Acabamento laqueado",
      "Pistos aço inox",
      "Bocal 7C",
      "Case",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Acabamento: Laqueado", "Bocal: 7C"],
      },
      { titulo: "Acompanha", itens: ["Case", "Óleo lubrificante"] },
    ],
  },
  vstb701n: {
    sku: "vstb701n",
    nome: "Trombone de Vara Sib",
    marca: "Vogga",
    categoria: "Sopros",
    imagem: "img/vstb701n.png",
    preco: null,
    descricao:
      "Trombone de Vara em Sib com acabamento laqueado. Campana de 203mm, calibre de 12.7mm e bocal prateado. Acompanha case, óleo lubrificante, luva e flanela.",
    features: [
      "Afinação Sib",
      "Vara",
      "Campana 203mm",
      "Calibre 12.7mm",
      "Case",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Afinação: Sib", "Tipo: Vara", "Campana: 203mm"],
      },
      { titulo: "Acompanha", itens: ["Case", "Óleo lubrificante"] },
    ],
  },

  // VOGGA - CORDAS ORQUESTRAIS (15 produtos)
  von118n: {
    sku: "von118n",
    nome: "Violino 1/8 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/von118n.png",
    preco: null,
    descricao:
      "Violino 1/8 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, escala em Black Maple. Acompanha estojo térmico triangular, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Estojo triangular",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Estojo Triangular", "Arco", "Breu"] },
    ],
  },
  von114n: {
    sku: "von114n",
    nome: "Violino 1/4 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/von114n.png",
    preco: null,
    descricao:
      "Violino 1/4 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, escala em Black Maple. Acompanha estojo térmico triangular, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Estojo triangular",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Estojo Triangular", "Arco", "Breu"] },
    ],
  },
  von112n: {
    sku: "von112n",
    nome: "Violino 1/2 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/von112n.png",
    preco: null,
    descricao:
      "Violino 1/2 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, escala em Black Maple. Acompanha estojo térmico triangular, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Estojo triangular",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Estojo Triangular", "Arco", "Breu"] },
    ],
  },
  von134n: {
    sku: "von134n",
    nome: "Violino 3/4 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/von134n.png",
    preco: null,
    descricao:
      "Violino 3/4 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, escala em Black Maple. Acompanha estojo térmico triangular, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Estojo triangular",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Estojo Triangular", "Arco", "Breu"] },
    ],
  },
  von144n: {
    sku: "von144n",
    nome: "Violino 4/4 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/von144n.png",
    preco: null,
    descricao:
      "Violino 4/4 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, escala em Black Maple. Acompanha estojo térmico triangular, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Estojo triangular",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Estojo Triangular", "Arco", "Breu"] },
    ],
  },
  vol134n: {
    sku: "vol134n",
    nome: "Viola 3/4 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/vol134n.png",
    preco: null,
    descricao:
      "Viola 3/4 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, escala em Black Maple. Acompanha estojo térmico triangular, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Estojo triangular",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Estojo Triangular", "Arco", "Breu"] },
    ],
  },
  vol144n: {
    sku: "vol144n",
    nome: "Viola 4/4 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/vol144n.png",
    preco: null,
    descricao:
      "Viola 4/4 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, escala em Black Maple. Acompanha estojo térmico triangular, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Estojo triangular",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Estojo Triangular", "Arco", "Breu"] },
    ],
  },
  voc118n: {
    sku: "voc118n",
    nome: "Violoncelo 1/8 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/voc118n.png",
    preco: null,
    descricao:
      "Violoncelo 1/8 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, fundo e lateral em Basswood. Acompanha bag luxo, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Bag Luxo",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Bag Luxo", "Arco", "Breu"] },
    ],
  },
  voc114n: {
    sku: "voc114n",
    nome: "Violoncelo 1/4 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/voc114n.png",
    preco: null,
    descricao:
      "Violoncelo 1/4 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, fundo e lateral em Basswood. Acompanha bag luxo, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Bag Luxo",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Bag Luxo", "Arco", "Breu"] },
    ],
  },
  voc112n: {
    sku: "voc112n",
    nome: "Violoncelo 1/2 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/voc112n.png",
    preco: null,
    descricao:
      "Violoncelo 1/2 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, fundo e lateral em Basswood. Acompanha bag luxo, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Bag Luxo",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Bag Luxo", "Arco", "Breu"] },
    ],
  },
  voc134n: {
    sku: "voc134n",
    nome: "Violoncelo 3/4 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/voc134n.png",
    preco: null,
    descricao:
      "Violoncelo 3/4 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, fundo e lateral em Basswood. Acompanha bag luxo, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Bag Luxo",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Bag Luxo", "Arco", "Breu"] },
    ],
  },
  voc144n: {
    sku: "voc144n",
    nome: "Violoncelo 4/4 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/voc144n.png",
    preco: null,
    descricao:
      "Violoncelo 4/4 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, fundo e lateral em Basswood. Acompanha bag luxo, arco com crina animal e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Bag Luxo",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Bag Luxo", "Arco", "Breu"] },
    ],
  },
  vba112n: {
    sku: "vba112n",
    nome: "Contrabaixo Acústico 1/2 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/vba112n.png",
    preco: null,
    descricao:
      "Contrabaixo Acústico 1/2 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, fundo e lateral em Basswood. Tarraxas cromadas, acompanha bag luxo, arco e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Bag Luxo",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Bag Luxo", "Arco", "Breu"] },
    ],
  },
  vba134n: {
    sku: "vba134n",
    nome: "Contrabaixo Acústico 3/4 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/vba134n.png",
    preco: null,
    descricao:
      "Contrabaixo Acústico 3/4 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, fundo e lateral em Basswood. Tarraxas cromadas, acompanha bag luxo, arco e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Bag Luxo",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Bag Luxo", "Arco", "Breu"] },
    ],
  },
  vba144n: {
    sku: "vba144n",
    nome: "Contrabaixo Acústico 4/4 Vintage Fosco",
    marca: "Vogga",
    categoria: "Cordas",
    imagem: "img/vba144n.png",
    preco: null,
    descricao:
      "Contrabaixo Acústico 4/4 com acabamento Vintage Fosco. Tampo em Spruce, braço em Maple, fundo e lateral em Basswood. Tarraxas cromadas, acompanha bag luxo, arco e breu.",
    features: [
      "Tampo Spruce",
      "Acabamento Vintage Fosco",
      "Black Maple",
      "Bag Luxo",
      "Arco com crina animal",
    ],
    specs: [
      {
        titulo: "Geral",
        itens: ["Tampo: Spruce", "Acabamento: Vintage Fosco", "Braço: Maple"],
      },
      { titulo: "Acompanha", itens: ["Bag Luxo", "Arco", "Breu"] },
    ],
  },
};

// FUNÇÕES DE RENDERIZAÇÃO

function getRelatedProducts(sku, categoria) {
  const relacionados = Object.values(produtosDB)
    .filter((p) => p.sku !== sku && p.categoria === categoria)
    .slice(0, 4);

  if (relacionados.length < 4) {
    const outros = Object.values(produtosDB)
      .filter((p) => p.sku !== sku && !relacionados.includes(p))
      .slice(0, 4 - relacionados.length);
    return [...relacionados, ...outros];
  }

  return relacionados;
}

function renderProduto(sku) {
  const produto = produtosDB[sku];

  if (!produto) {
    document.getElementById("produto-titulo").textContent =
      "Produto não encontrado";
    document.getElementById("produto-marca").textContent = "---";
    document.getElementById("produto-descricao").textContent =
      "Produto não encontrado em nosso catálogo.";
    document.getElementById("breadcrumb-produto").textContent =
      "Não encontrado";
    return;
  }

  document.title = `${produto.nome} - Sonho Meu`;
  document.getElementById("breadcrumb-produto").textContent = produto.nome;
  document.getElementById("breadcrumb-categoria").textContent =
    produto.categoria;

  document.getElementById("produto-marca").textContent = produto.marca;
  document.getElementById("produto-titulo").textContent = produto.nome;
  document.getElementById("produto-preco").textContent = produto.preco
    ? produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    : "Consultar preço";
  document.getElementById("produto-descricao").textContent = produto.descricao;

  const img = document.getElementById("mainProductImage");
  img.src = produto.imagem || "img/placeholder-instrumento.png";
  img.alt = produto.nome;

  const featuresContainer = document.getElementById("produto-features");
  featuresContainer.innerHTML = "";
  if (produto.features && produto.features.length > 0) {
    produto.features.forEach((feature) => {
      const div = document.createElement("div");
      div.className = "feature-item";
      div.innerHTML = `<span class="feature-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span>${feature}</span>`;
      featuresContainer.appendChild(div);
    });
  }

  const btn = document.getElementById("btn-add-cart");
  btn.dataset.nome = produto.nome;
  btn.dataset.marca = produto.marca;
  btn.dataset.preco = produto.preco || "";
  btn.dataset.imagem = produto.imagem || "img/placeholder-instrumento.png";

  const specsGrid = document.getElementById("specs-grid");
  specsGrid.innerHTML = "";
  document.getElementById("specs-subtitulo").textContent =
    "Informações passadas pelo fabricante.";

  if (produto.specs && produto.specs.length > 0) {
    produto.specs.forEach((spec) => {
      const card = document.createElement("div");
      card.className = "specs-card";

      let listItems = "";
      spec.itens.forEach((item) => {
        const parts = item.split(":");
        if (parts.length > 1) {
          listItems += `<li><span class="specs-label">${parts[0].trim()}:</span> ${parts.slice(1).join(":").trim()}</li>`;
        } else {
          listItems += `<li>${item}</li>`;
        }
      });

      card.innerHTML = `
            <div class="specs-card-header">
              <h3>${spec.titulo}</h3>
            </div>
            <ul class="specs-list">${listItems}</ul>
          `;
      specsGrid.appendChild(card);
    });
  }

  const relatedGrid = document.getElementById("related-grid");
  relatedGrid.innerHTML = "";

  const relacionados = getRelatedProducts(sku, produto.categoria);

  if (relacionados.length > 0) {
    relacionados.forEach((rel) => {
      const card = document.createElement("div");
      card.className = "related-card";
      card.innerHTML = `
            <div class="related-image">
              <img src="${rel.imagem || "img/placeholder-instrumento.png"}" alt="${rel.nome}" />
            </div>
            <div class="related-info">
              <h3>${rel.nome}</h3>
              <p class="related-brand">${rel.marca}</p>
              <div class="related-price">${rel.preco ? rel.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : "Consultar preço"}</div>
              <a href="produto.html?sku=${rel.sku}" class="related-link">Ver detalhes</a>
            </div>
          `;
      relatedGrid.appendChild(card);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const main = document.getElementById("produto-main");
  if (!main) return; // não é a página de produto, não faz nada

  const urlParams = new URLSearchParams(window.location.search);
  const sku = urlParams.get("sku");

  if (sku && produtosDB[sku]) {
    renderProduto(sku);
  } else {
    renderProduto("md10");
  }

  if (typeof updateCartBadge === "function") updateCartBadge();
  if (typeof renderCart === "function") renderCart();
});
