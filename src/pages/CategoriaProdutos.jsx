import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { useParams, useNavigate, Link } from 'react-router-dom';
import equipamentos from '../mocks/equipamentosMock';
import categorias from '../mocks/categoriasMock';
import ContatoSection from '../components/ContatoSection';
import Container from '../components/Container';
import OptimizedImage from '../components/OptimizedImage';
import { motion } from 'framer-motion';

// Função para converter nome em slug
const createSlug = (nome) => {
  return nome
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

// Filtrar equipamentos da categoria
const getEquipamentosByCategoria = (categoria) => {
  return equipamentos.filter(equip => equip.categoria === categoria);
};

const ArrowRight = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className={props.className || ''}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const CategoriaProdutos = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();
  
  // Encontrar a categoria
  const categoriaInfo = categorias.find(cat => cat.slug === categoria);
  
  // Filtrar equipamentos da categoria
  const equipamentosCategoria = getEquipamentosByCategoria(categoria);

  if (!categoriaInfo) {
    return (
      <MainLayout>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Container className="py-16">
            <div className="flex flex-col items-center justify-center min-h-[40vh]">
              <h2 className="text-2xl font-bold mb-4">Categoria não encontrada</h2>
              <p className="text-gray-600 mb-4">
                A categoria solicitada não foi encontrada.
              </p>
              <button onClick={() => navigate('/equipamentos')} className="text-red-600 underline">
                Voltar para Equipamentos
              </button>
            </div>
          </Container>
        </motion.div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Breadcrumb */}
        <div className="bg-[#e30613] p-4 sm:p-5 flex items-center gap-2 text-white text-base sm:text-lg font-light">
          <Container fullWidth>
            <Link to="/equipamentos">
              <span>Equipamentos</span>
            </Link>
            <span className="mx-1">/</span>
            <span className="font-bold italic">{categoriaInfo.nome}</span>
          </Container>
        </div>

        {/* Header da Categoria */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 sm:py-20">
          <Container>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{categoriaInfo.nome}</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6 rounded" />
              <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                {categoriaInfo.descricao}
              </p>
            </div>
          </Container>
        </div>

        {/* Lista de Equipamentos */}
        <section className="w-full py-12 sm:py-16">
          <Container>
            {equipamentosCategoria.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
                {equipamentosCategoria.map((equip) => {
                  const slug = createSlug(equip.nome);

                  return (
                    <div
                      key={equip.nome}
                      className="group bg-gray-100 overflow-hidden flex flex-col transition-all duration-500 ease-in-out mx-auto relative shadow-md hover:shadow-lg"
                    >
                      <Link to={`/equipamentos/produto/${slug}`} className="flex flex-col h-full">
                        <div className="relative flex flex-col items-center">
                          <OptimizedImage
                            src={equip.imagens[0].replace('/public', '')}
                            alt={equip.nome}
                            className="w-full h-60 sm:h-72 lg:h-80 object-cover transition-all duration-500 group-hover:h-56 sm:group-hover:h-64 lg:group-hover:h-67"
                          />
                          <div className="absolute left-0 bottom-0 h-1 bg-red-600 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 w-full"></div>
                        </div>
                        <div className="pt-4 px-4 flex-1 flex flex-col justify-end relative z-10">
                          <span className="text-xl sm:text-2xl font-extrabold mb-2">{equip.nome}</span>
                        </div>
                        <div className="overflow-hidden max-h-0 group-hover:max-h-[50px] transition-all duration-500 ease-in-out">
                          <span className="block pb-4 px-4 text-gray-500 italic flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                            Visualizar
                            <ArrowRight className="w-5 h-5" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-4">Em Breve</h3>
                <p className="text-gray-600 mb-8">
                  Os produtos desta linha estarão disponíveis em breve. Entre em contato conosco para mais informações.
                </p>
                <Link 
                  to="/equipamentos" 
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Voltar para Equipamentos
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}
          </Container>
        </section>

        <ContatoSection />
      </motion.div>
    </MainLayout>
  );
};

export default CategoriaProdutos;