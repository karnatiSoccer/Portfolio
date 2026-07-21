'use client';

import { GitHubCalendar } from 'react-github-calendar';

export default function GithubCalendarClient({ username }) {
  // Only show the last 4.5 months to fit perfectly in the left column
  const selectLastHalfYear = contributions => contributions.slice(-135);

  return (
    <div className="w-full flex justify-center text-[#f4f3ef]/80 pb-2">
      <GitHubCalendar 
        username={username}
        colorScheme="dark"
        theme={{
          dark: ['#2a2a2a', '#7e22ce', '#9333ea', '#a855f7', '#c084fc']
        }}
        fontSize={13}
        blockSize={13}
        blockMargin={4}
        transformData={selectLastHalfYear}
        hideTotalCount={true}
        hideColorLegend={true}
      />
    </div>
  );
}
