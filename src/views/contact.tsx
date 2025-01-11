import Section from "@/components/section";
import Link from "next/link";

export default function Contact() {
  return (
    <Section id="contact" title="Let's get in touch!" tabIndex={9}>
      <p  className="text-pretty leading-loose">
        Email me about that new project you want to work on, or just to talk a little! <br />
        You can reach me at <Link href="mailto:hi@marshyi.dev" target="_blank"  className="font-mono">hi@marshyi.dev</Link>
      </p>
    </Section>
  );
}