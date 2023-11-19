import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingP1 from "../pages/LandingInicio";
import LandingP2 from "../pages/LandingSobreNos";
import LandingP3 from "../pages/LandingEspecies";
import Login from "../pages/Login"
import Register from "../pages/Register";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingP1 />}/>
                <Route path="/SobreNosotros" element={<LandingP2 />}/>
                <Route path="/Especies" element={<LandingP3 />}/>
                <Route path="/IniciarSesión" element={<Login />}/>
                <Route path="/Registrarse" element={<Register />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;