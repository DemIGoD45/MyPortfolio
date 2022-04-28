import { motion } from "framer-motion"
import BtnCard from "../ButtonsCard/BtnCard";
import {BsGithub} from "react-icons/bs"
import {CgWebsite} from "react-icons/cg"

const variants = {
    hidden: {
        opacity: 0
    },
    show:{
        opacity:1,
        transition:{
            duration: 0.2,
            staggerChildren: 0.5
        }
    }
}
const item = {
    hidden: { 
        y:-100,
        opacity: 0
    },
    show: { 
        y:0,
        opacity: 1,
    }
}

const Card = ({title, description, tecnologies, image, urlView, urlGit}) => {
    return (
        <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0}}
            viewport={{ once: true }}
            transition={{duration:0.5}}
            className="bg-slate-900 w-5/6 mx-32 mt-10 flex"
        >
            
            <div className=" border- h-4/5 mt-11">
                <img src={image} alt="imgProject" className=""/>
            </div>
            <div className="ml-2">
                <h1 className="text-3xl text-center mt-2">{title}</h1>
                <motion.ul initial="hidden" whileInView="show" variants={variants} viewport={{ once: true }} className="flex gap-4 border-t-2">
                    {
                        tecnologies.map((el,id) =>  <motion.li variants={item}  className=" my-4 px-2 bg-orange-600 rounded">{el}</motion.li>)
                    }
                </motion.ul>
                <p className="mr-6 mt-2 text-sm">{description}</p>
                <div className=" flex justify-center  mt-4">
                    <BtnCard text={"Sitio Web"} icon = {<CgWebsite className="mr-2 mt-1"/>} url={urlView}/>
                    <BtnCard text={"GitHub"} icon = {<BsGithub className="mr-2 mt-1"/>} url={urlGit}/>
                </div>

            </div>
        </motion.div>
    )
}

export default Card;