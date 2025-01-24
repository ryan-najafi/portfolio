import React from 'react';
import { Github, Linkedin, Mail, GraduationCap, Briefcase, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-transparent z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-light">Ryan Arman, PhD</h1>
          <div className="space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#blog" className="text-gray-300 hover:text-white transition">Blog</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-6">Ryan Arman</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://www.linkedin.com/in/rmnajafi/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <Linkedin size={32} />
            </a>
            <a href="https://github.com/ryan-najafi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
              <Github size={32} />
            </a>
          </div>
          <p className="text-xl text-gray-300 mb-12">AI Engineer, Visionary & Strategist | Ex-Google, Ex-Amazon</p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Hello and welcome to my personal website!</h3>
              <p className="text-gray-600 leading-relaxed">
                With over two decades of experience as an engineer, researcher, and ML software engineer, 
                I have not only contributed to startups and leading companies like Amazon and Google but 
                also carved a niche in translating complex technical challenges into innovative AI solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My work has always been driven by a passion for harnessing the power of technology to 
                improve lives, a vision I continue to pursue through my leadership and technical expertise 
                in shaping the future of technology.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/rmnajafi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                >
                  <Mail size={20} />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Professional workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Career Journey */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="mr-2" /> My Background
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Beginning my career in 2004 as a junior hardware engineer, I rapidly progressed to lead 
                pivotal robotics projects by 2008. My journey led me to earn a PhD in Electrical and 
                Computer Engineering from the University of British Columbia (UBC), focusing on enhancing 
                ultrasound-guided interventions with classical machine learning techniques.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="mr-2" /> Research & Industry Experience
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                My research at Stanford University as a fellow sought to revolutionize patient outcomes 
                for prostate cancer through pioneering ultrasound guidance for precise beam delivery, 
                signal processing for treatment response measurement, and AI-driven automatic ultrasound 
                image registration.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I have spearheaded the development of groundbreaking AI systems across a spectrum of 
                applications, including computer vision, NLP, ranking, retrieval systems, and 
                recommendation engines.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Brain className="mr-2" /> Industry Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                My experience significantly evolved during my time at Amazon Music and especially at 
                Google, where I solidified my expertise in machine learning. At Amazon, I was pivotal 
                in developing and integrating sophisticated ML ranking algorithms. My role at Google 
                took center stage, leading the orchestration of end-to-end AI-based systems for the 
                detection of lung cancer, showcasing my ability to lead complex AI initiatives and 
                cross-functional collaboration. This period marked a major advancement in my career, 
                demonstrating a deepened expertise in AI and its applications in critical healthcare 
                technologies. Earlier, at Think Surgical, I had embarked on algorithm design for 
                autonomous surgical robots, which laid the groundwork for my subsequent achievements 
                in AI and machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;