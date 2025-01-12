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
      <div className="flex flex-col items-center justify-center h-1/2 md:h-5/6 lg:h-4/6 w-full animate-[slideIn_1.3s_ease_forwards]">
        <div className="flex flex-col justify-center w-10/12 lg:w-7/12">
          <h2 className={`${ovo.className} w-fit font-serif text-5xl`} tabIndex={tabIndex}>{title}</h2>
          {easterEgg && <h3 className="text-black">General Kenobi...</h3>}
        </div>
        {children}
      </div>
    </section>
  )
}