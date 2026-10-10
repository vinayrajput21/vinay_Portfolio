import React, { useState } from "react";

function UrlShortenerDiagram() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-[#f8fafc] text-black rounded-xl font-mono text-xs border-2 border-black">
      <div className="flex items-center justify-between pb-2 border-b-2 border-black">
        <span className="font-bold text-sm text-[#0f172a]">
          URL Shortener System Architecture
        </span>
        <span className="px-2 py-0.5 bg-[#fef08a] text-black font-bold text-[10px] border border-black rounded shadow-[1px_1px_0px_0px_#000]">
          READ & WRITE PATHS
        </span>
      </div>

      {/* Write Flow (Create Short URL) */}
      <div className="p-3 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-emerald-200 text-emerald-900 border border-black rounded text-[10px] font-black">
            WRITE PATH
          </span>
          <span className="font-black text-xs">POST /api/v1/urls → Generate 7-Character Short Hash</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center text-[11px] items-center">
          <div className="p-2.5 bg-yellow-100 border border-black rounded font-bold shadow-[1px_1px_0px_0px_#000]">
            Client App
            <div className="text-[9px] text-slate-500 font-normal">Sends Long URL</div>
          </div>
          <div className="p-2.5 bg-slate-100 border border-black rounded font-bold shadow-[1px_1px_0px_0px_#000]">
            API Gateway / LB
            <div className="text-[9px] text-slate-500 font-normal">Auth & Rate Limiting</div>
          </div>
          <div className="p-2.5 bg-teal-100 border border-black rounded font-bold shadow-[1px_1px_0px_0px_#000]">
            Key Generator (KGS)
            <div className="text-[9px] text-slate-500 font-normal">Unique 64-bit ID → Base62</div>
          </div>
          <div className="p-2.5 bg-emerald-100 border border-black rounded font-bold shadow-[1px_1px_0px_0px_#000]">
            DB & Redis Cache
            <div className="text-[9px] text-slate-500 font-normal">Save [Hash ↔ LongURL]</div>
          </div>
        </div>
      </div>

      {/* Read Flow (Redirect) */}
      <div className="p-3 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-amber-200 text-amber-900 border border-black rounded text-[10px] font-black">
            READ PATH (99% OF TRAFFIC)
          </span>
          <span className="font-black text-xs">GET /{"{shortCode}"} → HTTP 301 / 302 Redirection</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center text-[11px] items-center">
          <div className="p-2.5 bg-yellow-100 border border-black rounded font-bold shadow-[1px_1px_0px_0px_#000]">
            User Browser
            <div className="text-[9px] text-slate-500 font-normal">Clicks tinyurl.com/a9X1k2</div>
          </div>
          <div className="p-2.5 bg-slate-100 border border-black rounded font-bold shadow-[1px_1px_0px_0px_#000]">
            Nginx / ALB
            <div className="text-[9px] text-slate-500 font-normal">SSL Termination & Routing</div>
          </div>
          <div className="p-2.5 bg-rose-100 border border-black rounded font-bold shadow-[1px_1px_0px_0px_#000]">
            Redis Cache (Memory)
            <div className="text-[9px] text-slate-500 font-normal">Hit: &lt;2ms (80% Pareto)</div>
          </div>
          <div className="p-2.5 bg-blue-100 border border-black rounded font-bold shadow-[1px_1px_0px_0px_#000]">
            Postgres / DynamoDB
            <div className="text-[9px] text-slate-500 font-normal">Miss fallback + Write-through</div>
          </div>
        </div>
      </div>

      {/* Base62 math callout */}
      <div className="bg-amber-50 border-2 border-black p-2.5 rounded text-xs font-sans">
        <span className="font-black">Why 7 Characters in Base62? </span>
        <span>Base62 uses [a-z, A-Z, 0-9]. With 7 characters, 62⁷ = </span>
        <span className="font-mono font-black text-emerald-800">3,521,614,606,208</span>
        <span> (~3.5 Trillion) unique short URLs — easily supporting decades of planetary scale!</span>
      </div>
    </div>
  );
}

