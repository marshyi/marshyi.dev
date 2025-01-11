import Section from "@/components/section";
import Image from "next/image";

export default function Projects() {
  return (
    <Section title="Projects" tabIndex={7}>
      <p className="text-pretty leading-loose">
        I&apos;m currently working on building a portfolio of projects. <br />
        Stay tuned for updates!
        <Image
          src="/bubble-tea.png"
          width={18}
          height={18}
          className="inline"
          alt="Bubble Tea Emoji"
        />
      </p>
    </Section>
  );
}