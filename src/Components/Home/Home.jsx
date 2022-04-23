import img from '../../Images/Me.jpg'
import './Home.css'
import { motion } from "framer-motion"
import {BsFillCloudArrowDownFill} from 'react-icons/bs'
import Next from '../ButtonNext/Next'
const Home = () => {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
    return (
        <div id='home' className='flex '>
            <motion.img src={img} animate={{x:100}} transition={{duration:1}} alt="me" className='imgTriangular h-1/2' />
            <div className=" mx-36 my-36">
                <p className='text-5xl mb-2'>Hola, mi nombre es </p>
                <h1 className='text-6xl font-extrabold '>Demian de la Vega</h1>
                <p className='font-semibold text-orange-600 mt-2'>¡Y construyo sitios web increíbles!</p>
                <p className='pt-4'>
                    Soy un desarrollador web FullStack. 
                    Centrado en la construcción de productos que mejorarán la vida de las personas. 
                    Me encanta aprender cosas nuevas y siempre estoy abierto en el aprendizaje de nuevas tecnologías.
                </p>
                
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='text-xl rounded-full border-transparent bg-orange-600 p-2 pr-4 mt-6 mx-48 flex gap-2 '>
                        <BsFillCloudArrowDownFill className='my-1 scale-150 w-10 '/>
                        <p>Descargar CV</p>
                </motion.button>
            </div>
            <Next/>
        </div>
    )
}

export default Home;