'use client';

import React from 'react';

export default function SpotifyWidget() {
  // Add your Spotify Profile URL here
  const spotifyProfileUrl = "https://open.spotify.com/user/your-spotify-id"; // <-- Replace this with your link

  return (
    <a 
      href={spotifyProfileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full bg-[#121211] rounded-[2rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.7)] border border-white/5 p-5 sm:p-6 lg:p-8 relative overflow-hidden flex flex-col justify-start hover:border-[#1ED760]/50 transition-colors group cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <svg className="w-5 h-5 text-[#1ED760]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.66 12.9c.42.3.6.84.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
        <h3 className="text-[#f4f3ef]/80 font-bold text-base tracking-wide">Last Played</h3>
      </div>

      {/* Track Info */}
      <div className="flex flex-col gap-1 relative z-10">
        <h4 className="text-[#f4f3ef] font-bold text-lg sm:text-xl tracking-tight mb-1">
          I am listening to Alia
        </h4>
        <p className="text-[#f4f3ef]/60 font-mono text-xs uppercase tracking-wider font-semibold">
          THE PURSUETIST HOUSE
        </p>
        <p className="text-[#f4f3ef]/40 font-mono text-[10px] sm:text-xs uppercase tracking-wider">
          The Pursuetist House Vol. 1
        </p>
      </div>

      {/* Album Art (Fake Record / Vinyl at the bottom) */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-zinc-900 rounded-t-3xl rounded-b-none border border-white/10 shadow-2xl flex items-start justify-center overflow-hidden">
        <div className="w-full h-full bg-[#f4f3ef] flex items-center justify-center pt-6">
            <svg className="w-12 h-12 text-zinc-900" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-7.5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        </div>
      </div>
    </a>
  );
}
