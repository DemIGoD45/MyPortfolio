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
                <div>
                    <p className='text-2xl mb-2 md:text-5xl '>Hola, mi nombre es </p>
                    <h1 className='text-4xl md:text-7xl font-extrabold '>Demian de la Vega</h1>
                    <hr className=" ml-5 mt-4 border-b-4 rounded-md bg-transparent w-11/12 border-orange-600"></hr>
                    {/* <p className=' font-semibold text-orange-600 mt-2'>¡Y construyo sitios web increíbles!</p> */}
                    <div>
                        <p className='sm:px-14 w-4/5 text-center px-0 pt-4 ml-10 md:text-left md:p-0 md:pt-2 md:ml-0'>
                            Soy un desarrollador web FullStack. 
                            Centrado en la construcción de productos que mejorarán la vida de las personas. 
                            Me encanta aprender cosas nuevas y siempre estoy abierto en el aprendizaje de nuevas tecnologías.
                        </p>
                    </div>
                </div>
                <a href={cv} download={cv}>
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='text-xl rounded p-2 pr-4 mt-10 ml-20 mr-auto md:mx-48 flex items-center gap-2 w-64 justify-center ' 
                        style={{backgroundColor: '#01579b'}}>
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