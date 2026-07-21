


// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className="relative isolate min-h-screen bg-zinc-950 overflow-hidden">

//       {/* GLOW 1: Top Right / Center Mesh (Existing) */}
//       <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
//         <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-emerald-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.187rem]" />
//       </div>

//       {/* GLOW 2: NEW Top Left Mesh to reflect light behind the left branding text */}
//       <div className="absolute left-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
//         <div className="aspect-[500/500] w-[25rem] bg-gradient-to-br from-blue-600 to-purple-600 opacity-15 rounded-full -translate-x-1/2 -translate-y-1/2" />
//       </div>

//       {/* Hero Content Section */}
//       <div className="mx-auto max-w-4xl py-32 px-6 sm:py-48 text-center">
//         <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
//           Building Digital Solutions with Purpose
//         </h1>
//         <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-xl mx-auto">
//           Hi, I'm Gaurav Mehra. I build clean, modern, scalable applications
//           and explore nature-inspired computing algorithms.
//         </p>
//         <div className="mt-10 flex items-center justify-center gap-x-6">
//           <Link
//             href="/projects"
//             className="rounded-md bg-zinc-100 px-3.5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm hover:bg-zinc-200 transition-colors"
//           >
//             View My Work
//           </Link>
//           <a href="#about" className="text-sm font-semibold leading-6 text-zinc-300 hover:text-white transition-colors">
//             Learn more <span aria-hidden="true">→</span>
//           </a>
//         </div>
//       </div>

//       {/* About Section */}
//       <div id="about" className="mx-auto max-w-4xl py-24 px-6 border-t border-zinc-900">
//         <h2 className="text-2xl font-bold text-zinc-100 mb-4">About Me</h2>
//         <p className="text-zinc-400 leading-7">
//           Currently pursuing software development with a deep fascination for complex system architecture,
//           clean UI/UX principles, and highly performant backend architectures.
//         </p>
//       </div>

//     </div>
//   );
// }

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
          <div className="mx-auto max-w-4xl w-full bg-[#121211] rounded-[2rem] p-2 sm:p-8 lg:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.7)] border border-white/5">

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

                {/* Social Icons */}
                {/* <div className="mt-5 flex items-center justify-center sm:justify-start gap-4 text-[#f4f3ef]/80">
                <a href="https://github.com/karnatiSoccer" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" /></svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
              </div> */}
              </div>
            </div>

            {/* About Me Section */}
            <div className="pt-6 sm:pt-8" id="about">

              {/* <div id="about"> */}

              <h2 className="text-2xl font-bold text-[#f4f3ef] mb-3 text-center sm:text-left">About me</h2>

              <div className="space-y-6 text-[#f4f3ef]/80 leading-relaxed font-mono text-sm sm:text-base text-center sm:text-left">
                <p>
                  Currently pursuing my Bachelor of Engineering in Computer Science and Technology at Jawaharlal Nehru Technological University (2023-2027). I'm always learning, refining my skills, and exploring how design and code can work together to create things that feel both useful and enjoyable to use.
                </p>

                {/* Info List */}
                <div className="pt-2 flex flex-col gap-3 font-mono text-sm text-[#f4f3ef]/90 text-left">
                  {/* <div className="flex items-center justify-center sm:justify-start gap-3">
                  <svg className="w-4 h-4 text-[#f4f3ef]/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  <span>Software Engineer @ <span className="inline-flex items-center font-bold text-[#f4f3ef]"><svg className="w-3.5 h-3.5 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Ideavo.ai</span></span>
                </div> */}

                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <svg className="w-4 h-4 text-[#f4f3ef]/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>Hyderabad, India</span>
                  </div>

                  {/* <div className="flex items-center justify-center sm:justify-start gap-3">
                  <svg className="w-4 h-4 text-[#f4f3ef]/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>officeAbhisharma</span>
                </div> */}

                  {/* <div className="flex items-center justify-center sm:justify-start gap-3">
                  <svg className="w-4 h-4 text-[#FFA116] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.736-1.15-.736-1.868s.269-1.402.736-1.869l2.895-2.836c.118-.113.313-.113.431 0l2.673 2.653c.123.118.123.313 0 .431l-2.457 2.41c-.059.057-.059.15 0 .208l3.418 3.44c.059.057.152.057.211 0l2.253-2.18c.059-.057.152-.057.211 0l1.041 1.056c.123.118.123.313 0 .431zM21.365 7.842l-2.902 2.858c-.118.113-.313.113-.431 0l-2.668-2.658c-.123-.118-.123-.313 0-.431l2.457-2.41c.059-.057.059-.15 0-.208l-3.418-3.44c-.059-.057-.152-.057-.211 0l-2.253 2.18c-.059.057-.152.057-.211 0l-1.042-1.057c-.123-.118-.123-.313 0-.431l2.697-2.606c.467-.467 1.111-.662 1.823-.662s1.357.195 1.824.662l4.332 4.363c.467.467.736 1.15.736 1.868s-.269 1.402-.736 1.869zM16.488 2.502l-3.498 3.39c-.118.113-.313.113-.431 0L11.517 4.84c-.123-.118-.123-.313 0-.431l3.499-3.39c.118-.113.313-.113.431 0l1.041 1.053c.123.118.123.313 0 .43z" /></svg>
                  <a href="#https://leetcode.com/u/karnati_soccer/" className="underline decoration-[#f4f3ef]/40 underline-offset-4 hover:decoration-[#f4f3ef] transition-colors">Solved 500+ coding problems on LeetCode</a>
                </div> */}
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
          <div id="skills" className="mx-auto max-w-4xl w-full bg-[#121211] rounded-[2rem] p-2 sm:p-8 lg:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.7)] border border-white/5">
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
                    {/* <div className="flex gap-2">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#e9d5ff] text-[#7e22ce] opacity-50 cursor-not-allowed">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#f4f3ef] text-[#121211] hover:bg-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div> */}
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
