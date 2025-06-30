import React, { useState } from "react";
import { FaEnvelope, FaGlobe, FaPhoneAlt, FaUser } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "./Utility/AnimationVariants";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      country,
      message,
    };

    if (!data) {
      alert("Please fill all fields");
      return;
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");
  };
  return (
    <div
      className="bg-heroBg flex items-center text-white justify-center py-28 px-8"
      id="contact"
    >
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto"
      >
        <div className="md:w-4/5 mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 item-center md:gap-12">
          {/* left side */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-4 font-secondary md:text-center lg:text-start sm:flex text-center">
              Make an appointment
            </h2>

            {/* Appointment list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaUser className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum quia mollitia officiis, consectetur dolor tempora?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Expert Therapist</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum quia mollitia officiis, consectetur dolor tempora?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaPhoneAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Hight Quality Core</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum quia mollitia officiis, consectetur dolor tempora?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaGlobe className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Trusted Clinic</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum quia mollitia officiis, consectetur dolor tempora?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-8 p-8 bg-white text-heroBg shadow-xl rounded-md mt-10 lg:m-0">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Book Appointment
            </h3>
            <form action="#" onSubmit={handleSubmit} className="space-y-8">
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>

              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="Telephone"
                  placeholder="Contact Number"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />

                <input
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>

              <textarea
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Write your message..."
                className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="bg-white text-black p-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Thank you, {name}, submitting your querry</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
