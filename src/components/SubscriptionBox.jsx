import React from "react";

const SubscriptionBox = () => {
  return (
    <div className="bg-slate-950 p-4 rounded-xl text-left space-y-2 shadow-md border-2 border-gray-700">
      <h3 className="text-lg font-bold">Subscribe to Premium</h3>
      <p className="text-sm text-gray-400">
        Subscribe to unlock new features and receive a share of revenue.
      </p>
      <button className="mt-2 bg-[#1D9BF0] hover:bg-[#1A8CD8] text-white font-bold py-1.5 px-4 rounded-full w-3/10 text-base shadow-md">
        Subscribe
      </button>
    </div>
  );
};

export default SubscriptionBox;
