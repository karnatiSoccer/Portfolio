
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out
//         ${isScrolled ? 'px-4 sm:px-6 pt-4 pb-0' : 'px-0 pt-0 pb-4'}`}
//     >
//       <header
//         className={`mx-auto flex items-center justify-between transition-all duration-300 ease-in-out bg-[#f4f3ef] border-2 border-[#1c1c1a]
//           ${isScrolled
//             ? 'max-w-4xl h-16 rounded-xl px-6 shadow-[0_8px_16px_rgba(28,28,26,0.15)]'
//             : 'max-w-[80%] h-20 rounded-b-2xl px-12 shadow-[0_12px_24px_rgba(28,28,26,0.05)]'
//           }`}
//       >

//         {/* Left Side: Name Branding (Increased size to text-base / text-xs) */}
//         <Link href="/" className="flex flex-col group">
//           <span className="text-base font-extrabold tracking-tight text-[#1c1c1a] font-serif uppercase">
//             Gaurav Mehra
//           </span>
//           <span className="text-xs font-bold tracking-widest text-[#1c1c1a]/60 uppercase font-mono mt-0.5">
//             Freelance Developer
//           </span>
//         </Link>

//         {/* Right Side: Desktop Navigation Links (Increased to text-sm font-bold) */}
//         <nav className="hidden md:flex items-center gap-4">
//           <Link
//             href="/"
//             className="rounded-lg px-4 py-2 text-sm font-bold tracking-wider uppercase text-[#1c1c1a] hover:bg-[#1c1c1a]/5 transition-all duration-200"
//           >
//             Home
//           </Link>
//           <Link
//             href="/projects"
//             className="rounded-lg bg-[#1c1c1a] px-5 py-2 text-sm font-bold tracking-wider uppercase text-[#f4f3ef] hover:bg-[#1c1c1a]/90 transition-all duration-200"
//           >
//             Projects
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           type="button"
//           className="p-2 text-[#1c1c1a] md:hidden focus:outline-none"
//         >
//           <span className="text-sm font-bold uppercase tracking-wider">
//             {isOpen ? 'Close' : 'Menu'}
//           </span>
//         </button>
//       </header>

//       {/* Mobile Dropdown Panel Menu */}
//       {isOpen && (
//         <div className="mx-auto mt-3 max-w-4xl rounded-xl border-2 border-[#1c1c1a] bg-[#f4f3ef] px-6 py-4 space-y-2 md:hidden shadow-[0_8px_16px_rgba(28,28,26,0.15)]">
//           <Link
//             href="/"
//             onClick={() => setIsOpen(false)}
//             className="block py-2 text-base font-bold uppercase tracking-wider text-[#1c1c1a]"
//           >
//             Home
//           </Link>
//           <Link
//             href="/projects"
//             onClick={() => setIsOpen(false)}
//             className="block py-2 text-base font-bold uppercase tracking-wider text-[#1c1c1a]/60"
//           >
//             Projects
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function NavLink({ href, children, isPrimary, onClick, className }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const baseClasses = isPrimary
    ? "rounded-lg bg-[#f4f3ef] px-5 py-2 text-sm font-bold tracking-wider uppercase text-[#1c1c1a] hover:bg-white"
    : "rounded-lg px-4 py-2 text-sm font-bold tracking-wider uppercase text-[#f4f3ef]/80 hover:text-white";

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden transition-all duration-200 ${baseClasses} ${className || ''}`}
    >
      <span className="relative z-10">{children}</span>
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 45px at ${position.x}px ${position.y}px, ${isPrimary ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)'
            }, transparent 100%)`,
        }}
      />
    </Link>
  );
}

function MenuButton({ isOpen, onClick }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type="button"
      className="relative overflow-hidden rounded-lg p-2 text-[#f4f3ef] md:hidden focus:outline-none transition-all duration-200"
    >
      <span className="relative z-10 text-sm font-bold uppercase tracking-wider">
        {isOpen ? 'Close' : 'Menu'}
      </span>
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 45px at ${position.x}px ${position.y}px, rgba(255,255,255,0.2), transparent 100%)`,
        }}
      />
    </button>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out px-4 sm:px-6
        ${isScrolled ? 'pt-2 pb-0' : 'pt-3 pb-0'}`}
    >
      <header
        className={`mx-auto w-[92%] sm:w-full flex items-center justify-between transition-all duration-300 ease-in-out border border-white/10
          ${isScrolled
            ? 'max-w-4xl h-16 rounded-2xl px-6 shadow-2xl bg-[#121211]/40 backdrop-blur-md'
            : 'max-w-4xl h-16 rounded-2xl px-6 sm:px-8 shadow-lg bg-[#121211]'
          }`}
      >

        {/* Left Side: Name Branding */}
        <Link href="/" className="flex flex-col group">
          <span className="text-base font-extrabold tracking-tight text-[#f4f3ef] font-serif uppercase">
            Soccer Karnati
          </span>
        </Link>

        {/* Right Side: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          {/* <NavLink href="/#skills">Skills</NavLink> */}
          <NavLink href="/projects">Projects</NavLink>

          <div className="flex items-center gap-6 border-l border-white/10 pl-4">

            <a
              href="https://github.com/karnatiSoccer" target="_blank"
              rel="noopener noreferrer"
              className="text-[#f4f3ef]/80 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/soccer-karnati/" target="_blank" rel="noopener noreferrer" className="text-[#f4f3ef]/80 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </header>

      {/* Mobile Dropdown Panel Menu */}
      {isOpen && (
        <div className="mx-auto mt-3 max-w-4xl rounded-xl border border-white/10 bg-[#121211]/60 backdrop-blur-md px-6 py-4 space-y-2 md:hidden shadow-2xl flex flex-col">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-bold uppercase tracking-wider text-[#f4f3ef]"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-bold uppercase tracking-wider text-[#f4f3ef]"
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-bold uppercase tracking-wider text-[#f4f3ef]/60"
          >
            Projects
          </Link>

          <div className="pt-4 mt-2 flex items-center gap-6 border-t border-white/10">
            <a href="https://github.com/karnatiSoccer" target="_blank" rel="noopener noreferrer" className="text-[#f4f3ef]/80 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
            </a>
            <a href="https://linkedin.com/in/karnatisoccer" target="_blank" rel="noopener noreferrer" className="text-[#f4f3ef]/80 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}