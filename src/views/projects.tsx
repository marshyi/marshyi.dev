import Section from "@/components/section";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <Section title="Projects" tabIndex={7}>
      <div className="flex w-full overflow-x-auto space-x-12 px-4 mt-8 scroll-smooth md:justify-center md:mb-6 md:overflow-x-visible">
        <div className="relative group flex-none w-full h-fit aspect-video overflow-hidden rounded-lg border-2 border-blue-700 md:w-96">
          <Link href="#" className="flex p-0 blur-[1px] group-hover:blur-none">
            <Image
              src="/placeholder.png"
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
              alt="Project"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-white/10 to-white/30 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
          </Link>
        </div>
        <div className="relative group flex-none w-full h-fit aspect-video overflow-hidden rounded-lg border-2 border-blue-700 md:w-96">
          <Link href="#" className="flex p-0 blur-[1px] group-hover:blur-none">
            <Image
              src="/placeholder.png"
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
              alt="Project"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-white/10 to-white/30 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
          </Link>
        </div>
        <div className="relative group flex-none w-full h-fit aspect-video overflow-hidden rounded-lg border-2 border-blue-700 md:w-96">
          <Link href="#" className="flex p-0 blur-[1px] group-hover:blur-none">
            <Image
              src="/placeholder.png"
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
              alt="Project"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-white/10 to-white/30 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
          </Link>
        </div>
      </div>
      <div>
        <p className="flex items-center justify-center mb-6 font-mono text-center lowercase md:hidden">
          <Image 
            src="/up.svg"
            width={100}
            height={100}
            className="inline w-10 p-2 invert -rotate-90"
            alt="Right Arrow"
          />
          Swipe
          <Image 
            src="/up.svg"
            width={100}
            height={100}
            className="inline w-10 p-2 invert rotate-90"
            alt="Right Arrow"
          />
        </p>
      </div>
      <p className="text-pretty leading-loose">
        I&apos;m currently working on <span className="font-bold underline decoration-4 decoration-blue-700">building</span> a portfolio of projects. <br />
        <span className="font-bold py-[0.3rem] px-2 bg-blue-700">Stay tuned</span> for updates!
      </p>
    </Section>
  );
}