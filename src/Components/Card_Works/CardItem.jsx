import * as React from 'react';
import { motion } from "framer-motion"
import BtnCard from "../ButtonsCard/BtnCard";
import { BsGithub } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Divider } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const variants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.2,
            staggerChildren: 0.5
        }
    }
}
const item = {
    hidden: {
        y: -100,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
    }
}

const CardItem = ({ title, description, tecnologies, image, styleImg, urlView, urlGit }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        // <motion.div
        //     // initial={{ x: -100 }}
        //     // whileInView={{ x: -8}}
        //     // viewport={{ once: true }}
        //     // transition={{duration:0.5}}
        //     className="bg-slate-900 shadow-black shadow-lg h-11/12 mx-2 md:w-11/12 md:mx-20 mt-10 px-2 flex flex-col md:flex-row md:justify-items-stretch"
        // >

        //     <div className=" h-4/5 mt-1 md:w-96 ">
        //         <img src={image} alt="imgProject" className={styleImg}/>
        //     </div>
        //     <div className="ml-2 md:w-full">
        //         <h1 className="text-3xl text-center mt-2">{title}</h1>
        //         <motion.ul initial="hidden" whileInView="show" variants={variants} viewport={{ once: true }} className="md:flex md:gap-4 gap-2 border-t-2 border-t-cyan-700 grid grid-cols-3">
        //             {
        //                 tecnologies.map((el,id) =>  <motion.li variants={item}  className=" my-4 px-2 bg-orange-600 rounded mt-2 p-1">{el}</motion.li>)
        //             }
        //         </motion.ul>
        //         <p className="mr-6 mt-2 text-sm text-center">{description}</p>
        //         <div className=" flex justify-center  mt-4">
        //             <BtnCard text={"Sitio Web"} icon = {<CgWebsite className="mr-2 mt-1"/>} url={urlView}/>
        //             <BtnCard text={"GitHub"} icon = {<BsGithub className="mr-2 mt-1"/>} url={urlGit}/>
        //         </div>

        //     </div>
        // </motion.div>
        <Card sx={{ maxWidth: 345, backgroundColor: 'rgb(0 0 0 / 20%)' }}
            className="drop-shadow-md">
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Paella dish"
            />
            <CardContent className="h-48"  >
                <Typography variant="body2" className="text-white" >
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="Ir a sitio web" color="primary" href={urlView} target="_blank">
                    <LaunchIcon />
                </IconButton>
                <IconButton aria-label="share" color="primary" href={urlGit} target="_blank">
                    <GitHubIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon color='primary' />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph className='text-white'><b>Tecnologías:</b></Typography>
                    {/* <Divider className='border-b-4 rounded-md bg-transparent w-1/2 border-orange-600'/> */}
                    <hr className=" border-b-4 rounded-md bg-transparent w-1/2 border-orange-600"></hr>
                    
                    <motion.ul initial="hidden" whileInView="show" variants={variants} viewport={{ once: true }} className="md:flex md:flex-wrap gap-2 grid grid-cols-3">
                    {
                        tecnologies.map((el,id) =>  <motion.li variants={item}  className=" my-4 px-2 bg-orange-600 rounded mt-2 p-1 text-white">{el}</motion.li>)
                    }
                    </motion.ul>
                    
                </CardContent>
            </Collapse>

        </Card>
    )
}

export default CardItem;