import React from 'react';
import Image from 'next/image';

const projects = [
    {
        title: "Secure E-Voting System",
        date: "May 2026",
        description: "Built a Docker-containerized full-stack e-voting platform secured with JWT and AES-256/RSA encryption. Deployed Solidity contracts on Ethereum via Hardhat for an immutable vote ledger. Expanded AI fraud-detection microservice to flag anomalous votes in real time.",
        tags: [
            { name: "React", icon: "react", color: "61DAFB" },
            { name: "Node.js", icon: "nodedotjs", color: "339933" },
            { name: "FastAPI", icon: "fastapi", color: "009688" },
            { name: "Solidity", icon: "solidity", color: "white" },
            { name: "Docker", icon: "docker", color: "2496ED" },
        ],
        bgStyle: "bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-[#121211]",
        link: "https://github.com/karnatiSoccer/Secure-evoting-system",
        mockup: (
            <Image src="/e-vote-sec.png" alt="Secure E-Voting System" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
        )
    },
    {
        title: "Real-Time Chat",
        date: "October 2025",
        description: "Engineered a full-stack chat app supporting thousands of concurrent users and delivering messages in <200 ms. Designed RESTful APIs for user authentication and message history retrieval, with persistent state management for seamless reconnection.",
        tags: [
            { name: "React", icon: "react", color: "61DAFB" },
            { name: "Node.js", icon: "nodedotjs", color: "339933" },
            { name: "MongoDB", icon: "mongodb", color: "47A248" },
            { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
        ],
        bgStyle: "bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-[#121211]",
        link: "https://github.com/karnatiSoccer/Connect",
        mockup: (
            <div className="w-full h-full bg-[#f8f9fa] flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-[180px] bg-white rounded-xl shadow-lg border border-black/5 p-5 flex flex-col gap-3">
                    <div className="h-3 w-1/2 bg-black/10 rounded-full mx-auto mb-2"></div>
                    <div className="h-7 w-full bg-black/5 rounded-md"></div>
                    <div className="h-7 w-full bg-black/5 rounded-md"></div>
                    <div className="h-7 w-full bg-black/80 rounded-md mt-2"></div>
                </div>
            </div>
        )
    },
    {
        title: "QuickShow (BookMyShow Clone)",
        date: "October 2025",
        description: "Replicated the core UI/UX of a major ticketing platform using React and Tailwind CSS. Integrated Clerk for secure user data handling and developed a dynamic seat selection module with real-time availability updates.",
        tags: [
            { name: "React", icon: "react", color: "61DAFB" },
            { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
            { name: "Clerk", icon: "clerk", color: "white" },
            { name: "Stripe", icon: "stripe", color: "008CDD" },
        ],
        bgStyle: "bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-[#121211]",
        link: "https://github.com/karnatiSoccer/BookMyShow-Clone",
        mockup: (
            <Image src="/quickshow.png" alt="QuickShow" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
        )
    }
];

export default function Projects() {
    return (
        <div className="relative min-h-screen">
            <div className="w-full p-1 flex flex-col gap-1">
                <section className="px-1 sm:px-2 w-full pt-2 pb-16">
                    <div className="mx-auto max-w-5xl w-full flex flex-col gap-4">

                        <div className="flex flex-col items-center mt-2 mb-10 text-center">
                            <div className="px-5 py-2 rounded-full border border-white/10 bg-[#121211] text-[#f4f3ef] text-sm font-semibold w-fit mx-auto mb-5 shadow-sm">
                                Projects Showcase
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#f4f3ef] tracking-tight mb-6 leading-tight">
                                Not Just Built - Built to Matter
                            </h1>
                            <p className="text-xl md:text-2xl font-bold text-[#f4f3ef]/90 mb-4">
                                Code with a Cause.
                            </p>
                            <p className="text-[#f4f3ef]/60 text-base md:text-lg max-w-2xl mx-auto font-medium">
                                I build clean, modern digital solutions that truly make a difference.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mb-12">
                            {projects.map((project, idx) => (
                                <div key={idx} className="flex flex-col bg-[#121211] rounded-[2rem] border border-white/5 overflow-hidden hover:border-white/10 transition-colors group shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.7)]">

                                    <div className={`w-full h-[260px] p-6 pb-0 relative overflow-hidden ${project.bgStyle}`}>
                                        <div className="w-full h-full bg-[#0a0a0a] rounded-t-xl border-t border-x border-white/10 shadow-2xl relative overflow-hidden flex flex-col transform group-hover:-translate-y-2 transition-transform duration-500">

                                            <div className="h-8 w-full border-b border-white/10 flex items-center px-4 gap-2 bg-[#121211] shrink-0">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                                            </div>

                                            <div className="flex-1 w-full relative">
                                                {project.mockup}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-[#f4f3ef] mb-1.5">{project.title}</h3>
                                                <p className="text-[#f4f3ef]/50 text-sm font-medium">{project.date}</p>
                                            </div>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#f4f3ef]/50 hover:text-[#f4f3ef] transition-colors p-2.5 bg-white/5 hover:bg-white/10 rounded-full">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                                </svg>
                                            </a>
                                        </div>

                                        <p className="text-[#f4f3ef]/70 text-sm md:text-base leading-relaxed mb-8 font-medium">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2.5 mt-auto">
                                            {project.tags.map(tag => (
                                                <div key={tag.name} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171717] border border-white/5">
                                                    <img src={`https://cdn.simpleicons.org/${tag.icon}/${tag.color}`} alt={tag.name} className="w-3.5 h-3.5" />
                                                    <span className="text-[#f4f3ef]/90 text-xs font-semibold">{tag.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}