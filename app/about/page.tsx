import { FloatingNav } from "@/components/ui/FloatingNav";
import { LinkPreview } from "@/components/ui/LinkPreview";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { techStacks } from "@/data";
import Image from "next/image";
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

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative mt-5 z-10">
        <div className="max-w-[90vw] lg:max-w-[80vw] flex flex-col items-center justify-center">
          <h2 className="tracking-widest uppercase text-xs text-center text-blue-100 max-w-80 md:max-w-full ">
            {" "}
            ABOUT ME!
          </h2>
          <TextGenerateEffect
            className="text-center sm:text-[2rem] text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] lg:w-[800px] md:w-[80%] w-[90%]"
            words="Bringing ideas to life with seamless front-end experiences"
            id={4}
          />

          <p className="text-center md:tracking-wider text-sm lg:text-[1rem] px1">
            Hi, I'm Okorie Emmanuel, a{" "}
            <span className="text-purple uppercase font-bold">
              front-end developer{" "}
            </span>
            driven by a passion for creating seamless, interactive, and visually
            captivating digital experiences. My expertise lies in crafting
            responsive and user-centered websites with{" "}
            <span className="text-gray-400 italic">
              {" "}
              HTML, CSS,{" "}
              <LinkPreview
                url="https://www.javascript.com/"
                className="hover:text-white font-bold underline"
              >
                JavaScript
              </LinkPreview>{" "}
              , and{" "}
              <LinkPreview
                url="https://www.typescriptlang.org/"
                className="hover:text-white font-bold underline"
              >
                TypeScript
              </LinkPreview>{" "}
            </span>
            , and I thrive on leveraging modern frameworks and libraries{" "}
            <span className="text-gray-400 italic">
              <LinkPreview
                url="https://react.dev/"
                className="hover:text-white font-bold underline"
              >
                React
              </LinkPreview>
              ,{" "}
              <LinkPreview
                url="https://nextjs.org/"
                className="hover:text-white font-bold underline"
              >
                Next.js
              </LinkPreview>
              , and{" "}
              <LinkPreview
                url="https://reactnative.dev/"
                className="hover:text-white font-bold underline"
              >
                React Native
              </LinkPreview>{" "}
              for mobile{" "}
            </span>
            to bring innovative ideas to life. My journey into front-end
            development is a story of curiosity and determination. As a child, I
            was always intrigued by how websites and applications could connect
            people, solve problems, and enhance everyday life. That curiosity
            sparked a deep desire to understand the “how” behind the magic. I
            began teaching myself the fundamentals of coding, diving into online
            courses, and experimenting with my first small projects. Those early
            experiences set me on a path to turn my passion into a career, and I
            haven't looked back since. Recently, I’ve started learning{" "}
            <LinkPreview
              url="https://developer.apple.com/xcode/swiftui/"
              className="hover:text-white font-bold italic text-gray-400 underline"
            >
              Swift
            </LinkPreview>{" "}
            to broaden my development skills and explore mobile app development
            for iOS.
          </p>

          <p className="text-center md:tracking-wider text-sm lg:text-[1rem] px1">
            Over the years, I’ve worked on diverse projects that have challenged
            me to grow and adapt. My journey began in late 2020{" "}
            <LinkPreview
              url="https://edu.sqi.ng/"
              className="text-purple font-bold"
            >
              @ SQI Coding College
            </LinkPreview>{" "}
            , where I spent six months learning frontend development and later
            interned as an HTML and CSS tutor. Since then, I have worked on{" "}
            <span className="text-gray-400 italic">
              fintech solutions, e-commerce websites, dashboards, and
              user-focused components in React and Next.js
            </span>
            . These projects taught me the importance of balancing creativity
            with functionality. Whether crafting sleek interfaces or debugging
            complex issues, I’ve always prioritized delivering work that creates
            meaningful and accessible experiences for users. With each project,
            I continue to refine my craft and explore new ways to make an impact
            in the tech space.
          </p>

          <p className="text-center md:tracking-wider text-sm lg:text-[1rem] px1">
            {" "}
            As my experience grew, I honed my skills in both technical and
            collaborative aspects of development. Working on projects like an
            Agency Banking platform{" "}
            <LinkPreview
              url="https://www.tm30.net/"
              className="text-purple font-bold"
            >
              @ TM30 Global Limited
            </LinkPreview>
            , where I currently work, and delivering complex{" "}
            <span className="text-gray-400 italic">fintech solutions</span>, I
            learned how important it is to strike the right balance between
            user-centered design and technical feasibility. I also had the
            opportunity to contribute{" "}
            <LinkPreview
              url="https://www.hqtecinc.com/"
              className="text-purple font-bold"
            >
              @ HQTec
            </LinkPreview>
            , where I worked on enhancing web applications with a strong focus
            on scalability and performance. My focus remains on creating
            intuitive, high-performance websites that not only meet client
            expectations but also leave a lasting impression on users.
            Collaboration with designers, back-end developers, and project
            managers has been key to ensuring that every project detail aligns
            with the vision and meets the overall goals of the team.{" "}
          </p>

          <p className="text-center md:tracking-wider text-sm lg:text-[1rem] px1">
            When I’m not at my desk coding, I stay busy exploring the
            ever-evolving world of web development. I keep up with the latest
            trends, tools, and best practices, constantly refining my craft. I
            also enjoy mentoring aspiring developers, helping them navigate
            their own journeys into tech, and sharing the lessons I’ve learned
            along the way. Outside of work, you’ll often find me sketching ideas
            for new projects, reading about UI/UX principles, or finding
            inspiration in everyday interactions with technology.
          </p>

          <p className="text-center md:tracking-wider text-sm lg:text-[1rem] px1">
            For me, every project is an opportunity to make an impact—not just
            for users but for the brands and businesses I work with. I take
            pride in delivering work that not only meets technical requirements
            but also tells a story, engages the audience, and leaves a lasting
            impression.
          </p>

          <p className="text-center md:tracking-wider text-sm lg:text-[1rem] px1">
            If you’re looking for a front-end developer who brings creativity,
            technical expertise, and a user-first approach to every project, I’d
            love to connect. Let’s work together to turn your vision into a
            reality and create something truly remarkable.
          </p>

          <div className="pt-[6rem]">
            <h1 className="heading">
              My <span className="text-purple">Stacks and Tools</span>
            </h1>
            <p className="text-center md:tracking-wider text-sm lg:text-[1rem] mx-auto md:w-[60%] sm:w-[80%] pt-2">
              Skilled in creating responsive, user-centric designs that deliver
              seamless and impactful digital user-experiences.
            </p>

            <div>
              {techStacks?.map((e, i) => {
                return (
                  <div className=" my-6 ">
                    <div className="text-center py-[2rem] font-bold text-[1.2rem]">{e?.name}</div>
                    <div className=" grid s700:grid-cols-4 s500:grid-cols-3 grid-cols-2 gap-2">
                      {e?.data?.map((item, idx) => {
                        return (
                          <div className="bg-gray-600 rounded-md ">
                            <LinkPreview
                              url={item?.url}
                              className="text-purple font-bold flex gap-2 justify-center items-center flex-col "
                            >
                              {item.name}{" "}
                              <Image
                                src={item.logo}
                                width={100}
                                height={100}
                                // quality={quality}
                                // layout={layout}
                                priority={true}
                                alt={item?.name + " image"}
                              />
                            </LinkPreview>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
