import React, { useState } from 'react'

const skillsData = {
  'full-stack': {
    title: 'Full Stack Development',
    items: [
      {
        name: 'Frontend Technologies',
        subtitle: 'React.js, Next.js, Tailwind CSS, TypeScript, Redux',
        description: 'Building responsive, accessible, and high-performance user interfaces with modern web standards.'
      },
      {
        name: 'Backend Technologies',
        subtitle: 'Node.js, Express, Go, PostgreSQL, MongoDB, Redis',
        description: 'Architecting robust RESTful and GraphQL APIs, managing databases, and implementing authentication.'
      }
    ]
  },
  'ai-ml': {
    title: 'AI / Machine Learning',
    items: [
      {
        name: 'LLM & Generative AI',
        subtitle: 'LangChain, OpenAI API, HuggingFace, Vector DBs (Pinecone, Chroma)',
        description: 'Implementing RAG pipelines, fine-tuning prompt workflows, and embedding-based search retrieval.'
      },
      {
        name: 'Core Machine Learning',
        subtitle: 'Python, PyTorch, Scikit-Learn, Pandas, NumPy',
        description: 'Data preprocessing, feature engineering, classification models, and neural network development.'
      }
    ]
  },
  'system-design': {
    title: 'System Design & Architecture',
    items: [
      {
        name: 'Distributed Systems',
        subtitle: 'Microservices, Event-Driven Architecture, Kafka, RabbitMQ',
        description: 'Designing fault-tolerant, horizontally scalable backend infrastructure and asynchronous message queues.'
      },
      {
        name: 'Cloud & DevOps',
        subtitle: 'Docker, Kubernetes, AWS (S3, EC2, ECS), CI/CD Actions',
        description: 'Containerizing services, managing orchestrations, load balancers, caching layers, and deployment pipelines.'
      }
    ]
  }
}

const navItems = [
  { id: 'full-stack', label: 'Full Stack', badge: '1' },
  { id: 'ai-ml', label: 'AI / ML', badge: '2' },
  { id: 'system-design', label: 'System Design', badge: '3' }
]

function Skills() {
  const [activeTab, setActiveTab] = useState('full-stack')

  return (
    <div className="min-h-screen bg-[#FCD34D] p-4 sm:p-8 font-sans flex justify-center items-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 items-start">
        
        <div className="w-full md:w-80 bg-[#00A896] border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_#000] p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3 pb-2 border-b-4 border-black">
            <span className="w-8 h-8 rounded-full bg-amber-400 border-2 border-black flex items-center justify-center font-black text-sm text-black">
              ★
            </span>
            <h2 className="text-2xl font-black tracking-wide text-white">Skills Menu</h2>
          </div>

          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isSelected = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border-3 border-black text-left font-black transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 text-black shadow-[4px_4px_0px_0px_#000] translate-x-1'
                      : 'bg-white text-black hover:bg-amber-100 shadow-[2px_2px_0px_0px_#000]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                      {item.badge}
                    </span>
                    <span className="text-base font-extrabold">{item.label}</span>
                  </div>
                  <span className="text-lg font-black">→</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex-1 w-full bg-[#00A896] border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_#000] p-5 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-amber-400 border-2 border-black flex items-center justify-center font-black text-base text-black">
              {navItems.find((tab) => tab.id === activeTab)?.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-white">
              {skillsData[activeTab].title}
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {skillsData[activeTab].items.map((card, index) => (
              <div
                key={index}
                className="bg-white border-3 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000] flex flex-col gap-2"
              >
                <h3 className="text-xl font-black text-black">
                  {card.name}
                </h3>
                <p className="text-sm font-bold text-[#00A896]">
                  {card.subtitle}
                </p>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills