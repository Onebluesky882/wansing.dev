"use client";
import { FaGithubAlt } from "react-icons/fa";

import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram } from "react-icons/fa";
const Message = () => {
  alert("wansing05@gmail.com");
};

export const SectionOne = () => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-900/50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 z-10 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/IMG_2137.JPG"
              alt="Profile"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Wansing Dev
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Full-Stack Developer & Problem Solver
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Building scalable web applications with modern technologies.
            Specializing in React, NestJS, and cloud solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href={`/resume.pdf`}
            download
            type="file"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            📥 Download CV
          </a>
          <a href="#projects">
            <button
              id="#1"
              className="px-8 py-4 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              View Projects
            </button>
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            target="blank"
            href="https://github.com/Onebluesky882"
            className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <div className="text-2xl">
              {" "}
              <FaGithubAlt size={45} className="hover:animate-bounce" />
            </div>
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              Message();
            }}
            className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <div className="text-2xl">
              <HiOutlineMail size={45} className="hover:animate-bounce" />
            </div>
          </a>
          <a
            href="https://t.me/wansing88"
            className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
          >
            <div className="text-2xl">
              <FaTelegram size={45} className="hover:animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
