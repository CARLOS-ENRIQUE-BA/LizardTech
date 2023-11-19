import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import Title from "../atoms/Title"
import SubTitle from "../atoms/SubTitle"
import Paragraph from "../atoms/Paragraph"
import WrapperLabel from "../molecules/WraperLabel";
import Imgs from "../../assets/js/img"
import "../../assets/style/login.css";

function FormLogin() {
    return (
        <div className="padre">
            <div className="login">
                <motion.div className="information"
                    initial={{ opacity: 1, x: 400 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}>
                    <div className="title">
                        <Title msn={"LizardTech"} />
                    </div>
                    <div className="welcome">
                        <SubTitle msn={"Bienvenido"} />
                    </div>
                    <div className="text">
                        <Paragraph text={"¿Ya nos sigues en nuestras redes sociales? Si quieres estar al tanto de nuestras actualizaciones y novedades, ¡síguenos!"} />
                    </div>
                    <ul className="redes">
                        <li><Link to="https://www.facebook.com"><img src={Imgs.imgFace} /></Link></li>
                        <li><Link to="https://twitter.com"><img src={Imgs.imgTwit} /></Link></li>
                        <li><Link to="https://www.instagram.com"><img src={Imgs.imgInst} /></Link></li>
                        <li><Link to="https://www.linkedin.com"><img src={Imgs.imgLink} /></Link></li>
                    </ul>
                </motion.div>
                <motion.div className="form"
                    initial={{ opacity: 1, x: -770 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}>
                    <SubTitle msn={"Iniciar sesión"} />
                    <div className="section">
                        <form>
                            <div className="box">
                                <input className="form-input" type={"text"} placeholder={" "} />
                                <label className="form-label">Correo:</label>
                                <img src={Imgs.Email} />
                            </div>
                            <div className="box">
                                <input className="form-input" type={"password"} placeholder={" "} />
                                <label className="form-label">Contraseña:</label>
                                <img src={Imgs.Lock} />
                            </div>
                            <div className="recuperar">
                                <Link to="/Registrarse" className="links"><WrapperLabel msn="Recuperar contraseña" /></Link>
                            </div>
                            <button type="button" className="btn">Iniciar</button>
                            <div className="change">
                                <label>¿Todavía no tienes una cuenta? </label>
                                <Link to="/Registrarse" className="links"><WrapperLabel msn="Crear cuenta" /></Link>
                            </div>
                            <div className="btn-home">
                                <label>¿Quieres ir al inicio? haz click en el boton</label>
                                <Link to="/" className="regresar"><img className="arrow" src={Imgs.FlechaDerecha} /></Link>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default FormLogin;



{/* <BoxForm type={"text"} name={"nombre"} msn={"Nombre de usuario"} /> */ }