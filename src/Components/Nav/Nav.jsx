import { motion } from "framer-motion";
import * as React from "react";
import { Link } from "react-scroll";

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
    href: "inicio",
  },
];

const Nav = () => {
  return (
    <motion.ul
      className="flex flex-row-reverse gap-4 py-3 pr-8 list-none bg-bgblue bg-gradient-to-l from-orange-600"
      variants={variants}
    >
      {headerItems.map((item, i) => (
        <li
          key={i}
          className="border-b-2 border-transparent cursor-pointer hover:border-slate-900 "
        >
          <Link
            activeClass="active"
            to={item.href}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            href={item.href}
          >
            <span className="text-slate-900 font-semibold text-xl">{headerItems.length - i}. </span>
            {item.name}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default Nav;