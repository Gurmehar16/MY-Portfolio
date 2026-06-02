import { Briefcase, Code, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I am a Computer Science Engineering student at Guru Tegh Bahadur
              Institute of Technology (GTBIT) with a strong passion for
              full-stack web development and problem-solving.
            </p>

            <p className="text-muted-foreground">
              I enjoy building responsive and scalable web applications using
              modern technologies like React.js, Node.js, MongoDB, MySQL, and
              Tailwind CSS. I continuously improve my skills through projects,
              certifications, and practical development experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

              {/* Contact Button */}
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* Resume Button */}
              <a
                href="/https://drive.google.com/file/d/16hPldympl8ICRTsvtOCsgP1vkmjfxE8U/view?usp=drive_link"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 gap-6">

            {/* Skills */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Technical Skills
                  </h4>

                  <p className="text-muted-foreground">
                    React.js, JavaScript, Tailwind CSS, Node.js,
                    MongoDB, MySQL, Python, Git & GitHub.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Education
                  </h4>

                  <p className="text-muted-foreground">
                    B.Tech in Computer Science Engineering from
                    Guru Tegh Bahadur Institute of Technology
                    (2021 - 2025) with CGPA 8.64.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Experience
                  </h4>

                  <p className="text-muted-foreground">
                    Worked as a Data Scientist Intern at Suvidha Foundation,
                    contributing to fundraising campaigns and collaborating
                    with the team on campaign progress updates.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};