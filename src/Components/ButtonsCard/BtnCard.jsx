import { motion } from "framer-motion"
const BtnCard = ({url, text, icon}) => {
    return (
        <a href={url} target="_blank">
            <motion.button
                className="border-cyan-700 border-2 my-4 mx-4 p-2 flex rounded hover:bg-cyan-700 "
            >
                {icon}
                {text}
            </motion.button>
        </a>
    )
}

export default BtnCard;