import React from 'react';

const projects = [
  {
    title: "Secure E-Voting System",
    description: "An AI-powered Docker-containerized full-stack e-voting platform secured with JWT and AES-256/RSA encryption...",
    icon: (
      <svg className="w-7 h-7 text-[#f4f3ef]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    link: "#"
  },
  {
    title: "Real-Time Chat",
    description: "A full-stack chat app engineered with React and WebSockets, supporting thousands of concurrent users...",
    icon: (
      <svg className="w-7 h-7 text-[#f4f3ef]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    link: "#"
  },
  // {
  //   title: "BookMyShow Clone",
  //   description: "Replicated the core UI/UX of a major ticketing platform using React and Tailwind CSS...",
  //   icon: (
  //     <svg className="w-7 h-7 text-[#f4f3ef]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  //     </svg>
  //   ),
  //   link: "#"
  // }
];

export default function ProjectsList() {
  return (
    <div className="w-full flex flex-col bg-[#121211] rounded-[2rem] p-2 sm:p-8 lg:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.7)] border border-white/5">
      <h2 className="text-2xl font-bold text-[#f4f3ef] mb-6">
        Projects<span className="text-[#3b82f6]">.</span>
      </h2>

      <div className="flex flex-col gap-3">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            className="group flex items-center gap-5 bg-[#171717] hover:bg-[#202020] border border-white/5 hover:border-white/10 rounded-2xl p-4 transition-all shadow-sm"
          >
            {/* Icon Box */}
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
              {project.icon}
            </div>

            {/* Text Details */}
            <div className="flex flex-col overflow-hidden justify-center py-1">
              <h3 className="text-[#f4f3ef] font-semibold text-base mb-1 tracking-wide">{project.title}</h3>
              <p className="text-[#f4f3ef]/50 text-sm truncate font-medium">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Button */}
      <div className="mt-8 flex justify-center">
        <a
          href="/projects"
          className="px-6 py-2.5 rounded-full border border-white/10 text-[#f4f3ef]/80 text-sm font-semibold hover:bg-white/5 hover:text-white transition-colors"
        >
          See More Cool Stuff
        </a>
      </div>
    </div>
  );
}
