// Função para converter nome em slug
export const createSlug = (nome) => {
  return nome
    .toLowerCase()
    .normalize('NFD') // Remove acentos
    .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais exceto hífens e espaços
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens múltiplos
    .replace(/^-|-$/g, ''); // Remove hífens do início e fim
};

// Função para converter slug de volta para texto legível
export const slugToText = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Função para encontrar equipamento por slug
export const findEquipmentBySlug = (equipamentos, slug) => {
  return equipamentos.find(equip => createSlug(equip.nome) === slug);
};

// Função para encontrar categoria por slug
export const findCategoryBySlug = (categorias, slug) => {
  return categorias.find(cat => cat.slug === slug);
};

// Função para obter equipamentos de uma categoria
export const getEquipmentsByCategory = (equipamentos, categorySlug, categoriaMapeamento) => {
  const nomesProdutos = categoriaMapeamento[categorySlug] || [];
  return equipamentos.filter(equip => nomesProdutos.includes(equip.nome));
};