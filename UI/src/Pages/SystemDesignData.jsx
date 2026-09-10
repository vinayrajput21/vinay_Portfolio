import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Small animated diagrams — pure CSS/SVG, no external libraries.     */
/* ------------------------------------------------------------------ */

const Box = ({ children, className = "" }) => (
  <div
    className={`px-3 py-2 rounded-lg border-2 border-black bg-white text-[11px] sm:text-xs font-black text-center leading-tight shadow-[2px_2px_0px_0px_#000] ${className}`}
  >
    {children}
  </div>
);

function DNSDiagram() {
  return (
    <div className="relative flex items-center justify-between gap-2 py-4">
      <Box className="w-20 sm:w-24">Client</Box>
      <div className="relative flex-1 h-6">
        <div className="absolute inset-x-0 top-1/2 h-[2px] bg-black/30" />
        <div className="dns-packet absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400 border-2 border-black" />
      </div>
      <Box className="w-24 sm:w-28 bg-emerald-100">
        DNS
        <div className="font-bold text-[9px] sm:text-[10px] text-slate-600 mt-0.5">
          amazon.com → 10.2.3.4
        </div>
      </Box>
      <div className="relative flex-1 h-6">
        <div className="absolute inset-x-0 top-1/2 h-[2px] bg-black/30" />
        <div className="dns-packet-2 absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00A896] border-2 border-black" />
      </div>
      <Box className="w-20 sm:w-24 bg-amber-100">Server</Box>
    </div>
  );
}

function ScalingDiagram() {
  return (
    <div className="grid grid-cols-2 gap-4 py-4">
      <div className="flex flex-col items-center gap-2">
        <p className="text-[10px] font-black uppercase tracking-wide text-slate-500">
          Vertical
        </p>
        <div className="vertical-grow rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-black text-[10px]">
          server
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-[10px] font-black uppercase tracking-wide text-slate-500">
          Horizontal
        </p>
        <div className="flex gap-2 items-end h-16">
          <div className="horizontal-box-1 w-8 h-8 rounded-md border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000]" />
          <div className="horizontal-box-2 w-8 h-8 rounded-md border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000]" />
          <div className="horizontal-box-3 w-8 h-8 rounded-md border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000]" />
        </div>
      </div>
    </div>
  );
}

function LoadBalancerDiagram() {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <Box className="w-16">Users</Box>
      <span className="font-black text-lg">→</span>
      <Box className="w-24 bg-amber-100">
        Load
        Balancer
      </Box>
      <div className="w-6" />
      <div className="flex flex-col gap-2">
        <Box className="w-20 lb-server-1">Server A</Box>
        <Box className="w-20 lb-server-2">Server B</Box>
        <Box className="w-20 lb-server-3">Server C</Box>
      </div>
    </div>
  );
}

function QueueDiagram() {
  return (
    <div className="flex items-center justify-between gap-2 py-4">
      <Box className="w-20">Backend</Box>
      <div className="relative flex-1 h-16 border-2 border-dashed border-black/30 rounded-lg flex items-center px-2 gap-2 overflow-hidden">
        <span className="absolute -top-4 left-1 text-[9px] font-black text-slate-500">
          QUEUE
        </span>
        <div className="queue-msg queue-msg-1 w-4 h-4 rounded bg-[#00A896] border border-black" />
        <div className="queue-msg queue-msg-2 w-4 h-4 rounded bg-[#00A896] border border-black" />
        <div className="queue-msg queue-msg-3 w-4 h-4 rounded bg-[#00A896] border border-black" />
      </div>
      <Box className="w-20 bg-amber-100">Worker</Box>
    </div>
  );
}

function FanOutDiagram() {
  return (
    <div className="flex items-center gap-4 py-4">
      <Box className="w-20 bg-amber-100">Event</Box>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2">
          <span className="fanout-line-1 h-[2px] flex-1 bg-black/30" />
          <Box className="w-20">Email</Box>
        </div>
        <div className="flex items-center gap-2">
          <span className="fanout-line-2 h-[2px] flex-1 bg-black/30" />
          <Box className="w-20">SMS</Box>
        </div>
        <div className="flex items-center gap-2">
          <span className="fanout-line-3 h-[2px] flex-1 bg-black/30" />
          <Box className="w-20">WhatsApp</Box>
        </div>
      </div>
    </div>
  );
}

