import React from "react";
import { heroData } from "../data";
import Button from "./branches/Button";
import Socials from "./branches/Socials";
import { motion } from "framer-motion";
import { Item } from "../Variants";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Home = () => {
  const { image, subTitle, title, btnText, btnIcon } = heroData;
  return (
    <section className="min-h-[100vh] relative pt-48 mb-6 " id="HOME">
      <motion.div
        variants={Item("itemB")}
        initial="hidden"
        whileInView={"show"}
        className="container h-full w-full mx-auto flex flex-col items-center justify-center "
      >
        <div className="flex justify-center items-center w-full md:mt-4">
          <LazyLoadImage
            src={image}
            alt="hero_image"
            className="mt-4 h-[160px] w-[190px] object-contain  rounded-sm shadow-2xl"
          />
          <h2 className="md:p-6 p-3 text-4xl text-center border-b-4">
            {subTitle}
            <p className="text-base text-gray-600 font-secondery">
              ٍSocial Manger
            </p>
          </h2>
        </div>
        <div className="py-4 text-center">
          {" "}
          <h1 className="text-8xl">{title}</h1>
        </div>
        <div className="mb-2">
          <Button btnText={btnText} btnIcon={btnIcon} />
        </div>
        <Socials />
      </motion.div>
    </section>
  );
};

export default Home;