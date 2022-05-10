import { motion } from "framer-motion";
import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import MobileBtn from "./MobileBtn";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    zIndex: 50,
    display: "flex",
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    zIndex: 0,
    display: "none",
  },
};

const headerItems = [
  {
    name: "Contacto",
    href: "contact",
  },
  {
    name: "Tecnologias",
    href: "skills",
  },
  {
    name: "Trabajos",
    href: "work",
  },
  {
    name: "Inicio",
    href: "home",
  },
];

const Nav = () => {

  const [handleShow, setHandleShow] = React.useState(false);
  const [active, setActive] = React.useState("#");

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 10) {
        setHandleShow(true);
      } else setHandleShow(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

      //console.log(document.querySelectorAll("a")[0].);
  return (
    <>
      <motion.nav
        className= {`hidden md:flex md:flex-row-reverse fixed w-full gap-4 md:gap-2 py-1 md:py-1 pr-8 list-none bg-gradient-to-l from-orange-600 to-transparent ${handleShow ? "shadow-lg shadow-orange-900 bg-orange-600 z-50" : ""} `}
        variants={variants}
      >
        {headerItems.map((item, i) => (
            <Link
              key={i}
              className= {` w-32 pl-2 py-2 cursor-pointer  hover:text-black hover:font-bold ${active === item.href ? "text-black font-bold": ""}`}
              activeClass="active"
              onClick={() => setActive(item.href)}
              to={item.href}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href={item.href}
              
            >
              <span className={ `text-cyan-700 font-bold text-xl`} >{headerItems.length - i}. </span>
              {item.name}
            </Link>
        ))}
      </motion.nav>
      
      <MobileBtn />
      
    </>
  );
};

export default Nav;