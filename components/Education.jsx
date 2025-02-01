import { assets, serviceeData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
// Setion
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="Education"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo1"
      >
        Education & Certificates
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceeData.map(
          ({ icon, title, description, college, start, end, link }, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-black-900 dark:text-white">
                {title}
              </h3>
              <h1 className="text-sm text-black-900 leading-5 dark:text-white/80">
                {description}
              </h1>
              <h1 className="text-sm text-black-900 leading-5 dark:text-white/80">
                {college}
              </h1>
              <h1 className="text-sm font-weight: 700 text-black-900 leading-5 dark:text-white/80">
                {start}
              </h1>
              <h1 className="text-sm text-black-900 leading-5 dark:text-white/80">
                {end}
              </h1>

              <a href={link} className="flex items-center gap-2 text-sm mt-5">
                Read more{" "}
                <Image alt="" src={assets.right_arrow} className="w-4" />
              </a>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default Education;
