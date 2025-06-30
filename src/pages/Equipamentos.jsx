import MainLayout from '../layouts/MainLayout';
import equipamentos from '../mocks/equipamentosMock';
import { Link } from 'react-router-dom';
import ContatoSection from '../components/ContatoSection';
import Container from '../components/Container';

// Função para converter nome em slug
const createSlug = (nome) => {
  return nome
    .toLowerCase()
    .normalize('NFD') // Remove acentos
    .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais exceto hífens e espaços
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens múltiplos
    .replace(/^-|-$/g, ''); // Remove hífens do início e fim
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

const Equipamentos = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Melhores equipamentos</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6 rounded" />
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Onde o melhor para sua empresa está!
            </p>
          </div>
        </Container>
      </div>
      
      <section className="w-full py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {equipamentos.map((equip) => {
              const slug = createSlug(equip.nome); // Criar slug do nome
              
              return (
                <div
                  key={equip.nome} // Usar nome como key ao invés de índice
                  className="group bg-gray-100 overflow-hidden flex flex-col transition-all duration-500 ease-in-out mx-auto relative shadow-md hover:shadow-lg"
                >
                  <Link to={`/equipamentos/${slug}`} className="flex flex-col h-full"> {/* Usar slug */}
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
        </Container>
      </section>

      <ContatoSection />
    </MainLayout>
  );
};

export default Equipamentos;