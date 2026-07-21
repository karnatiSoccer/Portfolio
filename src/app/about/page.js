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
          <section className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 md:items-start">
            <div className="flex-1 space-y-6 mt-4 md:mt-0">
              <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">
                About Me
              </h4>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
                I am Ajinkya,<br />
                a curious <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#fbcfe8]">engineer</span>
              </h1>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base pt-2">
                Behind the screen, I'm someone who enjoys a good balance. I spend time coding and learning new things, but I also make space for the gym and staying active. I follow MMA regularly and appreciate the discipline and mindset behind it. I used to play chess, which shaped how I think and plan. I read Robert Greene, admire Jaun Elia's writing, and enjoy quiet moments that spark curiosity and growth.
              </p>
            </div>

            <div className="shrink-0 self-start md:mt-8">
              <div className="w-40 h-40 sm:w-56 sm:h-56 bg-white rounded-[2rem] overflow-hidden flex items-center justify-center shadow-xl">
                {/* Placeholder for the avatar image */}
                <div className="text-zinc-400 flex flex-col items-center">
                  <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  <span className="text-xs font-mono">Avatar</span>
                </div>
              </div>
            </div>
          </section>

          {/* Journey Section */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              My journey so far
            </h2>
            <div className="space-y-6 text-zinc-300 leading-relaxed text-sm sm:text-base">
              <p>
                I started college in 2022 mostly enjoying the experience , meeting new people, exploring different interests, and figuring things out as I went. Toward the end of that year, my curiosity shifted toward cybersecurity, where I began learning the fundamentals and earned a few certificates along the way.
              </p>
              <p>
                In 2023, I picked up Linux and Python, which slowly opened the door to web development. I started with basic HTML and CSS, then moved on to React, MongoDB, and Express. Around this time, I also worked through JavaScript's common bottlenecks and began understanding how things really work under the hood.
              </p>
              <p>
                By 2024, I was actively building projects, diving deeper into React, TypeScript, and more complex backend systems using WebSockets. In 2025, I finally broke out of tutorial hell, started building projects based on my own ideas, explored blockchain with Solidity and client-side Solana, and I'm currently learning Rust, one step at a time.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Skills
            </h2>
            <div className="space-y-4">
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-medium text-zinc-200 mb-1">Agents/LLMs</h3>
                <p className="text-zinc-400 text-sm sm:text-base">ClaudeCode , OpenCode , Cursor</p>
              </div>
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-medium text-zinc-200 mb-1">Languages</h3>
                <p className="text-zinc-400 text-sm sm:text-base">TypeScript ,Javascript , Python ,C++ ,SQL</p>
              </div>
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-medium text-zinc-200 mb-1">Databases & ORMs</h3>
                <p className="text-zinc-400 text-sm sm:text-base">MongoDB , PostgreSQL , Redis , MySQL , prisma , Drizzle , firebase ,supabase</p>
              </div>
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-medium text-zinc-200 mb-1">Libraries & Frameworks</h3>
                <p className="text-zinc-400 text-sm sm:text-base">NextJS , Ai-SDK by Vercel , React , Vite ,Express , NodeJS , TailwindCSS , MagicUI , Redux Recoil</p>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8">
              Timeline
            </h2>
            <div className="relative border-l border-zinc-800 ml-2 sm:ml-3 space-y-12 py-2">

              <div className="relative pl-6 sm:pl-8">
                <div className="absolute w-2.5 h-2.5 bg-zinc-500 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#1c1c1a]"></div>
                <div className="text-sm font-mono text-zinc-400 mb-2">2004</div>
                <div className="text-zinc-300 text-sm sm:text-base">Spent my early days getting around on all fours, much like a tiny, less-furry bear cub.</div>
              </div>

              <div className="relative pl-6 sm:pl-8">
                <div className="absolute w-2.5 h-2.5 bg-zinc-500 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#1c1c1a]"></div>
                <div className="text-sm font-mono text-zinc-400 mb-2">2022</div>
                <div className="text-zinc-300 text-sm sm:text-base">Started exploring programming, web fundamentals and linux.</div>
              </div>

              <div className="relative pl-6 sm:pl-8">
                <div className="absolute w-2.5 h-2.5 bg-zinc-500 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#1c1c1a]"></div>
                <div className="text-sm font-mono text-zinc-400 mb-2">2023</div>
                <div className="text-zinc-300 text-sm sm:text-base">Started learning Web development , HTML , CSS , JS</div>
              </div>

              <div className="relative pl-6 sm:pl-8">
                <div className="absolute w-2.5 h-2.5 bg-zinc-500 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#1c1c1a]"></div>
                <div className="text-sm font-mono text-zinc-400 mb-2">2024</div>
                <div className="text-zinc-300 text-sm sm:text-base">Focused on frontend with React and backend with express , still used to feel scared to typescript and postgreSQL got too much interested in blockchain</div>
              </div>

              <div className="relative pl-6 sm:pl-8">
                <div className="absolute w-2.5 h-2.5 bg-zinc-500 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#1c1c1a]"></div>
                <div className="text-sm font-mono text-zinc-400 mb-2">2025</div>
                <div className="text-zinc-300 text-sm sm:text-base">Comes the turning point of my development journey started working of more complex projects , learned typescript , started woking with UI and ORM libraries , started learning about blockchain , client side SOL and solidity</div>
              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
