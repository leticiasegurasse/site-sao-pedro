const contatos = {

  'SP': [
    {
      nome: 'Jacinto Ferreira',
      cidade: 'Baixada Santista',
      regiao: 'DDDs 11 (exceto grande SP), 13, 14, 15, 16, 18 e 19',
      telefone: '(11) 99932-9584',
      endereco: 'Baixada Santista - São Paulo/SP',
      email: 'jacintonevesferreira@gmail.com'
    },
    {
      nome: 'Paulo Henrique',
      cidade: 'São Paulo',
      regiao: 'Região metropolitana de São Paulo',
      telefone: '(11) 99136-7457',
      telefone2: '(11) 98896-6161',
      contato2: 'Ricardo Vergani',
      endereco: 'Região metropolitana - São Paulo/SP',
      email: 'ph@paulistanatruck.com.br',
      email2: 'ricardo@paulistanatruck.com.br'
    },
    {
      nome: 'Rodrigo Menis',
      cidade: 'Sul de Minas e Vale do Paraíba',
      telefone: '(19) 99330-8949',
      endereco: 'Sul de Minas e Vale do Paraíba - São Paulo/SP',
      email: 'rodrigo@hellotur.com.br'
    },
    {
      nome: 'Sérgio Barbosa (Prego)',
      cidade: 'DDD 17',
      telefone: '(17) 99772-8370',
      endereco: 'DDD 17 - São Paulo/SP',
      email: 'comercial@rodoprego.com.br'
    }
  ],

  'RJ': [
    {
      nome: 'Felipe Paschoalin',
      cidade: 'Rio de Janeiro',
      regiao: 'Grande Rio',
      telefone: '(32) 98405-0345',
      endereco: 'Grande Rio - Rio de Janeiro/RJ',
      email: 'saopedrorj@saopedro.ind.br'
    },
    {
      nome: 'Francisco José',
      cidade: 'Região dos Lagos',
      telefone: '(21) 98098-1010',
      endereco: 'Região dos Lagos - Rio de Janeiro/RJ',
      email: 'francisco@dutruck.com.br'
    },
    {
      nome: 'Leonel Oliveira',
      cidade: 'Sul Fluminense',
      regiao: 'Sul Fluminense, Zona da Mata, Leste de Minas, Região Serrana RJ, Norte de Minas e Campos das Vertentes',
      telefone: '(32) 99804-6706',
      endereco: 'Sul Fluminense - Rio de Janeiro/RJ',
      email: 'vendas.fabrica@saopedro.ind.br'
    }
  ],

  'ES': [
    {
      nome: 'Gilvan Borges',
      cidade: 'Vitória',
      regiao: 'Grande Vitória e região sul do Espírito Santo',
      telefone: '(28) 99900-4650',
      endereco: 'Grande Vitória - Espírito Santo/ES',
      email: 'gilvanpessini@hotmail.com'
    },
    {
      nome: 'Josiléia Cândido da Silva Representações',
      cidade: 'Região DDD 27 e 28',
      telefone: '(28) 99900-4850',
      contato: 'Gilvan',
      endereco: 'Região DDD 27 e 28 - Espírito Santo/ES',
      email: 'gilvanpessini@hotmail.com'
    },
    {
      nome: 'Roberto Moura',
      cidade: 'Norte do Espírito Santo',
      regiao: 'Região norte do Espírito Santo',
      telefone: '(27) 99906-0678',
      endereco: 'Norte do Espírito Santo/ES',
      email: 'robertowollf@gmail.com'
    }
  ],

  'MG': [
    {
      nome: 'Leonel Oliveira',
      cidade: 'Zona da Mata',
      regiao: 'Sul Fluminense, Zona da Mata, Leste de Minas, Região Serrana RJ, Norte de Minas e Campos das Vertentes',
      telefone: '(32) 99804-6706',
      endereco: 'Zona da Mata - Minas Gerais/MG',
      email: 'vendas.fabrica@saopedro.ind.br'
    },
    {
      nome: 'Rodrigo Menis',
      cidade: 'Sul de Minas',
      regiao: 'Sul de Minas e Vale do Paraíba',
      telefone: '(19) 99330-8949',
      endereco: 'Sul de Minas - Minas Gerais/MG',
      email: 'rodrigo@hellotur.com.br'
    },
    {
      nome: 'Vanusa Normandia',
      cidade: 'Belo Horizonte',
      regiao: 'Região DDD 31',
      telefone: '(31) 98359-9010',
      telefone2: '(32) 99806-1422',
      telefone3: '(32) 99998-1408',
      telefoneFixo: '(31) 3911-7007',
      contato2: 'Fábio Pereira',
      contato3: 'Rosane',
      endereco: 'Belo Horizonte - Minas Gerais/MG',
      email: 'saopedrobh@saopedro.ind.br',
      email2: 'saopedrobh.sec@saopedro.ind.br'
    }
  ],

  'BA': [
    {
      nome: 'Marcos Lopes',
      cidade: 'Feira de Santana',
      regiao: 'Feira de Santana e região',
      telefone: '(75) 99919-8106',
      telefone2: '(75) 99231-6703',
      telefone3: '(75) 98175-5005',
      telefone4: '(75) 99851-3539',
      contato2: 'Marina',
      contato3: 'Daiane',
      contato4: 'Fabrício',
      endereco: 'Feira de Santana - Bahia/BA',
      email: 'alfatruck.financeiro@gmail.com',
      email2: 'marcoslopes.saopedro@gmail.com'
    },
    {
      nome: 'Stanislau Maciel',
      cidade: 'Salvador',
      regiao: 'Grande Salvador',
      telefone: '(71) 99992-1144',
      telefone2: '(71) 99971-6799',
      contato2: 'Iuri Maciel',
      endereco: 'Grande Salvador - Bahia/BA',
      email: 'estan.grimaldi@gmail.com',
      email2: 'vendas.4a@gmail.com'
    }
  ],

  // Estados com representante único mas múltiplos contatos
  'GO': {
    nome: 'Deolindo Júnior',
    cidade: 'Goiânia',
    regiao: 'Estados de GO, MA, TO e Distrito Federal',
    telefone: '(62) 99919-1478',
    telefone2: '(62) 99942-1695',
    contato2: 'Paulo Augusto',
    endereco: 'Goiânia - Goiás/GO',
    email: 'junior@mahnic.com.br',
    email2: 'joaopedro@mahnic.com.br'
  },

  'DF': {
    nome: 'Deolindo Júnior',
    cidade: 'Brasília',
    regiao: 'Estados de GO, MA, TO e Distrito Federal',
    telefone: '(62) 99919-1478',
    telefone2: '(62) 99942-1695',
    contato2: 'Paulo Augusto',
    endereco: 'Brasília - Distrito Federal/DF',
    email: 'junior@mahnic.com.br',
    email2: 'joaopedro@mahnic.com.br'
  },

  'AM': {
    nome: 'Túlio Veronese',
    cidade: 'Manaus',
    regiao: 'Estados do AM, AP, PA e RR',
    telefone: '(91) 99182-2706',
    telefone2: '(91) 99123-6762',
    contato2: 'Eduardo Oliveira',
    endereco: 'Manaus - Amazonas/AM',
    email: 'tulio@amazoniaimplementos.com.br',
    email2: 'eduardo@amazoniaimplementos.com.br'
  },

  'RR': {
    nome: 'Túlio Veronese',
    cidade: 'Boa Vista',
    regiao: 'Estados do AM, AP, PA e RR',
    telefone: '(91) 99182-2706',
    telefone2: '(91) 99123-6762',
    contato2: 'Eduardo Oliveira',
    endereco: 'Boa Vista - Roraima/RR',
    email: 'tulio@amazoniaimplementos.com.br',
    email2: 'eduardo@amazoniaimplementos.com.br'
  },

  'PA': {
    nome: 'Túlio Veronese',
    cidade: 'Belém',
    regiao: 'Estados do AM, AP, PA e RR',
    telefone: '(91) 99182-2706',
    telefone2: '(91) 99123-6762',
    contato2: 'Eduardo Oliveira',
    endereco: 'Belém - Pará/PA',
    email: 'tulio@amazoniaimplementos.com.br',
    email2: 'eduardo@amazoniaimplementos.com.br'
  },

  'AP': {
    nome: 'Túlio Veronese',
    cidade: 'Macapá',
    regiao: 'Estados do AM, AP, PA e RR',
    telefone: '(91) 99182-2706',
    telefone2: '(91) 99123-6762',
    contato2: 'Eduardo Oliveira',
    endereco: 'Macapá - Amapá/AP',
    email: 'tulio@amazoniaimplementos.com.br',
    email2: 'eduardo@amazoniaimplementos.com.br'
  },

  'TO': {
    nome: 'Deolindo Júnior',
    cidade: 'Palmas',
    regiao: 'Estados de GO, MA, TO e Distrito Federal',
    telefone: '(62) 99919-1478',
    telefone2: '(62) 99942-1695',
    contato2: 'Paulo Augusto',
    endereco: 'Palmas - Tocantins/TO',
    email: 'junior@mahnic.com.br',
    email2: 'joaopedro@mahnic.com.br'
  },

  'MA': {
    nome: 'Deolindo Júnior',
    cidade: 'São Luís',
    regiao: 'Estados de GO, MA, TO e Distrito Federal',
    telefone: '(62) 99919-1478',
    telefone2: '(62) 99942-1695',
    contato2: 'Paulo Augusto',
    endereco: 'São Luís - Maranhão/MA',
    email: 'junior@mahnic.com.br',
    email2: 'joaopedro@mahnic.com.br'
  },

  'CE': {
    nome: 'Georgiana',
    cidade: 'Fortaleza',
    regiao: 'Estados do CE e RN',
    telefone: '(85) 98899-9149',
    telefone2: '(85) 98899-9147',
    telefone3: '(85) 99207-8899',
    contato2: 'Leonardo',
    contato3: 'Roberto',
    endereco: 'Fortaleza - Ceará/CE',
    email: 'contato@saopedro.ind.br' // Não havia email específico
  },

  'RN': {
    nome: 'Georgiana',
    cidade: 'Natal',
    regiao: 'Estados do CE e RN',
    telefone: '(85) 98899-9149',
    telefone2: '(85) 98899-9147',
    telefone3: '(85) 99207-8899',
    contato2: 'Leonardo',
    contato3: 'Roberto',
    endereco: 'Natal - Rio Grande do Norte/RN',
    email: 'contato@saopedro.ind.br' // Não havia email específico
  },

  'PB': {
    nome: 'Lisandro Ribeiro',
    cidade: 'João Pessoa',
    regiao: 'Estados do AL, PB, PE e SE',
    telefone: '(81) 98690-8580',
    endereco: 'João Pessoa - Paraíba/PB',
    email: 'cglconecta.vendas@gmail.com'
  },

  'PE': {
    nome: 'Lisandro Ribeiro',
    cidade: 'Recife',
    regiao: 'Estados do AL, PB, PE e SE',
    telefone: '(81) 98690-8580',
    endereco: 'Recife - Pernambuco/PE',
    email: 'cglconecta.vendas@gmail.com'
  },

  'AL': {
    nome: 'Lisandro Ribeiro',
    cidade: 'Maceió',
    regiao: 'Estados do AL, PB, PE e SE',
    telefone: '(81) 98690-8580',
    endereco: 'Maceió - Alagoas/AL',
    email: 'cglconecta.vendas@gmail.com'
  },

  'SE': {
    nome: 'Lisandro Ribeiro',
    cidade: 'Aracaju',
    regiao: 'Estados do AL, PB, PE e SE',
    telefone: '(81) 98690-8580',
    endereco: 'Aracaju - Sergipe/SE',
    email: 'cglconecta.vendas@gmail.com'
  },

  // Estados atendidos diretamente pela São Pedro
  'RS': {
    nome: 'São Pedro Implementos Rodoviários',
    cidade: 'Porto Alegre',
    telefone: '(32) 3696-4444',
    endereco: 'Porto Alegre - Rio Grande do Sul/RS',
    email: 'vendas@saopedro.ind.br'
  },

  'SC': {
    nome: 'São Pedro Implementos Rodoviários',
    cidade: 'Florianópolis',
    telefone: '(32) 3696-4444',
    endereco: 'Florianópolis - Santa Catarina/SC',
    email: 'vendas@saopedro.ind.br'
  },

  'PR': {
    nome: 'São Pedro Implementos Rodoviários',
    cidade: 'Curitiba',
    telefone: '(32) 3696-4444',
    endereco: 'Curitiba - Paraná/PR',
    email: 'vendas@saopedro.ind.br'
  },

  'MT': {
    nome: 'São Pedro Implementos Rodoviários',
    cidade: 'Cuiabá',
    telefone: '(32) 3696-4444',
    endereco: 'Cuiabá - Mato Grosso/MT',
    email: 'vendas@saopedro.ind.br'
  },

  'MS': {
    nome: 'São Pedro Implementos Rodoviários',
    cidade: 'Campo Grande',
    telefone: '(32) 3696-4444',
    endereco: 'Campo Grande - Mato Grosso do Sul/MS',
    email: 'vendas@saopedro.ind.br'
  },

  'RO': {
    nome: 'São Pedro Implementos Rodoviários',
    cidade: 'Porto Velho',
    telefone: '(32) 3696-4444',
    endereco: 'Porto Velho - Rondônia/RO',
    email: 'vendas@saopedro.ind.br'
  },

  'AC': {
    nome: 'São Pedro Implementos Rodoviários',
    cidade: 'Rio Branco',
    telefone: '(32) 3696-4444',
    endereco: 'Rio Branco - Acre/AC',
    email: 'vendas@saopedro.ind.br'
  },

  'PI': {
    nome: 'São Pedro Implementos Rodoviários',
    cidade: 'Teresina',
    telefone: '(32) 3696-4444',
    endereco: 'Teresina - Piauí/PI',
    email: 'vendas@saopedro.ind.br'
  }
};

export default contatos;
