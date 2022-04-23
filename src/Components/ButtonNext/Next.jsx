import { motion } from "framer-motion"
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

const Next = ({style, next}) =>{

    return (
        <motion.div 
            animate={{y:[0 ,50, 0]}}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1.3 }}
            className={style} onClick={next} >
            <BsFillArrowDownCircleFill className="scale-150"/>
        </motion.div>
    )
}
export default Next