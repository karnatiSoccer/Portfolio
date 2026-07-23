

import Link from 'next/link';
import GlassButton from '@/components/GlassButton';
import { DiaTextReveal } from '@/registry/magicui/dia-text-reveal';
import GithubCalendarClient from '@/components/GithubCalendarClient';
import SocialGrid from '@/components/SocialGrid';
import ProjectsList from '@/components/ProjectsList';
import SpotifyWidget from '@/components/SpotifyWidget';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Page Content Wrapper */}
      <div className="w-full p-1 flex flex-col gap-1">
        <div className="pt-1 pb-1 px-1 sm:px-2 w-full flex flex-col gap-1">
          <div className="mx-auto max-w-4xl w-full bg-[#121211] rounded-[2rem] p-5 sm:p-8 lg:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.7)] border border-white/5">

            {/* Top: Photo + Hero Content */}
            {/* <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start pb-10"> */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">

              {/* Left Image (Rounded Square) */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 bg-[#2a2a2a] rounded-2xl overflow-hidden relative shadow-lg">
                <img src="/Image.jpeg" alt="Profile" className="w-full h-full object-cover" />
              </div>

              {/* Right Content */}
              <div className="flex-1 w-full text-center sm:text-left flex flex-col items-center sm:items-start pt-1 sm:pt-2">
                <h1 className="text-center sm:text-left text-4xl sm:text-5xl font-serif tracking-tight leading-tight text-[#f4f3ef]">
                  <DiaTextReveal
                    repeat
                    repeatDelay={1.2}
                    text={["Soccer Karnati"]}
                  />
                </h1>
                <p className="mt-3 text-sm sm:text-base text-[#f4f3ef]/80 font-mono max-w-lg leading-relaxed">
                  I help founders build scalable web applications and develop RESTful APIs.
                </p>

              </div>
            </div>

            {/* About Me Section */}
            <div className="pt-6 sm:pt-8" id="about">

              <h2 className="text-2xl font-bold text-[#f4f3ef] mb-3 text-center sm:text-left">About me</h2>

              <div className="space-y-6 text-[#f4f3ef]/80 leading-relaxed font-mono text-sm sm:text-base text-center sm:text-left">
                <p>
                  Currently pursuing my Bachelor of Engineering in Computer Science and Technology at Jawaharlal Nehru Technological University (2023-2027). I'm always learning, refining my skills, and exploring how design and code can work together to create things that feel both useful and enjoyable to use.
                </p>

                {/* Info List */}
                <div className="pt-2 flex flex-col gap-3 font-mono text-sm text-[#f4f3ef]/90 text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <svg className="w-4 h-4 text-[#f4f3ef]/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>Hyderabad, India</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <img alt="LeetCode" className="size-3.5 shrink-0 object-contain" src="/leetcode.png" />

                    <a
                      href="https://leetcode.com/u/karnati_soccer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[#f4f3ef]/40 underline-offset-4 hover:decoration-[#f4f3ef] transition-colors"
                    >
                      Solved 500+ coding problems on LeetCode
                    </a>
                  </div>


                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <svg className="w-4 h-4 text-[#f4f3ef]/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                    <span>CSE @ JNTU, graduating 2027</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap items-center justify-center sm:justify-end gap-4">
                <GlassButton
                  href="/projects"
                  className="rounded-xl bg-[#151515] px-5 py-2.5 text-sm font-semibold tracking-wide text-[#f4f3ef] shadow-sm border border-white/10 hover:bg-[#222] hover:border-white/20"
                >
                  <svg className="w-4 h-4 text-[#f4f3ef]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                  Projects
                </GlassButton>
                <GlassButton
                  href="https://drive.google.com/file/d/1hNT1KSkuuvPYloJ1phNTympgHwPlt5uh/view?usp=sharing"
                  isExternal
                  className="rounded-xl bg-[#151515] px-5 py-2.5 text-sm font-semibold tracking-wide text-[#f4f3ef] shadow-sm border border-white/10 hover:bg-[#222] hover:border-white/20"
                >
                  <svg className="w-4 h-4 text-[#f4f3ef]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Resume
                </GlassButton>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="mx-auto max-w-4xl w-full bg-[#121211] rounded-[2rem] p-5 sm:p-8 lg:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.7)] border border-white/5">
            <h2 className="text-2xl font-bold text-[#f4f3ef] mb-6 text-center sm:text-left">Skills & Tools</h2>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {[
                { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
                { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' },
                { name: 'Java', icon: 'openjdk', color: 'ED8B00' },
                { name: 'Python', icon: 'python', color: '3776AB' },
                { name: 'React', icon: 'react', color: '61DAFB' },
                { name: 'Next.js', icon: 'nextdotjs', color: 'white' },
                { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4' },
                { name: 'Node.js', icon: 'nodedotjs', color: '339933' },
                { name: 'WebSocket', icon: 'socketdotio', color: 'white' },
                { name: 'PostgreSQL', icon: 'postgresql', color: '4169E1' },
                { name: 'MongoDB', icon: 'mongodb', color: '47A248' },
                { name: 'Supabase', icon: 'supabase', color: '3ECF8E' },
                { name: 'Firebase', icon: 'firebase', color: 'FFCA28' },
                { name: 'Kafka', icon: 'apachekafka', color: 'white' },
                { name: 'Docker', icon: 'docker', color: '2496ED' },
                { name: 'Vercel', icon: 'vercel', color: 'white' },
                { name: 'GitHub Actions', icon: 'githubactions', color: '2088FF' },
                { name: 'Postman', icon: 'postman', color: 'FF6C37' },
                { name: 'Express', icon: 'express', color: 'white' },
                { name: 'Socket.io', icon: 'socketdotio', color: 'white' },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#151515] border border-white/5 hover:border-white/20 transition-all shadow-sm">
                  <img src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color}`} alt={skill.name} className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-medium text-[#f4f3ef]/90">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>



        {/* Projects & Bento Grid Section */}
        <section id="projects" className="px-1 sm:px-2 w-full">
          <div className="mx-auto max-w-4xl w-full flex flex-col gap-1">

            {/* Bottom Row (GitHub & Socials) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 order-2">

              {/* Left Column (GitHub) */}
              <div className="flex flex-col h-full">

                {/* GitHub Contributions Widget */}
                <div className="bg-[#121211] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.7)] h-full flex flex-col justify-between overflow-hidden">
                  <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#f4f3ef]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      <h3 className="text-xl font-serif text-[#f4f3ef]">GitHub Contributions</h3>
                    </div>
                  </div>

                  <div className="w-full flex justify-center">
                    <GithubCalendarClient username="karnatiSoccer" />
                  </div>
                </div>

              </div>

              {/* Right Column (Socials Widget) */}
              <div className="flex flex-col h-full">
                <SocialGrid />
              </div>

            </div>

            {/* Top Row (Projects List) */}
            <div className="flex flex-col gap-1 order-1">
              <ProjectsList />
            </div>

          </div>
        </section>

        {/* Contact / Get In Touch Section & Spotify Widget */}
        <div className="px-1 sm:px-2 pb-2 w-full">
          <div className="mx-auto max-w-4xl w-full grid grid-cols-1 md:grid-cols-[35fr_65fr] gap-1">

            <div className="h-full w-full">
              <SpotifyWidget />
            </div>

            {/* Get In Touch */}
            <div className="w-full h-full bg-[#121211] rounded-[2rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.7)] border border-white/5 relative overflow-hidden">

              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img src="/33142-bi-ngang-trang.jpg" alt="Waves Background" className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121211] via-[#121211]/60 to-[#121211]/10" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-8 flex flex-col items-start justify-center h-full">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#f4f3ef]/50 uppercase mb-2">Get in touch</span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#f4f3ef] mb-3">Let's build something meaningful</h2>
                <p className="text-[#f4f3ef]/80 text-xs sm:text-sm font-mono max-w-xl mb-6 leading-relaxed">
                  Have an idea, a project, or just want to talk? I'm always open to a good conversation.
                </p>

                <a href="mailto:karnatisoccer.176@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1c1c1a]/50 hover:bg-[#2a2a2a]/80 border border-white/10 text-[#f4f3ef] font-semibold text-xs transition-all backdrop-blur-md shadow-lg hover:shadow-xl">
                  <svg className="w-3.5 h-3.5 text-[#f4f3ef]/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Say hello
                  <svg className="w-3.5 h-3.5 ml-1 text-[#f4f3ef]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
