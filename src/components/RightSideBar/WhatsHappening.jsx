import React from "react";
import TrendingItem from "./TrendingItem";

const WhatsHappening = ({ trends }) => {
  return (
    <div className="bg-slate-950 p-4 rounded-xl shadow-md space-y-3 border-2 border-gray-700">
      <h3 className="text-lg font-bold">What's happening</h3>
      {trends.map((trend, index) => (
        <TrendingItem
          key={index}
          title={trend.title}
          subtitle={trend.subtitle}
          isLive={trend.isLive}
        />
      ))}
      <button className="w-full mt-3 text-blue-400 hover:text-blue-500 font-semibold">
        Show more
      </button>
    </div>
  );
};

export default WhatsHappening;
