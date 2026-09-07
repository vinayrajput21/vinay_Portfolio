import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { topicMeta, dsaData } from "../Services/dsaData.js";

const difficultyStyle = {
  Easy: "bg-[#0ACF83]",
  Medium: "bg-[#FFDD55]",
  Hard: "bg-red-400",
};

function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="border-2 border-black overflow-hidden rounded-lg w-full">
      <div className="bg-[#1e1e1e] border-b-2 border-black px-3 sm:px-4 py-2 flex items-center justify-between gap-2">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-400 font-mono text-[11px] truncate">
          {language || "java"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className={
            "font-mono text-[11px] font-bold px-2 sm:px-2.5 py-1 border-2 border-black transition-colors shrink-0 " +
            (copied
              ? "bg-[#0ACF83] text-black"
              : "bg-[#FFDD55] text-black hover:bg-white")
          }
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language || "javascript"}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "12px sm:16px",
            fontSize: "0.8rem sm:0.85rem",
            lineHeight: 1.5,
            background: "#1e1e1e",
          }}
          wrapLongLines={false}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

function Dsa({ topicKey }) {
  const meta = topicMeta[topicKey];
  const problems = dsaData[topicKey] ?? [];

  return (
    <div className="w-full">
      <div className="flex-shrink-0 text-black border-black mb-6 md:mb-10">
        <span className="inline-block bg-[#0ACF83] text-black text-xs sm:text-sm font-bold px-3 py-1 -rotate-1 border-2 border-white mb-2">
          Striver&apos;s DSA Sheet
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 break-words">
          DSA Blogs
        </h1>
        <p className="text-black text-sm sm:text-base max-w-2xl leading-relaxed">
          Daily write-ups of problems and solutions from Striver&apos;s DSA
          sheet.
        </p>

        <div className="border border-black border-1 mt-3"></div>
      </div>

      <div className="mb-6 md:mb-7">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 break-words">
          {meta.label}
        </h2>
        <p className="text-gray-700 font-semibold text-xs sm:text-sm">
          {problems.length}{" "}
          {problems.length === 1 ? "problem" : "problems"} solved so far
        </p>
      </div>

      {problems.length === 0 ? (
        <div className="bg-white border-2 sm:border-4 border-black rounded-lg shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] p-4 sm:p-6 font-semibold text-sm sm:text-base">
          Nothing posted here yet — check back soon.
        </div>
      ) : (
        <div className="flex flex-col gap-5 sm:gap-7">
          {problems.map((problem, index) => (
            <article
              key={problem.title + index}
              className="bg-white border-2 sm:border-4 border-black shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] rounded-lg p-4 sm:p-6 overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap border-b-2 border-black pb-3 mb-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold break-words">
                  {problem.title}
                </h3>
              </div>

              <section className="mb-4">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-[#0ACF83] mb-2">
                  Question
                </h4>
                <p className="leading-relaxed text-gray-900 text-sm sm:text-base break-words">
                  {problem.question}
                </p>
              </section>

              <section className="mb-4">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-[#0ACF83] mb-2">
                  Approach
                </h4>
                <p className="leading-relaxed text-gray-900 text-sm sm:text-base break-words">
                  {problem.approach}
                </p>
              </section>

              <section className="w-full min-w-0">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-[#0ACF83] mb-2">
                  Solution
                </h4>

                <CodeBlock code={problem.code} language={problem.language} />
              </section>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dsa;