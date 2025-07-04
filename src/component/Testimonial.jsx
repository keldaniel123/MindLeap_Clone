import React from "react";
import { IoIosChatbubbles } from "react-icons/io";
import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "./Utility/AnimationVariants";

// testimonial Data
const testimonials = [
  {
    name: "Jane Doe",
    location: "New York, NY",
    review:
      "This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!",
    image: review1,
  },
  {
    name: "John Smith",
    location: "Los Angeles, CA",
    review:
      "I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.",
    image: review2,
  },
];

const Testimonial = () => {
  return (
    <div id="testimonial" className="bg-[#f7f8fc] py-12 px-8 pt-32">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto pb-20"
      >
        {/* Heading---Text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-3">
            What Our Client Says
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quae id excepturi, similique inventore eaque rerum error quidem
            temporibus voluptate?
          </p>
        </div>

        {/* Client Card Section */}
        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8">
          {testimonials.map((testimonials, index) => (
            <div
              key={index}
              className="relative bg-white rounded p-6 flex-1 shadow-lg"
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <IoIosChatbubbles className="size-12 text-primary" />
              </div>
              <div className="flex flex-col space-y-3 mb-4">
                <p className="text-lg mb-2">{testimonials.review}</p>
                <div className="flex gap-1 items-center">
                  <img
                    src={testimonials.image}
                    alt="Reviewer-Img"
                    className="size-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonials.name}</p>
                    <p className="text-gray-600">{testimonials.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
