import Link from "next/link";

export default function NavBar() {
  return (
    <header  className="flex flex-row flex-wrap items-center justify-around w-screen fixed top-0 left-0 h-20 bg-black z-10 animate-[fadeIn_2s_ease_forwards]">
      <h1  className="font-mono text-xl"><Link href="/" tabIndex={1}>marshyi.dev</Link></h1>
      <nav>
        <ul  className="flex space-x-4 font-mono text-sm font-bold lowercase">
          <li><Link href="#about" tabIndex={2}>About</Link></li>
          <li><Link href="#projects" tabIndex={3}>Projects</Link></li>
          <li><Link href="#skills" tabIndex={4}>Skills</Link></li>
          <li><Link href="#contact" tabIndex={5}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}