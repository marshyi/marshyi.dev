import Section from "@/components/section";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about" title="Hello there!" tabIndex={6} easterEgg={true}>
      <div className="w-10/12 lg:w-7/12">
        <p className="text-pretty leading-loose">
          I&apos;m <Link href="#" tabIndex={-1} className="font-bold underline decoration-4 decoration-blue-700">marshyi</Link>!<br />
          I am a <span className="font-bold py-1 px-3 bg-blue-700">front-end developer</span> - in training.
          <Image
            src="/bubbles.png"
            width={18}
            height={18}
            className="inline w-4 ml-1"
            alt=""
          />
          <br/>
          Currently focusing on learning React & Next.js.
          <Image
            src="/sparkles.png"
            width={18}
            height={18}
            className="inline w-4 ml-1"
            alt=""
          />
        </p>
      </div>
    </Section>
  );
}