function RateLimiterDiagram() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-[#f8fafc] text-black rounded-xl font-mono text-xs border-2 border-black">
      <div className="flex items-center justify-between pb-2 border-b-2 border-black">
        <span className="font-bold text-sm text-[#0f172a]">
          Distributed Rate Limiter (Token Bucket with Redis)
        </span>
        <span className="px-2 py-0.5 bg-[#fef08a] text-black font-bold text-[10px] border border-black rounded shadow-[1px_1px_0px_0px_#000]">
          SLIDING WINDOW / TOKEN BUCKET
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-3 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] flex flex-col gap-1.5">
          <span className="font-black text-xs text-emerald-800">1. Client Request</span>
          <p className="text-[11px] text-slate-600 font-sans">
            Client makes HTTP API request with IP or API token header.
          </p>
        </div>
        <div className="p-3 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] flex flex-col gap-1.5">
          <span className="font-black text-xs text-teal-800">2. Redis Lua Script</span>
          <p className="text-[11px] text-slate-600 font-sans">
            Executes atomic token check & refill without race conditions.
          </p>
        </div>
        <div className="p-3 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] flex flex-col gap-1.5">
          <span className="font-black text-xs text-rose-800">3. Decision Gate</span>
          <p className="text-[11px] text-slate-600 font-sans">
            Tokens &gt; 0: Forward to backend. Tokens = 0: Return HTTP 429 Too Many Requests.
          </p>
        </div>
      </div>
    </div>
  );
}

