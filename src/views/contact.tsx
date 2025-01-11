import Section from "@/components/section";
import Link from "next/link";

export default function Contact() {
  return (
    <Section id="contact" title="Let's get in touch!" tabIndex={9}>
      <p  className="text-pretty leading-loose">
        Email me about that <span className="font-bold underline decoration-4 decoration-blue-700">new project</span> you want to work on, or just to talk a little! <br />
        You can reach me at <Link href="mailto:hi@marshyi.dev" target="_blank"  className="font-mono bg-blue-700 hover:bg-red-600">hi@marshyi.dev</Link>
      </p>
    </Section>
  );
}