import Titles from "../Nav_Titles/Titles";
import {motion} from "framer-motion";
import data from "../../data.json";

const reqSvgs = require.context("../../Images", true, /.svg$/);
const allSvgs = reqSvgs.keys();
//console.log(img);
let img = data.skills ; 
const cb = () => {
    for (let i = 0; i < allSvgs.length; i++) {
        
        data.skills.forEach(el => {
            if(el.src === allSvgs[i]){
                el.src = reqSvgs(allSvgs[i]) 
            }
        })
        // data.skills[i].src = reqSvgs(allSvgs[i]);
        // img.push(reqSvgs(allSvgs[i]));    
    }
    img = data.skills
}
cb();

const Skills = () => {
    return (
        <>
            <Titles text={"Tecnologias"}/>
            <div id="skills" className="my-7 mx-7 pt-7 ">
                    <ul className="flex flex-wrap items-center justify-center gap-6">
                        {
                            data.skills.map((el, ind) => {
                                return (
                                    <li className="ml-5 w-20 h-40">
                                            <div className="h-32">
                                                <motion.img 
                                                    whileHover={{
                                                        scale: [1, 1.3, 1.15],
                                                        zIndex: 1,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    className="cursor-pointer" src={el.src} alt="logo" />
                                            </div>
                                            <div className="rounded bg-slate-800 text-center text-sm">
                                                <p>{el.name}</p>
                                            </div>    
                                    </li>
                                )
                            })
                        }
                    </ul>
                
            </div>
        </>
    )
}

export default Skills;