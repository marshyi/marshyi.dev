import Section from "@/components/section";
import Image from "next/image";

export default function Skills() {
  return (
    <Section title="Skills" tabIndex={8}>
      <div className="w-10/12 lg:w-7/12">
        <p className="w-10/12 lg:w-full text-pretty leading-loose mt-8">
          I am <span className="font-bold py-[0.3rem] px-2 bg-blue-700">building up experience</span> working with modern technologies<br />
          and tools such as TypeScript, React, Next.js, and Tailwind CSS.<br />
          I&apos;m always eager to learn new things and <span className="font-bold underline decoration-4 decoration-blue-700">improve my skills</span>.
        </p>
      </div>
      <div className="flex flex-col w-10/12 mt-10 space-y-4 sm:landscape:flex-row sm:landscape:space-x-16 sm:landscape:space-y-0 lg:flex-row lg:w-7/12 lg:space-x-16 lg:space-y-0">
        <div className="space-y-2">
          <h3 className="text-sm font-bold uppercase">Languages</h3>
          <div className="flex flex-row space-x-3 invert">
            <Image
              src="/html5.svg"
              width={28}
              height={28}
              className="w-8 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="HTML5 logo"
            />
            <Image
              src="/css3.svg"
              width={28}
              height={28}
              className="w-8 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="CSS3 logo"
            />
            <Image
              src="/javascript.svg"
              width={28}
              height={28}
              className="w-8 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="JavaScript logo"
            />
            <Image
              src="/typescript.svg"
              width={28}
              height={28}
              className="w-8 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="TypeScript logo"
            />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-bold uppercase">Tools</h3>
          <div className="flex flex-row space-x-3 invert">
            <Image
              src="/git.svg"
              width={28}
              height={28}
              className="w-8 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="Git logo"
            />
            <Image
              src="/github.svg"
              width={28}
              height={28}
              className="w-8 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="GitHub logo"
            />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-bold uppercase">Frameworks</h3>
          <div className="flex flex-row space-x-3 invert">
            <Image
              src="/tailwindcss.svg"
              width={28}
              height={28}
              className="w-8 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="Tailwind CSS logo"
            />
            <Image
              src="/react.svg"
              width={28}
              height={28}
              className="w-8 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="React logo"
            />
            <Image
              src="/nextjs.svg"
              width={28}
              height={28}
              className="w-8 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="Next.js logo"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}