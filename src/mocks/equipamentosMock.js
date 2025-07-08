const equipamentos = [
  // LINHA BAÚ
  {
    nome: "Semirreboque Baú 02 eixos juntos",
    categoria: "linha-bau",
    imagens: [
      "/images/semirreboque-furgao1.jpg",
      "/images/semirreboque-furgao2.jpg",
      "/images/semirreboque-furgao3.jpg"
    ],
    video: "/videos/semirreboque_bau.mp4",
    informacoesTecnicas: [
      "Acoplamento: 4x2 / 6x2",
      "Comprimento: 10500mm / 12500mm / 14600mm / 15400mm",
      "Altura: 3011mm",
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
      "Suspensor no 1º eixo",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    informacoes: [
      { chave: "Acoplamento", valor: "4x2 / 6x2" },
      { chave: "Altura", valor: "3011mm" },
      { chave: "Material", valor: "100% alumínio" },
      { chave: "Freios", valor: "ABS" },
    ],
    versoes: [
      "02 eixos juntos",
      "02 eixos distanciados (1+1)",
      "03 eixos juntos", 
      "03 eixos distanciados (1+1+1)",
      "04 eixos (1+3)",
      "Bitrem 02+02 eixos",
      "Super Bitrem 03+03 eixos"
    ],
    likes: 19,
    destaque: true
  },

  // LINHA SIDER
  {
    nome: "Semirreboque Sider 02 eixos juntos",
    categoria: "linha-sider",
    imagens: [
      "/images/semirreboque-sider1.jpg",
      "/images/semirreboque-sider2.jpg",
      "/images/semirreboque-sider3.jpg"
    ],
    informacoesTecnicas: [
      "Acoplamento: 4x2 / 6x2",
      "Comprimento: 10500mm / 12500mm / 14600mm / 15400mm",
      "Altura: 3056mm",
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
      "Suspensor no 1º eixo",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    informacoes: [
      { chave: "Acoplamento", valor: "4x2 / 6x2" },
      { chave: "Altura", valor: "3056mm" },
      { chave: "Abertura", valor: "Lateral" },
      { chave: "Freios", valor: "ABS" },
    ],
    versoes: [
      "02 eixos juntos",
      "02 eixos distanciados (1+1)",
      "03 eixos juntos",
      "03 eixos distanciados (1+1+1)",
      "03 eixos bebideiro com asa delta",
      "04 eixos (1+3)",
      "Bitrem 02+02 eixos (suspensão fixa)",
      "Bitrem 02+02 eixos (suspensão deslizante)",
      "Super Bitrem 03+03 eixos (suspensão fixa)",
      "Super Bitrem 03+03 eixos (suspensão deslizante)"
    ],
    likes: 15,
    destaque: true
  },

  // LINHA CARGA SECA
  {
    nome: "Semirreboque Carga Seca 02 eixos juntos",
    categoria: "linha-carga-seca",
    imagens: [
      "/images/semirreboques.jpg",
      "/images/semirreboques2.jpg",
      "/images/semirreboques3.jpg"
    ],
    informacoesTecnicas: [
      "Acoplamento: 4x2 / 6x2",
      "Comprimento: 10500mm / 11400mm / 12400mm / 13500mm / 14100mm / 14500mm",
      "Tampas ACM carga seca: 450mm / 900mm",
      "Assoalho: Chapa xadrez 1/8\" (3,17mm)",
      "Estrutura robusta em aço",
      "Laterais removíveis",
      "Sistema de amarração de carga",
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
      "Suspensor no 1º eixo",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    informacoes: [
      { chave: "Acoplamento", valor: "4x2 / 6x2" },
      { chave: "Tampas ACM", valor: "450mm / 900mm" },
      { chave: "Assoalho", valor: "Chapa 1/8\" (3,17mm)" },
      { chave: "Freios", valor: "ABS" },
    ],
    versoes: [
      "02 eixos juntos",
      "02 eixos distanciados (1+1)",
      "03 eixos juntos",
      "03 eixos distanciados (1+1+1)",
      "04 eixos (1+3)",
      "Bitrem 02+02 eixos (suspensão fixa)",
      "Bitrem 02+02 eixos (suspensão deslizante)",
      "Super Bitrem 03+03 eixos (suspensão fixa)",
      "Super Bitrem 03+03 eixos (suspensão deslizante)"
    ],
    likes: 12,
    destaque: true
  },

  // LINHA GRANELEIRA
  {
    nome: "Semirreboque Graneleiro 02 eixos juntos",
    categoria: "linha-graneleira",
    imagens: [
      "/images/carreta-graneleira1.jpg",
      "/images/carreta-graneleira2.jpg",
      "/images/carreta-graneleira3.jpg"
    ],
    informacoesTecnicas: [
      "Acoplamento: 4x2 / 6x2",
      "Comprimento: 10500mm / 11400mm / 12400mm / 13500mm / 14100mm / 14500mm",
      "Tampas ACM graneleira: 900+900mm",
      "Assoalho: Chapa xadrez 1/8\" (3,17mm)",
      "Sistema de descarga basculante",
      "Estrutura reforçada para granéis",
      "Vedação especial para produtos granulados",
      "Porta traseira basculante",
      "Sistema pneumático de abertura",
      "Reforço sob assoalho anti-afundamento",
      "Pino rei de duas posições",
      "Caixa de cozinha grande",
      "Caixa de ferramentas",
      "Corote d'água com saboneteira",
      "Protetor de ciclista em alumínio",
      "Suporte de estepe tipo cesto para dois pneus",
      "Suspensor no 1º eixo",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    informacoes: [
      { chave: "Acoplamento", valor: "4x2 / 6x2" },
      { chave: "Tampas ACM", valor: "900+900mm" },
      { chave: "Especialidade", valor: "Transporte de granéis" },
      { chave: "Freios", valor: "ABS" },
    ],
    versoes: [
      "02 eixos juntos",
      "02 eixos distanciados (1+1)",
      "03 eixos juntos",
      "03 eixos distanciados (1+1+1)",
      "04 eixos (1+3)",
      "Bitrem 02+02 eixos (suspensão fixa)",
      "Bitrem 02+02 eixos (suspensão deslizante)",
      "Super Bitrem 03+03 eixos (suspensão fixa)",
      "Super Bitrem 03+03 eixos (suspensão deslizante)"
    ],
    likes: 8,
    destaque: true
  },

  // LINHA PORTA CONTAINER (VPC)
  {
    nome: "Semirreboque Porta Container 03 eixos juntos (20 Pés)",
    categoria: "linha-porta-container",
    imagens: [
      "/images/vpc-buggy1.jpg",
      "/images/vpc-buggy2.jpg",
      "/images/vpc-buggy3.jpg"
    ],
    informacoesTecnicas: [
      "Acoplamento: 6x2",
      "Comprimento: 7700mm (20 pés)",
      "Sistema Engate Lock",
      "04 Engates para container 20 pés",
      "Estrutura em aço de alta resistência",
      "Sistema de travamento automático",
      "Guias para posicionamento do container",
      "Pino rei de duas posições",
      "Caixa de cozinha grande",
      "Caixa de ferramentas",
      "Corote d'água com saboneteira",
      "Protetor de ciclista em alumínio",
      "Suporte de estepe tipo cesto para dois pneus",
      "Suspensor no 1º eixo",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    informacoes: [
      { chave: "Acoplamento", valor: "6x2" },
      { chave: "Container", valor: "20 pés" },
      { chave: "Engates", valor: "04 unidades" },
      { chave: "Freios", valor: "ABS" },
    ],
    versoes: [
      "03 eixos juntos (20 pés)",
      "03 eixos juntos (40 pés)",
      "Super Bitrem 03+03 eixos"
    ],
    likes: 7,
    destaque: true
  },

  // LINHA BASE
  {
    nome: "Semirreboque Base Carvoeira 03 eixos juntos",
    categoria: "linha-base",
    imagens: [
      "/images/base-carvoeira1.jpg",
      "/images/base-carvoeira2.jpg",
      "/images/base-carvoeira3.jpg"
    ],
    informacoesTecnicas: [
      "Acoplamento: 4x2 / 6x2",
      "Comprimento: 14600mm / 15400mm / 15900mm",
      "Chapa: 2,65mm",
      "Assoalho: 14600mm / 15400mm",
      "Base especializada para carvão",
      "Estrutura reforçada para altas temperaturas",
      "Sistema de vedação especial",
      "Revestimento térmico",
      "Porta traseira reforçada",
      "Sistema de descarga facilitada",
      "Pino rei de duas posições",
      "Caixa de cozinha grande",
      "Caixa de ferramentas",
      "Corote d'água com saboneteira",
      "Protetor de ciclista em alumínio",
      "Suporte de estepe tipo cesto para dois pneus",
      "Suspensor no 1º eixo",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    informacoes: [
      { chave: "Acoplamento", valor: "4x2 / 6x2" },
      { chave: "Especialidade", valor: "Transporte de carvão" },
      { chave: "Chapa", valor: "2,65mm" },
      { chave: "Freios", valor: "ABS" },
    ],
    versoes: [
      "03 eixos juntos",
      "03 eixos distanciados (1+1+1)",
      "04 eixos (1+3)"
    ],
    likes: 5,
    destaque: false
  },

  {
    nome: "Semirreboque Base Frigorífica 03 eixos juntos", 
    categoria: "linha-base",
    imagens: [
      "/images/base-carvoeira1.jpg",
      "/images/base-carvoeira2.jpg", 
      "/images/base-carvoeira3.jpg"
    ],
    informacoesTecnicas: [
      "Acoplamento: 4x2 / 6x2",
      "Comprimento: 14600mm / 15400mm / 15900mm",
      "Chapa: 2,65mm",
      "Isolamento térmico especial",
      "Base para equipamentos frigoríficos",
      "Estrutura preparada para unidade condensadora",
      "Sistema elétrico adaptado",
      "Vedação hermética",
      "Pino rei de duas posições",
      "Caixa de cozinha grande",
      "Caixa de ferramentas",
      "Corote d'água com saboneteira",
      "Protetor de ciclista em alumínio",
      "Suporte de estepe tipo cesto para dois pneus",
      "Suspensor no 1º eixo",
      "Para lamas plásticos com lameiro",
      "Freios ABS",
      "Parte elétrica em LED"
    ],
    informacoes: [
      { chave: "Acoplamento", valor: "4x2 / 6x2" },
      { chave: "Especialidade", valor: "Base frigorífica" },
      { chave: "Isolamento", valor: "Térmico especial" },
      { chave: "Freios", valor: "ABS" },
    ],
    versoes: [
      "03 eixos juntos"
    ],
    likes: 3,
    destaque: false
  }
];

export default equipamentos;