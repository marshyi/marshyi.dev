import Section from "@/components/section";
import Link from "next/link";

export default function Contact() {
  return (
    <Section id="contact" title="Let's get in touch!" tabIndex={9}>
      <div className="w-10/12 lg:w-7/12">
        <p className="text-pretty leading-loose mt-8">
          Got a <span className="font-bold underline decoration-4 decoration-blue-700">project in mind</span>, or just looking to connect?<br />
          I&apos;d love to hear from you!<br />
          <br />
          Whether it&apos;s to collaborate or just say hello, feel free to reach out.<br />
          You can reach me at <Link href="mailto:hi@marshyi.dev" target="_blank"  className="font-mono bg-blue-700 hover:bg-red-600">hi@marshyi.dev</Link>
        </p>
      </div>
    </Section>
  );
}