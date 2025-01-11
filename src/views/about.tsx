import Section from "@/components/section";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about" title="Hello there!" tabIndex={6} easterEgg={true}>
      <p className="text-pretty leading-loose">
        I&apos;m <Link href="#" className="font-bold px-0">marshyi</Link>!<br />
        I am a <span className="font-bold underline decoration-4 decoration-blue-700">front-end developer</span> - in training.
        <Image
          src="/bubbles.png"
          width={18}
          height={18}
          className="inline ml-1"
          alt="Bubbles Emoji"
        />
        <br/>
        Currently focusing on learning React & Next.js.
        <Image
          src="/sparkles.png"
          width={18}
          height={18}
          className="inline ml-1"
          alt="Sparkles Emoji"
        />
      </p>
    </Section>
  );
}