import Home from "../Home/Home";
import DrawerAppBar from "../Nav/NavBar";

const Header = () => {
    return (
        <header>
            {/* <Nav/> */}
            <DrawerAppBar/>
            <Home/>
        </header>       
    )
}

export default Header;