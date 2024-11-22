import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import localFont from "next/font/local";
import { DockNav } from "@/components/dock-nav";
import { Sparkles } from "@/components/sparkles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollBaseAnimation from "@/components/text-marquee";
import TextFlip from "@/components/text-flip";
import { Liquid } from "@/components/gradient-button";
const goldenSignature = localFont({
  src: "../assets/GoldenSignature.otf",
  display: "swap",
});

export default function hero() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-full w-full">
        <h1 className="mt-4 text-center font-mono text-xs tracking-tight opacity-30">
          <MotionDiv delayOffset={0.8}>Abdul Baqi | Portfolio</MotionDiv>
        </h1>
      </div>
      <div className="fixed bottom-7 left-0 right-0 z-50 ">
        <DockNav />
      </div>
      <section className="-mt-14 flex min-h-screen flex-col items-center justify-center 2xl:-mt-20 2xl:scale-[1.3]">
        {/* <div className="absolute inset-x-0 bottom-0 h-full w-full">
          <Sparkles
            density={700}
            speed={1.2}
            size={1.1}
            direction="bottom"
            opacitySpeed={2}
            color="#505050"
            className="absolute inset-x-0 bottom-0 h-full w-full"
          />
        </div> */}

        <div className="my-5 overflow-hidden rounded-full transition-all duration-500 hover:scale-110">
          <MotionDiv>
            <Image
              src={"/abdulbaqi.png"}
              alt="animoji"
              width={170}
              height={170}
            />
          </MotionDiv>
        </div>
        <h1 className="text-center text-[2rem] tracking-tight md:text-[4rem]">
          <MotionDiv delayOffset={0.8}>Hi I'm Abdul Baqi 👋</MotionDiv>
        </h1>

        <div className="my-1 flex w-full flex-col gap-2 text-center  tracking-tight lg:w-[60%]">
          <MotionDiv delayOffset={1.0}>
            <TextFlip />
          </MotionDiv>
          <MotionDiv delayOffset={1.2} className="mt-5 px-10">
            <Link href="/CV.pdf" target="_blank" download>
              <div className="group relative z-40 w-32 scale-125 cursor-pointer overflow-hidden rounded-full border-2 bg-background p-2 text-center  font-semibold text-foreground">
                <span className="inline-block translate-y-0 transition-all duration-300 group-hover:-translate-y-12 group-hover:opacity-0">
                  View CV
                </span>
                <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-y-12 items-center justify-center gap-2 rounded-full bg-purple-800 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rounded-none group-hover:opacity-100 dark:text-foreground ">
                  <span>View CV</span>
                </div>
              </div>
            </Link>
          </MotionDiv>
        </div>
      </section>
      <MotionDiv
        delayOffset={1.4}
        className="absolute left-0 top-[23rem] grid h-[500px] place-content-center lg:top-[28.5rem] 2xl:top-[40rem] "
      >
        <ScrollBaseAnimation
          delay={20}
          baseVelocity={3}
          clasname="font-semibold tracking-tight text-9xl text-foreground/80 2xl:text-9xl z-10"
        >
          Elevate your business with a website that stands out
        </ScrollBaseAnimation>
      </MotionDiv>
    </>
  );
}
