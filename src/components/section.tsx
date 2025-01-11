import { Ovo } from "next/font/google";

const ovo = Ovo({ subsets: ['latin'], weight: "400" })

type Props = {
  id?: string,
  title: string,
  tabIndex: number,
  easterEgg?: boolean,
  children: React.ReactNode
};

export default function Section({ id, title, tabIndex, easterEgg = false, children }: Props) {
  return (
    <section id={id || title.toLowerCase()} className="flex flex-col items-center justify-center h-dvh snap-start">
      <div className="flex flex-col justify-evenly h-1/2 w-10/12 md:h-1/6 md:w-7/12 animate-[slideIn_1.3s_ease_forwards]">
        <div>
          <h2 className={`${ovo.className} w-fit font-serif text-5xl`} tabIndex={tabIndex}>{title}</h2>
          {easterEgg && <h3 className="text-black">General Kenobi...</h3>}
        </div>
        {children}
      </div>
    </section>
  )
}