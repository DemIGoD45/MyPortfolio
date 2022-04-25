import { motion } from "framer-motion";
import Card from "../Card_Works/Card";
import data from "../../data.json";
console.log(data);
const Work = () =>{
    return (
        <div id="work" className="my-10 ">
    
            <motion.h1 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{once:false}}
             transition={{duration:4}}
             className="ml-6 text-2xl ">
                 Trabajos
            </motion.h1>
            <motion.hr 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{duration:1}}
                className="border-b-4 rounded-md ml-6 bg-transparent w-1/2 border-orange-600">
            </motion.hr>
            {
                data.works.map(el => (
                    <Card 
                        title={el.title}
                        description={el.description}
                        tecnologies={el.tecnologies}
                        image={el.image}
                    />
                ))
            }
        </div>
    )
}

export default Work;