import CardItem from "../Card_Works/CardItem";
import data from "../../data.json";
import Titles from "../Nav_Titles/Titles";
import imgHumble from "../../Images/humblefood.png";
import imgVg from "../../Images/videoGames.png";
import imgPortfolio from "../../Images/portfolio.png"

const Work = () => {
    const imgs = [imgHumble, imgVg, imgPortfolio]
    const styles = ["h-full rounded-md", "h-full rounded-md", "h-full rounded-md"]

    return (
        <div id="work" className="my-10 ">

            <Titles text={"Trabajos"} />
            <div className=" rounded-xl bg-clip-padding backdrop-filter: blur-(20px) mt-10 mx-2  pb-10 pt-0.5">
                <div className=" w-full">
                    <div className="flex flex-wrap gap-4 items-center justify-center">

                        {
                            data.works.map((el, i) => (
                                <CardItem
                                    title={el.title}
                                    description={el.description}
                                    tecnologies={el.tecnologies}
                                    image={imgs[i]}
                                    urlView={el.urlView}
                                    urlGit={el.urlGit}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;