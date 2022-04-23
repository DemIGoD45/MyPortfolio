import { motion } from "framer-motion"
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
const Next = () =>{

    return (
        <motion.button className="scale-150">
            <BsFillArrowDownCircleFill className="scale-150"/>
        </motion.button>
    )
}
export default Next