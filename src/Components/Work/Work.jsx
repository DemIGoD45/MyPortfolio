import Card from "../Card_Works/Card";
import data from "../../data.json";
import Titles from "../Nav_Titles/Titles";
import imgHumble from "../../Images/humblefood.png";
import imgVg from "../../Images/videoGames.png";
import imgPortfolio from "../../Images/portfolio.png"

const Work = () =>{
    const imgs = [imgHumble, imgVg, imgPortfolio]
    const styles = ["h-full rounded-md","h-full rounded-md", "h-full rounded-md"]

    return (
        <div id="work" className="my-10 ">
    
            <Titles text={"Trabajos"}/>
            <div className="bg-slate-800 bg-opacity-30 rounded-xl bg-clip-padding backdrop-filter: blur-(20px) mt-1 mx-2 shadow-black shadow-2xl pb-10 pt-0.5">
                {
                    data.works.map((el,i) => (
                        <Card 
                            title={el.title}
                            description={el.description}
                            tecnologies={el.tecnologies}
                            image={imgs[i]}
                            urlView={el.urlView}
                            urlGit={el.urlGit}
                            styleImg={"my-10 "}
                        />
                    ))
                }
            </div>
        </div>
    )  
}

export default Work;