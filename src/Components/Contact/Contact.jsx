import Titles from "../Nav_Titles/Titles";
import BtnContact from "./BtnContact";
import {BsLinkedin, BsGithub, BsWhatsapp} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
const Contact = () => {
    return (
        <div>
            <Titles text={"Contacto"}/>
            <div id="contact" className="flex items-center gap-6 my-4 md:flex-row md:gap-10 md:my-12 justify-center">
                <div className="flex flex-col text-center gap-2 md:flex-row md:gap-10">
                    <BtnContact text = {"LinkedIn"} icon = {<BsLinkedin/>} url = {"https://www.linkedin.com/in/demian-de-la-vega/"}/>
                    <BtnContact text={"GitHub"} icon={<BsGithub/>} url = {"https://github.com/DemIGoD45"}/>
                </div>
                <div className="flex flex-col text-center gap-2 md:flex-row md:gap-10">
                    <BtnContact text={"WhatsApp"} icon={<BsWhatsapp/>} url = {"https://api.whatsapp.com/send?phone=+5492664792393"}/>
                    <BtnContact text={"Gmail"} icon={<SiGmail/>} url = {"mailto:demijobsfs@gmail.com"}/>
                </div>
                

            </div>
        </div>
    )
}

export default Contact;