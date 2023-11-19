import NavbarLanding from "../components/organisms/NavbarLanding";
import FooterLanding from "../components/organisms/FooterLanding";
import ImgInformation from "../components/organisms/ImgInformatio";
import InformationCards from "../components/organisms/InformationCards";
import Title from "../components/atoms/Title";

function LandingP2() {
    return (
        <>
            <NavbarLanding />
            <ImgInformation />
            <div className="text-about">
                <Title msn={"Sobre Nosotros"} />
            </div>
            <InformationCards/>
            <FooterLanding />
        </>
    );
}

export default LandingP2;