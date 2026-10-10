import React, { useState } from "react";
import Designs, { designsList } from "./Designs";
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
function SysDiagram() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 text-[#f8fafc] rounded-xl font-mono text-xs">
      <div className="flex flex-col items-center gap-2 p-4 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000000]">
        <span className="text-black  font-bold">Client Layer</span>
        <div className="px-4 py-2 bg-[#facc15] text-black border-2 border-black rounded font-bold shadow-[2px_2px_0px_0px_#000000]">
          Web / Mobile App
        </div>
      </div>

      <div className="flex items-center text-[#94a3b8]">
        <span className="w-6 h-[3px] bg-black"></span>
        <span className="px-2 text-[10px] uppercase tracking-wider font-bold bg-[#1e293b] border-2 border-black text-white rounded">
          HTTPS
        </span>
        <span className="w-6 h-[3px] bg-black"></span>
      </div>

      <div className="flex flex-col items-center gap-2 p-4 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000000]">
        <span className="text-black font-bold">Routing</span>
        <div className="px-4 py-2 bg-[#2dd4bf] text-black border-2 border-black rounded font-bold shadow-[2px_2px_0px_0px_#000000]">
          API Gateway
        </div>
      </div>

      <div className="flex items-center text-[#94a3b8]">
        <span className="w-6 h-[3px] bg-black"></span>
        <span className="px-2 text-[10px] uppercase tracking-wider font-bold bg-[#1e293b] border-2 border-black text-white rounded">
          gRPC
        </span>
        <span className="w-6 h-[3px] bg-black"></span>
      </div>

      <div className="flex flex-col gap-2 p-4 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000000]">
        <span className="text-black font-bold">Services</span>
        <div className="px-3 py-1.5 bg-[#334155] border-2 border-black rounded text-center font-bold text-white shadow-[2px_2px_0px_0px_#000000]">
          Auth Service
        </div>
        <div className="px-3 py-1.5 bg-[#334155] border-2 border-black rounded text-center font-bold text-white shadow-[2px_2px_0px_0px_#000000]">
          Core Service
        </div>
        <div className="px-3 py-1.5 bg-[#334155] border-2 border-black rounded text-center font-bold text-white shadow-[2px_2px_0px_0px_#000000]">
          Notification Queue
        </div>
      </div>

      <div className="flex items-center text-[#94a3b8]">
        <span className="w-6 h-[3px] bg-black"></span>
      </div>

      <div className="flex flex-col gap-2 p-4 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000000]">
        <span className="text-black font-bold">Databases</span>
        <div className="px-3 py-1.5 bg-[#0ACF83] border-2 border-black text-black rounded text-center font-bold shadow-[2px_2px_0px_0px_#000000]">
          MongoDB/SQL
        </div>
        <div className="px-3 py-1.5 bg-[#fca5a5] border-2 border-black text-black rounded text-center font-bold shadow-[2px_2px_0px_0px_#000000]">
          Redis Cache
        </div>
      </div>
    </div>
  );
}
function HLDvsLLDDiagram() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-[#f8fafc] text-[#0f172a] rounded-xl font-mono text-xs">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 p-4 bg-[#ffffff] border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000000]">
          <div className="flex items-center justify-between pb-2 border-b-2 border-black">
            <span className="text-[#854d0e] font-bold text-sm">
              High-Level Design (HLD)
            </span>
            <span className="px-2 py-0.5 bg-[#fef08a] text-black font-bold text-[10px] border border-black rounded shadow-[1px_1px_0px_0px_#000000]">
              MACRO
            </span>
          </div>
          <p className="text-[#475569] text-[11px]">
            Focuses on system architecture, tech stack, scalability, and
            component interactions.
          </p>
          <div className="flex flex-col gap-2 p-3 bg-[#f1f5f9] border-2 border-black rounded shadow-[2px_2px_0px_0px_#000000]">
            <div className="flex justify-between items-center bg-[#ffffff] p-2 border-2 border-black rounded font-bold shadow-[2px_2px_0px_0px_#000000]">
              <span className="text-[#0f172a]">Client / UI</span>
              <span className="text-[#0d9488]">React / Next.js</span>
            </div>
            <div className="text-center font-bold text-slate-600">
              ↓ HTTPS / REST
            </div>
            <div className="flex justify-between items-center bg-[#ffffff] p-2 border-2 border-black rounded font-bold shadow-[2px_2px_0px_0px_#000000]">
              <span className="text-[#0f172a]">API Gateway</span>
              <span className="text-[#ca8a04]">Load Balancer</span>
            </div>
            <div className="text-center font-bold text-slate-600">
              ↓ Internal Network
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#ffffff] p-2 border-2 border-black rounded text-center font-bold text-[#0f172a] shadow-[2px_2px_0px_0px_#000000]">
                Auth Service
              </div>
              <div className="bg-[#ffffff] p-2 border-2 border-black rounded text-center font-bold text-[#0f172a] shadow-[2px_2px_0px_0px_#000000]">
                Core Service
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 bg-[#ffffff] border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000000]">
          <div className="flex items-center justify-between pb-2 border-b-2 border-black">
            <span className="text-[#0f766e] font-bold text-sm">
              Low-Level Design (LLD)
            </span>
            <span className="px-2 py-0.5 bg-[#99f6e4] text-black font-bold text-[10px] border border-black rounded shadow-[1px_1px_0px_0px_#000000]">
              MICRO
            </span>
          </div>
          <p className="text-[#475569] text-[11px]">
            Focuses on class diagrams, design patterns, data structures, and
            logic implementation.
          </p>
          <div className="flex flex-col gap-2 p-3 bg-[#f1f5f9] border-2 border-black rounded shadow-[2px_2px_0px_0px_#000000]">
            <div className="bg-[#ffffff] p-2 border-2 border-black rounded font-bold flex flex-col gap-1 shadow-[2px_2px_0px_0px_#000000]">
              <span className="text-[#0d9488]">Class: UserService</span>
              <span className="text-[10px] text-[#475569] font-normal">
                - repository: UserRepository
              </span>
              <span className="text-[10px] text-[#475569] font-normal">
                + authenticate(token: string): User
              </span>
            </div>
            <div className="text-center font-bold text-slate-600">
              ↓ Implements
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#ffffff] p-2 border-2 border-black rounded text-center font-bold text-xs text-[#0f172a] shadow-[2px_2px_0px_0px_#000000]">
                Strategy Pattern
              </div>
              <div className="bg-[#ffffff] p-2 border-2 border-black rounded text-center font-bold text-xs text-[#0f172a] shadow-[2px_2px_0px_0px_#000000]">
                OOPS & Schema
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <Box className="w-24 bg-amber-100">Load Balancer</Box>
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
    <div className="flex flex-col gap-6 p-6 bg-[#f8fafc] text-[#0f172a] rounded-xl font-mono text-xs ">
      <div className="flex items-center justify-between pb-3 border-b-2 border-black">
        <span className="font-bold text-sm text-[#0f172a]">
          CAP Theorem Trade-offs
        </span>
        <span className="px-2 py-0.5 bg-[#fef08a] text-black font-bold text-[10px] border border-black rounded shadow-[1px_1px_0px_0px_#000000]">
          DISTRIBUTED SYSTEMS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 p-4 bg-[#ffffff] border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000000]">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#0d9488]">Consistency (C)</span>
            <span className="px-1.5 py-0.5 bg-[#99f6e4] text-black font-bold text-[9px] border border-black rounded">
              READS
            </span>
          </div>
          <p className="text-[11px] text-[#475569]">
            Every read receives the most recent write or an error.
          </p>
        </div>

        <div className="flex flex-col gap-2 p-4 bg-[#ffffff] border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000000]">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#ca8a04]">Availability (A)</span>
            <span className="px-1.5 py-0.5 bg-[#fef08a] text-black font-bold text-[9px] border border-black rounded">
              UPTIME
            </span>
          </div>
          <p className="text-[11px] text-[#475569]">
            Every non-failing node returns a non-error response.
          </p>
        </div>

        <div className="flex flex-col gap-2 p-4 bg-[#ffffff] border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000000]">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#4f46e5]">
              Partition Tolerance (P)
            </span>
            <span className="px-1.5 py-0.5 bg-[#c7d2fe] text-black font-bold text-[9px] border border-black rounded">
              NETWORK
            </span>
          </div>
          <p className="text-[11px] text-[#475569]">
            System functions despite network packet drops or splits.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div className="flex flex-col gap-2 p-4 bg-[#f1f5f9] border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000000]">
          <span className="font-bold text-[#0f172a]">
            CP Systems (Consistency + Partition Tolerance)
          </span>
          <p className="text-[11px] text-[#475569]">
            Sacrifices availability during partitions to prevent serving stale
            data.
          </p>
          <div className="flex gap-2 mt-1">
            <span className="px-2 py-1 bg-[#ffffff] border-2 border-black rounded font-bold text-xs shadow-[1px_1px_0px_0px_#000000]">
              MongoDB
            </span>
            <span className="px-2 py-1 bg-[#ffffff] border-2 border-black rounded font-bold text-xs shadow-[1px_1px_0px_0px_#000000]">
              HBase
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-4 bg-[#f1f5f9] border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000000]">
          <span className="font-bold text-[#0f172a]">
            AP Systems (Availability + Partition Tolerance)
          </span>
          <p className="text-[11px] text-[#475569]">
            Sacrifices strict consistency so every node can keep responding.
          </p>
          <div className="flex gap-2 mt-1">
            <span className="px-2 py-1 bg-[#ffffff] border-2 border-black rounded font-bold text-xs shadow-[1px_1px_0px_0px_#000000]">
              Cassandra
            </span>
            <span className="px-2 py-1 bg-[#ffffff] border-2 border-black rounded font-bold text-xs shadow-[1px_1px_0px_0px_#000000]">
              DynamoDB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsistencyModelsDiagram() {
  const size = 320;
  const center = size / 2;
  const radius = 100;

  const nodes = [
    { name: 'Node A', angle: 0, color: '#FF6B6B' },
    { name: 'Node B', angle: 120, color: '#4DABF7' },
    { name: 'Node C', angle: 240, color: '#51CF66' },
  ];

  return (
    <div className="my-4 p-4 bg-white border-3 border-black shadow-[4px_4px_0px_0px_#000] flex flex-col items-center gap-3">
      <div className="w-full flex justify-between items-center border-b-2 border-black pb-2">
        <span className="text-xs font-black uppercase tracking-wider text-black bg-yellow-300 px-2 py-0.5 border border-black">
          Consistency Sync Visualizer
        </span>
        <span className="text-[11px] font-bold text-gray-700">Replication State</span>
      </div>

      {/* Added w-[320px] h-[320px] here */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible w-[320px] h-[320px]">
        <circle cx={center} cy={center} r={radius} fill="none" stroke="#000" strokeWidth="4" strokeDasharray="6 6" />
        
        {nodes.map((node, index) => {
          const radian = (node.angle * Math.PI) / 180;
          const x = center + radius * Math.cos(radian);
          const y = center + radius * Math.sin(radian);
          return (
            <g key={`node-${index}`}>
              <circle cx={x} cy={y} r="16" fill={node.color} stroke="#000" strokeWidth="2.5" />
              <text x={x} y={y + 32} textAnchor="middle" fill="#000" fontSize="10" fontWeight="900">{node.name}</text>
            </g>
          );
        })}

        <circle cx={center} cy={center} r="22" fill="#FACC15" stroke="#000" strokeWidth="2" />
        <text x={center} y={center + 4} textAnchor="middle" fill="#000" fontSize="9" fontWeight="800">SYNC</text>
      </svg>

      <div className="w-full bg-amber-50 border-2 border-black p-2 text-center text-xs font-bold text-black">
        Balancing strict synchronization against availability and performance.
      </div>
    </div>
  );
}

function ConsistentHashingDiagram() {
  const size = 320;
  const center = size / 2;
  const radius = 100;

  const nodes = [
    { name: 'Server A', angle: 0, color: '#FF6B6B' },
    { name: 'Server B', angle: 120, color: '#4DABF7' },
    { name: 'Server C', angle: 240, color: '#51CF66' },
  ];

  const keys = [
    { name: 'Key 1', angle: 45 },
    { name: 'Key 2', angle: 170 },
    { name: 'Key 3', angle: 300 },
  ];

  return (
    <div className="my-4 p-4 bg-white border-3 border-black shadow-[4px_4px_0px_0px_#000] flex flex-col items-center gap-3">
      <div className="w-full flex justify-between items-center border-b-2 border-black pb-2">
        <span className="text-xs font-black uppercase tracking-wider text-black bg-yellow-300 px-2 py-0.5 border border-black">
          Hash Ring Visualizer
        </span>
        <span className="text-[11px] font-bold text-gray-700">Clockwise Routing</span>
      </div>

      {/* Added w-[320px] h-[320px] here */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible w-[320px] h-[320px]">
        <circle cx={center} cy={center} r={radius} fill="none" stroke="#000" strokeWidth="4" strokeDasharray="6 6" />
        <circle cx={center} cy={center} r={radius + 20} fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" />

        {nodes.map((node, index) => {
          const radian = (node.angle * Math.PI) / 180;
          const x = center + radius * Math.cos(radian);
          const y = center + radius * Math.sin(radian);
          return (
            <g key={`node-${index}`}>
              <circle cx={x} cy={y} r="16" fill={node.color} stroke="#000" strokeWidth="2.5" />
              <text x={x} y={y + 32} textAnchor="middle" fill="#000" fontSize="10" fontWeight="900">{node.name}</text>
            </g>
          );
        })}

        {keys.map((k, index) => {
          const radian = (k.angle * Math.PI) / 180;
          const x = center + radius * Math.cos(radian);
          const y = center + radius * Math.sin(radian);
          return (
            <g key={`key-${index}`}>
              <circle cx={x} cy={y} r="6" fill="#FACC15" stroke="#000" strokeWidth="2" />
              <text x={x} y={y - 12} textAnchor="middle" fill="#000" fontSize="9" fontWeight="800">{k.name}</text>
            </g>
          );
        })}
      </svg>

      <div className="w-full bg-amber-50 border-2 border-black p-2 text-center text-xs font-bold text-black">
        Adding/removing nodes only impacts adjacent keys on the ring.
      </div>
    </div>
  );
}
function OSImodelDiagram() {
  const layers = [
    { num: 7, name: "Application", desc: "HTTP, DNS, FTP" },
    { num: 6, name: "Presentation", desc: "TLS, Encoding, Compression" },
    { num: 5, name: "Session", desc: "Session establishment" },
    { num: 4, name: "Transport", desc: "TCP, UDP, Ports" },
    { num: 3, name: "Network", desc: "IP, Routing" },
    { num: 2, name: "Data Link", desc: "MAC, Frames, Switches" },
    { num: 1, name: "Physical", desc: "Cables, Signals, Bits" },
  ];

  return (
    <div className="my-4 p-4 bg-white border-3 border-black shadow-[4px_4px_0px_0px_#000] flex flex-col items-center gap-3">
      <div className="w-full flex justify-between items-center border-b-2 border-black pb-2">
        <span className="text-xs font-black uppercase tracking-wider text-black bg-yellow-300 px-2 py-0.5 border border-black">
          OSI Model
        </span>
        <span className="text-[11px] font-bold text-gray-700">
          7 Layers — Application to Physical
        </span>
      </div>

      <div className="w-full flex gap-3">
        {/* Down arrow column: sending side */}
        <div className="flex flex-col items-center justify-between py-1">
          <span className="text-[9px] font-black text-slate-500 mb-1 rotate-0">TX</span>
          <div className="flex-1 w-[2px] bg-black/70 relative">
            <span className="absolute -bottom-1 -left-[5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black/70" />
          </div>
        </div>

        {/* Layer stack */}
        <div className="flex-1 flex flex-col gap-1.5">
          {layers.map((layer, i) => (
            <div
              key={layer.num}
              className={`flex items-center gap-3 border-2 border-black rounded-md px-3 py-2 shadow-[2px_2px_0px_0px_#000] ${
                i % 2 === 0 ? "bg-white" : "bg-emerald-50"
              }`}
            >
              <span className="w-6 h-6 shrink-0 rounded-full bg-[#00A896] text-white border-2 border-black flex items-center justify-center font-black text-[11px]">
                {layer.num}
              </span>
              <span className="font-black text-xs sm:text-sm text-black w-24 sm:w-28 shrink-0">
                {layer.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-black/60 truncate">
                {layer.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Up arrow column: receiving side */}
        <div className="flex flex-col items-center justify-between py-1">
          <div className="flex-1 w-[2px] bg-black/70 relative">
            <span className="absolute -top-1 -left-[5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-black/70" />
          </div>
          <span className="text-[9px] font-black text-slate-500 mt-1">RX</span>
        </div>
      </div>

      <div className="w-full bg-amber-50 border-2 border-black p-2 text-center text-xs font-bold text-black">
        Sender: data flows down, Layer 7 → 1 (encapsulation). Receiver: flows up, Layer 1 → 7 (decapsulation).
      </div>
    </div>
  );
}
const IPAddressDiagram = () => {
  const bit = (x, y, on) => (
    <rect key={`${x}-${y}`} x={x} y={y} width="12" height="14" rx="2"
      fill="currentColor" opacity={on ? 0.55 : 0.12} />
  );
 
  // 192.168.1.10 /24 -> first 3 octets = network, last = host
  const octets = [
    { v: "192", net: true },
    { v: "168", net: true },
    { v: "1", net: true },
    { v: "10", net: false },
  ];
 
  return (
    <svg viewBox="0 0 720 760" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", color: "inherit", fontFamily: "inherit" }}
      role="img" aria-label="IP address structure, types, and how packets travel">
 
      {/* ---------- SECTION 1: ANATOMY ---------- */}
      <text x="360" y="28" textAnchor="middle" fontSize="16" fontWeight="600" fill="currentColor">
        Anatomy of an IPv4 address (192.168.1.10 / 255.255.255.0)
      </text>
 
      {octets.map((o, i) => {
        const x = 70 + i * 150;
        return (
          <g key={i}>
            <rect x={x} y="46" width="120" height="54" rx="8"
              fill="currentColor" opacity={o.net ? 0.14 : 0.3} />
            <rect x={x} y="46" width="120" height="54" rx="8"
              fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
            <text x={x + 60} y="82" textAnchor="middle" fontSize="24" fontWeight="600" fill="currentColor">
              {o.v}
            </text>
            <text x={x + 60} y="116" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.7">
              octet {i + 1} · 8 bits
            </text>
            {i < 3 && (
              <text x={x + 135} y="82" textAnchor="middle" fontSize="24" fill="currentColor">.</text>
            )}
          </g>
        );
      })}
 
      {/* brackets for network / host */}
      <path d="M70 128 H520 V134 H70 Z" fill="currentColor" opacity="0.35" />
      <text x="295" y="152" textAnchor="middle" fontSize="13" fontWeight="600" fill="currentColor">
        Network portion → 192.168.1.0 (Network ID)
      </text>
      <path d="M520 128 H670 V134 H520 Z" fill="currentColor" opacity="0.7" />
      <text x="595" y="152" textAnchor="middle" fontSize="13" fontWeight="600" fill="currentColor">
        Host → 10
      </text>
 
      {/* ---------- SECTION 2: TYPES ---------- */}
      <text x="360" y="198" textAnchor="middle" fontSize="16" fontWeight="600" fill="currentColor">
        Ways to classify IP addresses
      </text>
 
      {[
        { t: "By scope", a: "Public", b: "Private (NAT)" },
        { t: "By version", a: "IPv4 · 32-bit", b: "IPv6 · 128-bit" },
        { t: "By assignment", a: "Static", b: "Dynamic (DHCP)" },
        { t: "By function", a: "Unicast · Broadcast", b: "Multicast · Anycast" },
      ].map((c, i) => {
        const x = 20 + i * 175;
        return (
          <g key={c.t}>
            <rect x={x} y="214" width="165" height="104" rx="10" fill="currentColor" opacity="0.07" />
            <rect x={x} y="214" width="165" height="104" rx="10" fill="none"
              stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <text x={x + 82} y="238" textAnchor="middle" fontSize="13" fontWeight="600" fill="currentColor">
              {c.t}
            </text>
            <line x1={x + 16} y1="248" x2={x + 149} y2="248" stroke="currentColor" opacity="0.3" />
            <text x={x + 82} y="278" textAnchor="middle" fontSize="12" fill="currentColor">{c.a}</text>
            <text x={x + 82} y="302" textAnchor="middle" fontSize="12" fill="currentColor">{c.b}</text>
          </g>
        );
      })}
 
      {/* ---------- SECTION 3: CAST TYPES ---------- */}
      <text x="360" y="354" textAnchor="middle" fontSize="16" fontWeight="600" fill="currentColor">
        Unicast vs Broadcast vs Multicast vs Anycast
      </text>
 
      {[
        { name: "Unicast", sub: "one → one", recv: [1, 0, 0, 0] },
        { name: "Broadcast", sub: "one → all", recv: [1, 1, 1, 1] },
        { name: "Multicast", sub: "one → group", recv: [1, 0, 1, 1] },
        { name: "Anycast", sub: "one → nearest", recv: [0, 1, 0, 0] },
      ].map((c, i) => {
        const x = 20 + i * 175;
        const cx = x + 82;
        const pts = [
          [x + 25, 440],
          [x + 70, 470],
          [x + 112, 470],
          [x + 145, 440],
        ];
        return (
          <g key={c.name}>
            <text x={cx} y="380" textAnchor="middle" fontSize="13" fontWeight="600" fill="currentColor">
              {c.name}
            </text>
            <text x={cx} y="396" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.7">
              {c.sub}
            </text>
            {pts.map(([px, py], j) =>
              c.recv[j] ? (
                <line key={j} x1={cx} y1="418" x2={px} y2={py - 10}
                  stroke="currentColor" strokeWidth="1.6" opacity="0.8" />
              ) : null
            )}
            <circle cx={cx} cy="414" r="9" fill="currentColor" />
            {pts.map(([px, py], j) => (
              <circle key={j} cx={px} cy={py} r="9"
                fill="currentColor" opacity={c.recv[j] ? 0.65 : 0.15} />
            ))}
          </g>
        );
      })}
 
      {/* ---------- SECTION 4: PACKET JOURNEY ---------- */}
      <text x="360" y="528" textAnchor="middle" fontSize="16" fontWeight="600" fill="currentColor">
        How a packet travels: Alice (New York) → Bob (Tokyo)
      </text>
 
      {[
        { x: 20, l1: "Alice's laptop", l2: "192.168.1.5" },
        { x: 155, l1: "Home router", l2: "NAT → public IP" },
        { x: 290, l1: "ISP routers", l2: "pick best path" },
        { x: 425, l1: "Tokyo ISP", l2: "forwards packet" },
        { x: 560, l1: "Bob's mail server", l2: "reassembles" },
      ].map((n, i, arr) => (
        <g key={n.l1}>
          <rect x={n.x} y="548" width="130" height="62" rx="10" fill="currentColor" opacity="0.1" />
          <rect x={n.x} y="548" width="130" height="62" rx="10" fill="none"
            stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          <text x={n.x + 65} y="574" textAnchor="middle" fontSize="12" fontWeight="600" fill="currentColor">
            {n.l1}
          </text>
          <text x={n.x + 65} y="593" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.75">
            {n.l2}
          </text>
          {i < arr.length - 1 && (
            <path d={`M${n.x + 132} 579 H${n.x + 153}`} stroke="currentColor" strokeWidth="1.6"
              markerEnd="url(#arrow)" />
          )}
        </g>
      ))}
 
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7"
          orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </marker>
      </defs>
 
      {/* packet */}
      <rect x="20" y="632" width="680" height="46" rx="8" fill="currentColor" opacity="0.07" />
      <rect x="30" y="642" width="170" height="26" rx="5" fill="currentColor" opacity="0.3" />
      <text x="115" y="660" textAnchor="middle" fontSize="12" fill="currentColor">Source IP</text>
      <rect x="210" y="642" width="170" height="26" rx="5" fill="currentColor" opacity="0.45" />
      <text x="295" y="660" textAnchor="middle" fontSize="12" fill="currentColor">Destination IP</text>
      <rect x="390" y="642" width="300" height="26" rx="5" fill="currentColor" opacity="0.18" />
      <text x="540" y="660" textAnchor="middle" fontSize="12" fill="currentColor">Data (part of the email)</text>
 
      <text x="360" y="708" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.8">
        Every packet carries source + destination IP; routers read the destination to choose the next hop.
      </text>
      <text x="360" y="728" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.8">
        Packets may take different routes and are reassembled at the destination.
      </text>
    </svg>
  );
};

function TcpVsUdpDiagram() {
  const differences = [
    {
      feature: "Connection Type",
      tcp: "Connection-oriented; uses a three-way handshake",
      udp: "Connectionless; no handshake",
    },
    {
      feature: "Delivery Guarantee",
      tcp: "Guarantees reliable data delivery",
      udp: "Does not guarantee delivery",
    },
    {
      feature: "Acknowledgements",
      tcp: "Uses acknowledgements (ACKs)",
      udp: "No acknowledgements",
    },
    {
      feature: "Retransmission",
      tcp: "Supports retransmission of lost packets",
      udp: "No retransmission support",
    },
    {
      feature: "Packet Ordering",
      tcp: "Ensures packets are delivered in order",
      udp: "Does not ensure ordering",
    },
    {
      feature: "Traffic Control",
      tcp: "Provides flow control and congestion control",
      udp: "No flow or congestion control",
    },
    {
      feature: "Speed & Overhead",
      tcp: "Slower due to higher overhead",
      udp: "Faster with minimal overhead",
    },
    {
      feature: "Header Size",
      tcp: "Variable header size (20–60 bytes)",
      udp: "Fixed header size (8 bytes)",
    },
    {
      feature: "Data Format",
      tcp: "Treats data as a continuous byte stream",
      udp: "Treats data as independent messages",
    },
    {
      feature: "Broadcast & Multicast",
      tcp: "Does not support broadcasting or multicasting",
      udp: "Supports broadcasting and multicasting",
    },
    {
      feature: "Common Protocols",
      tcp: "Used by HTTP, HTTPS, FTP, SMTP",
      udp: "Used by DNS, DHCP, VoIP, Streaming",
    },
  ];

  return (
    <div className="my-3 flex flex-col gap-4 text-black font-sans">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b-2 border-black">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-yellow-300 text-black font-black text-xs uppercase border border-black rounded shadow-[2px_2px_0px_0px_#000]">
            OSI Layer 4
          </span>
          <span className="font-black text-sm sm:text-base">
            TCP vs UDP Architecture & Protocol Flows
          </span>
        </div>
        <span className="text-[11px] font-bold text-slate-700 bg-white px-2 py-0.5 border border-black rounded">
          Transport Layer Protocols
        </span>
      </div>

      {/* Side-by-side Protocol Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* TCP Card */}
        <div className="flex flex-col gap-3 p-4 bg-white border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000]">
          <div className="flex items-center justify-between pb-2 border-b-2 border-black">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 border border-black"></span>
              <span className="font-black text-sm text-slate-900">TCP (Transmission Control Protocol)</span>
            </div>
            <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-emerald-100 text-emerald-900 border border-black rounded">
              Reliable & Ordered
            </span>
          </div>

          <p className="text-xs text-slate-600 font-semibold leading-relaxed">
            Connection-oriented transport protocol that ensures accurate and ordered data delivery. Uses control mechanisms to guarantee data correctness, making it dependable.
          </p>

          {/* 3-way Handshake & Retransmit visualization */}
          <div className="bg-[#f8fafc] border-2 border-black rounded-lg p-3 flex flex-col gap-2 font-mono text-xs">
            <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
              Three-Way Handshake
            </span>
            <div className="flex justify-between items-center bg-white p-2 border border-black rounded shadow-[1px_1px_0px_0px_#000]">
              <span className="font-bold text-slate-800">Client</span>
              <span className="text-emerald-700 font-black">── SYN ──&gt;</span>
              <span className="font-bold text-slate-800">Server</span>
            </div>
            <div className="flex justify-between items-center bg-white p-2 border border-black rounded shadow-[1px_1px_0px_0px_#000]">
              <span className="font-bold text-slate-800">Client</span>
              <span className="text-emerald-700 font-black">&lt;── SYN-ACK ──</span>
              <span className="font-bold text-slate-800">Server</span>
            </div>
            <div className="flex justify-between items-center bg-white p-2 border border-black rounded shadow-[1px_1px_0px_0px_#000]">
              <span className="font-bold text-slate-800">Client</span>
              <span className="text-emerald-700 font-black">── ACK ──&gt;</span>
              <span className="font-bold text-slate-800">Server</span>
            </div>
            <div className="pt-1.5 border-t border-slate-200 flex items-center justify-between text-[11px]">
              <span className="font-bold text-slate-700">Packet Loss Handling:</span>
              <span className="bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 border border-emerald-600 rounded text-[10px]">
                Auto-Retransmit on Timeout
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-emerald-50 border border-black p-2 rounded">
              <span className="block text-[10px] font-black uppercase text-slate-500">Header Size</span>
              <span className="font-black text-emerald-900">20–60 Bytes (Variable)</span>
            </div>
            <div className="bg-emerald-50 border border-black p-2 rounded">
              <span className="block text-[10px] font-black uppercase text-slate-500">Data Format</span>
              <span className="font-black text-emerald-900">Continuous Byte Stream</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {["HTTP", "HTTPS", "FTP", "SMTP"].map((proto) => (
              <span key={proto} className="px-2 py-0.5 bg-slate-100 text-slate-900 border border-black rounded text-[10px] font-black">
                {proto}
              </span>
            ))}
          </div>
        </div>

        {/* UDP Card */}
        <div className="flex flex-col gap-3 p-4 bg-white border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000]">
          <div className="flex items-center justify-between pb-2 border-b-2 border-black">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500 border border-black"></span>
              <span className="font-black text-sm text-slate-900">UDP (User Datagram Protocol)</span>
            </div>
            <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-amber-100 text-amber-900 border border-black rounded">
              Fast & Lightweight
            </span>
          </div>

          <p className="text-xs text-slate-600 font-semibold leading-relaxed">
            Connectionless and lightweight transport protocol that sends data without reliability guarantees. Efficient when speed is paramount.
          </p>

          {/* Connectionless Fire-and-Forget visualization */}
          <div className="bg-[#f8fafc] border-2 border-black rounded-lg p-3 flex flex-col gap-2 font-mono text-xs">
            <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
              Fire-and-Forget (No Handshake)
            </span>
            <div className="flex justify-between items-center bg-white p-2 border border-black rounded shadow-[1px_1px_0px_0px_#000]">
              <span className="font-bold text-slate-800">Client</span>
              <span className="text-amber-700 font-black">── Datagram 1 ──&gt;</span>
              <span className="font-bold text-slate-800">Server</span>
            </div>
            <div className="flex justify-between items-center bg-red-50 p-2 border border-dashed border-red-500 rounded">
              <span className="font-bold text-slate-800">Client</span>
              <span className="text-red-600 font-black">── Datagram 2 ──✕</span>
              <span className="font-bold text-red-600 text-[10px]">Lost (No retry)</span>
            </div>
            <div className="flex justify-between items-center bg-white p-2 border border-black rounded shadow-[1px_1px_0px_0px_#000]">
              <span className="font-bold text-slate-800">Client</span>
              <span className="text-amber-700 font-black">── Datagram 3 ──&gt;</span>
              <span className="font-bold text-slate-800">Server</span>
            </div>
            <div className="pt-1.5 border-t border-slate-200 flex items-center justify-between text-[11px]">
              <span className="font-bold text-slate-700">Packet Loss Handling:</span>
              <span className="bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 border border-amber-600 rounded text-[10px]">
                No ACKs · No Retransmit
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-amber-50 border border-black p-2 rounded">
              <span className="block text-[10px] font-black uppercase text-slate-500">Header Size</span>
              <span className="font-black text-amber-900">8 Bytes (Fixed)</span>
            </div>
            <div className="bg-amber-50 border border-black p-2 rounded">
              <span className="block text-[10px] font-black uppercase text-slate-500">Data Format</span>
              <span className="font-black text-amber-900">Independent Messages</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {["DNS", "DHCP", "VoIP", "Streaming"].map((proto) => (
              <span key={proto} className="px-2 py-0.5 bg-slate-100 text-slate-900 border border-black rounded text-[10px] font-black">
                {proto}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Differences Table */}
      <div className="bg-white border-2 border-black rounded-lg p-4 shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
        <div className="flex items-center justify-between pb-2 border-b-2 border-black">
          <span className="font-bold text-xs sm:text-sm text-slate-900">
            Differences between TCP and UDP
          </span>
          <span className="px-2 py-0.5 bg-[#fef08a] text-black font-bold text-[10px] border border-black rounded shadow-[1px_1px_0px_0px_#000]">
            QUICK REFERENCE
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse border border-black">
            <thead>
              <tr className="bg-slate-900 text-white font-bold">
                <th className="p-2 border border-black w-1/4">Feature</th>
                <th className="p-2 border border-black bg-emerald-800 text-white w-[37.5%]">
                  TCP (Transmission Control Protocol)
                </th>
                <th className="p-2 border border-black bg-amber-800 text-white w-[37.5%]">
                  UDP (User Datagram Protocol)
                </th>
              </tr>
            </thead>
            <tbody>
              {differences.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  <td className="p-2 border border-black font-bold text-slate-900">
                    {row.feature}
                  </td>
                  <td className="p-2 border border-black text-slate-800 font-medium">
                    {row.tcp}
                  </td>
                  <td className="p-2 border border-black text-slate-800 font-medium">
                    {row.udp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
        hook: "Before any server exists, before a single line of code is written, someone has to answer a simpler question: what exactly are we building, and how will its pieces fit together? That question is system design.",
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
        diagram: <SysDiagram />,
      },
      {
        id: "u1-c2",
        label: "Chapter 2",
        title: "HLD vs LLD vs Machine Code",
        hook: "Design happens in layers, each one zooming in further than the last — from a sketch of an entire city, down to the wiring inside a single building, down to the electricity itself.",
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
        diagram: <HLDvsLLDDiagram />,
      },
      {
        id: "u1-c3",
        label: "Chapter 3",
        title: "System Design Key Concepts",
        hook: "Every large system, no matter the domain, keeps returning to the same handful of building blocks. Here they are, one at a time.",
        topics: [
          {
            title: "DNS Resolution",
            hook: "Every website starts the same way: somewhere out there is a machine that never sleeps, waiting for someone to knock. We call it a server — and like any shop, it has an address.",
            points: [
              {
                label: "Server",
                text: "a machine that runs 24/7, reachable at a public IP address, e.g. 10.2.3.4",
              },
              {
                label: "The problem",
                text: "nobody remembers a string of numbers to visit a website",
              },
              {
                label: "DNS",
                text: "the Domain Name System — internet's phone book, mapping names like amazon.com to IP addresses",
              },
              {
                label: "DNS resolution",
                text: "the step where a name goes in and an IP address comes out, before the request even reaches the server",
              },
            ],
            diagram: <DNSDiagram />,
          },
          {
            title: "Scaling Servers",
            hook: "Picture a server with 2 CPUs and 4 GB of memory — enough for a quiet afternoon. Then a link goes viral, everyone shows up at once, and it runs out of memory and crashes.",
            points: [
              {
                label: "Vertical scaling",
                text: "increasing a single machine's capacity — more CPU, RAM, disk",
              },
              {
                label: "Cons",
                text: "gets costly past a point, and upgrading almost always means a restart — downtime while the shop is closed",
              },
              {
                label: "Horizontal scaling",
                text: "adding more machines to share the workload, instead of making one machine bigger",
              },
              {
                label: "Why it wins",
                text: "if one server struggles, the next request just goes to another — no restart, so downtime drops to zero",
              },
            ],
            diagram: <ScalingDiagram />,
          },
          {
            title: "Handling the Crowd / Traffic",
            hook: "Here's the catch with horizontal scaling: if every server shares the same DNS entry, users keep landing on the same one, over and over.",
            points: [
              {
                label: "Load balancer",
                text: "software (e.g. nginx) that sits in front of servers and decides, request by request, who handles it",
              },
              {
                label: "How it's wired",
                text: "DNS now points to the load balancer, not to any one server directly",
              },
              {
                label: "Round robin",
                text: "one common strategy — each new request goes to the next server in line",
              },
              {
                label: "Sizing",
                text: "load balancers usually get more CPU/RAM than the servers behind them, since they see every request",
              },
              {
                label: "On AWS",
                text: "Elastic Load Balancer (ELB) — built from many small workers so it can absorb sudden rushes",
              },
            ],
            diagram: <LoadBalancerDiagram />,
          },
          {
            title: "Routing with API Gateways",
            hook: "As a product grows, it rarely stays one big service. It splits into microservices — auth, orders, payments — each with its own fleet of servers.",
            points: [
              {
                label: "Microservices",
                text: "independent services, each with its own servers and its own load balancer",
              },
              {
                label: "The new problem",
                text: "a request for /auth must reach the auth service, not the order service",
              },
              {
                label: "API gateway",
                text: "a single, centralized front door that routes each request to the correct backend service by path",
              },
              {
                label: "Bonus",
                text: "authentication is commonly attached right at the gateway, turning away bad requests early",
              },
              {
                label: "On AWS",
                text: "Amazon API Gateway routes traffic; the services themselves usually run on EC2 (Elastic Compute)",
              },
            ],
          },
          {
            title: "Scalable Systems with Queues",
            hook: "An event fires that should notify a million users by email. You can't loop through a million addresses inside the request that triggered it — the backend would freeze until the last one sent.",
            points: [
              {
                label: "The fix",
                text: "make it asynchronous — hand the job to a separate email worker instead of doing it inline",
              },
              {
                label: "Real limit",
                text: "Gmail's API accepts roughly 10 emails/second; send faster and you get throttled",
              },
              {
                label: "Queue",
                text: "sits between backend and worker — backend pushes the request and moves on immediately, no waiting",
              },
              {
                label: "On AWS",
                text: "Amazon SQS (Simple Queue Service) is the queue that holds these messages",
              },
              {
                label: "Pull / polling",
                text: 'the worker asks the queue "anything for me?" — short polling asks every second, long polling waits up to ~10s and collects a batch',
              },
              {
                label: "Push",
                text: "the alternative — the queue delivers events to the worker the moment they arrive",
              },
            ],
            diagram: <QueueDiagram />,
          },
          {
            title: "Fan-Out / Pub-Sub",
            hook: "Sometimes a single event needs more than one channel at once — a new order might need to email the customer, SMS them, and notify the vendor, all from the same trigger.",
            points: [
              {
                label: "Pub/Sub",
                text: "publish/subscribe — one event is published once, every subscriber gets its own copy",
              },
              {
                label: "On AWS",
                text: "SNS (Simple Notification Service) handles this fan-out",
              },
              {
                label: "Fan-out",
                text: "the queue's cousin — instead of one message to one worker, it spreads to many at once",
              },
              {
                label: "DLQ",
                text: "Dead Letter Queue — where messages land after repeated processing failures, to be retried once the service recovers",
              },
            ],
            diagram: <FanOutDiagram />,
          },
          {
            title: "Rate Limiting",
            hook: "The last problem here is a defensive one: what stops someone from hammering your server with requests until it falls over?",
            points: [
              {
                label: "Rate limiting",
                text: "capping how many requests a client can make in a given window, to prevent denial-of-service",
              },
              {
                label: "Leaky bucket",
                text: "requests come in at any pace but drain out at a fixed, steady rate — like a bucket with a small hole",
              },
              {
                label: "Token bucket",
                text: "a fixed number of tokens refill over time; every request spends one token, and an empty bucket means waiting",
              },
              {
                label: "Goal either way",
                text: "keep serving everyone fairly instead of collapsing under the loudest client",
              },
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
        title: "Scalability, Reliability, Availability",
        hook: "Every system is a balancing act between three properties: can it handle more load, can it be trusted to work, and can it stay up when things go wrong? These three — scalability, reliability, and availability — get confused constantly, but they answer different questions, and a system can excel at one while failing at another.",
        topics: [
          {
            title: "Scalability",
            hook: "Scalability isn't a single trick — it's a property: can this system handle more load by adding resources, without falling over or needing a rewrite? A system that only works at today's traffic is a system with an expiration date.",
            points: [
              {
                label: "Load scalability",
                text: "handling more requests, users, or data volume over time without performance degrading — the core test of whether a system was built to grow or just to ship",
              },
              {
                label: "Scale up vs scale out",
                text: "vertical scaling makes one machine bigger (more CPU, RAM); horizontal scaling adds more machines. Vertical scaling is simpler but hits a physical ceiling and creates a single point of failure — most large systems lean on horizontal scaling instead",
              },
              {
                label: "Stateless services",
                text: "servers that don't store session data locally scale horizontally far more easily, since any instance can handle any request — a load balancer can route traffic anywhere without worrying about 'sticky' sessions",
              },
              {
                label: "Database scalability",
                text: "read replicas spread out read traffic (copies of the data that serve queries but not writes); sharding splits data across multiple databases by key. as you know read queries are more often than writes",
              },
              {
                label: "Caching",
                text: "storing frequently-requested results (e.g. in Redis or Memcached) so the system doesn't repeat expensive work for every request — often the single highest-leverage change for read-heavy systems",
              },
              {
                label: "Load balancing",
                text: "distributing incoming traffic across multiple servers so no single instance becomes a bottleneck — the piece of infrastructure that makes horizontal scaling actually usable",
              },
              {
                label: "Diminishing returns & bottlenecks",
                text: "scaling one layer (e.g. app servers) just shifts the pressure to the next weakest link (e.g. the database) — real scalability means finding and addressing the bottleneck, not just adding more of what you already have",
              },
            ],
          },
          {
            title: "Reliability",
            hook: "Reliability is about trust: can the system be counted on to do what it's supposed to, every time, even when things go wrong? A system can be up and still be unreliable — think of a server that responds instantly but returns corrupted data.",
            points: [
              {
                label: "Definition",
                text: "the probability that a system will perform its intended function correctly, without failure, over a specified period of time — it's about correctness under stress, not just uptime",
              },
              {
                label: "Redundancy",
                text: "having multiple instances of critical components so if one fails, others can take over — redundancy without proper failover is just extra cost, so the two usually go together",
              },
              {
                label: "Failover",
                text: "automatic switching to a standby system or component when the primary one fails, ideally fast enough and seamless enough that users never notice",
              },
              {
                label: "Fault tolerance",
                text: "designing a system to keep functioning — even in a degraded mode — when a component fails, rather than cascading into a full outage",
              },
              {
                label: "Monitoring and alerting",
                text: "keeping an eye on system health (error rates, latency, resource usage) and notifying engineers when something goes wrong, ideally before users notice",
              },
              {
                label: "Testing for failure",
                text: "practices like chaos engineering deliberately inject failures into a system to verify it actually behaves reliably under real-world conditions, not just in the happy path",
              },
            ],
          },
          {
            title: "Availability",
            hook: "Availability is about uptime: how often is the system up and running, ready to serve requests? It's often confused with reliability, but a system can be highly available (always responding) while still being unreliable (responding with the wrong answer).",
            points: [
              {
                label: "Definition",
                text: "the proportion of time a system is operational and accessible when required for use",
              },
              {
                label: "High availability (HA)",
                text: "designing systems to minimize downtime, often through redundancy and failover mechanisms across multiple servers, data centers, or regions",
              },
              {
                label: "Service Level Agreement (SLA)",
                text: "a formal commitment between a service provider and a client regarding the expected level of service availability, often with financial penalties if it's not met",
              },
              {
                label: "Measuring availability",
                text: "often expressed as a percentage (e.g., 99.9% uptime) over a specific time period — but each additional '9' represents a dramatically smaller allowed downtime",
              },
              {
                label: "The 'nines' in practice",
                text: "99% uptime allows ~3.65 days of downtime a year; 99.9% allows ~8.76 hours; 99.99% ('four nines') allows just ~52 minutes — illustrating why chasing extra nines gets exponentially harder and costlier",
              },
              {
                label: "Availability vs reliability",
                text: "a flaky system that crashes and restarts instantly can show high availability numbers while still being unreliable — the two metrics measure different failure modes and neither one alone tells the whole story",
              },
            ],
          },
        ],
      },
      {
        id: "u2-c2",
        label: "Chapter 2",
        title: "CAP Theorem",
        hook: "In a distributed system, the network will eventually fail somewhere — a cable gets cut, a data center loses connectivity. CAP theorem is about what you're forced to sacrifice when that happens.",
        points: [
          {
            label: "Consistency (C)",
            text: "every read gets the most recent write, or an error — no stale data slipping through. for example - ",
          },
          {
            label: "Availability (A)",
            text: "every request gets a response, even if it isn't the most up-to-date one",
          },
          {
            label: "Partition tolerance (P)",
            text: "the system keeps working even when network communication between nodes breaks down",
          },
          {
            label: "The catch",
            text: "during an actual network partition, a distributed system can only keep one of Consistency or Availability — not both — since Partition tolerance is basically non-negotiable in real networks",
          },
          {
            label: "In practice",
            text: "systems like MongoDB and HBase typically lean CP; DynamoDB and Cassandra typically lean AP — the right choice depends on whether stale data or a failed request hurts the product more",
          },
        ],
        diagram: <CAPDiagram />,
      },
      {
        id: "u2-c3",
        label: "Chapter 3",
        title: "Single Point of Failure (SPOF)",
        hook: "The most dangerous part of any system is often the one piece nobody thought to duplicate.",
        points: [
          {
            label: "Definition",
            text: "any component whose failure alone can bring down the whole system",
          },
          {
            label: "Common examples",
            text: "a single database with no replica, a single load balancer, a single server handling a critical service",
          },
          {
            label: "Why it's dangerous",
            text: "even a system built from thousands of resilient parts is only as strong as its weakest, un-duplicated link",
          },
          {
            label: "The fix",
            text: "redundancy — database replicas, multiple load balancer instances, services spread across multiple availability zones or regions",
          },
          {
            label: "A mindset, not a checklist",
            text: "hunting for SPOFs really means asking, again and again: what's the one thing that, if it goes down right now, takes everything else with it?",
          },
        ],
      },
      {
        id: "u2-c4",
        label: "Chapter 4",
        title: "Latency vs Throughput vs Bandwidth",
        hook: "Every network and system architecture discussion eventually collides with three metrics that sound interchangeable but measure entirely different dimensions of performance: time, capacity, and actual delivery.",
        topics: [
          {
            title: "Latency",
            hook: "Latency is about speed and time: how long does it take for a single request to travel from sender to receiver and back? It's the silent killer of user experience, often felt long before a system runs out of capacity.",
            points: [
              {
                label: "Definition",
                text: "the time delay between the initiation of a request and the receipt of its response, usually measured in milliseconds",
              },
              {
                label: "Components of latency",
                text: "includes propagation delay (physical travel time across space), transmission delay (time to push bits onto the wire), and queuing delay (time spent waiting in line because the system is busy)",
              },
              {
                label: "Round Trip Time (RTT)",
                text: "the total time it takes for a data packet to go to a destination and return, serving as a primary metric for network responsiveness",
              },
              {
                label: "Tail latency",
                text: "focusing on worst-case delays like the 99th percentile rather than averages, uncovering hidden performance spikes that degrade user experience",
              },
              {
                label: "Human perception limits",
                text: "latencies under 100 milliseconds feel instantaneous to users, while delays exceeding 300 to 1000 milliseconds break cognitive flow and feel sluggish",
              },
            ],
          },
          {
            title: "Bandwidth",
            hook: "Bandwidth is about capacity and potential: how wide is the pipe? It defines the maximum theoretical volume of data that can pass through a network link over a given time, though a wide pipe doesn't guarantee fast delivery.",
            points: [
              {
                label: "Definition",
                text: "the maximum rate of data transfer across a given path, typically measured in bits per second",
              },
              {
                label: "Bandwidth vs throughput",
                text: "bandwidth is the theoretical ceiling or maximum highway capacity; throughput is the actual volume of traffic moving down the road at any given moment",
              },
              {
                label: "Physical limitations",
                text: "governed by the physics of the transmission medium—such as copper wire versus fiber optics—and hardware interface limits",
              },
              {
                label: "The illusion of capacity",
                text: "high bandwidth cannot compensate for high latency or poor downstream processing; a massive pipe is useless if the server takes seconds to process each request",
              },
            ],
          },
          {
            title: "Throughput",
            hook: "Throughput is about actual delivery: how much work is the system successfully processing over a period of time? While bandwidth measures what's possible, throughput measures real-world productivity under load.",
            points: [
              {
                label: "Definition",
                text: "the actual number of successful requests, transactions, or data packets processed by a system per unit of time, such as requests per second",
              },
              {
                label: "Limiting factors",
                text: "constrained by CPU speed, memory limits, disk I/O, database locks, and network congestion—meaning processing bottlenecks will cap throughput long before bandwidth runs out",
              },
              {
                label: "Latency vs throughput trade-off",
                text: "batching multiple requests together can dramatically increase overall throughput, but it almost always increases the individual latency for each request",
              },
              {
                label: "Goodput",
                text: "the useful data rate actually delivered to the application layer, excluding protocol overhead, packet retransmissions, and duplicate traffic",
              },
            ],
          },
        ],
      },
      {
        id: "u2-c5",
        label: "Chapter 5",
        title: "Consistent Hashing",
        hook: "In distributed systems, scaling out requires spreading data or requests across a cluster of servers, but adding or removing nodes typically triggers a massive data remapping disaster.",
        topics: [
          {
            title: "The Problem with Traditional Hashing",
            hook: "The naive approach to routing requests relies on a simple modulo operation, creating a catastrophic domino effect whenever cluster size changes.",
            points: [
              {
                label: "The modulo bottleneck (hash(reqid)%M)",
                text: "maps every request or cache key to a specific server index based on the current server count, making the routing strictly dependent on M",
              },
              {
                label: "The scaling disaster",
                text: "when a server is added or removed, M changes, causing almost every single key to hash to a completely different server index than before",
              },
              {
                label: "Cache collapse and data storms",
                text: "changing M invalidates nearly 100% of existing cache mappings simultaneously, causing a massive cache stampede that floods primary databases",
              },
              {
                label: "Why we need a better approach",
                text: "we need a routing mechanism where adding or removing a server only affects a tiny fraction of the total keys, leaving the rest untouched",
              },
            ],
          },
          {
            title: "Consistent Hashing & Uniform Load",
            hook: "Consistent hashing solves the remapping crisis by mapping both servers and data keys onto a shared, circular ring, ensuring scaling only redistributes a proportional slice of the load.",
            points: [
              {
                label: "Definition",
                text: "a distributed hashing scheme that operates independently of the number of servers by placing nodes and keys on a virtual ring range",
              },
              {
                label: "How keys are routed",
                text: "a request key is hashed to a point on the ring, and the system travels clockwise until it finds the first available server node",
              },
              {
                label: "Minimal remapping",
                text: "when a new server joins or an old one fails, only the keys immediately adjacent to the affected server need to be reassigned while the rest of the cluster remains untouched",
              },
              {
                label: "Uniform load distribution",
                text: "designed to distribute keys evenly across the ring, preventing any single machine from absorbing a disproportionate share of incoming traffic",
              },
            ],
          },
          {
            title: "Virtual Nodes (Virtual Servers)",
            hook: "Even with a circular ring, random hash distributions often lead to uneven clustering where one physical server guards a massive section while another guards a tiny sliver.",
            points: [
              {
                label: "The physical node imbalance",
                text: "real-world servers placed randomly on a hash ring rarely distribute traffic uniformly, leading to uneven resource utilization",
              },
              {
                label: "What virtual nodes are",
                text: "mapping a single physical server to multiple virtual points spread across the entire ring instead of a single point",
              },
              {
                label: "Solving the hotspot problem",
                text: "interleaving multiple virtual tokens for every physical server thoroughly randomizes and averages out the workload across available hardware",
              },
              {
                label: "Handling heterogeneous capacity",
                text: "allowing systems to assign more tokens to powerful servers and fewer to weaker ones to match hardware capacity",
              },
            ],
          },
        ],
        diagram: <ConsistentHashingDiagram />,
      },
      {
        id: "u2-c6",
        label: "Chapter 6",
        title: "Consistency Models in Distributed Systems",
        hook: "Consistency models define how data updates are shared and viewed across multiple nodes, setting the exact rules for synchronization while balancing reliability, availability, and performance.",
        topics: [
          {
            title: "Strong & Sequential Consistency",
            hook: "Rigorous models that enforce strict global ordering or synchronized state updates across the entire cluster.",
            points: [
              {
                label: "Strong consistency",
                text: "all nodes agree on operation order and reads return the most recent version immediately, ensuring every server reflects changes instantly at the cost of speed and resource overhead",
              },
              {
                label: "Sequential consistency",
                text: "ensures all operations across processes appear in a single, unified order, maintaining predictable sequencing even without global real-time synchronization",
              },
              {
                label: "Critical use cases",
                text: "essential for systems where the absolute latest data is non-negotiable, such as financial banking ledgers or critical inventory counts",
              },
            ],
          },
          {
            title: "Causal & Weak Consistency",
            hook: "Trading absolute global lockstep for performance by only enforcing order where a logical relationship actually exists.",
            points: [
              {
                label: "Causal consistency",
                text: "ensures causally related actions are seen in the correct order by all users, while leaving unrelated operations unconstrained — ideal for social media feeds or message threads",
              },
              {
                label: "Weak consistency",
                text: "provides zero guarantees about operation ordering or instant data states, allowing clients to see differing versions depending on the connected node to maximize availability and scalability",
              },
            ],
          },
          {
            title: "Session Consistency & Monotonic Guarantees",
            hook: "User-centric consistency models that guarantee predictable behaviors and state views during individual sessions or sequential read/write operations.",
            points: [
              {
                label: "Session consistency",
                text: "guarantees that actions a user engages with within a single session remain consistent and reliable, such as items remaining in an e-commerce shopping cart",
              },
              {
                label: "Monotonic reads",
                text: "ensures that once a user reads a value, subsequent reads will never return an older value, preventing time from seemingly moving backward",
              },
              {
                label: "Monotonic writes",
                text: "guarantees that a user's sequential updates follow the correct order without reversing or scrambling update sequences",
              },
            ],
          },
        ],
        diagram: <ConsistencyModelsDiagram />,
      },
      {
  id: "u2-c7",
  label: "Chapter 7",
  title: "Back of the Envelope Estimations",
  hook: "Before you write a single line of code, an interviewer wants to know: do you actually understand the scale of what you're building? Back-of-the-envelope estimation is the skill of turning a vague requirement into rough, defensible numbers — QPS, storage, bandwidth, server count — using nothing but arithmetic and a few memorized reference points.",
  topics: [
    {
      title: "Power of Two — Data Volume Units",
      hook: "Distributed systems deal in enormous data volumes, but every calculation still boils down to knowing your units. Get the power-of-two table wrong and every estimate downstream is wrong too.",
      points: [
        { label: "1 KB", text: "2^10 bytes, roughly 1 thousand bytes" },
        { label: "1 MB", text: "2^20 bytes, roughly 1 million bytes" },
        { label: "1 GB", text: "2^30 bytes, roughly 1 billion bytes" },
        { label: "1 TB", text: "2^40 bytes, roughly 1 trillion bytes" },
        { label: "1 PB", text: "2^50 bytes, roughly 1 quadrillion bytes" },
        { label: "Why it matters", text: "a single wrong power-of-two conversion can throw a storage estimate off by 3 orders of magnitude — always sanity-check units first" },
      ],
    },
    {
      title: "Latency Numbers Every Programmer Should Know",
      hook: "Jeff Dean's classic table (Google, 2010) still shapes how engineers reason about speed today — memory is fast, disks are slow, and the network is slower still.",
      points: [
        { label: "L1 cache reference", text: "~0.5 ns — essentially free" },
        { label: "Main memory reference", text: "~100 ns — about 200x slower than L1 cache" },
        { label: "Compress 1 KB with Zippy", text: "~10 µs — cheap, which is why you compress before sending over a network" },
        { label: "Round trip within the same datacenter", text: "~500 µs — fast, but not free at high volume" },
        { label: "Disk seek", text: "~10 ms — avoid disk seeks wherever possible" },
        { label: "Read 1 MB sequentially from disk", text: "~30 ms — three times slower than reading the same 1 MB from the network" },
        { label: "Packet CA → Netherlands → CA", text: "~150 ms — cross-region round trips dominate latency budgets, which is why data centers are placed close to users" },
      ],
    },
    {
      title: "Availability Numbers & the 'Nines'",
      hook: "High availability is usually promised as a Service Level Agreement (SLA) — a percentage that sounds abstract until you convert it into actual downtime.",
      points: [
        { label: "Definition", text: "the percentage of time a system is operational and accessible when required for use" },
        { label: "SLA", text: "a formal agreement between provider and customer defining the guaranteed uptime — AWS, GCP, and Azure typically commit to 99.9% or higher" },
        { label: "99% uptime", text: "allows ~3.65 days of downtime per year — surprisingly generous" },
        { label: "99.99% uptime ('four nines')", text: "allows only ~52.6 minutes of downtime per year" },
        { label: "99.999% uptime ('five nines')", text: "allows just ~5.26 minutes per year — each extra nine costs exponentially more engineering effort" },
      ],
    },
    {
      title: "Worked Example: Estimating QPS (Twitter-style)",
      hook: "Numbers mean nothing without a worked example. Here's how a handful of stated assumptions turn into a concrete queries-per-second figure — the number every capacity decision downstream depends on.",
      points: [
        { label: "Assumptions", text: "300 million monthly active users, 50% daily active, 2 tweets/user/day, 10% of tweets contain media, 5-year data retention" },
        { label: "Step 1 — Daily Active Users", text: "300M × 50% = 150 million DAU" },
        { label: "Step 2 — Average QPS", text: "150M users × 2 tweets ÷ 24 hours ÷ 3,600 seconds ≈ 3,500 QPS" },
        { label: "Step 3 — Peak QPS", text: "traffic isn't flat across the day — a common rule of thumb is 2× the average, so 2 × 3,500 ≈ 7,000 QPS at peak" },
        { label: "Step 4 — Media storage per day", text: "150M × 2 tweets × 10% media × 1 MB ≈ 30 TB/day" },
        { label: "Step 5 — 5-year media storage", text: "30 TB × 365 days × 5 years ≈ 55 PB total" },
      ],
    },
    {
      title: "From Peak QPS to Server Count",
      hook: "Once you have a Peak QPS figure — 7,000 in our example — the next question an interviewer asks is: so how many servers does that actually take? This is where estimation turns into a hardware sizing decision.",
      points: [
        {
          label: "Step 1 — QPS capacity per core",
          text: "API and app servers handling text tweets, auth, and metadata routing are typically I/O-bound, not CPU-bound — but JSON serialization, validation, and routing still cost CPU cycles. A reasonable assumption for a well-optimized service is ~500 QPS per core; a heavier, less-optimized stack might land closer to ~100–200 QPS per core",
        },
        {
          label: "Step 2 — Total cores required",
          text: "Peak QPS ÷ QPS-per-core = 7,000 ÷ 500 ≈ 14 cores needed to serve peak load with zero headroom",
        },
        {
          label: "Step 3 — Servers required",
          text: "assuming a common 16-core server instance, 14 cores ÷ 16 cores/server rounds up to just 1 server — but running peak traffic at 100% utilization on a single box is a Single Point of Failure and leaves no room for spikes",
        },
        {
          label: "Step 4 — Add a safety buffer",
          text: "a typical rule of thumb is provisioning for 40–50% average utilization at peak, not 100% — so the true core requirement becomes roughly 14 ÷ 0.5 ≈ 28 cores, or about 2 servers at 16 cores each",
        },
        {
          label: "Step 5 — Add redundancy (N+1)",
          text: "production systems add at least one extra instance beyond the calculated minimum so a single server failure doesn't take down the service — bringing the realistic estimate to 3 servers minimum, often spread across multiple availability zones",
        },
        {
          label: "The takeaway",
          text: "the raw math says 1 server; real-world safety margins and failover requirements push that to 3+ — this gap between theoretical minimum and practical minimum is exactly what interviewers are listening for",
        },
      ],
    },
  ],
},
    ],
  },
  {
    id: "unit-3",
    label: "Unit 3",
    title: "Networking Fundamentals",
    chapters: [
 {
  id: "u3-c1",
  label: "Chapter 1",
  title: "OSI Model",
  hook: "When two machines talk to each other — a browser and a server, say — a mountain of work happens between 'user clicks a link' and 'page loads': signals become bits, bits become packets, packets find a route, and the receiving machine reassembles it all back into something meaningful. The OSI Model is the standard way of breaking that mountain into seven manageable, independent layers.",
  topics: [
    {
      title: "What the OSI Model Is",
      hook: "OSI stands for Open Systems Interconnection — a conceptual framework, not actual code, that describes how data travels from one device to another across a network.",
      points: [
        {
          label: "Definition",
          text: "a 7-layer reference model, published by ISO, that standardizes how different networking systems communicate regardless of their underlying hardware or software",
        },
        {
          label: "Why layers at all",
          text: "splitting networking into layers means each one can be built, debugged, and replaced independently — a web developer never needs to think about voltage levels, and a hardware engineer never needs to think about HTTP",
        },
        {
          label: "Direction of data flow",
          text: "on the sending side data flows down from Layer 7 to Layer 1 (encapsulation); on the receiving side it flows back up from Layer 1 to Layer 7 (decapsulation)",
        },
        {
          label: "The mnemonic",
          text: "'Please Do Not Throw Sausage Pizza Away' — Physical, Data Link, Network, Transport, Session, Presentation, Application, from bottom to top",
        },
      ],
    },
    {
      title: "The Lower Layers — Physical, Data Link, Network (1–3)",
      hook: "The bottom three layers are about getting raw bits from one physical point to another, and finding a path across a network of many possible routes.",
      points: [
        {
          label: "Layer 1 — Physical",
          text: "transmits raw, unstructured bits (0s and 1s) as electrical signals, light pulses, or radio waves over cables, fiber, or air — concerned purely with hardware: voltages, pins, cabling, radio frequencies",
        },
        {
          label: "Layer 2 — Data Link",
          text: "organizes raw bits into frames and handles node-to-node delivery on the same local network, using MAC addresses to identify devices — switches operate here",
        },
        {
          label: "Layer 2 — Error detection",
          text: "adds checksums (like CRC) so a receiving device can detect a corrupted frame, though not necessarily fix it",
        },
        {
          label: "Layer 3 — Network",
          text: "responsible for routing — determining the best path for a packet to travel across multiple networks, using IP addresses rather than MAC addresses — routers operate here",
        },
        {
          label: "Layer 3 — Packets",
          text: "data at this layer is called a packet; the layer also handles logical addressing and fragmentation when a packet is too large for a link",
        },
      ],
    },
    {
      title: "The Middle Layer — Transport (4)",
      hook: "Transport is the layer most backend engineers actually think about day to day, because it decides whether your data arrives reliably or just arrives fast.",
      points: [
        {
          label: "Layer 4 — Transport",
          text: "manages end-to-end communication between two hosts, breaking data into segments and ensuring they arrive in order and without errors (or choosing not to, deliberately)",
        },
        {
          label: "TCP (Transmission Control Protocol)",
          text: "connection-oriented — guarantees delivery, ordering, and error-checking via handshakes and acknowledgments, at the cost of extra overhead and latency",
        },
        {
          label: "UDP (User Datagram Protocol)",
          text: "connectionless — sends data without guarantees of delivery or order, trading reliability for speed; used for video streaming, gaming, and DNS lookups",
        },
        {
          label: "Ports",
          text: "Transport layer also handles port numbers (e.g. 443 for HTTPS, 22 for SSH), letting a single IP address serve many simultaneous connections",
        },
      ],
    },
    {
      title: "The Upper Layers — Session, Presentation, Application (5–7)",
      hook: "The top three layers are closest to the actual user and application — less about wires and routing, more about meaning, formatting, and the conversation itself.",
      points: [
        {
          label: "Layer 5 — Session",
          text: "establishes, manages, and terminates the connection ('session') between two applications — keeping track of which packets belong to which ongoing conversation",
        },
        {
          label: "Layer 6 — Presentation",
          text: "translates data between the application format and the network format — handling encryption/decryption (TLS/SSL), compression, and character encoding so both ends understand the same 'language'",
        },
        {
          label: "Layer 7 — Application",
          text: "the layer users and developers interact with most directly — protocols like HTTP, HTTPS, FTP, and DNS live here, and this is where your actual API requests and responses live",
        },
        {
          label: "A common confusion",
          text: "'Application layer' doesn't mean your app's code — it means the network protocol your app's code talks over (HTTP, WebSocket, gRPC), which then gets wrapped by every layer below it",
        },
      ],
    },
  ],
  diagram: <OSImodelDiagram />,
},
{
  id: "u3-c2",
  label: "Chapter 2",
  title: "IP Address",
  hook: "Once you know how a network is layered, the next question is: how does a packet know where to go? Every device that talks over a network needs a unique label, the same way every house needs an address for mail to arrive. That label is the IP address, and almost everything at Layer 3 of the OSI model depends on it.",
  topics: [
    {
      title: "What an IP Address Is",
      hook: "An IP (Internet Protocol) address is a unique numerical label assigned to every device on a network that uses the Internet Protocol, a digital home address that lets data be sent and received correctly.",
      points: [
        {
          label: "Definition",
          text: "a unique numerical label given to each device connected to an IP-based network, used for two jobs: identifying the device and locating it so other devices can communicate with it",
        },
        {
          label: "Network portion",
          text: "identifies which network the device belongs to; every device on the same network shares it",
        },
        {
          label: "Host portion",
          text: "identifies the individual device inside that network",
        },
        {
          label: "Subnet mask (IPv4)",
          text: "defines which bits of the address are network and which are host — for 192.168.1.10 with mask 255.255.255.0, the Network ID is 192.168.1.0 and the Host ID is 10",
        },
      ],
    },
    {
      title: "IPv4 vs IPv6",
      hook: "The same idea exists in two formats, because the original format ran out of room.",
      points: [
        {
          label: "IPv4",
          text: "32 bits written as four octets separated by dots (e.g. 192.168.1.1); each octet is 8 bits with a value from 0 to 255 (2⁸ = 256 combinations); supports roughly 4.3 billion addresses",
        },
        {
          label: "IPv6",
          text: "128 bits written as eight groups of four hexadecimal digits separated by colons (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334); each group is a 16-bit block",
        },
        {
          label: "Why IPv6 exists",
          text: "created to solve the shortage of IPv4 addresses by offering a vastly larger address space",
        },
        {
          label: "Broadcast difference",
          text: "IPv4 supports broadcast, but IPv6 does not — it uses multicast instead",
        },
      ],
    },
    {
      title: "Public, Private, Static and Dynamic",
      hook: "Addresses are also classified by who can reach them and how they are handed out.",
      points: [
        {
          label: "Public IP",
          text: "assigned by your ISP to a device or router that directly accesses the internet; unique across the entire internet, and can be static or dynamic",
        },
        {
          label: "Private IP",
          text: "used inside a private network, only needs to be unique within that network, and is not routable on the internet without NAT",
        },
        {
          label: "Private IPv4 ranges",
          text: "10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, and 192.168.0.0–192.168.255.255 (IPv6 private addresses start with FC or FD)",
        },
        {
          label: "Static IP",
          text: "permanently assigned to a device; ideal for servers, websites, and remote management that need a constant address",
        },
        {
          label: "Dynamic IP",
          text: "temporarily leased from a pool by DHCP; cheaper and more efficient for providers, so it suits ordinary consumer devices",
        },
      ],
    },
    {
      title: "Unicast, Broadcast, Multicast, Anycast",
      hook: "Addresses can also be classified by how many receivers a message is meant for.",
      points: [
        {
          label: "Unicast",
          text: "one sender to one specific receiver; the most common type, used for web browsing, email, and file transfer",
        },
        {
          label: "Broadcast",
          text: "one sender to every device on the same network segment; used by ARP queries and DHCP requests (e.g. 192.168.1.255 for the 192.168.1.0/24 network)",
        },
        {
          label: "Multicast",
          text: "one sender to a selected group that has joined it; used for IPTV, video conferencing, and live streaming — IPv4 range 224.0.0.0 to 239.255.255.255, IPv6 prefix FF00::/8",
        },
        {
          label: "Anycast",
          text: "one sender to the nearest member of a group sharing the same IP, chosen by routers based on network distance; used by DNS servers and CDNs",
        },
      ],
    },
    {
      title: "Classes of IPv4 and Special Addresses",
      hook: "To make roughly 4.3 billion addresses manageable, IPv4 was divided into five classes, with a few reserved addresses that behave differently.",
      points: [
        {
          label: "Class A (1–126)",
          text: "very large networks; up to about 16 million hosts per network",
        },
        {
          label: "Class B (128–191)",
          text: "medium to large organizations; up to about 65,000 hosts per network",
        },
        {
          label: "Class C (192–223)",
          text: "small businesses and home networks; up to 254 hosts per network",
        },
        {
          label: "Class D and E",
          text: "Class D (224–239) is reserved for multicast; Class E (240–255) is reserved for experimental use",
        },
        {
          label: "Loopback",
          text: "127.0.0.1 ('localhost') sends data back to the same device, which is useful for testing the network stack",
        },
      ],
    },
    {
      title: "How IP Addresses Work",
      hook: "Addressing is only useful because routers read it on every packet to move data across the world.",
      points: [
        {
          label: "Packets",
          text: "data is split into packets, and each packet carries a source IP and a destination IP",
        },
        {
          label: "Routing",
          text: "routers read the destination IP, choose the best next hop, and share routing tables with each other; packets may take different routes and are reassembled at the destination",
        },
        {
          label: "LAN vs WAN",
          text: "inside a LAN, devices talk directly using private IPs assigned statically or by DHCP; across a WAN, packets pass through many routers, each deciding the next hop independently",
        },
        {
          label: "NAT",
          text: "lets many devices with private IPs share one public IP; the router translates addresses on the way out, which also hides the internal network structure",
        },
        {
          label: "Example",
          text: "Alice (192.168.1.5, New York) emails Bob (192.168.2.4, Tokyo): her router uses its public IP, the packets cross several ISP routers, and Bob's mail server reassembles them into the email",
        },
      ],
    },
    {
      title: "Looking Up, Threats, and Protection",
      hook: "Because an IP address reveals where you are on the network, it is both easy to find and worth protecting.",
      points: [
        {
          label: "Find your IP",
          text: "Windows: run ipconfig in Command Prompt; Mac: System Preferences > Network; iPhone: Settings > Wi-Fi > (i) icon",
        },
        {
          label: "IP spoofing",
          text: "an attacker fakes a trusted IP address to bypass security",
        },
        {
          label: "DDoS",
          text: "many infected systems flood a target with traffic until it slows or crashes",
        },
        {
          label: "Man-in-the-Middle and port scanning",
          text: "MitM intercepts or alters traffic between two parties; port scanning probes for open ports to find weaknesses",
        },
        {
          label: "Protection",
          text: "use a VPN, a proxy server, or Tor to mask your IP, and enable a firewall to filter suspicious inbound and outbound traffic",
        },
      ],
    },
  ],
  diagram: <IPAddressDiagram />,
},
{
  id: "u3-c3",
  label: "Chapter 3",
  title: "TCP vs UDP",
  hook: "TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two core protocols of the Transport Layer of the OSI and TCP/IP models. Both are responsible for end-to-end communication between applications, but they differ significantly in terms of reliability, speed, and use cases. Understanding the difference between TCP and UDP is essential for designing efficient and reliable networked systems.",
  topics: [
    {
      title: "Transmission Control Protocol (TCP)",
      hook: "TCP is a reliable, connection-oriented transport protocol that ensures accurate and ordered data delivery. It uses control mechanisms to guarantee data correctness, which makes it slower but dependable.",
      points: [
        {
          label: "Connection-oriented protocol",
          text: "establishes a dedicated connection between client and server using a three-way handshake before transmitting any application data",
        },
        {
          label: "Reliable and ordered data delivery",
          text: "guarantees that all packets arrive intact and in their original order using sequence numbers and receiver acknowledgements (ACKs)",
        },
        {
          label: "Higher overhead but high accuracy",
          text: "provides retransmission of lost packets along with flow control and congestion control, resulting in a variable header size of 20–60 bytes",
        },
        {
          label: "Data stream model",
          text: "treats transmitted data as a continuous byte stream without maintaining message boundaries",
        },
        {
          label: "Unicast only",
          text: "does not support broadcasting or multicasting; strictly provides point-to-point communication",
        },
      ],
    },
    {
      title: "User Datagram Protocol (UDP)",
      hook: "UDP is a fast, connectionless transport protocol that sends data without reliability guarantees. It is efficient for applications where speed is more important than accuracy.",
      points: [
        {
          label: "Connectionless and lightweight",
          text: "sends data immediately without establishing a connection or performing any initial handshake",
        },
        {
          label: "No guarantee of delivery or order",
          text: "packets can arrive out of order, get duplicated, or be dropped without notice; UDP does not use ACKs or retransmissions",
        },
        {
          label: "Low overhead and high speed",
          text: "carries a fixed, lightweight header of only 8 bytes and omits flow or congestion control, delivering maximum speed and minimal latency",
        },
        {
          label: "Independent messages",
          text: "treats data as independent datagram packets, preserving message boundaries",
        },
        {
          label: "Broadcasting and multicasting",
          text: "supports broadcasting and multicasting, enabling transmission from one sender to multiple receivers simultaneously",
        },
      ],
    },
    {
      title: "Differences between TCP and UDP",
      hook: "A direct breakdown comparing how TCP and UDP operate across fundamental networking dimensions.",
      points: [
        {
          label: "Connection",
          text: "TCP is connection-oriented and uses a three-way handshake; UDP is connectionless with no handshake",
        },
        {
          label: "Reliability",
          text: "TCP guarantees reliable data delivery; UDP does not guarantee delivery",
        },
        {
          label: "Acknowledgements",
          text: "TCP uses acknowledgements (ACKs); UDP has no acknowledgements",
        },
        {
          label: "Retransmission",
          text: "TCP supports retransmission of lost packets; UDP offers no retransmission support",
        },
        {
          label: "Packet Ordering",
          text: "TCP ensures packets are delivered in order; UDP does not ensure ordering",
        },
        {
          label: "Flow & Congestion Control",
          text: "TCP provides flow control and congestion control; UDP provides no flow or congestion control",
        },
        {
          label: "Speed & Overhead",
          text: "TCP is slower due to higher overhead; UDP is faster with minimal overhead",
        },
        {
          label: "Header Size",
          text: "TCP has a variable header size (20–60 bytes); UDP has a fixed header size (8 bytes)",
        },
        {
          label: "Data Transmission Format",
          text: "TCP treats data as a continuous byte stream; UDP treats data as independent messages",
        },
        {
          label: "Broadcasting & Multicasting",
          text: "TCP does not support broadcasting or multicasting; UDP supports broadcasting and multicasting",
        },
        {
          label: "Protocol Use Cases",
          text: "TCP is used by HTTP, HTTPS, FTP, SMTP; UDP is used by DNS, DHCP, VoIP, Streaming",
        },
      ],
    },
  ],
  diagram: <TcpVsUdpDiagram />,
},
    ]
  }
];

function SystemDesignData() {
  const [activeUnitIdx, setActiveUnitIdx] = useState(0);
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const [isDesignsView, setIsDesignsView] = useState(false);
  const [activeDesignId, setActiveDesignId] = useState("catalog");

  const activeUnit = units[activeUnitIdx];
  const activeChapter = activeUnit.chapters[activeChapterIdx];

  const selectUnit = (idx) => {
    setIsDesignsView(false);
    setActiveUnitIdx(idx);
    setActiveChapterIdx(0);
  };

  const selectDesign = (designId = "catalog") => {
    setIsDesignsView(true);
    setActiveDesignId(designId);
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
        <div className="w-full md:w-80 md:sticky md:top-8 self-start bg-[#0ACF83] border-4 border-black shadow-[4px_4px_0px_0px_#000] p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {/* ---------------- Top of Sidebar: System Designs Catalog ---------------- */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => selectDesign("catalog")}
                className={`w-full text-left p-3 border-3 border-black font-black transition-all cursor-pointer mb-1 ${
                  isDesignsView && activeDesignId === "catalog"
                    ? "bg-yellow-300 text-black shadow-[4px_4px_0px_0px_#000] translate-x-1"
                    : isDesignsView
                    ? "bg-amber-100 text-black shadow-[2px_2px_0px_0px_#000]"
                    : "bg-white text-black hover:bg-amber-100 shadow-[2px_2px_0px_0px_#000]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wide text-rose-700 block">
                    Case Studies
                  </span>
                  <span className="text-[9px] bg-black text-white px-1.5 py-0.5 rounded font-black">
                    CATALOG
                  </span>
                </div>
                <span className="text-md font-extrabold flex items-center gap-1.5 mt-0.5">
                  📐 System Designs
                </span>
              </button>

              {isDesignsView && (
                <div className="flex flex-col gap-1.5 pl-2 mb-2">
                  <button
                    onClick={() => selectDesign("catalog")}
                    className={`w-full flex items-center gap-2 text-left px-3 py-2.5 border-2 border-black text-xs font-black transition-all cursor-pointer mb-1 ${
                      activeDesignId === "catalog"
                        ? "bg-emerald-200 text-black shadow-[2px_2px_0px_0px_#000]"
                        : "bg-white/80 text-black hover:bg-emerald-100"
                    }`}
                  >
                    <span className="w-4 h-4 shrink-0 rounded-full bg-black text-white flex items-center justify-center text-[9px] font-bold">
                      ★
                    </span>
                    All Designs Catalog
                  </button>

                  {designsList.map((design, dIdx) => {
                    const isCurrentDesign = activeDesignId === design.id;
                    return (
                      <button
                        key={design.id}
                        onClick={() => selectDesign(design.id)}
                        className={`w-full flex items-center gap-2 text-left px-3 py-2.5 border-2 border-black text-xs font-bold transition-all cursor-pointer mb-1 ${
                          isCurrentDesign
                            ? "bg-emerald-200 text-black shadow-[2px_2px_0px_0px_#000]"
                            : "bg-white/80 text-black hover:bg-emerald-100"
                        }`}
                      >
                        <span className="w-4 h-4 shrink-0 rounded-full bg-black text-white flex items-center justify-center text-[9px] font-bold">
                          {dIdx + 1}
                        </span>
                        {design.title}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Separator between Designs and Foundations */}
            <div className="flex items-center gap-2 my-1">
              <div className="h-[2px] flex-1 bg-black/40"></div>
              <span className="text-[10px] font-black uppercase text-black/70 tracking-wider">
                Foundations
              </span>
              <div className="h-[2px] flex-1 bg-black/40"></div>
            </div>

            {units.map((unit, uIdx) => {
              const isActiveUnit = !isDesignsView && uIdx === activeUnitIdx;
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
        {isDesignsView ? (
          <Designs
            activeDesignId={activeDesignId}
            onSelectDesign={(id) => setActiveDesignId(id)}
            onBackToCatalog={() => setActiveDesignId("catalog")}
          />
        ) : (
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
                {activeChapter.diagram && (
                  <DiagramFrame>{activeChapter.diagram}</DiagramFrame>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SystemDesignData;
