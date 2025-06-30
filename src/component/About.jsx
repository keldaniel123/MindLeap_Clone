import React, { useState } from "react";
import thumbnailImg from "../assets/video-thumbnail.webp";
import { FaPlay } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "./Utility/AnimationVariants";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };
  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-16">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto "
      >
        {/* Video Page */}
        <div className="py-12 px-8 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* left---side */}
          <div className="md:w-1/2 w-full relative">
            {!isVideoPlaying ? (
              <div>
                <img
                  src={thumbnailImg}
                  alt="thumbnail"
                  className="w-full md:h-[446px] md: h-full rounded-lg object-cover"
                />

                {/* button */}
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-4 rounded-full shadow-lg cursor-pointer"
                >
                  <FaPlay className="size-12 text-cyan-50" />
                </button>
              </div>
            ) : null}
          </div>
          {/* Right---side */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl capitalize font-secondary font-bold mb-4  leading-snug">
              Individual Consult And Therapy
            </h2>
            <p className="text-lg mb-12 md:pr-8">
              We lower our stress levels, we get to know our pain, we connect
              better, we improve our focus, and we're kinder to ourselves. let
              us walk you through the basics in our new mindful guide on how to
              meditate
            </p>
            <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90">
              <a href="#About" className="flex gap-2 items-center">
                <span>Get Started</span>
                <FaArrowCircleRight />
              </a>
            </button>
          </div>
        </div>

        {isVideoPlaying && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="relative">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/3AspRtDNxIY?si=-PgNeNHzg48UQHkz"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <button
                onClick={handleCloseVideo}
                className="absolute top-2 right-2 text-white text-2xl cursor-pointer bg-red-500 rounded-full px-3 py-1"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default About;
