import img from '../../Images/Me.jpg'
import './Home.css'
import { motion } from "framer-motion"
import {BsFillCloudArrowDownFill} from 'react-icons/bs'
import Next from '../ButtonNext/Next';
import { Link } from "react-scroll";
import cv from "../../Cv/CV Demian de la vega.pdf"
const Home = () => {
    const variants = {
        visible: { 
            opacity: 1,
            y:-10,
            transition: {
                duration: 1
            }
         },
        hidden: { 
            opacity: 0,
            y:-120
        },
      }
    return (
        <div id='home' className='flex flex-col items-center md:items-start md:flex-row mt-16'>
            <motion.img src={img} initial={{x:0}} animate={{x:130}} transition={{duration:1}} alt="me" className='mr-44 imgCircular border-transparent md:h-1/2' />
            <motion.div initial={'hidden'} animate={'visible'} variants={variants} className="text-center md:text-left  md:my-36">
                <p className='text-2xl mb-2 md:text-5xl '>Hola, mi nombre es </p>
                <h1 className='text-4xl md:text-7xl font-extrabold '>Demian de la Vega</h1>
                <p className=' font-semibold text-orange-600 mt-2'>¡Y construyo sitios web increíbles!</p>
                <p className='px-14 w-4/5 text-center pt-4 ml-16 md:text-left md:p-0 md:pt-2 md:ml-0'>
                    Soy un desarrollador web FullStack. 
                    Centrado en la construcción de productos que mejorarán la vida de las personas. 
                    Me encanta aprender cosas nuevas y siempre estoy abierto en el aprendizaje de nuevas tecnologías.
                </p>
                
                <a href={cv} download={cv}>
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='text-xl rounded-full bg-orange-600 p-2 pr-4 mt-10 mx-48 flex items-center gap-2 w-64 justify-center '>
                            <BsFillCloudArrowDownFill className=' scale-150 w-10  '/>
                            <p>Descargar CV</p>
                    </motion.button>
                </a>
            </motion.div>
            {/* <Link 
                to='work'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}    
            >
                <Next style={"mr-14 h-8 mt-60 cursor-pointer"}/>
            </Link> */}
        </div>
    )
}

export default Home;