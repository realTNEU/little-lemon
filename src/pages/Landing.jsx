import React, { useState } from "react";
import { motion } from "framer-motion";
import Menu from "../components/Menu";

const Landing = () => {
  const [showMenu, setShowMenu] = useState(false);

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const handleExploreMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <section className="bg-[#F8ED8C] min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#89AC46] mb-4"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          Welcome to Little Lemon
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-[#222222] mb-6 max-w-2xl"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the taste of freshness and tradition. Enjoy our healthy and
          delicious dishes made with care.
        </motion.p>

        <motion.div
          className="w-full max-w-md mb-6 h-64 bg-cover bg-center rounded-lg shadow-lg"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            backgroundImage:
              "url('https://www.foodandwine.com/thmb/Sj_GFG_ln6ls7HGIoSiqb67-YRw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Lemon-Stuffed-Grilled-Branzino-FT-RECIPE0324-6d0a73fe0ad743309605df37066a9191.jpg')",
          }}
        ></motion.div>

        <motion.button
          onClick={handleExploreMenu}
          className="bg-[#89AC46] hover:bg-[#76A035] text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Menu 🍽️
        </motion.button>
      </section>

      {showMenu && <Menu />}
    </>
  );
};

export default Landing;