export const designsList = [
  {
    id: "url-shortener",
    title: "URL Shortener (TinyURL)",
    badge: "CASE STUDY #1",
    difficulty: "Medium",
    category: "Read-Heavy",
    readWriteRatio: "100:1 Read Heavy",
    scale: "500M URLs/month · 20K QPS",
    techStack: ["Base62", "Redis", "PostgreSQL / DynamoDB", "Snowflake / KGS"],
    hook: "Design a high-scale, globally distributed URL shortener service (like TinyURL or Bitly) that converts long URLs into compact 7-character aliases with sub-10ms redirection latency and 99.99% availability.",
    topics: [
      {
        title: "1. Requirements & System Scope",
        hook: "Clarifying functional and non-functional guarantees is essential before designing any distributed architecture.",
        points: [
          {
            label: "Functional: URL Shortening",
            text: "given a long URL (e.g. https://example.com/very/long/path), return a unique short URL alias (e.g. https://tiny.cc/a8X9k2) containing 7 alphanumeric characters",
          },
          {
            label: "Functional: High-Speed Redirection",
            text: "when a user visits the short URL, the system immediately redirects them to the original destination URL via HTTP 301 or 302",
          },
          {
            label: "Functional: Custom Aliases & Expiration",
            text: "users can optionally specify a custom alias (e.g. tiny.cc/vinay-portfolio) and an expiration time for the shortened link",
          },
          {
            label: "Non-Functional: Ultra-Low Latency",
            text: "redirection latency must be under 10ms for cached URLs since every user hop depends on this lookup",
          },
          {
            label: "Non-Functional: High Availability",
            text: "system must guarantee 99.99% availability; if the redirection service is down, all downstream web traffic breaks",
          },
          {
            label: "Non-Functional: Read-Heavy Workload",
            text: "read operations (redirections) outnumber write operations (creating links) by 100 to 1",
          },
        ],
      },
      {
        title: "2. Capacity Estimations & Scale",
        hook: "Back-of-the-envelope calculations determine memory, storage, and networking hardware requirements.",
        points: [
          {
            label: "Traffic Volume",
            text: "500 million new URLs created per month (~200 writes/sec). With a 100:1 read ratio, read traffic is 50 billion redirects/month (~20,000 queries per second)",
          },
          {
            label: "Storage Requirements (5 Years)",
            text: "500M URLs × 12 months × 5 years = 30 billion records. Assuming 500 bytes per record (hash, long URL, created_at, user_id), total storage needed is 30B × 500 bytes = 15 Terabytes",
          },
          {
            label: "Memory & Cache Estimation (Pareto 80/20 Rule)",
            text: "20% of short links generate 80% of traffic. Daily read volume is ~1.6 billion requests. Caching 20% of daily active URLs (320M × 500 bytes) requires ~160 GB of RAM in a Redis cluster",
          },
          {
            label: "Bandwidth Estimation",
            text: "Incoming write bandwidth: 200 writes/sec × 500 bytes = 100 KB/sec. Outgoing read bandwidth: 20,000 reads/sec × 500 bytes = 10 MB/sec",
          },
        ],
      },
      {
        title: "3. API Design & HTTP Contracts",
        hook: "Clean RESTful interfaces for creating short URLs and handling redirection.",
        points: [
          {
            label: "POST /api/v1/urls",
            text: "creates short link. Request body: { long_url: string, custom_alias?: string, expires_at?: string }. Returns 201 Created with { short_url: string, hash: string, expires_at: string }",
          },
          {
            label: "GET /{short_code}",
            text: "handles redirection. Reads the 7-character short_code path parameter, looks up original URL, and issues an HTTP redirect",
          },
          {
            label: "301 Permanent vs 302 Found Redirection",
            text: "HTTP 301 allows browser caching (reduces server load, but loses click analytics). HTTP 302 forces requests to always hit our server (enables accurate click tracking and analytics). Production systems usually choose 302",
          },
        ],
      },
      {
        title: "4. Database Design & Storage Model",
        hook: "Since there are no complex relational joins and individual records are read by unique key, key-value or document stores excel.",
        points: [
          {
            label: "Database Schema (URLs Table)",
            text: "id (BigInt PK), short_code (varchar(7) UNIQUE INDEX), original_url (varchar(2048)), user_id (varchar(64)), created_at (timestamp), expires_at (timestamp)",
          },
          {
            label: "SQL vs NoSQL Evaluation",
            text: "NoSQL key-value store (e.g. AWS DynamoDB, MongoDB, Cassandra) scales horizontally with zero relational overhead and predictable sub-millisecond primary key lookups. Relational DBs (PostgreSQL with sharding) are also viable",
          },
          {
            label: "Indexes",
            text: "a B-Tree index on `short_code` ensures O(1) or O(log N) lookup speeds; a secondary index on `expires_at` assists TTL cleanup workers",
          },
        ],
      },
      {
        title: "5. Encoding Algorithms & Key Generation Service (KGS)",
        hook: "The central challenge: how to generate a unique, non-colliding 7-character string for billions of URLs.",
        points: [
          {
            label: "Why Base62 Encoding?",
            text: "Base62 uses characters [0-9, a-z, A-Z]. 62⁷ yields over 3.5 trillion unique combinations, perfectly suited for compact, URL-safe 7-character strings",
          },
          {
            label: "Flaw of MD5 / SHA-256 Hashing",
            text: "hashing the long URL with MD5 generates 128 bits. Taking the first 7 characters causes hash collisions, requiring sequential probing or database round-trips to resolve",
          },
          {
            label: "Recommended Solution: Key Generation Service (KGS)",
            text: "a dedicated standalone service pre-generates random 7-character Base62 keys in advance and stores them in two database tables (used_keys and unused_keys). When a write request arrives, the server instantly grabs an unused key without hashing or race conditions",
          },
          {
            label: "Concurrency & Memory Buffering",
            text: "KGS loads a batch of unused keys (e.g. 10,000 keys) into memory. Multiple application servers take slices of pre-allocated keys, achieving lock-free write throughput",
          },
        ],
      },
      {
        title: "6. Caching, Sharding & High Availability",
        hook: "Meeting the 99.99% uptime and &lt;10ms latency SLAs through caching and partitioning.",
        points: [
          {
            label: "Redis Cache Cluster",
            text: "a distributed Redis cluster caches hot short codes using an LRU (Least Recently Used) eviction policy. 80% of read traffic hits RAM directly",
          },
          {
            label: "Database Sharding",
            text: "partition the database using consistent hashing on the first character of the `short_code` or hash(short_code) % number_of_shards to distribute reads and writes evenly across multiple database nodes",
          },
          {
            label: "Handling Link Expiration",
            text: "instead of active scanning that loads the DB, use lazy deletion: when a user clicks an expired link, check `expires_at &lt; now()`, return 404, and trigger background cleanup",
          },
        ],
      },
    ],
    diagram: <UrlShortenerDiagram />,
  },
  {
    id: "rate-limiter",
    title: "Distributed Rate Limiter",
    badge: "CASE STUDY #2",
    difficulty: "Medium",
    category: "High Throughput",
    readWriteRatio: "Write & Check Heavy",
    scale: "100K Requests/sec · Microsecond Decisions",
    techStack: ["Redis", "Lua Scripts", "Token Bucket", "Sliding Window"],
    hook: "Design a distributed API rate limiter that protects microservices against denial-of-service (DoS) attacks, brute-force spam, and cascading failures while introducing negligible latency overhead.",
    topics: [
      {
        title: "1. Core Algorithms for Rate Limiting",
        hook: "Comparing the trade-offs of the most prominent rate limiting algorithms.",
        points: [
          {
            label: "Token Bucket",
            text: "tokens are refilled into a bucket at a constant rate. Requests consume a token; if the bucket is empty, requests are dropped. Allows bursts up to bucket capacity and is memory-efficient",
          },
          {
            label: "Leaking Bucket",
            text: "requests enter a FIFO queue and are processed at a constant rate. Smooths out traffic spikes but drops packets if the queue fills up",
          },
          {
            label: "Sliding Window Log",
            text: "keeps track of request timestamps in a Redis sorted set (ZSET). Accurately enforces rate limits across any rolling window, but consumes higher memory",
          },
          {
            label: "Sliding Window Counter (Production Standard)",
            text: "combines current window counter and previous window counter with an overlap percentage. Extremely lightweight and accurate within 0.05%",
          },
        ],
      },
      {
        title: "2. Distributed Coordination with Redis & Lua",
        hook: "Preventing race conditions when multiple API gateway instances increment counters simultaneously.",
        points: [
          {
            label: "Race Condition Problem",
            text: "two parallel requests reading counter = 99 can both pass when the limit is 100 if reads and writes are not atomic",
          },
          {
            label: "Atomic Lua Scripts",
            text: "Redis executes Lua scripts as a single atomic transaction without requiring distributed locks, preventing race conditions with microsecond execution",
          },
          {
            label: "HTTP Response Headers",
            text: "always return standard headers: X-Ratelimit-Limit, X-Ratelimit-Remaining, and X-Ratelimit-Reset, returning HTTP 429 Too Many Requests when exhausted",
          },
        ],
      },
    ],
    diagram: <RateLimiterDiagram />,
  },
  {
    id: "pastebin",
    title: "Pastebin Service",
    badge: "CASE STUDY #3",
    difficulty: "Medium",
    category: "Storage Heavy",
    readWriteRatio: "50:1 Read Heavy",
    scale: "10M Pastes/month · Large Payload Storage",
    techStack: ["Amazon S3 / Blob", "PostgreSQL", "CDN", "Base62"],
    hook: "Design a Pastebin-like text sharing platform where users can paste arbitrary text snippets, generate shareable links, and set automatic expiration times.",
    topics: [
      {
        title: "1. Architectural Separation: Metadata vs Blob Storage",
        hook: "Storing large text blobs directly inside relational databases is an anti-pattern that bloats database buffers and slows queries.",
        points: [
          {
            label: "Blob / Object Storage (S3)",
            text: "raw paste text content (up to 10 MB per paste) is stored directly in an object store like AWS S3 or MinIO, taking advantage of cheap, infinitely scalable storage",
          },
          {
            label: "Metadata Database",
            text: "paste metadata (id, short_hash, s3_object_key, author_id, size_bytes, expires_at) is stored in a relational or key-value database",
          },
          {
            label: "Edge Caching with CDN",
            text: "popular pastes are cached at CDN edge locations worldwide, offloading traffic completely from the origin servers",
          },
        ],
      },
    ],
  },
  {
    id: "notification-system",
    title: "Distributed Notification System",
    badge: "CASE STUDY #4",
    difficulty: "Hard",
    category: "Real-Time & Queues",
    readWriteRatio: "Write & Event Heavy",
    scale: "100M Notifications/day · Multi-channel",
    techStack: ["Kafka", "RabbitMQ", "FCM / APNs", "Twilio", "SendGrid"],
    hook: "Design a reliable, scalable notification system that delivers millions of push notifications, SMS messages, and emails across disparate third-party providers with zero message loss.",
    topics: [
      {
        title: "1. Multi-Channel Queue Architecture",
        hook: "Isolating delivery channels to prevent slow email vendors from blocking critical SMS verifications.",
        points: [
          {
            label: "Separate Message Queues",
            text: "maintain independent message queues (e.g. Kafka topics or RabbitMQ queues) for iOS APNs, Android FCM, SMS, and Email to ensure fault isolation",
          },
          {
            label: "Idempotency Keys",
            text: "prevent duplicate notifications (e.g. charging alerts) by storing unique idempotency keys in Redis with a 24-hour TTL",
          },
          {
            label: "Provider Failover",
            text: "if Twilio or SendGrid experiences downtime, the system automatically redirects message batches to fallback third-party vendors",
          },
        ],
      },
    ],
  },
];