function CAPDiagram() {
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      <Box className="w-20 cap-node-1 bg-amber-100">Consistency</Box>
      <span className="font-black text-slate-400">+</span>
      <Box className="w-20 cap-node-2 bg-amber-100">Availability</Box>
      <span className="font-black text-slate-400">+</span>
      <Box className="w-24 cap-node-3 bg-amber-100">
        Partition
        Tolerance
      </Box>
    </div>
  );
}

const DiagramFrame = ({ children }) => (
  <div className="bg-emerald-50/60 border-2 border-black/80 rounded-xl px-3 sm:px-5 my-1">
    {children}
  </div>
);


function ContentBlock({ title, badge, hook, points, diagram }) {
  return (
    <div className="bg-white border-3 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000] flex flex-col gap-3">
      {title && (
        <div className="flex items-center gap-3">
          {badge && (
            <span className="w-7 h-7 shrink-0 rounded-full bg-[#00A896] border-2 border-black flex items-center justify-center font-black text-xs text-white">
              {badge}
            </span>
          )}
          <h4 className="text-base sm:text-lg font-black text-black">
            {title}
          </h4>
        </div>
      )}

      {hook && (
        <p className="text-sm font-semibold text-slate-700 leading-relaxed">
          {hook}
        </p>
      )}

      {points && (
        <ul className="flex flex-col gap-2">
          {points.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 bg-emerald-50/60 border-2 border-black/70 rounded-lg px-3 py-2"
            >
              <span className="mt-1 w-2 h-2 shrink-0 rounded-full bg-[#00A896] border border-black" />
              <p className="text-sm text-slate-700 leading-snug">
                <span className="font-black text-black">{point.label}</span>
                {" — "}
                <span className="font-semibold">{point.text}</span>
              </p>
            </li>
          ))}
        </ul>
      )}

      {diagram && <DiagramFrame>{diagram}</DiagramFrame>}
    </div>
  );
}

