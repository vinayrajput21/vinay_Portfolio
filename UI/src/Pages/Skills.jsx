import React, { useState } from 'react'
import SystemDesignData from '../Services/SystemDesignData.jsx'

const skillsData = {
  'full-stack': {
    title: 'Full Stack Development',
    items: [
      {
        name: 'Frontend Development',
        subtitle: 'React.js, Next.js, HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS',
        description: 'Building modern, performant web applications with deep React ecosystem expertise: Context API, Axios, Redux Toolkit, custom hooks, and type-safe component architectures.'
      },
      {
        name: 'Backend & Databases',
        subtitle: 'Node.js, Express.js, MongoDB, SQL',
        description: 'Designing scalable RESTful APIs, data validation layers, schema architecture, and query optimization across relational and NoSQL databases.'
      },
      {
        name: 'Version Control & DevOps',
        subtitle: 'Git, GitHub, GitLab, GitHub Actions, Jenkins',
        description: 'Managing source control workflows, branch protection strategies, automated CI/CD pipelines, and continuous integration deployments.'
      }
    ]
  },
  'aws': {
    title: 'AWS Cloud Services',
    items: [  
      {
        name: 'Compute & Serverless',
        subtitle: 'AWS Lambda, Amazon EC2, Amazon ECS',
        description: 'Provisioning scalable virtual servers, orchestrating containers, and developing event-driven, cost-efficient serverless microservices.'
      },
      {
        name: 'API Management & Networking',
        subtitle: 'Amazon API Gateway, S3 bucket, CloudFront',
        description: 'Creating, publishing, securing, and monitoring robust REST and WebSocket endpoints with integrated throttling, caching, and custom domain routing.'
      }
    ]
  },
  'ai-ml': {
    title: 'AI / Machine Learning',
    items: [
      {
        name: 'Upcoming Skills'
      }
    ]
  },
  'rag': {
    title: 'RAG - Retrieval-Augmented Generation',
    items: [
      {
        name: 'Upcoming Skills'
      }
    ]
  }
}

const navItems = [
  { id: 'full-stack', label: 'Full Stack', badge: '1' },
  { id: 'system-design', label: 'System Design', badge: '2' },
  { id: 'aws', label: 'AWS', badge: '3' },
  { id: 'ai-ml', label: 'AI / ML', badge: '4' },
  { id: 'rag', label: 'RAG', badge: '5' }
]

function Skills() {
  const [activeTab, setActiveTab] = useState('system-design')

  return (
    <div className="min-h-screen bg-[#FCD34D] p-4 sm:p-8 font-sans flex justify-center items-start">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 items-start">
        
        <div className="w-full md:w-80 bg-[#00A896] border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_#000] p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3 pb-2 ">
            <span className="w-8 h-8 rounded-full bg-amber-400 border-2 border-black flex items-center justify-center font-black text-sm text-black">
              ★
            </span>
            <h2 className="text-2xl font-black tracking-wide text-white">Skills Menu</h2>
          </div>

          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isSelected = activeTab === item.id
              const isSpecial = item.id === 'system-design'

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border-3 border-black text-left font-black transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 text-black shadow-[4px_4px_0px_0px_#000] translate-x-1'
                      : isSpecial
                      ? 'bg-emerald-200 text-black hover:bg-emerald-300 shadow-[2px_2px_0px_0px_#000]'
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
          {activeTab === 'system-design' ? (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 ">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-amber-400 border-2 border-black flex items-center justify-center font-black text-base text-black">
                    ★
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-white">
                      System Design blogs
                    </h2>
                    <p className="text-xs font-bold text-amber-200">Continuous updates</p>
                  </div>
                </div>
              </div>
              <SystemDesignData />
            </>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-amber-400 border-2 border-black flex items-center justify-center font-black text-base text-black">
                  {navItems.find((tab) => tab.id === activeTab)?.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-white">
                  {skillsData[activeTab]?.title}
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {skillsData[activeTab]?.items.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white border-3 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000] flex flex-col gap-2"
                  >
                    <h3 className="text-xl font-black text-black">
                      {card.name}
                    </h3>
                    {card.subtitle && (
                      <p className="text-sm font-bold text-[#00A896]">
                        {card.subtitle}
                      </p>
                    )}
                    {card.description && (
                      <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                        {card.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  )
}

export default Skills