import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-scroll";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import TerminalIcon from '@mui/icons-material/Terminal';

const drawerWidth = 240;
const navItems = [
    {
        name: "Inicio",
        href: "home",
        icon: (<HomeIcon color='primary'/>)
    },
    {
        name: "Trabajos",
        href: "work",
        icon: (<WorkIcon color='primary'/>)

    },
    {
        name: "Tecnologias",
        href: "skills",
        icon: (<TerminalIcon color='primary'/>)

    },
    {
        name: "Contacto",
        href: "contact",
        icon: (<ContactPhoneIcon color='primary'/>)

    },
];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100vh'}}>
            <Typography color={'primary'} variant="h6" sx={{ my: 1, fontWeight:'bold' }}>
                MENU
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, i) => (
                    <Link
                        key={i}
                        activeClass="active"
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        href={item.href}
                    >
                        <ListItem disablePadding>
                            <ListItemButton  sx={{ textAlign: 'center'}}>
                                {/* <ListItemText  >
                                </ListItemText> */}
                                <div className='flex gap-2'>
                                    <div className='flex-initial'>
                                        {item.icon}
                                    </div>
                                    <b className='mt-1'>{item.name}</b>
                                </div>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <AppBar component="nav" style={{ backgroundColor: "#01579b" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, i) => (
                            <Link
                                key={i}
                                activeClass="active"
                                to={item.href}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                href={item.href}
                            >
                                <Button sx={{ color: '#fff' }}>
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;