import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import Home from '../pages/Home';
import SobreEmpresa from '../pages/SobreEmpresa';
import Representantes from '../pages/Representantes';
import Contato from '../pages/Contato';
import Equipamentos from '../pages/Equipamentos';
import EquipamentoDetalhe from '../pages/EquipamentoDetalhe';
import ScrollToTop from '../components/ScrollToTop';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path={ROUTES.home} element={<Home />} />
                <Route path={ROUTES.empresa} element={<SobreEmpresa />} />
                <Route path={ROUTES.representantes} element={<Representantes />} />
                <Route path={ROUTES.contato} element={<Contato />} />
                <Route path={ROUTES.equipamentos} element={<Equipamentos />} />
                <Route path={ROUTES.equipamentoDetalhe} element={<EquipamentoDetalhe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;