function Designs({ activeDesignId: propActiveDesignId, onSelectDesign, onBackToCatalog }) {
  const [internalActiveId, setInternalActiveId] = useState("catalog");
  const [filterCategory, setFilterCategory] = useState("All");

  const activeDesignId =
    propActiveDesignId !== undefined ? propActiveDesignId : internalActiveId;

  const handleSelectDesign = (id) => {
    if (onSelectDesign) {
      onSelectDesign(id);
    } else {
      setInternalActiveId(id);
    }
  };

  const handleBack = () => {
    if (onBackToCatalog) {
      onBackToCatalog();
    } else if (onSelectDesign) {
      onSelectDesign("catalog");
    } else {
      setInternalActiveId("catalog");
    }
  };

  const selectedDesign = designsList.find((d) => d.id === activeDesignId);

  const categories = ["All", "Read-Heavy", "High Throughput", "Storage Heavy", "Real-Time & Queues"];

  const filteredDesigns =
    filterCategory === "All"
      ? designsList
      : designsList.filter((d) => d.category === filterCategory);

  return (
    <div className="flex-1 w-full min-h-[calc(100vh-4rem)] bg-[#00A896] border-4 border-black shadow-[6px_6px_0px_0px_#000] p-5 flex flex-col gap-4 font-sans text-black">
      {/* ----------------- Header Bar ----------------- */}
      <div className="pb-3 border-b-2 border-black/40 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-wide text-amber-200">
            System Design Architecture · Case Studies
          </p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-white">
            {selectedDesign ? selectedDesign.title : "System Designs Catalog"}
          </h2>
        </div>

        {selectedDesign ? (
          <button
            onClick={handleBack}
            className="px-3.5 py-1.5 bg-yellow-300 text-black font-black text-xs border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-200 cursor-pointer active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-1.5"
          >
            ← Back to Catalog
          </button>
        ) : (
          <span className="px-3 py-1 bg-white text-black font-black text-xs border-2 border-black rounded shadow-[2px_2px_0px_0px_#000]">
            {designsList.length} Case Studies Available
          </span>
        )}
      </div>

      {/* ----------------- VIEW 1: CATALOG GRID ----------------- */}
      {!selectedDesign && (
        <div className="flex flex-col gap-5">
          {/* Intro Hook */}
          <div className="bg-white border-3 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000] flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-yellow-300 border border-black rounded text-[10px] font-black uppercase">
                Interactive Blueprints
              </span>
              <h3 className="text-lg font-black text-black">
                Real-World System Architecture Blueprints
              </h3>
            </div>
            <p className="text-sm font-semibold text-slate-700 leading-relaxed">
              Explore end-to-end production designs covering requirements gathering, capacity estimations, API contracts, database schemas, and architectural trade-offs. Click on any design below to explore the complete deep dive.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-2.5 py-1 text-xs font-black border-2 border-black rounded-lg cursor-pointer transition-all ${
                    filterCategory === cat
                      ? "bg-yellow-300 text-black shadow-[2px_2px_0px_0px_#000]"
                      : "bg-slate-100 text-slate-800 hover:bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDesigns.map((design) => (
              <div
                key={design.id}
                className="bg-white border-3 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between gap-4 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-yellow-300 border border-black rounded">
                      {design.badge}
                    </span>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-emerald-100 text-emerald-900 border border-black rounded">
                      {design.difficulty}
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-black">{design.title}</h4>

                  <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                    {design.hook}
                  </p>

                  <div className="bg-slate-50 border-2 border-black/80 rounded-lg p-2.5 flex flex-col gap-1 text-[11px] font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-bold">Category:</span>
                      <span className="font-bold text-slate-800">{design.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-bold">Scale:</span>
                      <span className="font-bold text-slate-800">{design.scale}</span>
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {design.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-emerald-50 text-emerald-900 border border-black rounded text-[10px] font-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleSelectDesign(design.id)}
                  className="w-full py-2.5 bg-[#0ACF83] text-black font-black text-xs border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] hover:bg-emerald-400 cursor-pointer active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5"
                >
                  Explore Full Design ➔
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ----------------- VIEW 2: INDIVIDUAL DESIGN CASE STUDY ----------------- */}
      {selectedDesign && (
        <div className="flex flex-col gap-4">
          {/* Design Overview Card */}
          <div className="bg-white border-3 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000] flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-yellow-300 border border-black rounded text-xs font-black uppercase">
                  {selectedDesign.badge}
                </span>
                <span className="text-xs font-black uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 border border-black rounded">
                  {selectedDesign.category}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-600">
                Scale: {selectedDesign.scale}
              </span>
            </div>

            <p className="text-sm font-bold text-slate-800 leading-relaxed">
              {selectedDesign.hook}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {selectedDesign.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-slate-100 text-black border-2 border-black rounded-md text-xs font-black shadow-[1px_1px_0px_0px_#000]"
                >
                  ⚡ {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Topics and Points */}
          {selectedDesign.topics.map((topic, tIdx) => (
            <div
              key={tIdx}
              className="bg-white border-3 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000] flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 shrink-0 rounded-full bg-[#00A896] border-2 border-black flex items-center justify-center font-black text-xs text-white">
                  {tIdx + 1}
                </span>
                <h4 className="text-base sm:text-lg font-black text-black">
                  {topic.title}
                </h4>
              </div>

              {topic.hook && (
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                  {topic.hook}
                </p>
              )}

              {topic.points && (
                <ul className="flex flex-col gap-2">
                  {topic.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
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
            </div>
          ))}

          {/* Architectural Diagram */}
          {selectedDesign.diagram && (
            <div className="bg-emerald-50/60 border-2 border-black/80 rounded-xl px-3 sm:px-5 my-1">
              {selectedDesign.diagram}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Designs;
