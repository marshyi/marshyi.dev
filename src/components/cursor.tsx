"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const timelineRef = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMove = (e: MouseEvent) => {
      const {pageX: x, pageY: y } = e;

      if (!isCursorVisible) {
        gsap.to(cursor, { duration: 0.2, opacity: 1 });
        setIsCursorVisible(true);
      }

      if (Math.abs(lastPositionRef.current.x - x) > 1 || Math.abs(lastPositionRef.current.y - y) > 1) {
        lastPositionRef.current = { x, y };
        gsap.to(cursor, { duration: 0.1, x: x - 5, y: y - 7 });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (e.target instanceof Element && !e.target.closest("a")) {
        timelineRef.current.clear()
          .to(cursor, { duration: 0.2, scale: 3 })
          .to(cursor, { duration: 0.2, scale: 0.5 })
          .to(cursor, { duration: 0.2, scale: 1 })
          .play();
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      if (e.target instanceof HTMLAnchorElement) {
        gsap.to(cursor, { duration: 0.3, scale: 4 });
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.target instanceof HTMLAnchorElement) {
        gsap.to(cursor, { duration: 0.3, scale: 1 });
      }
    };

    const handleLinkClick = (e: MouseEvent) => {
      if (e.target instanceof HTMLAnchorElement) {
        timelineRef.current.clear()
          .to(cursor, { duration: 0.2, scale: 7 })
          .to(cursor, { duration: 0.2, scale: 2.5 })
          .to(cursor, { duration: 0.2, scale: 4 })
          .play();
      }
    };

    document.body.addEventListener("mousemove", handleMove);
    document.body.addEventListener("click", handleClick);
    document.body.addEventListener("mouseenter", handleMouseEnter, true);
    document.body.addEventListener("mouseleave", handleMouseLeave, true);
    document.body.addEventListener("click", handleLinkClick, true);

    return () => {
      document.body.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("click", handleClick);
      document.body.removeEventListener("mouseenter", handleMouseEnter, true);
      document.body.removeEventListener("mouseleave", handleMouseLeave, true);
      document.body.removeEventListener("click", handleLinkClick, true);
    };
  }, [isCursorVisible]);

  return (
    <div
      ref={cursorRef }
      className="hidden xl:block fill-blue-700 fixed top-0 left-0 mix-blend-difference opacity-0 pointer-events-none z-50"
    >
      <svg height="10" width="10">
        <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
      </svg>
    </div>
  );
}