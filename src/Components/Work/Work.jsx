import Card from "../Card_Works/Card";
import data from "../../data.json";
import Titles from "../Nav_Titles/Titles";
console.log(data);
const Work = () =>{
    return (
        <div id="work" className="my-10 ">
    
            <Titles text={"Trabajos"}/>
            {
                data.works.map(el => (
                    <Card 
                        title={el.title}
                        description={el.description}
                        tecnologies={el.tecnologies}
                        image={el.image}
                        urlView={el.urlView}
                        urlGit={el.urlGit}
                    />
                ))
            }
        </div>
    )
}

export default Work;