import { motion } from "framer-motion";
const BtnContact = ({text, icon, url}) => {
    
    return (
        <a href={url} target="_blank">
            <motion.button 
                whileHover={{scale: [1, 1.2, 1.1]}}
                className="flex gap-2 items-center rounded border-cyan-700 bg-slate-800 border-2 p-2 w-full">
                {icon}
                {text}
            </motion.button>
        </a>
    )
}

export default BtnContact;