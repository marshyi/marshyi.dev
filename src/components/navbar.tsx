"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="flex items-center justify-center w-screen fixed top-0 left-0 h-32 sm:landscape:h-20 md:h-24 bg-black z-10 animate-[fadeIn_2s_ease_forwards]">
      <div className="flex flex-row flex-wrap items-center justify-center h-full w-full md:w-10/12 lg:w-7/12 md:justify-between">
        <h1 className="font-mono text-xl sm:pt-5 md:pt-0"><Link href="#about" tabIndex={1}>marshyi.dev</Link></h1>
        <nav>
          <ul className="flex space-x-4 font-mono text-sm font-bold lowercase">
            <li>
              <Link
                href="#about"
                tabIndex={2}
                className={clsx('py-1 px-3 hover:text-black hover:bg-stone-50', { 'bg-blue-700': activeSection === 'about' },)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                tabIndex={3}
                className={clsx('py-1 px-3 hover:text-black hover:bg-stone-50', { 'bg-blue-700': activeSection === 'projects' },)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                tabIndex={4}
                className={clsx('py-1 px-3 hover:text-black hover:bg-stone-50', { 'bg-blue-700': activeSection === 'skills' },)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                tabIndex={5}
                className={clsx('py-1 px-3 hover:text-black hover:bg-stone-50', { 'bg-blue-700': activeSection === 'contact' },)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}