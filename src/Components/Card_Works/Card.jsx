import { motion } from "framer-motion"

const Card = ({title, description, tecnologies, image, urlView, urlGit}) => {
    return (
        <motion.div className="bg-slate-900 w-4/5 mx-32 mt-10 flex">
            <div className="p-2">
                <img src={image} alt="imgProject" className=""/>
            </div>
            <div className="">
                <h1 className="text-2xl text-center">{title}</h1>
                <ul className="flex gap-4">
                    {
                        tecnologies.map(el =>  <li><div className=" my-4 p-2 bg-orange-600">{el}</div></li>)
                    }
                </ul>
                <p className="mr-6">{description}</p>
                <motion.button>
                    Sitio Web
                </motion.button>
                <motion.button>
                    Github
                </motion.button>

            </div>
        </motion.div>
    )
}

export default Card;