import { motion } from "framer-motion";

export default function about() {
  return (
    <section
      id="about"
      className="lg mx-auto mb-16 mt-60 flex min-h-screen flex-col items-center justify-center gap-10 px-2 md:mb-0 md:mt-36 md:max-w-full lg:scale-125 lg:flex-row lg:gap-16"
    >
      <div className="order-2 text-center lg:order-1 lg:w-2/3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
        >
          <h2 className="mb-10 w-full text-center text-5xl tracking-tight underline decoration-purple-500 underline-offset-8 md:mb-6">
            About Me
          </h2>
        </motion.div>
        <article className="flex flex-col gap-4 whitespace-nowrap text-pretty text-center">
          {[
            "Hello, I'm Abdul Baqi. 👋 I'm an independent Laravel Full-Stack developer 💻 based in Lahore, Pakistan. 🇵🇰",
            "I’m a Web Engineer with over 4 years of experience 🛠️, having self-coded projects using HTML, CSS, JavaScript, PHP, and various frameworks and libraries like Laravel, Bootstrap, jQuery, and Vue.js. I specialize in building full-stack web applications. 🌐 I love learning new technologies, especially elegant code architectures and design patterns. 📚 I aim to leverage my technical skills to build valuable apps that can make a difference in people's lives. 🌟",
            "Outside of job, I am also a freelancer. I enjoy working on various projects that allow me to explore different aspects of web development and design. I hope my work inspires people to appreciate the beauty and functionality of well-crafted applications. Feel free to follow my social media channels above to see my latest projects!",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4 + index * 0.1,
              }}
            >
              <p>{text}</p>
            </motion.div>
          ))}
        </article>
      </div>
    </section>
  );
}
