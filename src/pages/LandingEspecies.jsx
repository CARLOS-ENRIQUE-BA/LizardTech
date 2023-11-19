import NavbarLanding from "../components/organisms/NavbarLanding";
import FooterLanding from "../components/organisms/FooterLanding";
import ImgInformation from "../components/organisms/ImgInformatio";
import Carrusel from "../components/organisms/Carrusel";
import Title from "../components/atoms/Title";
import "../assets/style/especies.css"

function LandingP3() {
    return (
        <>
            <NavbarLanding />
            <ImgInformation />
            <div className="a">
                <Title msn={"Especies"} />
            </div>
            <Carrusel />
            <FooterLanding />
        </>
    );
}

export default LandingP3;