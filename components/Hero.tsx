import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { email, linkedin, name } from "@/data";

function Hero() {
  return (
    <div className="pb-20 pt-36" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="purple"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative s500:mt-20 mt-5 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="tracking-widest uppercase text-xs text-center text-blue-100 max-w-80 md:max-w-full ">
            {" "}
            Dynamic Frontend Innovation for Modern Applications
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concept into Seamless User Experiences"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, i'm {name}, a Web and Mobile frontend developer based in Lagos,
            Nigeria.
          </p>

          <div className="s500:flex items-center gap-[1rem] justify-center s500:mt-[3rem] mt-[2rem]">
            <div>
              <a href={`mailto:${email}`} className="p-[3px] relative">
                {/* <div className="absolute inset-0 bg-[#161a31] rounded-lg" /> */}
                <div className="px-8 py-3 text-center bg-white rounded-[6px]  relative group transition duration-200 hover:text-white-100 text-[#161a31] font-bold hover:bg-transparent">
                  Contact Me
                </div>
              </a>
            </div>

            <div>
              <a href={`http://${linkedin}`}  target="_blank" rel="noopener noreferrer">
                <MagicButton
                  title="Connect Via LinkedIn"
                  // icon={<FaLocationArrow />}
                  // position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
