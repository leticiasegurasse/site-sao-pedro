import MainLayout from '../layouts/MainLayout';
import equipamentos from '../mocks/equipamentosMock';
import { Link } from 'react-router-dom';
import ContatoSection from '../components/ContatoSection'

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
      <section className="bg-[#e30613] text-white flex flex-col items-center justify-center min-h-[60vh] text-center w-full">
        <h1 className="text-5xl md:text-7xl font-bold m-0">
          Melhores equipamentos
        </h1>
        <p className="text-xl md:text-2xl mt-8 font-normal">
          Onde o melhor para sua empresa está!
        </p>
      </section>
      <section className="w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {equipamentos.map((equip, idx) => (
            <div
              key={idx}
              className="group bg-gray-100 overflow-hidden flex flex-col transition-all duration-500 ease-in-out mx-auto relative mb-8"
            >
              <Link to={`/equipamentos/${idx}`}
                className="flex flex-col h-full">
                <div className="relative flex flex-col items-center">
                  <img
                    src={equip.imagens[0].replace('/public', '')}
                    alt={equip.nome}
                    className="w-full h-80 object-cover transition-all duration-500 group-hover:h-67"
                  />
                  <div className="absolute left-0 bottom-0 h-1 bg-red-600 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 w-full"></div>
                </div>
                <div className="pt-4 px-4 flex-1 flex flex-col justify-end relative z-10">
                  <span className="text-2xl font-extrabold mb-2">{equip.nome}</span>
                </div>
                <div className="overflow-hidden max-h-0 group-hover:max-h-[50px] transition-all duration-500 ease-in-out">
                  <span className="block pb-4 px-4 text-gray-500 italic flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                    Visualizar
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <ContatoSection />
    </MainLayout>
  );
};

export default Equipamentos; 