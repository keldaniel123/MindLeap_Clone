import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";

const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 container mx-auto">
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-bold font-secondary text-heroBg pb-6">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto md:px-0 px-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quos
            atque odit, neque tempora, dicta debitis omnis laudantium dolorem
            quibusdam obcaecati. Labore facilis blanditiis dicta corrupti quidem
            repellat hic possimus.
          </p>
        </div>

        {/* Service-Categories */}
        <div className="py-12 md:w-4/5 mx-auto px-8">
          <Tabs>
            <div>
              <TabList className="flex flex-wrap justify-between items-center md:gap-8 md:justify-center gap-4 ">
                <Tab>Couple Counseling</Tab>
                <Tab>Parenting Skills</Tab>
                <Tab>Feeling Stuck</Tab>
                <Tab>Self-Confidence</Tab>
              </TabList>
            </div>

            {/* Couple counselling */}
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                {/* Left Hand Side */}
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Couple Counselling
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut atque numquam beatae error repellat quia autem quis
                    neque natus saepe quaerat vitae sequi accusamus repellendus,
                    sunt possimus maiores officia nihil.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Knowing About Your Health </li>
                    <li>Help Your Know About Your Immune System</li>
                  </ul>
                </div>
                {/* Right Hand Side */}
                <div className="md:w-1/2">
                  <img
                    src={serviceImg1}
                    alt="ServiceImg1"
                    className="w-full h-full rounded-2xl object-cover "
                  />
                </div>
              </div>
            </TabPanel>

            {/* Parenting Skills */}
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                {/* Left Hand Side */}
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Parenting Skills
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut atque numquam beatae error repellat quia autem quis
                    neque natus saepe quaerat vitae sequi accusamus repellendus,
                    sunt possimus maiores officia nihil.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Knowing About Your Health </li>
                    <li>Help Your Know About Your Immune System</li>
                  </ul>
                </div>
                {/* Right Hand Side */}
                <div className="md:w-1/2">
                  <img
                    src={serviceImg2}
                    alt="ServiceImg2"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            {/* Feeling Stuck*/}
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                {/* Left Hand Side */}
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Feeling Stuck
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut atque numquam beatae error repellat quia autem quis
                    neque natus saepe quaerat vitae sequi accusamus repellendus,
                    sunt possimus maiores officia nihil.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4jk">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Knowing About Your Health </li>
                    <li>Help Your Know About Your Immune System</li>
                  </ul>
                </div>
                {/* Right Hand Side */}
                <div className="md:w-1/2">
                  <img
                    src={serviceImg3}
                    alt="ServiceImg3"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            {/* Self Confidence */}
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                {/* Left Hand Side */}
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Self Confidence
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut atque numquam beatae error repellat quia autem quis
                    neque natus saepe quaerat vitae sequi accusamus repellendus,
                    sunt possimus maiores officia nihil.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4jk">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Knowing About Your Health </li>
                    <li>Help Your Know About Your Immune System</li>
                  </ul>
                </div>
                {/* Right Hand Side */}
                <div className="md:w-1/2">
                  <img
                    src={serviceImg4}
                    alt="ServiceImg4"
                    className="w-full rounded-2xl object-cover h-full"
                  />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
