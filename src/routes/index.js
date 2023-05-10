import { fragment } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import homepage from ".pages/homepage";
import Login from "./pages/Login/Loin";
import cadastro from "./pages/cadastro/cadastro";
import formulario from "/pages/Questionario"

const Private = ({ Item}) => {
    const signed = false;

    return signed > 0 ? <item />: <signin/>;

}

const routeApp = () => {
    return(
        <BrowserRouter>
            <fragment>
                <Routes>
                    <Route exact path="/questionario"   element={<Private Item={formulario} />} />
                    <Route path="/" element={<Login/>} />
                    <Route exact path="/signup" element={<Login/>} />
                    <Route path="*" element={<cadastro/>} />
                </Routes>
            </fragment>
        </BrowserRouter>
);
};

export default RoutesApp;
