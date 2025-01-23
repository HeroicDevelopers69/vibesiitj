import React from "react";

const TrendingItem = ({ title, subtitle, isLive }) => {
  return (
    <div className="bg-slate-950 p-3 rounded-lg border-2 border-gray-700">
      <p className="text-sm font-semibold">
        {title}
        {isLive && (
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full ml-2">
            LIVE
          </span>
        )}
      </p>
      {subtitle && <span className="text-xs text-gray-400">{subtitle}</span>}
    </div>
  );
};

export default TrendingItem;

