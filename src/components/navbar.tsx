"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="flex flex-row flex-wrap items-center justify-around w-screen fixed top-0 left-0 h-20 bg-black z-10 animate-[fadeIn_2s_ease_forwards]">
      <h1 className="font-mono text-xl"><Link href="/" tabIndex={1} className="hover:bg-blue-700">marshyi.dev</Link></h1>
      <nav>
        <ul className="flex space-x-4 font-mono text-sm font-bold lowercase">
          <li className={activeSection === 'about' ? 'bg-blue-700' : 'hover:bg-blue-700'}><Link href="#about" tabIndex={2}>About</Link></li>
          <li className={activeSection === 'projects' ? 'bg-blue-700' : 'hover:bg-blue-700'}><Link href="#projects" tabIndex={3}>Projects</Link></li>
          <li className={activeSection === 'skills' ? 'bg-blue-700' : 'hover:bg-blue-700'}><Link href="#skills" tabIndex={4}>Skills</Link></li>
          <li className={activeSection === 'contact' ? 'bg-blue-700' : 'hover:bg-blue-700'}><Link href="#contact" tabIndex={5}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}