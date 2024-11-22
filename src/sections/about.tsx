import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";
import ScrollReveal from "@/components/scroll-reveal";

export default function about() {
  return (
    <section
      id="about"
      className="lg mx-auto my-16 flex min-h-screen flex-col items-center justify-center gap-4 px-2 md:max-w-full lg:scale-125 lg:flex-row lg:gap-16"
    >
      <div className="order-2 text-center lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center text-4xl tracking-tight md:mb-6">
            About Me
          </h2>
        </MotionDiv>
        <article className="flex flex-col gap-4 whitespace-nowrap text-pretty text-center">
          <MotionDiv delayOffset={0.4}>
            <p>
              Hello, I'm <b>Abdul Baqi.</b> I'm an independent{" "}
              <b>Laravel Full-Stack</b> developer based in Lahore, Pakistan.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              I’m a Web Engineer having 4+ years of experience and self-coded
              projects using HTML, CSS, Javascript, PHP, and some other
              frameworks and libraries like LARAVEL, Bootstrap, JQuery and VueJs
              etc. building full-stack web applications. And I love learning new
              technologies, especially elegant code architectures and design
              patterns. I hope to leverage my technical skills to build valuable
              apps that can make a difference in people's lives.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              Outside of job, I am also a freelancer. I enjoy working on various
              projects that allow me to explore different aspects of web
              development and design. I hope my work inspires people to
              appreciate the beauty and functionality of well-crafted
              applications. Feel free to follow my social media channels above
              to see my latest projects!
            </p>
          </MotionDiv>
        </article>
      </div>
    </section>
  );
}
