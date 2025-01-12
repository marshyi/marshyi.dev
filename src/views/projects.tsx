import Section from "@/components/section";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <Section title="Projects" tabIndex={7}>
      <div className="flex w-full overflow-x-scroll space-x-6 px-8 mt-8 scroll-smooth sm:landscape:mt-4 sm:landscape:justify-center lg:portrait:justify-start lg:justify-center lg:w-9/12 lg:pt-3 lg:mb-6">
        <div className="group relative flex-none w-3/4 h-fit aspect-video rounded-lg border-2 border-blue-700 sm:landscape:w-1/4 lg:w-96">
          <Link href="" className="flex p-0 blur-[1px] group-hover:blur-none">
            <Image
              src="/placeholder.png"
              width={1920}
              height={1080}
              className="object-cover w-full h-full rounded-lg brightness-200"
              alt="Project"
            />
            <div className="absolute rounded-lg inset-0 bg-gradient-to-br from-blue-300 via-blue-200 to-blue-300 opacity-70 group-hover:opacity-0 transition-opacity duration-500"></div>
          </Link>
        </div>
        <div className="group relative flex-none w-3/4 h-fit aspect-video rounded-lg border-2 border-blue-700 sm:landscape:w-1/4 lg:w-96">
          <Link href="" className="flex p-0 blur-[1px] group-hover:blur-none">
            <Image
              src="/placeholder.png"
              width={1920}
              height={1080}
              className="object-cover w-full h-full rounded-lg brightness-200"
              alt="Project"
            />
            <div className="absolute rounded-lg inset-0 bg-gradient-to-br from-blue-300 via-blue-200 to-blue-300 opacity-70 group-hover:opacity-0 transition-opacity duration-500"></div>
          </Link>
        </div>
        <div className="group relative flex-none w-3/4 h-fit aspect-video rounded-lg border-2 border-blue-700 sm:landscape:w-1/4 lg:w-96">
          <Link href="" className="flex p-0 blur-[1px] group-hover:blur-none">
            <Image
              src="/placeholder.png"
              width={1920}
              height={1080}
              className="object-cover w-full h-full rounded-lg brightness-200"
              alt="Project"
            />
            <div className="absolute rounded-lg inset-0 bg-gradient-to-br from-blue-300 via-blue-200 to-blue-300 opacity-70 group-hover:opacity-0 transition-opacity duration-500"></div>
          </Link>
        </div>
      </div>
      <div>
        <p className="flex items-center justify-center mt-2 mb-6 font-mono text-center lowercase sm:landscape:hidden lg:hidden">
          <Image 
            src="/up.svg"
            width={100}
            height={100}
            className="inline w-10 p-2 invert -rotate-90"
            alt=""
          />
          Swipe
          <Image 
            src="/up.svg"
            width={100}
            height={100}
            className="inline w-10 p-2 invert rotate-90"
            alt=""
          />
        </p>
      </div>
      <div className="w-10/12 lg:w-7/12">
        <p className="text-pretty leading-loose sm:landscape:mt-2">
          I&apos;m currently working on <span className="font-bold underline decoration-4 decoration-blue-700">building a portfolio</span> of projects. <br />
          <span className="font-bold py-[0.3rem] px-2 bg-blue-700">Stay tuned</span> for updates!
        </p>
      </div>
    </Section>
  );
}