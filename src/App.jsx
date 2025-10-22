import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Github,
  Linkedin,
  Code,
  Palette,
  Lightbulb,
  ArrowDown,
  PlayCircle,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const CALENDLY_URL = "https://calendly.com/2300185b-student/30min";

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0], { clamp: true });
  const heroY = useTransform(scrollY, [0, 600], [0, 100], { clamp: true });

  const projects = [
    {
      title: "Automated HR Recruitment",
      description:
        "Automated HR recruitment tasks including email processing, data extraction, and form submissions to streamline the onboarding process.",
      image:
        "https://zd-brightspot.s3.us-east-1.amazonaws.com/800x400/wp-content/uploads/2024/02/26091442/Shutterstock_1133982038.jpg",
      link: "https://youtu.be/rgHfwrjvQnw",
      tags: ["RPA", "UiPath", "Automation", "Data Extraction"],
    },
    {
      title: "ExpiryEase – Smart Food Reminder App",
      description:
        "Developed a food tracking application to help users monitor food expiry dates and reduce food waste, with a focus on user-friendly interfaces and push notification reminders.",
      image:
        "https://www.foodingredientfacts.org/wp-content/uploads/2022/04/Untitled-design-2.png",
      link: "https://youtu.be/9ebOzwjVe84",
      tags: ["Flutter", "Mobile Development", "UI/UX Design", "Firebase"],
    },
  ];

  const skills = [
    { name: "Machine Learning", level: 92, icon: Code },
    { name: "Deep Learning", level: 88, icon: Lightbulb },
    { name: "Python & PyTorch", level: 95, icon: Code },
    { name: "Data Analysis", level: 90, icon: Palette },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <a
              onClick={() => scrollToSection("home")}
              className="cursor-pointer select-none text-2xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563eb_0%,#7c3aed_100%)]"
              aria-label="Portfolio home"
            >
              Portfolio
            </a>

            {/* Toolbar */}
            <div className="flex gap-8">
              {["home", "projects", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-200 ${
                    activeSection === section
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Contact */}
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() =>
                (window.location.href = "mailto:2300185B@student.tp.edu.sg")
              }
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-[linear-gradient(90deg,#1e3a8a_0%,#1d4ed8_50%,#5b21b6_100%)]">
            AI Student & Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Turning complex data into simple, intelligent solutions that drive meaningful impact.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 rounded-xl shadow-sm bg-[linear-gradient(90deg,#2563eb_0%,#7c3aed_100%)] hover:opacity-90"
              onClick={() => scrollToSection("projects")}
            >
              View My Projects
            </Button>
            {/* Button text + link */}
            <a href="/HongZhenYing_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="px-8 rounded-xl bg-white border border-gray-200 hover:bg-gray-50"
              >
                Download Resume
              </Button>
            </a>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20"
          >
            <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold mb-4">AI Projects</h2>
            <p className="text-xl text-gray-600">
              Research and applications in artificial intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full focus:outline-none focus:ring-0 focus-visible:ring-0"
                >
                  <Card className="group flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} className="bg-blue-100 text-blue-800">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-extrabold mb-6">About Me</h2>

              <p className="text-lg text-gray-600 mb-6">
                I’m Zhen Ying, an Applied AI student driven by curiosity about
                how machines learn, reason, and create.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                My interests lie in building intelligent systems that combine
                precision with creativity, from neural networks that interpret
                patterns to natural language models that understand context, and
                computer vision systems that perceive the world as we do.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                To me, artificial intelligence is more than technology. It is
                the art of transforming data into understanding. Every algorithm
                tells a story, and I’m here to learn how to write it beautifully.
              </p>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-blue-50"
                  asChild
                >
                  <a
                    href="https://github.com/sheepsteakk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="focus:outline-none"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-blue-50"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/zhen-ying-hong-3ba127281"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="focus:outline-none"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-[linear-gradient(90deg,#3b82f6_0%,#8b5cf6_100%)] rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Have a project in mind? I'd love to hear about it.
            </p>
            <Card className="p-12 bg-white shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 text-2xl font-medium">
                  <Mail className="w-6 h-6 text-blue-600" />
                  2300185B@student.tp.edu.sg
                </div>
                <div className="flex gap-4 justify-center">
                  <Button
                    size="lg"
                    className="px-8 rounded-xl bg-[linear-gradient(90deg,#2563eb_0%,#7c3aed_100%)] hover:opacity-90"
                    onClick={() =>
                      (window.location.href =
                        "mailto:2300185B@student.tp.edu.sg")
                    }
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 rounded-xl"
                    onClick={() => window.open(CALENDLY_URL, "_blank")}
                  >
                    Schedule Call
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Crafted with passion by Zhen Ying (ɔ◔‿◔)ɔ ♥
          </p>
        </div>
      </footer>
    </div>
  );
}
