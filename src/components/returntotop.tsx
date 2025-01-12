"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ReturnToTop () {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mainElement = document.querySelector("main");
    
    if (!mainElement) return;

    const handleScroll = () => {
      if (mainElement.scrollTop > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    mainElement.addEventListener("scroll", handleScroll);

    return () => mainElement.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mainElement = document.querySelector("main");
    mainElement?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="to-top"
      className={`fixed bottom-10 right-10 bg-blue-700 z-10 transition-all duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 invisible"
      }`}
    >
      <a
        href="#"
        className="flex items-center justify-center w-10 h-10 invert"
        tabIndex={-1}
        onClick={handleClick}
      >
        <Image
          src="/up.svg"
          width={100}
          height={100}
          className="inline w-8"
          alt="Return To Top"
        />
      </a>
    </div>
  );
};