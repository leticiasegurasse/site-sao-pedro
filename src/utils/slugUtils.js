// src/utils/slugUtils.js

/**
 * Converte um nome/texto em slug URL-friendly
 * @param {string} texto - Texto a ser convertido
 * @returns {string} - Slug formatado
 */
export const createSlug = (texto) => {
    if (!texto) return '';

    return texto
        .toLowerCase()
        .normalize('NFD') // Remove acentos
        .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos
        .replace(/[^\w\s-]/g, '') // Remove caracteres especiais exceto hífens e espaços
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .replace(/-+/g, '-') // Remove hífens múltiplos
        .replace(/^-|-$/g, ''); // Remove hífens do início e fim
};

/**
 * Converte um slug de volta para um formato mais legível
 * @param {string} slug - Slug a ser convertido
 * @returns {string} - Texto formatado
 */
export const slugToText = (slug) => {
    if (!slug) return '';

    return slug
        .replace(/-/g, ' ') // Substitui hífens por espaços
        .replace(/\b\w/g, l => l.toUpperCase()); // Capitaliza primeira letra de cada palavra
};

/**
 * Encontra um equipamento pelo slug
 * @param {Array} equipamentos - Array de equipamentos
 * @param {string} slug - Slug a ser procurado
 * @returns {Object|null} - Equipamento encontrado ou null
 */
export const findEquipmentBySlug = (equipamentos, slug) => {
    if (!equipamentos || !slug) return null;

    return equipamentos.find(equipamento =>
        createSlug(equipamento.nome) === slug
    );
};

/**
 * Gera URL para equipamento
 * @param {string} nomeEquipamento - Nome do equipamento
 * @returns {string} - URL formatada
 */
export const getEquipmentUrl = (nomeEquipamento) => {
    const slug = createSlug(nomeEquipamento);
    return `/equipamentos/${slug}`;
};

/**
 * Exemplos de uso:
 * 
 * createSlug("Base Carvoeira") → "base-carvoeira"
 * createSlug("VPC – Veículo porta container (buggy)") → "vpc-veiculo-porta-container-buggy"
 * createSlug("Semirreboque Carga Seca") → "semirreboque-carga-seca"
 * 
 * slugToText("base-carvoeira") → "Base Carvoeira"
 * 
 * getEquipmentUrl("Base Carvoeira") → "/equipamentos/base-carvoeira"
 * 
 * findEquipmentBySlug(equipamentos, "base-carvoeira") → { nome: "Base Carvoeira", ... }
 */

// Exportação default para facilitar import
export default {
    createSlug,
    slugToText,
    findEquipmentBySlug,
    getEquipmentUrl
};