import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "./Utility/AnimationVariants";

const WorkingStep = () => {
  return (
    <div className="relative bg-cover bg-center py-12 bg-working-Img">
      <div className="absolute inset-0 bg-heroBg bg-opacity-85"></div>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="relative container mx-auto px-4 py-20"
      >
        <div className="text-white text-center mb-20">
          <h2 className="text-4xl font-bold font-secondary mb-4">
            How It Works
          </h2>
          <p className="text-lg md:w-1/2 w-full mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eaque
            nam fugit quidem sunt? Placeat qui natus quibusdam tenetur!
          </p>
        </div>

        {/* Cards Production */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {/* Card Form 1 */}
          <div className="relative bg-white text-center rounded-lg p-6 mb-5 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-lg font-medium mt-8">Fill a Form</h3>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae fugiat nemo qui voluptatum molestias deleniti quis.
              Vel repellendus dolore amet?
            </p>
          </div>
          {/* Card Form 2 */}
          <div className="relative bg-white text-center rounded-lg p-6 mb-5 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-lg font-medium mt-8">Fill a Form</h3>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae fugiat nemo qui voluptatum molestias deleniti quis.
              Vel repellendus dolore amet?
            </p>
          </div>
          {/* Card Form 3 */}
          <div className="relative bg-white text-center rounded-lg p-6 mb-5 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-lg font-medium mt-8">Fill a Form</h3>
            <p my-2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae fugiat nemo qui voluptatum molestias deleniti quis.
              Vel repellendus dolore amet?
            </p>
          </div>
          {/* Card Form 4 */}
          <div className="relative bg-white text-center rounded-lg p-6 mb-5 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="text-lg font-medium mt-8">Fill a Form</h3>
            <p my-2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae fugiat nemo qui voluptatum molestias deleniti quis.
              Vel repellendus dolore amet?
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkingStep;
