import React from "react";
import image from "../assets/about.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold flex justify-center pt-8 text-white animate-fade-in-down">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[70vh] px-4">
        <img
          src={image}
          className="max-w-xs w-full rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-12 animate-fade-in-left"
          alt="About"
        />
        <div className="text-white animate-fade-in-right">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Mukesh Chauddhary</h2>
          <p className="py-2 text-base md:text-lg max-w-xl">
            Hi, I’m a frontend web developer with a strong passion for building
            responsive and user-friendly websites using JavaScript, React,
            Tailwind CSS, HTML, and CSS. I enjoy turning ideas into clean,
            functional interfaces and constantly explore new tools and trends
            in modern web development.
          </p>
        </div>
      </div>
      {/* Tailwind custom animation classes */}
      <style>
        {`
          .animate-fade-in-down {
            animation: fadeInDown 1s ease;
          }
          .animate-fade-in-left {
            animation: fadeInLeft 1s ease;
          }
          .animate-fade-in-right {
            animation: fadeInRight 1s ease;
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-30px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(30px);}
            to { opacity: 1; transform: translateX(0);}
          }
        `}
      </style>
    </div>
  );
};

export default About;
