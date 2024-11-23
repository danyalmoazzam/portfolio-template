import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import localFont from "next/font/local";
import { DockNav } from "@/components/dock-nav";
import { Sparkles } from "@/components/sparkles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollBaseAnimation from "@/components/text-marquee";
import TextFlip from "@/components/text-flip";
import { motion } from "framer-motion";

export default function hero() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-full w-full">
        <h1 className="mt-4 text-center font-mono text-xs tracking-tight opacity-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
          >
            Abdul Baqi | Portfolio
          </motion.div>
        </h1>
      </div>
      <div className="fixed bottom-7 left-0 right-0 z-50 ">
        <DockNav />
      </div>
      <section className="-mt-24 flex min-h-screen flex-col items-center justify-center md:-mt-14 2xl:-mt-20 2xl:scale-[1.3]">
        <div className="absolute inset-x-0 bottom-0 h-full w-full">
          <Sparkles
            density={700}
            speed={1.2}
            size={1.1}
            direction="bottom"
            opacitySpeed={2}
            color="#505050"
            className="absolute inset-x-0 bottom-0 h-full w-full"
          />
        </div>
        <div className="my-5 scale-110 cursor-pointer overflow-hidden rounded-full transition-all duration-500 hover:scale-105 md:scale-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <Image
              src={"/abdulbaqi.png"}
              alt="animoji"
              width={170}
              height={170}
            />
          </motion.div>
        </div>
        <h1 className="text-center text-[2.2rem] tracking-tight md:text-[4rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
          >
            Hi I'm Abdul Baqi 👋
          </motion.div>
        </h1>

        <div className="my-1 flex w-full flex-col gap-2 text-center  tracking-tight lg:w-[60%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.0,
            }}
          >
            <TextFlip />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.2,
            }}
            className="mt-5 flex justify-center px-10"
          >
            <Link href="/CV.pdf" target="_blank" download data-type="cv">
              <div className="group relative z-40 w-28 scale-125 cursor-pointer overflow-hidden rounded-full border-2 bg-background p-1 text-center font-semibold text-foreground  md:w-32 md:p-2">
                <span className="inline-block translate-y-0 transition-all duration-300 group-hover:-translate-y-12 group-hover:opacity-0">
                  View CV
                </span>
                <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-y-12 items-center justify-center gap-2 rounded-full bg-purple-800 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rounded-none group-hover:opacity-100 dark:text-foreground ">
                  <span>View CV</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
