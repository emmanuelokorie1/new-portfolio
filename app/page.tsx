"use client";
import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experince from "@/components/Experince";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="block md:hidden">
          <MobileNav />
        </div>
        <Hero />
        <Grid />
        <RecentProjects count={4} titleShow={true} />
        <div className="mb-[6rem]">
          <Link
            href={"/projects"}
            className="p-[3px] relative flex justify-center mt-3"
          >
            {/* <div className="absolute inset-0 bg-[#161a31] rounded-lg" /> */}
            <div className="px-8 w-fit py-3 text-center bg-white rounded-[6px]  relative group transition duration-200 hover:text-white text-[#161a31] font-bold hover:bg-purple">
              See other projects
            </div>
          </Link>
        </div>
        <Client />
        <Experince />
        <Approach />
      </div>
    </main>
  );
}
