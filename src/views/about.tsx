import Section from "@/components/section";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about" title="Hello there!" tabIndex={6} easterEgg={true}>
      <p className="text-pretty leading-loose">
        I&apos;m <span className="font-bold"><Link href="#">marshyi</Link></span>!<br />
        I&apos;m a front-end developer in-training.
        <Image
          src="/bubbles.png"
          width={18}
          height={18}
          className="inline ml-1"
          alt="Bubbles Emoji"
        />
        <br/>
        I&apos;m currently learning React/Next.js.
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