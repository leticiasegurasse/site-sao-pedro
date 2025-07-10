// src/mocks/categoriasMock.js
const categorias = [
  // Linha Baú
  {
    nome: "Linha Baú",
    slug: "linha-bau",
    imagem: "/images/bau/bau-09896.jpg",
    descricao: "Soluções fechadas para proteção de cargas com altura padrão de 3011mm e assoalho em chapa xadrez.",
    video: "/videos/LINHA BAU.mp4",
    informacoesTecnicas: [
      "Altura padrão: 3011mm",
      "Assoalho: Chapa xadrez 3/16\" (4,75mm)",
      "Caixa de carga 100% alumínio",
      "Colunas omega (cartola) alumínio",
      "Teto em chapa inteiriça alumínio",
      "Porta traseira branca lisa com 4 varões",
      "Ripamento interno galvanizado",
      "Rodapé de chapa para guia dos palets",
      "Reforço sob assoalho anti-afundamento",
      "Pino rei de duas posições",
      "Caixa de cozinha grande",
      "Caixa de ferramentas",
      "Corote d'água com saboneteira",
      "Protetor de ciclista em alumínio",
      "Suporte de estepe tipo cesto para dois pneus",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    modelos: [
      {
        nome: "Semirreboque Baú 02 Eixos Juntos",
        iconeEixo: "truck-axle-2.svg",
        imagens: [
              "/images/bau/bau-09896.jpg", 
              "/images/bau/bau-09898.jpg", 
              "/images/bau/bau-09899.jpg",
              "/images/bau/bau-09900.jpg",
              "/images/bau/bau-09901.jpg",
              "/images/bau/bau-09903.jpg",
              "/images/bau/bau-09905.jpg",
              "/images/bau/bau-09906.jpg",
              "/images/bau/bau-09907.jpg",
              "/images/bau/bau-09908.jpg",
              "/images/bau/bau-09910.jpg",
              "/images/bau/bau-09912.jpg",
              "/images/bau/bau-09914.jpg"
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA BAÚ.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "10500mm / 12500mm / 14600mm / 15400mm" },
          { chave: "Altura", valor: "3011mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["10500mm", "12500mm", "14600mm", "15400mm"],
        destaque: true
      },
      {
        nome: "Semirreboque Baú 02 Eixos Distanciados (1+1)",
        iconeEixo: "truck-axle-1-1.svg",
        imagens: [
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA BAÚ.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "10500mm / 12500mm / 14600mm / 15400mm" },
          { chave: "Altura", valor: "3011mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["10500mm", "12500mm", "14600mm", "15400mm"]
      },
      {
        nome: "Semirreboque Baú 03 Eixos Juntos",
        iconeEixo: "truck-axle-3.svg",
        imagens: [
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA BAÚ.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "14600mm / 15400mm" },
          { chave: "Altura", valor: "3011mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["14600mm", "15400mm"]
      },
      {
        nome: "Semirreboque Baú 03 Eixos Distanciados (1+1+1)",
        iconeEixo: "truck-axle-1-1-1.svg",
        imagens: [
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA BAÚ.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "14600mm / 15400mm" },
          { chave: "Altura", valor: "3011mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["14600mm", "15400mm"]
      },
      {
        nome: "Semirreboque Baú 04 Eixos (1+3)",
        iconeEixo: "truck-axle-1-3.svg",
        imagens: [
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA BAÚ.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "6x2" },
          { chave: "Comprimento", valor: "14600mm / 15400mm" },
          { chave: "Altura", valor: "3011mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["14600mm", "15400mm"]
      },
      {
        nome: "Bitrem Baú 02+02 Eixos",
        iconeEixo: "truck-axle-2-2.svg",
        imagens: [
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA BAÚ.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "12500+12500mm / 12500+13500mm (Rebaixado)" },
          { chave: "Altura", valor: "3011mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["12500+12500mm", "12500+13500mm (Rebaixado)"]
      },
      {
        nome: "Super Bitrem Baú 03+03 Eixos",
        iconeEixo: "truck-axle-3-3.svg",
        imagens: [
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA BAÚ.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "6x4" },
          { chave: "Comprimento", valor: "12500+12500mm" },
          { chave: "Altura", valor: "3011mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["12500+12500mm"]
      }
    ]
  },

  // Linha Sider
  {
    nome: "Linha Sider",
    slug: "linha-sider",
    imagem: "images/sider/sider-09930.jpg",
    descricao: "Facilidade no carregamento lateral com altura padrão de 3056mm.",
    video: "/videos/LINHA SIDER.mp4",
    informacoesTecnicas: [
      "Altura padrão: 3056mm",
      "Assoalho: Chapa xadrez 3/16\" (4,75mm)",
      "Lona sider de alta qualidade",
      "Estrutura em alumínio",
      "Sistema de abertura lateral facilitada",
      "Porta traseira branca lisa com 4 varões",
      "Ripamento interno galvanizado",
      "Rodapé de chapa para guia dos palets",
      "Reforço sob assoalho anti-afundamento",
      "Pino rei de duas posições",
      "Caixa de cozinha grande",
      "Caixa de ferramentas",
      "Corote d'água com saboneteira",
      "Protetor de ciclista em alumínio",
      "Suporte de estepe tipo cesto para dois pneus",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    modelos: [
      {
        nome: "Semirreboque Sider 02 Eixos Juntos",
        iconeEixo: "truck-axle-2.svg",
        imagens: [
          "/images/sider/sider-09928.jpg",
          "/images/sider/sider-09933.jpg",
          "/images/sider/sider-09925.jpg",
          "/images/sider/sider-09930.jpg",
          "/images/sider/sider-09923.jpg",
          "/images/sider/sider-09922.jpg",
          "/images/sider/sider-09919.jpg",
          "/images/sider/sider-09918.jpg",
          "/images/sider/sider-09915.jpg"
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA SIDER.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "10500mm / 12500mm / 14600mm / 15400mm" },
          { chave: "Altura", valor: "3056mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["10500mm", "12500mm", "14600mm", "15400mm"],
        destaque: true
      },
      {
        nome: "Semirreboque Sider 02 Eixos Distanciados (1+1)",
        iconeEixo: "truck-axle-1-1.svg",
        imagens: [

        ],
        documentos: {
            desenho: "/images/desenhos/DESENHOS - LINHA SIDER.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "10500mm / 12500mm / 14600mm / 15400mm" },
          { chave: "Altura", valor: "3056mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["10500mm", "12500mm", "14600mm", "15400mm"]
      },
      {
        nome: "Semirreboque Sider 03 Eixos Juntos",
        iconeEixo: "truck-axle-3.svg",
        imagens: [

        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA SIDER.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "14600mm / 15400mm" },
          { chave: "Altura", valor: "3056mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["14600mm", "15400mm"]
      },
      {
        nome: "Semirreboque Sider 03 Eixos Distanciados (1+1+1)",
        iconeEixo: "truck-axle-1-1-1.svg",
        imagens: [

        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA SIDER.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "14600mm / 15400mm" },
          { chave: "Altura", valor: "3056mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["14600mm", "15400mm"]
      },
      {
        nome: "Semirreboque Sider 04 Eixos (1+3)",
        iconeEixo: "truck-axle-1-3.svg",
        imagens: [

        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA SIDER.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "6x2" },
          { chave: "Comprimento", valor: "14600mm / 15400mm" },
          { chave: "Altura", valor: "3056mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["14600mm", "15400mm"]
      },
      {
        nome: "Bitrem Sider 02+02 Eixos",
        iconeEixo: "truck-axle-2-2.svg",
        imagens: [

        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA SIDER.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "12500+12500mm" },
          { chave: "Altura", valor: "3056mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["12500+12500mm"]
      },
      {
        nome: "Super Bitrem Sider 03+03 Eixos",
        iconeEixo: "truck-axle-3-3.svg",
        imagens: [

        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA SIDER.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "6x4" },
          { chave: "Comprimento", valor: "12500+12500mm" },
          { chave: "Altura", valor: "3056mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 3/16\" (4,75mm)" }
        ],
        versoes: ["12500+12500mm"]
      }
    ]
  },

  // Linha Carga Seca
  {
    nome: "Linha Carga Seca",
    slug: "linha-carga-seca",
    imagem: "/images/carga-seca/carga-seca-09942.jpg",
    descricao: "Versatilidade para diversos tipos de carga com tampas ACM.",
    video: "/videos/LINHA CARGA SECA.mp4",
    informacoesTecnicas: [
      "Assoalho: Chapa xadrez 1/8\" (3,17mm)",
      "Tampas Carga Seca: Chapa ou ACM com 450mm / 900mm",
      "Estrutura robusta em aço",
      "Laterais removíveis",
      "Sistema de amarração de carga",
      "Pino rei de duas posições",
      "Caixa de cozinha grande",
      "Caixa de ferramentas",
      "Corote d'água com saboneteira",
      "Protetor de ciclista em alumínio",
      "Suporte de estepe tipo cesto para dois pneus",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    modelos: [
      {
        nome: "Semirreboque Carga Seca 02 Eixos Juntos",
        iconeEixo: "truck-axle-2.svg",
        imagens: [
          "/images/carga-seca/carga-seca-09948.jpg",
          "/images/carga-seca/carga-seca-09945.jpg",
          "/images/carga-seca/carga-seca-4698.jpg",
          "/images/carga-seca/carga-seca-4701.jpg",
          "/images/carga-seca/carga-seca-09941.jpg",
          "/images/carga-seca/carga-seca-4703.jpg",
          "/images/carga-seca/carga-seca-09940.jpg",
          "/images/carga-seca/carga-seca-4705.jpg",
          "/images/carga-seca/carga-seca-09939.jpg",
          "/images/carga-seca/carga-seca-4718.jpg",
          "/images/carga-seca/carga-seca-09937.jpg",
          "/images/carga-seca/carga-seca-09934.jpg"
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA CARGA SECA - GRANELEIRA.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "10500mm / 11400mm" },
          { chave: "Tampas", valor: "Padrão Carga Seca" },
          { chave: "Assoalho", valor: "Chapa xadrez 1/8\" (3,17mm)" }
        ],
        versoes: ["10500mm", "11400mm"],
        destaque: true
      },
      {
        nome: "Semirreboque Carga Seca 02 Eixos Distanciados (1+1)",
        iconeEixo: "truck-axle-1-1.svg",
        imagens: [

        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA CARGA SECA - GRANELEIRA.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "10500mm / 11400mm / 12400mm / 13500mm" },
          { chave: "Tampas", valor: "Padrão Carga Seca" },
          { chave: "Assoalho", valor: "Chapa xadrez 1/8\" (3,17mm)" }
        ],
        versoes: ["10500mm", "11400mm", "12400mm", "13500mm"]
      },
      {
        nome: "Semirreboque Carga Seca 03 Eixos Juntos",
        iconeEixo: "truck-axle-3.svg",
        imagens: [

        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA CARGA SECA - GRANELEIRA.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "12400mm / 13500mm / 14100mm / 14500mm" },
          { chave: "Tampas", valor: "Chapa Carga Seca 450mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 1/8\" (3,17mm)" }
        ],
        versoes: ["12400mm", "13500mm", "14100mm", "14500mm"]
      },
      {
        nome: "Semirreboque Carga Seca 03 Eixos Distanciados (1+1+1)",
        iconeEixo: "truck-axle-1-1-1.svg",
        imagens: [

        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA CARGA SECA - GRANELEIRA.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "12400mm / 13500mm / 14100mm / 14500mm" },
          { chave: "Tampas", valor: "ACM Carga Seca 450mm / 900mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 1/8\" (3,17mm)" }
        ],
        versoes: ["12400mm", "13500mm", "14100mm", "14500mm"]
      },
      {
        nome: "Bitrem Carga Seca 02+02 Eixos",
        iconeEixo: "truck-axle-2-2.svg",
        imagens: [

        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA CARGA SECA - GRANELEIRA.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "6x2" },
          { chave: "Comprimento", valor: "7100+7100mm / 7500+7500mm / 12400+12400mm" },
          { chave: "Tampas", valor: "Padrão Carga Seca" },
          { chave: "Assoalho", valor: "Chapa xadrez 1/8\" (3,17mm)" }
        ],
        versoes: ["7100+7100mm", "7500+7500mm", "12400+12400mm"]
      }
    ]
  },

  // Linha Graneleira
  {
    nome: "Linha Graneleira",
    slug: "linha-graneleira",
    imagem: "/images/carreta-graneleira1.jpg",
    descricao: "Transporte de granéis com tampas altas e assoalho reforçado.",
    informacoesTecnicas: [
      "Assoalho: Chapa xadrez 1/8\" (3,17mm)",
      "Tampas Graneleira: ACM 900+900mm",
      "Arcos e lona de cobertura",
      "Estrutura reforçada para granéis",
      "Vedação especial para produtos granulados",
      "Bocas de escoamento",
      "Pino rei de duas posições",
      "Caixa de cozinha grande",
      "Caixa de ferramentas",
      "Corote d'água com saboneteira",
      "Protetor de ciclista em alumínio",
      "Suporte de estepe tipo cesto para dois pneus",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    modelos: [
      {
        nome: "Semirreboque Graneleiro 04 Eixos (1+3)",
        iconeEixo: "truck-axle-1-3.svg",
        imagens: [
          "/images/carreta-graneleira1.jpg",
          "/images/carreta-graneleira2.jpg",
          "/images/carreta-graneleira3.jpg"
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA CARGA SECA - GRANELEIRA.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "6x2" },
          { chave: "Comprimento", valor: "13500mm / 14100mm / 14500mm" },
          { chave: "Tampas", valor: "ACM Graneleira 900+900mm" },
          { chave: "Assoalho", valor: "Chapa xadrez 1/8\" (3,17mm)" }
        ],
        versoes: ["13500mm", "14100mm", "14500mm"],
        destaque: true
      },
      {
        nome: "Super Bitrem Graneleiro 03+03 Eixos",
        iconeEixo: "truck-axle-3-3.svg",
        imagens: [
          "/images/carreta-graneleira1.jpg",
          "/images/carreta-graneleira2.jpg"
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA CARGA SECA - GRANELEIRA.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "6x4" },
          { chave: "Comprimento", valor: "9000+11400mm / 9500+12400mm / 12400+12400mm" },
          { chave: "Tampas", valor: "Padrão Graneleiro" },
          { chave: "Assoalho", valor: "Chapa xadrez 1/8\" (3,17mm)" }
        ],
        versoes: ["9000+11400mm", "9500+12400mm", "12400+12400mm"]
      }
    ]
  },

  // Linha Porta Container (VPC)
  {
    nome: "Linha Porta Container (VPC)",
    slug: "linha-porta-container",
    imagem: "/images/porta-container/porta-container-4759.jpg",
    descricao: "Especializada em transporte de containers de 20 e 40 pés.",
    video:"/videos/LINHA PORTA CONTAINER.mp4",
    informacoesTecnicas: [
      "Sistema de engate 'Lock' para containers",
      "Estrutura em aço de alta resistência",
      "Guias para posicionamento do container",
      "Pino rei de duas posições",
      "Caixa de ferramentas",
      "Corote d'água com saboneteira",
      "Protetor de ciclista em alumínio",
      "Suporte de estepe tipo cesto para dois pneus",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    modelos: [
      {
        nome: "Semirreboque Porta Container 03 Eixos - 20 Pés",
        iconeEixo: "truck-axle-3.svg",
        imagens: [
          "/images/porta-container/porta-container-4737.jpg",
          "/images/porta-container/porta-container-4739.jpg",
          "/images/porta-container/porta-container-4743.jpg",
          "/images/porta-container/porta-container-4747.jpg",
          "/images/porta-container/porta-container-4748.jpg",
          "/images/porta-container/porta-container-4749.jpg",
          "/images/porta-container/porta-container-4752.jpg",
          "/images/porta-container/porta-container-4753.jpg",
          "/images/porta-container/porta-container-4754.jpg",
          "/images/porta-container/porta-container-4759.jpg",
          "/images/porta-container/porta-container-4763.jpg",
          "/images/porta-container/porta-container-4765.jpg",
          "/images/porta-container/porta-container-4767.jpg",
          "/images/porta-container/porta-container-4771.jpg"
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA PORTA CONTAINER (VPC).pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "7700mm" },
          { chave: "Engates Lock", valor: "04 Engates" },
          { chave: "Transporta", valor: "1 Container 20 Pés" }
        ],
        versoes: ["03 eixos juntos"],
        destaque: true
      },
      {
        nome: "Semirreboque Porta Container 03 Eixos - 40 Pés",
        iconeEixo: "truck-axle-3.svg",
        imagens: [
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA PORTA CONTAINER (VPC).pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "6x2" },
          { chave: "Comprimento", valor: "12500 mm" },
          { chave: "Engates Lock", valor: "04 / 08 / 12 Engates" },
          { chave: "Transporta", valor: "1 Container 40 Pés ou 2 de 20 Pés" }
        ],
        versoes: ["03 eixos juntos"]
      },
      {
        nome: "Super Bitrem Porta Container 03+03 Eixos - 40+40 Pés",
        iconeEixo: "truck-axle-3-3.svg",
        imagens: [
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA PORTA CONTAINER (VPC).pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "6x4" },
          { chave: "Comprimento", valor: "12500+12500mm" },
          { chave: "Engates Lock", valor: "12+12 Engates" },
          { chave: "Transporta", valor: "2 Containers 40 Pés" }
        ],
        versoes: ["Configuração 40+40 Pés"]
      }
    ]
  },

  // Linha Base - Frigorífica / Carvoeira
  {
    nome: "Linha Base - Frigorífica / Carvoeira",
    slug: "linha-base",
    imagem: "/images/base-carvoeira1.jpg",
    descricao: "Chassis base para instalação de baús frigoríficos ou para transporte de carvão.",
    informacoesTecnicas: [
      "Estrutura otimizada para instalação de equipamentos",
      "Opções de assoalho: Sem assoalho (para baú) ou Chapa 2,65mm",
      "Estrutura reforçada",
      "Pino rei de duas posições",
      "Caixa de cozinha grande",
      "Caixa de ferramentas",
      "Corote d'água com saboneteira",
      "Protetor de ciclista em alumínio",
      "Suporte de estepe tipo cesto para dois pneus",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    modelos: [
      {
        nome: "Semirreboque Base 03 Eixos Juntos",
        iconeEixo: "truck-axle-3.svg",
        imagens: [
          "/images/base-carvoeira1.jpg",
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA BASE FRIGORIFICA - CARVOEIRA.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "14600mm / 15400mm / 15900mm" },
          { chave: "Assoalho", valor: "Sem Assoalho ou Chapa 2,65mm" }
        ],
        versoes: ["14600mm", "15400mm", "15900mm"],
        destaque: true
      },
      {
        nome: "Semirreboque Base 03 Eixos Distanciados (1+1+1)",
        iconeEixo: "truck-axle-1-1-1.svg",
        imagens: [
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA BASE FRIGORIFICA - CARVOEIRA.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "4x2 / 6x2" },
          { chave: "Comprimento", valor: "14600mm / 15400mm" },
          { chave: "Assoalho", valor: "Sem Assoalho ou Chapa 2,65mm" }
        ],
        versoes: ["14600mm", "15400mm"]
      },
      {
        nome: "Semirreboque Base 04 Eixos (1+3)",
        iconeEixo: "truck-axle-1-3.svg",
        imagens: [
        ],
        documentos: {
          desenho: "/images/desenhos/DESENHOS - LINHA BASE FRIGORIFICA - CARVOEIRA.pdf"
        },
        especificacoes: [
          { chave: "Acoplamento", valor: "6x2" },
          { chave: "Comprimento", valor: "14600mm / 15400mm / 15900mm" },
          { chave: "Assoalho", valor: "Sem Assoalho ou Chapa 2,65mm" }
        ],
        versoes: ["14600mm", "15400mm", "15900mm"]
      }
    ]
  }
];

export default categorias;