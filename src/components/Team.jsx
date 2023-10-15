import React from "react";
import { teamData } from "../data";
import Socials from "./branches/Socials";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Team = () => {
  const { subtitle, title, cards } = teamData;
  return (
    <section id="TEAM" className="mb-5 py-5">
      <div className="pt-9 rounded-lg bg-black mx-auto flex flex-col items-center justify-center">
        <p className="text-xl font-secondery tracking-wider text-center uppercase pt-8 text-gray-400">
          {subtitle}
        </p>
        <h3 className="text-4xl font-bold py-3 text-center capitalize text-white">
          {title}
        </h3>
        <div className="grid lg:grid-cols-3 md:px-20 px-7 gap-x-5  grid-cols-1 justify-center items-center mt-12">
          {cards.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col justify-center  px-4 py-6 my-14 rounded-[1%] text-center shadow-sm shadow-gray-800 bg-black "
              >
                <LazyLoadImage
                  src={item.img}
                  alt={`Team_Member_${idx}`}
                  className="self-center bg-black py-1 px-2 w-[170px] h-[175px] -mt-28 bg-center bg-cover rounded-[5%]"
                />
                <div className=" my-4">
                  <p className="text-2xl font-bold leading-snug text-white">
                    {item.author}
                  </p>
                  <p className=" text-gray-600">{item.work}</p>
                  <p className="py-2 text-white">{item.des}</p>
                </div>
                <div className="flex items-center justify-center pt-2  bg-gray-100 p-2 rounded-[6%] overflow-hidden">
                  <Socials />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Team;
