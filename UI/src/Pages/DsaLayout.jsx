import React, { useState } from "react";
import Dsa from "./Dsa.jsx";
import { topicOrder, topicMeta, dsaData } from "../Services/dsaData.js";

function DsaLayout() {
  const [activeTopic, setActiveTopic] = useState(topicOrder[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const totalQuestions = topicOrder.reduce(
    (acc, key) => acc + (dsaData[key]?.length ?? 0),
    0
  );

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#FFDD55]">
      <div className="md:hidden flex items-center justify-between p-4 border-b-4 border-black bg-[#0ACF83]">
        <div className="text-black font-bold text-sm">
          {topicMeta[activeTopic]?.label}
        </div>
        <button
          type="button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="border-2 border-black bg-[#FFDD55] px-3 py-1 font-bold text-xs shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
        >
          {isSidebarOpen ? "Close Topics" : "View Topics"}
        </button>
      </div>

      <div className="flex flex-1 min-h-0 relative">
        <aside
          className={
            "w-full sm:w-80 md:w-84 flex-shrink-0 bg-[#0ACF83] border-r-0 md:border-r-4 border-black overflow-y-auto p-4 absolute md:static inset-y-0 left-0 z-20 transition-transform duration-200 ease-in-out md:translate-x-0 " +
            (isSidebarOpen ? "translate-x-0" : "-translate-x-full")
          }
        >
          <div className="flex justify-between text-black font-bold text-sm mb-4 pl-1">
            <span>Topics</span>
            <span>Total Solved QnA: {totalQuestions}</span>
          </div>          
          <nav className="flex flex-col gap-3 md:gap-5">
            {topicOrder.map((key) => {
              const meta = topicMeta[key];
              const count = dsaData[key]?.length ?? 0;
              const isActive = key === activeTopic;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveTopic(key);
                    setIsSidebarOpen(false);
                  }}
                  aria-current={isActive ? "true" : undefined}
                  className={
                    "flex items-center gap-3 sm:gap-4 border-2 border-black px-3 py-3 sm:px-4 sm:py-4 font-semibold text-sm text-left transition-transform duration-150 " +
                    (isActive
                      ? "bg-[#FFDD55] -translate-x-0.5 -translate-y-0.5 shadow-[4px_4px_0px_#000] md:shadow-[6px_6px_0px_#000]"
                      : "bg-white shadow-[3px_3px_0px_#000] md:shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] md:hover:shadow-[6px_6px_0px_#000]")
                  }
                >
                  <span className="bg-black text-[#FFDD55] text-[10px] font-bold px-1.5 py-0.5 shrink-0">
                    {meta.number}
                  </span>
                  <span className="flex-1 truncate">{meta.label}</span>
                  <span className="text-xs text-gray-500 shrink-0">{count}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 min-w-0 overflow-y-auto px-4 sm:px-6 md:px-10 py-6 md:py-8 pb-20">
          <Dsa topicKey={activeTopic} />
        </main>
      </div>
    </div>
  );
}

export default DsaLayout;