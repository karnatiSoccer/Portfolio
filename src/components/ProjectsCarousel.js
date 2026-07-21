'use client';

import { useState } from 'react';

const projects = [
  {
    title: "Secure E-Voting System",
    date: "May 2026",
    tags: ["React", "Node.js/Express", "FastAPI", "Solidity", "Docker"],
    bullets: [
      "Built a Docker-containerized full-stack e-voting platform and secured data with JWT and AES-256/RSA encryption.",
      "Deployed three Solidity contracts on Ethereum via Hardhat, creating an immutable vote ledger with one-vote-per-voter enforcement.",
      "Expanded AI fraud-detection microservice (Scikit-learn Isolation Forest) to flag anomalous votes in real time, with audit logging."
    ],
    imageGradient: "linear-gradient(135deg, #FF9D6C 0%, #BB4E75 100%)",
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Real-Time Chat",
    date: "October 2025",
    tags: ["React", "Node.js", "WebSockets", "MongoDB", "TailwindCSS"],
    bullets: [
      "Engineered a full-stack chat app with React and Node.js/WebSockets, supporting thousands of concurrent users and delivering messages in <200 ms.",
      "Designed and integrated RESTful APIs Express.js for user authentication and message history retrieval from MongoDB.",
      "Improved client-side persistent state management to ensure seamless reconnection and message caching during network fluctuations."
    ],
    imageGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "BookMyShow Clone",
    date: "October 2025",
    tags: ["React", "Tailwind CSS", "Clerk", "Payment Gateway"],
    bullets: [
      "Replicated the core UI/UX of a major ticketing platform using React and Tailwind CSS, delivering a fully responsive and modern interface.",
      "Integrated Clerk for robust and secure user data handling. Developed a dynamic, visual seat selection and reservation module with real-time availability updates to prevent overbooking.",
      "Implemented a seamless payment gateway integration to handle secure and compliant transaction processing for ticket purchases."
    ],
    imageGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    liveLink: "#",
    repoLink: "#"
  }
];

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentIndex];

  return (
    <div className="group bg-[#121211] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl transition-shadow w-full">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-white/5">
        <h3 className="text-2xl font-serif text-[#f4f3ef]">Projects</h3>
        <div className="flex gap-2">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-[#f4f3ef] hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f4f3ef] text-[#121211] hover:bg-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10 relative">
          {/* Placeholder Background (You can replace this with an actual <img src="..." />) */}
          <div className="w-full h-full opacity-80" style={{ background: project.imageGradient }}></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white/50 font-mono text-sm tracking-widest uppercase">Project Preview</span>
          </div>
        </div>

        {/* Right Side: Description */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h4 className="text-xl font-bold text-[#f4f3ef]">{project.title}</h4>
            <span className="text-sm font-mono text-[#f4f3ef]/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">{project.date}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono font-medium px-3 py-1 bg-[#d96a35]/10 text-[#d96a35] rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <ul className="space-y-3 text-[#f4f3ef]/70 text-sm list-disc list-outside ml-4 mb-8">
            {project.bullets.map((bullet, idx) => (
              <li key={idx} className="pl-1 leading-relaxed">{bullet}</li>
            ))}
          </ul>

          {/* Links at the bottom */}
          <div className="mt-auto flex flex-wrap gap-4 pt-4 border-t border-white/5">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#f4f3ef] text-[#121211] px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide hover:bg-white transition-colors shadow-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Live Demo
            </a>
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 text-[#f4f3ef] px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              Git Repo
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
