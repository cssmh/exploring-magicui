import BoxReveal from "../ui/box-reveal";
import HyperText from "../ui/hyper-text";
import MorphingText from "../ui/morphing-text";
import { Meteors } from "../ui/meteors";
import ShinyButton from "../ui/shiny-button";

const texts = [
  "Hello",
  "Next.js",
  "Momin",
  "React",
];

export function MeteorDemo() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={50} />
      <div className="flex items-center gap-12">
        <div>
          <HyperText
          // className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
          >
            Md. Momin Hossain
          </HyperText>
          <p>Next.js Developer</p>
          <ShinyButton className="text-white">Hire ME</ShinyButton>
        </div>
        <div className="size-full max-w-lg items-center justify-center overflow-hidden">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
              Tourist<span className="text-[#5046e6]">.</span>
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              UI library for{" "}
              <span className="text-[#5046e6]">Design Engineers</span>
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-6">
              <p>
                -&gt; 20+ free and open-source animated components built with
                <span className="font-semibold text-[#5046e6]"> React</span>,
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Typescript
                </span>
                ,
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Tailwind CSS
                </span>
                , and
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Framer Motion
                </span>
                . <br />
                -&gt; 100% open-source, and customizable. <br />
              </p>
            </div>
          </BoxReveal>
        </div>
      </div>
      <MorphingText texts={texts} />;
    </div>
  );
}
