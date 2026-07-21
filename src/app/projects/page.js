import React from 'react';

const projects = [
    {
        title: "GitLens",
        date: "Dec 2025",
        description: "GitLens provides AI-driven repository insights with summaries, visualizations, and Markdown support, built using React, TypeScript, and Vite.",
        tags: [
            { name: "React", icon: "react", color: "61DAFB" },
            { name: "TypeScript", icon: "typescript", color: "white" },
            { name: "Gemini AI", icon: "googlegemini", color: "8E75B2" },
            { name: "Lucide Icons", icon: "lucide", color: "white" },
        ],
        bgStyle: "bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-[#121211]",
        link: "#",
        mockup: (
            <div className="w-full h-full bg-[#0a0a0a] flex">
                <div className="w-[30%] h-full border-r border-white/5 p-3 flex flex-col gap-3">
                    <div className="h-4 w-16 bg-white/10 rounded-full mb-2"></div>
                    <div className="h-2 w-full bg-white/5 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-white/5 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-white/5 rounded-full"></div>
                </div>
                <div className="flex-1 p-4 flex flex-col gap-4">
                    <div className="h-20 w-full bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border-2 border-indigo-500/50 border-t-indigo-400 animate-spin"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-white/5 rounded-lg border border-white/5"></div>
                        <div className="h-12 bg-white/5 rounded-lg border border-white/5"></div>
                        <div className="h-12 bg-white/5 rounded-lg border border-white/5"></div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Cerebro",
        date: "Aug 2025 - Sep 2025",
        description: "Cerebro is a content organization app that helps users save and manage ideas, notes, tasks, and links in one place. It keeps everything structured and easily accessible.",
        tags: [
            { name: "React", icon: "react", color: "61DAFB" },
            { name: "TypeScript", icon: "typescript", color: "white" },
            { name: "Node.js", icon: "nodedotjs", color: "339933" },
            { name: "MongoDB", icon: "mongodb", color: "47A248" },
            { name: "Framer Motion", icon: "framer", color: "0055FF" },
        ],
        bgStyle: "bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-[#121211]",
        link: "#",
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
        title: "Trinity",
        date: "Apr 2025 - May 2025",
        description: "Trinity is a robust and scalable student management platform that handles student data, courses, and administrative tasks in one place. Built for speed, security, and simplicity.",
        tags: [
            { name: "Next.js", icon: "nextdotjs", color: "white" },
            { name: "TypeScript", icon: "typescript", color: "white" },
            { name: "Node.js", icon: "nodedotjs", color: "339933" },
            { name: "MongoDB", icon: "mongodb", color: "47A248" },
        ],
        bgStyle: "bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-[#121211]",
        link: "#",
        mockup: (
            <div className="w-full h-full bg-[#0a0a0a] flex flex-col p-4">
                <div className="w-full h-8 border-b border-white/10 flex items-center gap-4 mb-3">
                    <div className="h-3 w-16 bg-blue-500/40 rounded-full"></div>
                    <div className="h-2 w-12 bg-white/10 rounded-full"></div>
                    <div className="h-2 w-12 bg-white/10 rounded-full"></div>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-3">
                    <div className="bg-blue-500/10 rounded-xl border border-blue-500/20 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex-1 bg-white/5 rounded-xl border border-white/5"></div>
                        <div className="flex-1 bg-white/5 rounded-xl border border-white/5"></div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Academia",
        date: "Jan 2025 - Mar 2025",
        description: "Academia is a modern student learning management platform that connects students and educators. Features include live classes, assignments, and progress tracking, all wrapped in an intuitive design.",
        tags: [
            { name: "React", icon: "react", color: "61DAFB" },
            { name: "Express", icon: "express", color: "white" },
            { name: "Node.js", icon: "nodedotjs", color: "339933" },
            { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
        ],
        bgStyle: "bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-[#121211]",
        link: "#",
        mockup: (
            <div className="w-full h-full bg-[#0a0a0a] flex gap-3 p-4">
                <div className="flex-1 bg-emerald-500/10 rounded-xl border border-emerald-500/20 p-3 flex flex-col gap-3">
                    <div className="h-24 w-full bg-emerald-500/20 rounded-lg"></div>
                    <div className="h-3 w-1/2 bg-white/10 rounded-full mt-1"></div>
                    <div className="h-2 w-3/4 bg-white/5 rounded-full"></div>
                </div>
                <div className="w-[40%] flex flex-col gap-3">
                    <div className="h-16 w-full bg-white/5 rounded-xl border border-white/5"></div>
                    <div className="flex-1 w-full bg-white/5 rounded-xl border border-white/5"></div>
                </div>
            </div>
        )
    }
];

export default function Projects() {
    return (
        <div className="relative min-h-screen">
            <div className="w-full p-1 flex flex-col gap-1">
                <section className="px-1 sm:px-2 w-full pt-2 pb-16">
                    <div className="mx-auto max-w-5xl w-full flex flex-col gap-4">

                        {/* Header Section */}
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

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mb-12">
                            {projects.map((project, idx) => (
                                <div key={idx} className="flex flex-col bg-[#121211] rounded-[2rem] border border-white/5 overflow-hidden hover:border-white/10 transition-colors group shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.7)]">

                                    {/* Image/Mockup Section */}
                                    <div className={`w-full h-[260px] p-6 pb-0 relative overflow-hidden ${project.bgStyle}`}>
                                        <div className="w-full h-full bg-[#0a0a0a] rounded-t-xl border-t border-x border-white/10 shadow-2xl relative overflow-hidden flex flex-col transform group-hover:-translate-y-2 transition-transform duration-500">

                                            {/* Browser header */}
                                            <div className="h-8 w-full border-b border-white/10 flex items-center px-4 gap-2 bg-[#121211] shrink-0">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                                            </div>

                                            {/* Mockup content */}
                                            <div className="flex-1 w-full relative">
                                                {project.mockup}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-[#f4f3ef] mb-1.5">{project.title}</h3>
                                                <p className="text-[#f4f3ef]/50 text-sm font-medium">{project.date}</p>
                                            </div>
                                            <a href={project.link} className="text-[#f4f3ef]/50 hover:text-[#f4f3ef] transition-colors p-2.5 bg-white/5 hover:bg-white/10 rounded-full">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
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