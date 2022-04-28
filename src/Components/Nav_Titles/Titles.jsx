import { motion } from "framer-motion";
const variants = {
    hidden: {
        opacity:0,
        x:-100
    },
    show:{
        opacity:1,
        x:0,
        transition:{
            duration: 0.8
        }
    }

}

const Titles = ({text}) => {
    return (
        <>
            <motion.h1 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{once:false}}
                transition={{duration:2, delay:0.5}}
                className="ml-6 text-2xl ">
                    {text}
                </motion.h1>
                <motion.hr 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    variants={variants}
                    className="border-b-4 rounded-md ml-6 bg-transparent w-1/2 border-orange-600">
                </motion.hr>
        </>
    )
}

export default Titles;