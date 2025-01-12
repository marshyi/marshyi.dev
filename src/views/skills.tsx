import Section from "@/components/section";
import Image from "next/image";

export default function Skills() {
  return (
    <Section title="Skills" tabIndex={8}>
      <div className="flex flex-col w-7/12 mt-8 space-y-10 md:flex-row md:space-x-16 md:space-y-0">
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase">Languages</h3>
          <div className="flex flex-row space-x-3 invert">
            <Image
              src="/html5.svg"
              width={28}
              height={28}
              className="w-10 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="HTML5 logo"
            />
            <Image
              src="/css3.svg"
              width={28}
              height={28}
              className="w-10 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="CSS3 logo"
            />
            <Image
              src="/javascript.svg"
              width={28}
              height={28}
              className="w-10 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="JavaScript logo"
            />
            <Image
              src="/typescript.svg"
              width={28}
              height={28}
              className="w-10 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="TypeScript logo"
            />
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase">Tools</h3>
          <div className="flex flex-row space-x-3 invert">
            <Image
              src="/git.svg"
              width={28}
              height={28}
              className="w-10 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="Git logo"
            />
            <Image
              src="/github.svg"
              width={28}
              height={28}
              className="w-10 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="GitHub logo"
            />
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase">Frameworks</h3>
          <div className="flex flex-row space-x-3 invert">
            <Image
              src="/tailwindcss.svg"
              width={28}
              height={28}
              className="w-10 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="Tailwind CSS logo"
            />
            <Image
              src="/react.svg"
              width={28}
              height={28}
              className="w-10 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="React logo"
            />
            <Image
              src="/nextjs.svg"
              width={28}
              height={28}
              className="w-10 transition duration-300 hover:scale-150 hover:rotate-3"
              alt="Next.js logo"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}