import React from 'react';

export const metadata = {
  title: 'About Me',
};

export default function About() {
  return (
    <div className="min-h-screen p-[10px] text-zinc-100 font-sans mt-4">
      <div className="w-full mx-auto bg-[#121211] rounded-[2rem] p-6 sm:p-10 md:p-16 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.7)] border border-white/5">
        <div className="max-w-3xl mx-auto space-y-20">

          {/* Header Section */}
          <section className="space-y-4 md:space-y-6">
            <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 md:items-start">
              <div className="flex-1 space-y-6 mt-4 md:mt-0">
                <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">
                  About Me
                </h4>
                <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight">
                  I am Soccer Karnati,<br />
                  <span className="text-xl sm:text-2xl md:text-3xl font-normal block mt-2 leading-relaxed">
                    a final year undergraduate<br />
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#fbcfe8]">
                      Full-Stack Developer & AI Enthusiast.
                    </span>
                  </span>
                </h1>
              </div>

              <div className="shrink-0 self-start">
                <div className="w-32 h-32 sm:w-48 sm:h-48 bg-[#2a2a2a] rounded-[2rem] overflow-hidden flex items-center justify-center shadow-xl relative">
                  <img src="/Image.jpeg" alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              At my core, I'm someone who truly loves creating software and exploring how complex systems function. My technical journey began with Java and Data Structures, which naturally evolved into full-stack web development using the MERN stack. Along the way, I developed a strong interest in backend design, real-time tech, and Artificial Intelligence. I enjoy working through difficult logic, adapting to new frameworks, and transforming raw concepts into functional applications. Outside of dev work, I dedicate time to sharpening my problem-solving skills, working out at the gym, and constantly striving for continuous self-improvement.
            </p>
          </section>

          {/* Timeline Section */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Timeline
            </h2>
            <div className="border-l border-zinc-800 ml-3">
              <div className="mb-8 ml-8 relative">
                <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-zinc-500 ring-8 ring-[#121211]"></span>
                <h3 className="text-xl font-semibold text-white">2023</h3>
                <p className="mt-2 text-zinc-300 leading-relaxed text-sm sm:text-base">
                  Started my Computer Science journey and built a strong foundation in Java, programming fundamentals, and Data Structures & Algorithms.
                </p>
              </div>
              <div className="mb-8 ml-8 relative">
                <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-zinc-500 ring-8 ring-[#121211]"></span>
                <h3 className="text-xl font-semibold text-white">2024</h3>
                <p className="mt-2 text-zinc-300 leading-relaxed text-sm sm:text-base">
                  Discovered web development and learned HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB while building my first full-stack projects.
                </p>
              </div>
              <div className="mb-8 ml-8 relative">
                <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-zinc-500 ring-8 ring-[#121211]"></span>
                <h3 className="text-xl font-semibold text-white">2025</h3>
                <p className="mt-2 text-zinc-300 leading-relaxed text-sm sm:text-base">
                  Worked on larger full-stack applications involving authentication, REST APIs, WebSockets, real-time communication, and responsive user interfaces.
                </p>
              </div>
              <div className="ml-8 relative">
                <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-[#d8b4fe] ring-8 ring-[#121211]"></span>
                <h3 className="text-xl font-semibold text-white">2026</h3>
                <p className="mt-2 text-zinc-300 leading-relaxed text-sm sm:text-base">
                  Expanded into Artificial Intelligence, blockchain, Docker, and secure distributed applications. Built AI-powered applications.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Skills
            </h2>
            <div className="space-y-4">
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-medium text-zinc-200 mb-1">Languages</h3>
                <p className="text-zinc-400 text-sm sm:text-base">TypeScript • Javascript • Python • C++ • SQL</p>
              </div>
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-medium text-zinc-200 mb-1">Full Stack</h3>
                <p className="text-zinc-400 text-sm sm:text-base">React • Next.js • Node.js • Express.js • MongoDB • MySQL • Tailwind CSS • Bootstrap</p>
              </div>
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-medium text-zinc-200 mb-1">AI & Machine Learning</h3>
                <p className="text-zinc-400 text-sm sm:text-base">Python • FastAPI • Scikit-Learn • Machine Learning • AI Applications</p>
              </div>
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-medium text-zinc-200 mb-1">Backend & APIs</h3>
                <p className="text-zinc-400 text-sm sm:text-base">REST APIs • JWT Authentication • WebSockets • WebRTC • Authentication Systems</p>
              </div>
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-medium text-zinc-200 mb-1">Cloud & DevOps</h3>
                <p className="text-zinc-400 text-sm sm:text-base">Docker • Git & GitHub • Netlify • Vercel • Cloud Platforms</p>
              </div>
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-medium text-zinc-200 mb-1">Tools & Methodologies</h3>
                <p className="text-zinc-400 text-sm sm:text-base">Agile • Version Control • Debugging • Performance Optimization • Problem Solving</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
