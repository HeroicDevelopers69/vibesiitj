import React from "react";
import SearchBar from "./RightSideBar/SearchBar";
import SubscriptionBox from "./RightSideBar/SubscriptionBox";
import WhatsHappening from "./RightSideBar/WhatsHappening";

const RightSideBar = () => {
  const trends = [
    { title: "Khloé in Wonder Land", isLive: true },
    { title: "#GalaxyS25Ultra", subtitle: "Promoted by Samsung India" },
    { title: "#JalgaonTrainAccident" },
    { title: "#RailwayLevel1_1Lakh_VacancyDo", subtitle: "51.5K posts" },
    { title: "#SugandhaMishra" },
  ];

  return (
    <div className="w-80 p-4 bg-slate-950 text-white rounded-xl space-y-4">
      <SearchBar />
      <SubscriptionBox />
      <WhatsHappening trends={trends} />
    </div>
  );
};

export default RightSideBar;
