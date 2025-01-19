"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { name } from "@/data";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import { useNavStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true); // Default to visible

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true); // Always show when near the top
      } else {
        if (direction < 0) {
          setVisible(true); // Show when scrolling up
        } else {
          setVisible(false); // Hide when scrolling down
        }
      }
    }
  });

  const handleDownloadClick = () => {
    // Get the file path of your PDF
    const filePath = "/cv.pdf";
    // Create an anchor element
    const anchor = document.createElement("a");
    // Set the href attribute to the file path
    anchor.href = filePath;
    // Set the download attribute to the desired file name
    anchor.download = "Okorie_Emmanuel_CV.pdf";
    // Simulate a click event on the anchor
    anchor.click();
  };

  const toggleMobileNav = useNavStore((state) => state.toggleMobileNav);

  const router = useRouter();

  if (!router) {
    return null; // Prevent rendering until router is available
  }

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex s1200:w-[60%] s1000:w-[70%] s800:w-[80%] w-[90%] fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-lg dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2 px-4 items-center justify-between space-x-4",
          className
        )}
      >
        <Link
          href="/#home"
          onClick={(e) => handleNavigation(e, "/#home")}
          className="flex justify-center items-center gap-2 cursor-pointer"
        >
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src="/proavatar.jpeg"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-bold md:text-[1rem] text-[.8rem] ">{name}</div>
        </Link>

        <div className="flex gap-4">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              onClick={(e) => handleNavigation(e, navItem.link)}
              className={cn(
                "relative dark:text-neutral-50 font-bold items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block md:hidden">{navItem.icon}</span>
              <span className="hidden md:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <div
          onClick={handleDownloadClick}
          className="border hidden md:block cursor-pointer text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
        >
          <span>Download CV</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </div>

        <div
          className="block md:hidden cursor-pointer text-white-100"
          onClick={toggleMobileNav}
        >
          <RiMenu4Line size={30} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
