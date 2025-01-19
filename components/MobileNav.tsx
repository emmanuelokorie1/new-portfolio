import { navItems } from "@/data";
import Link from "next/link";
import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { useNavStore } from "@/lib/store";
import { useRouter } from "next/navigation";

const MobileNav = () => {
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

  const { isMobileNavOpen, closeMobileNav } = useNavStore();

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
      closeMobileNav(); // Optionally close mobile nav after navigation
    };

  return (
    <div>
      {isMobileNavOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-screen fixed bg-white dark:bg-black top-0 left-0 z-[6000] p-6 space-y-4 overflow-hidden"
        >
          {/* Close Button */}
          <div
            className="absolute top-6 right-6 pb-[4rem] cursor-pointer"
            onClick={closeMobileNav}
          >
            <RiCloseLine size={30} />
          </div>

          <div className="flex flex-col items-center pt-[8rem] justify-center space-y-10">
            {navItems.map((navItem, idx) => (
              <Link
                key={idx}
                href={navItem.link}
                onClick={(e) => handleNavigation(e, navItem.link)}
                className="text-black dark:text-white text-lg font-semibold hover:text-blue-500"
                // onClick={closeMobileNav} // Close menu on item click
              >
                {navItem.name}
              </Link>
            ))}
            {/* <div className="text-black dark:text-white text-lg font-semibold border-t pt-4">
              
            </div> */}

            <div>
              <MagicButton
                title="Download CV"
                handleClick={handleDownloadClick}
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNav;
