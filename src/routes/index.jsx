import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import Home from '../pages/Home';
import SobreEmpresa from '../pages/SobreEmpresa';
import Representantes from '../pages/Representantes';
import Contato from '../pages/Contato';
import Equipamentos from '../pages/Equipamentos';
import EquipamentoDetalhe from '../pages/EquipamentoDetalhe';
import ScrollToTop from '../components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';


const RouterWrapper = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path={ROUTES.home} element={<Home />} />
                <Route path={ROUTES.empresa} element={<SobreEmpresa />} />
                <Route path={ROUTES.representantes} element={<Representantes />} />
                <Route path={ROUTES.contato} element={<Contato />} />
                <Route path={ROUTES.equipamentos} element={<Equipamentos />} />
                <Route path={ROUTES.equipamentoDetalhe} element={<EquipamentoDetalhe />} />
            </Routes>
        </AnimatePresence>
    );
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <RouterWrapper />
        </BrowserRouter>
    );
};

export default AppRoutes;