const units = [
  {
    id: "unit-1",
    label: "Unit 1",
    title: "Introduction to System Design",
    chapters: [
      {
        id: "u1-c1",
        label: "Chapter 1",
        title: "What is System Design",
        hook:
          "Before any server exists, before a single line of code is written, someone has to answer a simpler question: what exactly are we building, and how will its pieces fit together? That question is system design.",
        points: [
          {
            label: "Definition",
            text: "the process of defining the architecture, components, modules, interfaces, and data of a system to satisfy a specific set of requirements",
          },
          {
            label: "Why it matters",
            text: "a system built without a plan usually works fine for 10 users and falls apart at 10,000 — design is what prevents that",
          },
          {
            label: "Two lenses",
            text: "design is usually looked at from two angles: the big picture and the fine detail — covered next chapter as HLD vs LLD",
          },
          {
            label: "It's not just 'does it work'",
            text: "designers weigh scalability, availability, latency, consistency, and cost against each other, because improving one often costs another",
          },
          {
            label: "The real job",
            text: "there's rarely one 'correct' design — good system design means choosing the trade-off that fits the actual problem, not the fanciest architecture",
          },
        ],
      },
      {
        id: "u1-c2",
        label: "Chapter 2",
        title: "HLD vs LLD vs Machine Code",
        hook:
          "Design happens in layers, each one zooming in further than the last — from a sketch of an entire city, down to the wiring inside a single building, down to the electricity itself.",
        points: [
          {
            label: "HLD (High-Level Design)",
            text: "the big picture — which services exist, how they talk to each other, where the databases and queues sit. The blueprint an architect hands over before construction starts",
          },
          {
            label: "LLD (Low-Level Design)",
            text: "the detailed design inside one component — class diagrams, database schemas, function signatures, API contracts, algorithms. The floor plan and wiring diagram for one specific room",
          },
          {
            label: "Machine code",
            text: "the instructions a processor actually runs, once compilers or interpreters translate the code developers write. Engineers rarely design at this level directly, but everything above eventually becomes this",
          },
          {
            label: "The flow",
            text: "requirements → HLD (what talks to what) → LLD (how each piece is built) → source code → compiled/interpreted machine code",
          },
          {
            label: "Why bother separating them",
            text: "HLD lets a whole team agree on the shape of a system before anyone writes a class; LLD lets one engineer build a component without holding the entire system in their head",
          },
        ],
      },
      {
        id: "u1-c3",
        label: "Chapter 3",
        title: "System Design Key Concepts",
        hook:
          "Every large system, no matter the domain, keeps returning to the same handful of building blocks. Here they are, one at a time.",
        topics: [
          {
            title: "DNS Resolution",
            hook:
              "Every website starts the same way: somewhere out there is a machine that never sleeps, waiting for someone to knock. We call it a server — and like any shop, it has an address.",
            points: [
              { label: "Server", text: "a machine that runs 24/7, reachable at a public IP address, e.g. 10.2.3.4" },
              { label: "The problem", text: "nobody remembers a string of numbers to visit a website" },
              { label: "DNS", text: "the Domain Name System — internet's phone book, mapping names like amazon.com to IP addresses" },
              { label: "DNS resolution", text: "the step where a name goes in and an IP address comes out, before the request even reaches the server" },
            ],
            diagram: <DNSDiagram />,
          },
          {
            title: "Scaling Servers",
            hook:
              "Picture a server with 2 CPUs and 4 GB of memory — enough for a quiet afternoon. Then a link goes viral, everyone shows up at once, and it runs out of memory and crashes.",
            points: [
              { label: "Vertical scaling", text: "increasing a single machine's capacity — more CPU, RAM, disk" },
              { label: "Cons", text: "gets costly past a point, and upgrading almost always means a restart — downtime while the shop is closed" },
              { label: "Horizontal scaling", text: "adding more machines to share the workload, instead of making one machine bigger" },
              { label: "Why it wins", text: "if one server struggles, the next request just goes to another — no restart, so downtime drops to zero" },
            ],
            diagram: <ScalingDiagram />,
          },
          {
            title: "Handling the Crowd / Traffic",
            hook:
              "Here's the catch with horizontal scaling: if every server shares the same DNS entry, users keep landing on the same one, over and over.",
            points: [
              { label: "Load balancer", text: "software (e.g. nginx) that sits in front of servers and decides, request by request, who handles it" },
              { label: "How it's wired", text: "DNS now points to the load balancer, not to any one server directly" },
              { label: "Round robin", text: "one common strategy — each new request goes to the next server in line" },
              { label: "Sizing", text: "load balancers usually get more CPU/RAM than the servers behind them, since they see every request" },
              { label: "On AWS", text: "Elastic Load Balancer (ELB) — built from many small workers so it can absorb sudden rushes" },
            ],
            diagram: <LoadBalancerDiagram />,
          },
          {
            title: "Routing with API Gateways",
            hook:
              "As a product grows, it rarely stays one big service. It splits into microservices — auth, orders, payments — each with its own fleet of servers.",
            points: [
              { label: "Microservices", text: "independent services, each with its own servers and its own load balancer" },
              { label: "The new problem", text: "a request for /auth must reach the auth service, not the order service" },
              { label: "API gateway", text: "a single, centralized front door that routes each request to the correct backend service by path" },
              { label: "Bonus", text: "authentication is commonly attached right at the gateway, turning away bad requests early" },
              { label: "On AWS", text: "Amazon API Gateway routes traffic; the services themselves usually run on EC2 (Elastic Compute)" },
            ],
          },
          {
            title: "Scalable Systems with Queues",
            hook:
              "An event fires that should notify a million users by email. You can't loop through a million addresses inside the request that triggered it — the backend would freeze until the last one sent.",
            points: [
              { label: "The fix", text: "make it asynchronous — hand the job to a separate email worker instead of doing it inline" },
              { label: "Real limit", text: "Gmail's API accepts roughly 10 emails/second; send faster and you get throttled" },
              { label: "Queue", text: "sits between backend and worker — backend pushes the request and moves on immediately, no waiting" },
              { label: "On AWS", text: "Amazon SQS (Simple Queue Service) is the queue that holds these messages" },
              { label: "Pull / polling", text: "the worker asks the queue \"anything for me?\" — short polling asks every second, long polling waits up to ~10s and collects a batch" },
              { label: "Push", text: "the alternative — the queue delivers events to the worker the moment they arrive" },
            ],
            diagram: <QueueDiagram />,
          },
          {
            title: "Fan-Out / Pub-Sub",
            hook:
              "Sometimes a single event needs more than one channel at once — a new order might need to email the customer, SMS them, and notify the vendor, all from the same trigger.",
            points: [
              { label: "Pub/Sub", text: "publish/subscribe — one event is published once, every subscriber gets its own copy" },
              { label: "On AWS", text: "SNS (Simple Notification Service) handles this fan-out" },
              { label: "Fan-out", text: "the queue's cousin — instead of one message to one worker, it spreads to many at once" },
              { label: "DLQ", text: "Dead Letter Queue — where messages land after repeated processing failures, to be retried once the service recovers" },
            ],
            diagram: <FanOutDiagram />,
          },
          {
            title: "Rate Limiting",
            hook:
              "The last problem here is a defensive one: what stops someone from hammering your server with requests until it falls over?",
            points: [
              { label: "Rate limiting", text: "capping how many requests a client can make in a given window, to prevent denial-of-service" },
              { label: "Leaky bucket", text: "requests come in at any pace but drain out at a fixed, steady rate — like a bucket with a small hole" },
              { label: "Token bucket", text: "a fixed number of tokens refill over time; every request spends one token, and an empty bucket means waiting" },
              { label: "Goal either way", text: "keep serving everyone fairly instead of collapsing under the loudest client" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unit-2",
    label: "Unit 2",
    title: "Core Concepts",
    chapters: [
      {
        id: "u2-c1",
        label: "Chapter 1",
        title: "Scalability",
        hook:
          "Scalability isn't a single trick — it's a property: can this system handle more load by adding resources, without falling over or needing a rewrite?",
        points: [
          { label: "Load scalability", text: "handling more requests or users over time without performance degrading" },
          { label: "Scale up vs scale out", text: "vertical scaling makes one machine bigger; horizontal scaling adds more machines — most large systems lean on the latter" },
          { label: "Stateless services", text: "servers that don't store session data locally scale horizontally far more easily, since any instance can handle any request" },
          { label: "Database scalability", text: "read replicas spread out read traffic; sharding splits data across multiple databases so no single one holds everything" },
          { label: "Caching", text: "storing frequently-requested results (e.g. in Redis) so the system doesn't repeat expensive work for every request" },
        ],
      },
      {
        id: "u2-c2",
        label: "Chapter 2",
        title: "CAP Theorem",
        hook:
          "In a distributed system, the network will eventually fail somewhere — a cable gets cut, a data center loses connectivity. CAP theorem is about what you're forced to sacrifice when that happens.",
        points: [
          { label: "Consistency (C)", text: "every read gets the most recent write, or an error — no stale data slipping through" },
          { label: "Availability (A)", text: "every request gets a response, even if it isn't the most up-to-date one" },
          { label: "Partition tolerance (P)", text: "the system keeps working even when network communication between nodes breaks down" },
          { label: "The catch", text: "during an actual network partition, a distributed system can only keep one of Consistency or Availability — not both — since Partition tolerance is basically non-negotiable in real networks" },
          { label: "In practice", text: "systems like MongoDB and HBase typically lean CP; DynamoDB and Cassandra typically lean AP — the right choice depends on whether stale data or a failed request hurts the product more" },
        ],
        diagram: <CAPDiagram />,
      },
      {
        id: "u2-c3",
        label: "Chapter 3",
        title: "Single Point of Failure (SPOF)",
        hook:
          "The most dangerous part of any system is often the one piece nobody thought to duplicate.",
        points: [
          { label: "Definition", text: "any component whose failure alone can bring down the whole system" },
          { label: "Common examples", text: "a single database with no replica, a single load balancer, a single server handling a critical service" },
          { label: "Why it's dangerous", text: "even a system built from thousands of resilient parts is only as strong as its weakest, un-duplicated link" },
          { label: "The fix", text: "redundancy — database replicas, multiple load balancer instances, services spread across multiple availability zones or regions" },
          { label: "A mindset, not a checklist", text: "hunting for SPOFs really means asking, again and again: what's the one thing that, if it goes down right now, takes everything else with it?" },
        ],
      },
    ],
  },
];

function SystemDesignData() {
  const [activeUnitIdx, setActiveUnitIdx] = useState(0);
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);

  const activeUnit = units[activeUnitIdx];
  const activeChapter = activeUnit.chapters[activeChapterIdx];

  const selectUnit = (idx) => {
    setActiveUnitIdx(idx);
    setActiveChapterIdx(0);
  };

  return (
    <div className="min-h-screen bg-[#FCD34D] p-4 sm:p-8 font-sans flex items-start">
      <style>{`
        @keyframes dnsMove {
          0%   { left: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          45%  { left: 90%;  opacity: 1; }
          50%  { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes dnsMove2 {
          0%, 50% { left: 0%; opacity: 0; }
          55% { opacity: 1; }
          95% { left: 90%; opacity: 1; }
          100% { opacity: 0; }
        }
        .dns-packet { animation: dnsMove 3.2s ease-in-out infinite; }
        .dns-packet-2 { animation: dnsMove2 3.2s ease-in-out infinite; }

        @keyframes verticalGrow {
          0%, 15%  { width: 44px; height: 44px; }
          50%      { width: 72px; height: 72px; }
          85%,100% { width: 44px; height: 44px; }
        }
        .vertical-grow { animation: verticalGrow 3.6s ease-in-out infinite; }

        @keyframes popIn {
          0%, 100% { opacity: 0.15; transform: translateY(4px) scale(0.85); }
          40%, 70% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .horizontal-box-1 { animation: popIn 3.6s ease-in-out infinite; animation-delay: 0s; }
        .horizontal-box-2 { animation: popIn 3.6s ease-in-out infinite; animation-delay: 0.3s; }
        .horizontal-box-3 { animation: popIn 3.6s ease-in-out infinite; animation-delay: 0.6s; }

        @keyframes lbPing {
          0%, 100% { box-shadow: 2px 2px 0px 0px #000; }
          50% { box-shadow: 2px 2px 0px 0px #000, 0 0 0 3px rgba(0,168,150,0.5); }
        }
        .lb-server-1 { animation: lbPing 3s ease-in-out infinite; animation-delay: 0s; }
        .lb-server-2 { animation: lbPing 3s ease-in-out infinite; animation-delay: 1s; }
        .lb-server-3 { animation: lbPing 3s ease-in-out infinite; animation-delay: 2s; }

        @keyframes queueTravel {
          0%   { transform: translateX(0);    opacity: 1; }
          85%  { transform: translateX(48px); opacity: 1; }
          100% { transform: translateX(56px); opacity: 0; }
        }
        .queue-msg { animation: queueTravel 2.4s ease-in-out infinite; }
        .queue-msg-1 { animation-delay: 0s; }
        .queue-msg-2 { animation-delay: 0.5s; }
        .queue-msg-3 { animation-delay: 1s; }

        @keyframes fanOutPulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; background: #00A896; }
        }
        .fanout-line-1 { animation: fanOutPulse 3s ease-in-out infinite; animation-delay: 0s; }
        .fanout-line-2 { animation: fanOutPulse 3s ease-in-out infinite; animation-delay: 0.4s; }
        .fanout-line-3 { animation: fanOutPulse 3s ease-in-out infinite; animation-delay: 0.8s; }

        @keyframes capPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .cap-node-1 { animation: capPulse 3.6s ease-in-out infinite; animation-delay: 0s; }
        .cap-node-2 { animation: capPulse 3.6s ease-in-out infinite; animation-delay: 1.2s; }
        .cap-node-3 { animation: capPulse 3.6s ease-in-out infinite; animation-delay: 2.4s; }

        @media (prefers-reduced-motion: reduce) {
          .dns-packet, .dns-packet-2, .vertical-grow, .horizontal-box-1,
          .horizontal-box-2, .horizontal-box-3, .lb-server-1, .lb-server-2,
          .lb-server-3, .queue-msg, .fanout-line-1, .fanout-line-2,
          .fanout-line-3, .cap-node-1, .cap-node-2, .cap-node-3 {
            animation: none !important;
          }
        }
      `}</style>

      <div className="w-full flex flex-col md:flex-row gap-6 items-start">
        {/* ---------------- Sidebar: Units + Chapters ---------------- */}
        <div className="w-full md:w-80 md:sticky md:top-8 bg-[#0ACF83] border-4 border-black shadow-[4px_4px_0px_0px_#000] p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {units.map((unit, uIdx) => {
              const isActiveUnit = uIdx === activeUnitIdx;
              return (
                <div key={unit.id} className="flex flex-col gap-2">
                  <button
                    onClick={() => selectUnit(uIdx)}
                    className={`w-full text-left p-3 border-3 border-black font-black transition-all cursor-pointer mb-2 ${
                      isActiveUnit
                        ? "bg-yellow-300 text-black shadow-[4px_4px_0px_0px_#000] translate-x-1"
                        : "bg-white text-black hover:bg-amber-100 shadow-[2px_2px_0px_0px_#000]"
                    }`}
                  >
                    <span className="text-[10px] font-black uppercase tracking-wide text-emerald-700 block">
                      {unit.label}
                    </span>
                    <span className="text-md font-extrabold">{unit.title}</span>
                  </button>

                  {isActiveUnit && (
                    <div className="flex flex-col gap-1.5 pl-2">
                      {unit.chapters.map((chapter, cIdx) => {
                        const isActiveChapter = cIdx === activeChapterIdx;
                        return (
                          <button
                            key={chapter.id}
                            onClick={() => setActiveChapterIdx(cIdx)}
                            className={`w-full flex items-center gap-2 text-left px-3 py-3 border-2 border-black text-sm font-bold transition-all cursor-pointer mb-1 ${
                              isActiveChapter
                                ? "bg-emerald-200 text-black shadow-[2px_2px_0px_0px_#000]"
                                : "bg-white/80 text-black hover:bg-emerald-100"
                            }`}
                          >
                            <span className="w-4 h-4 shrink-0 rounded-full bg-black text-white flex items-center justify-center text-[9px] font-bold">
                              {cIdx + 1}
                            </span>
                            {chapter.title}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- Main content ---------------- */}
        <div className="flex-1 w-full min-h-[calc(100vh-4rem)] bg-[#00A896] border-4 border-black shadow-[6px_6px_0px_0px_#000] p-5 flex flex-col gap-4">
          <div className="pb-3">
            <p className="text-[11px] font-black uppercase tracking-wide text-amber-200">
              {activeUnit.label} · {activeChapter.label}
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-white">
              {activeChapter.title}
            </h2>
          </div>

          {activeChapter.hook && (
            <p className="text-sm sm:text-base font-bold text-emerald-50 leading-relaxed">
              {activeChapter.hook}
            </p>
          )}

          {/* Chapter with direct points (no nested topics) */}
          {activeChapter.points && (
            <ContentBlock
              points={activeChapter.points}
              diagram={activeChapter.diagram}
            />
          )}

          {/* Chapter made of multiple topics (e.g. Key Concepts) */}
          {activeChapter.topics && (
            <div className="flex flex-col gap-4">
              {activeChapter.topics.map((topic, i) => (
                <ContentBlock
                  key={i}
                  badge={i + 1}
                  title={topic.title}
                  hook={topic.hook}
                  points={topic.points}
                  diagram={topic.diagram}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SystemDesignData;