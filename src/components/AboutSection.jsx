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
              Computer Science Graduate
            </h3>

            <p className="text-muted-foreground">
              I am a Computer Science Engineering Graduate from Guru Tegh Bahadur
              Institute of Technology (GTBIT) with a CGPA of 8.64. I am passionate
              about solving real-world problems through technology and continuously
              expanding my knowledge across software development, databases, and
              data-driven applications.
            </p>

            <p className="text-muted-foreground">
              I have hands-on experience developing full-stack applications,
              working with SQL databases, and building practical projects using
              Java, Python, React.js, Node.js, MongoDB, and MySQL.
              During my Full Stack Developer Internship at Codec Technologies,
              I strengthened my technical, problem-solving, and collaborative
              development skills by working on real-world projects and modern
              development tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

              {/* Contact Button */}
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1jYCgaJRPAcSEbCc1ksCU-NhsTPutIAkx/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
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
                    Java, Python, SQL, React.js, JavaScript, Node.js,
                    MongoDB, MySQL, Tailwind CSS,
                    Git & GitHub.
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
                    B.Tech in Computer Science Engineering
                    <br />
                    Guru Tegh Bahadur Institute of Technology (GTBIT)
                    <br />
                    2021 – 2025 | CGPA: 8.64/10
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
                    Full Stack Developer Intern at Codec Technologies
                    (Jan 2026 – Jun 2026), where I developed responsive
                    web applications, integrated REST APIs, worked with
                    MongoDB databases, and collaborated using Git and
                    GitHub throughout the development lifecycle.
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