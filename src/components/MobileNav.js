import React, { useState } from "react";
// import icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

// import link
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";

// menu variants
const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transistion: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="text-primary xl:hidden">
      {/* NAV OPEN BUTTON */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3x1 cursor-pointer"
      >
        <CgMenuRight />
      </div>
      {/* MENU */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2x1 w-full absolute top-0 right-0
                      max-w-xs h-screen z-20"
      >
        {/* ICONS */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4x1 absolute z-30 left-4 top-14 text-primary
                        cursor-pointer"
        >
          <IoMdClose />
        </div>
        {/* MENU LIST */}
        <ul
          className="h-full flex flex-col justify-center items-center gap-y-8
         text-primary font-primary font-bold text-3x1"
        >
          <li>
            <Link to={"/Home"}>Home</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/Portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
