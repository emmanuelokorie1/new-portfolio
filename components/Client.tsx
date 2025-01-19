import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

function Client() {
  return (
    <div className="" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">satistfied clients</span>
      </h1>
      <div className="flex flex-col items-center py-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Client;
