'use client';

import { Leetcodecalendar } from 'react-leetcode-calendar';

export default function LeetCodeCalendarClient({ username }) {
  return (
    <div className="w-full flex justify-center text-[#f4f3ef]/80 pb-2 overflow-x-auto">
      <div className="min-w-fit">
        <Leetcodecalendar 
          username={username}
          colors={{
            noActivity: "#2a2a2a",
            activity: ["#581c87", "#7e22ce", "#9333ea", "#a855f7", "#c084fc"],
            text: "#f4f3ef",
            title: "transparent", // Hide default title since we have a custom one
            months: "#f4f3ef80",
            weekdays: "#f4f3ef80",
            totalCount: "#f4f3ef80",
            legend: "#f4f3ef80",
            background: "transparent",
            calendarBackground: "transparent",
            border: "transparent",
            hover: "#d8b4fe",
            loading: "#f4f3ef80",
            error: "#ff0000",
            noData: "#f4f3ef80"
          }}
          showTitle={false}
        />
      </div>
    </div>
  );
}
