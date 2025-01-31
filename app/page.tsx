'use client'
import React, { useState, useEffect } from "react";

const ProfileCard = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const date = new Date();
      setCurrentTime(date.toUTCString());
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden">
      <div className="bg-white p-8 rounded-xl shadow-xl w-80 sm:w-96 lg:w-[400px] xl:w-[450px] text-center hover:shadow-2xl transition-shadow duration-300">
        <img
          src="/ankara.jpg" 
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
          data-testid="profilePicture"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2" data-testid="fullName">
          Adeniyi Marvellous Emmanuel
        </h2>
        <p className="text-lg text-gray-600 mb-4" data-testid="jobTitle">
          Front-End Developer
        </p>
        <p className="text-sm text-gray-600 mb-4" data-testid="currentLocation">
          Ekiti State, Nigeria
        </p>
        <p className="text-md text-black mb-4 hover:text-blue-500 cursor-pointer transition-all duration-200" data-testid="emailAddress">
          <a href="mailto:adeniyimarv@gmail.com">adeniyimarv@gmail.com</a>
        </p>
        <p className="text-sm text-gray-600 mb-6" data-testid="shortBio">
          Graduate in Computer Engineering from EKSU. A committed problem solver, tech enthusiast, and team player, passionate about delivering innovative solutions. Focused on improving the digital landscape through collaboration and innovation.
        </p>
        <div className="flex justify-center gap-6 mb-6" data-testid="socialLinks">
          <a
            href="https://www.linkedin.com/in/adeniyimarvellous/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-all duration-200"
          >
            <img
              src="/linkedin.png" 
              alt="LinkedIn"
              className="w-8 h-8 object-cover"
            />
          </a>
          <a
            href="https://github.com/adeniyimarv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-all duration-200"
          >
            <img
              src="/github.png" 
              alt="GitHub"
              className="w-8 h-8 object-cover"
            />
          </a>
          <a
            href="https://twitter.com/adeniyimarv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-all duration-200"
          >
            <img
              src="/twitter.png" 
              alt="Twitter"
              className="w-8 h-8 object-cover"
            />
          </a>
        </div>
        <p className="text-sm text-gray-500" data-testid="currentTimeUTC">
          {currentTime}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
