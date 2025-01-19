import RecentProjects from "@/components/RecentProjects";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import React from "react";

const page = () => {
  return (
    <div className="pb-10 pt-36 ">
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

      <div className="flex justify-center relative mt-5 z-10">
        <div className=" flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center sm:text-[2rem] text-[1.5rem] md:text-[2.5rem]"
            words="Explore some of my recent projects"
            id={3}
          />
        </div>
      </div>

      <div>
        <RecentProjects otherclass="mt-0" />
      </div>
    </div>
  );
};

export default page;
