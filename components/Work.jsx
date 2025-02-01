import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Projects
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-5xl font-Ovo1"
      >
        {/* My latest work */}
        Check out my latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I've built various projects, from basic websites to advanced web
        applications. Here are some of the highlights.
      </motion.p>

      <section id="projects">
        <div className="space-y-12 w-full py-12  ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
            >
              <a className="block cursor-pointer" href="#">
                <Image
                  src={assets.work1}
                  alt="user"
                  className="h-44 w-full overflow-hidden object-cover object-top"
                />
              </a>
              <h3 className="mt-4 text-xl font-semibold">
                TrenHive E-commerce Website
              </h3>
              <p className="mt-2 text-sm text-muted">
                Welcome to TrendHive- an ecommerce revolution that reflects the
                aspiration of the new generation. On TrendHive, you can become
                your own fashion designer.
              </p>
              <p className="mt-1 text-xs text-muted">January 2025</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-400 rounded">
                  React
                </span>
                <span className="px-2 py-1 text-xs bg-gray-400 rounded">
                  Tailwind CSS
                </span>

                <span className="px-2 py-1 text-xs bg-gray-400 rounded">
                  JavaScript
                </span>
                <span className="px-2 py-1 text-xs bg-gray-400 rounded">
                  MongoDB
                </span>
                <span className="px-2 py-1 text-xs bg-gray-400 rounded">
                  Stripe
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://github.com/PRATIK5311/E-Commerce"
                  className="text-blue-500"
                >
                  GitHub
                </a>
                <a
                  href="https://trendhive-frontend.vercel.app"
                  className="text-blue-500"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>

            <div className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <a className="block cursor-pointer" href="#">
                <Image
                  src={assets.work2}
                  alt="user"
                  className="h-44 w-full overflow-hidden object-cover object-top"
                />
              </a>
              <h3 className="mt-4 text-xl font-semibold">
                MealMate Food Website
              </h3>
              <p className="mt-2 text-sm text-muted">
                MealMate is a smart food delivery app featuring real-time
                restaurant listings, customizable menus, and secure payments,
                enhanced with an AI help bot for personalized support. With
                location-based services and efficient cart management.
              </p>
              <p className="mt-1 text-xs text-muted">February 2025</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-400 rounded">
                  React
                </span>
                <span className="px-2 py-1 text-xs bg-gray-400 rounded">
                  JavaScript
                </span>
                <span className="px-2 py-1 text-xs bg-gray-400 rounded">
                  MongoDB
                </span>
                <span className="px-2 py-1 text-xs bg-gray-400 rounded">
                  OpenAI
                </span>
                <span className="px-2 py-1 text-xs bg-gray-400 rounded">
                  RazorPay
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <a href="https://github.com" className="text-blue-500">
                  GitHub
                </a>
                <a href="https://live-demo.com" className="text-blue-500">
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
