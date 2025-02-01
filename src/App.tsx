import React, { useState } from 'react';
import { Github, Linkedin, Mail, GraduationCap, Briefcase, Brain, ChevronRight, Award, MessageSquare, Code, Users, LineChart, Lightbulb } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('medical');

  const workCategories = {
    medical: {
      title: "Medical Devices",
      projects: [
        {
          title: "Epidural Guidance System",
          period: "UBC, 2009–2014",
          description: "Developed a real-time needle tracking system for ultrasound-guided procedures, achieving sub-millimeter accuracy."
        },
        {
          title: "Radiation Therapy for Prostate Cancer",
          period: "Stanford, 2015–2016",
          description: "Designed motion-tracking systems using ultrasound, achieving 0.1 ± 0.6 mm alignment accuracy to protect healthy tissues."
        },
        {
          title: "Robotic Surgery",
          period: "Think Surgical, 2016–2017",
          description: "Built 3D segmentation algorithms for robotic-assisted hip and knee replacements, improving precision and alignment."
        },
        {
          title: "AI Radiology Co-Pilot",
          period: "Google, 2019–2023",
          description: "Created AI tools for lung and breast cancer detection, improving diagnostic sensitivity by +7.6%. Published in Radiology Advances' Best of 2024."
        }
      ]
    },
    robotics: {
      title: "Robotics",
      projects: [
        {
          title: "Industrial Robotics",
          period: "Behsaman Co., 2007–2009",
          description: "Led multidisciplinary teams to design high-precision industrial robots using embedded systems."
        },
        {
          title: "Autonomous Surgical Robots",
          period: "Think Surgical, 2016–2017",
          description: "Built QNX-based software to enable sub-millimeter precision in robotic surgeries."
        }
      ]
    },
    vision: {
      title: "Computer Vision",
      projects: [
        {
          title: "Nodule Detection in CT",
          period: "Google, 2019–2023",
          description: "Achieved AUCs of 0.754 and 0.885, enhancing workflows for lung cancer diagnosis."
        },
        {
          title: "Eye Gaze Tracking",
          period: "UBC/NMotive, 2012–2013",
          description: "Invented a system for Alzheimer's detection, securing a $15,000 grant and recognition as a Johnson & Johnson finalist."
        },
        {
          title: "Air Quality Modeling",
          period: "Google, 2022",
          description: "Led a team of 6+ to build U-Net models for NO2 prediction using satellite and traffic data."
        }
      ]
    },
    nlp: {
      title: "NLP",
      projects: [
        {
          title: "Pathology BERT",
          period: "Google, 2019–2023",
          description: "Fine-tuned BioBERT models, cutting labeling costs by 50% for healthcare applications."
        },
        {
          title: "RAG for Yora AI",
          period: "Yora AI Corp., 2023–2024",
          description: "Built retrieval-augmented systems for on-device personalized NLP applications."
        }
      ]
    },
    ranking: {
      title: "Ranking Systems",
      projects: [
        {
          title: "Music Retrieval and Ranking",
          period: "Amazon, 2017–2019",
          description: "Designed deep learning rankers for Amazon Music Search, handling 10,000+ requests/second."
        },
        {
          title: "Ads Ranking",
          period: "Meta, 2024–Present",
          description: "Built privacy-preserving ML models for large-scale ad personalization and relevance."
        }
      ]
    },
    humanai: {
      title: "Human-AI Interaction",
      projects: [
        {
          title: "Eye Gaze Tracking",
          period: "UBC/NMotive, 2012–2013",
          description: "Invented an eye-gaze tracking system, a key enabler for human-AI interaction."
        },
        {
          title: "Radiology Co-Pilot",
          period: "Google, 2019–2023",
          description: "Built explainable AI tools that improve cancer diagnosis workflows and integrate seamlessly into radiology settings."
        }
      ]
    },
    business: {
      title: "Business and Entrepreneurship",
      projects: [
        {
          title: "University of British Columbia",
          period: "2013",
          description: "Minor in Business & Engineering Management: Acquired foundational knowledge in business strategy and innovation, complementing technical expertise."
        },
        {
          title: "NMotive Research",
          period: "2012–2013",
          description: "Co-founded a company developing eye-gaze tracking systems, securing funding and global recognition."
        },
        {
          title: "Yora AI",
          period: "2023–2024",
          description: "Founded a company focused on ranking AI solutions, delivering secure, personalized solutions to users globally."
        }
      ]
    },
    math: {
      title: "Mathematics",
      projects: [
        {
          title: "Inverse Problem Solving",
          period: "K.N. Toosi University, 2007–2009",
          description: "Created a semi-wavelet-based inverse problem solution for diffuse optical tomography."
        },
        {
          title: "3D Calibration Techniques",
          period: "UBC, 2009–2014",
          description: "Designed closed-form solutions for ultrasound calibration, achieving sub-millimeter accuracy and earning international recognition."
        }
      ]
    }
  };

  const testimonials = [
    {
      category: "Leadership and Mentorship",
      quotes: [
        {
          text: [
            "Ryan is an extremely talented technical leader with a successful track record of scientific contributions supported by his machine learning and research skills. I had the opportunity to work with him as his direct manager on modeling geospatial environmental signals.",
            
            "Ryan identified key data pipeline and computer vision modeling goals for our geospatial modeling research work that were critical for us to make progress. He led a working group of engineers and scientists across the company to quickly achieve these milestones to understand the potential of our datasets and how they might be integrated into products. He was also able to demonstrate impressive communication skills by showcasing the technologies we developed to multiple product stakeholders, understand the timelines and technical work to integrate into products, and influence those partners to contribute their own time and expertise to the effort.",
            
            "In addition, Ryan was able to balance his work with creative and novel contributions to address lung cancer. He was able to successfully plan and manage a student researcher project under tight deadlines and is a significant contributor to multiple ongoing publications in collaborations with other researchers on our team.",
            
            "Ryan possesses a unique skillset of understanding how technology can practically be applied, able to communicate and lead technical efforts to achieve those goals, and he has a deep understanding of the underlying science to be able to accelerate process and focus a team's efforts on the most important tasks. Ryan would be a valuable asset to any company and has my highest recommendation."
          ].map((paragraph, i) => (
            <p key={i} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          )),
          author: <a href="https://www.linkedin.com/in/drgautamprasad/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Gautam Prasad</a>,
          role: "Staff Software Engineer and Manager at Google Research"
        },
        {
          text: [
            "I was Ryan's manager at Google from 2021-22. During this time, I worked closely with Ryan and can attest to his intelligence, drive, and exceptional interpersonal skills.",
            
            "Ryan has a passion for research and he consistently brought innovative ideas to the table. He is dedicated to his work and persistent in ensuring that projects are completed. This was demonstrated by his numerous papers submitted for publication during his time at Google.",
            
            "Ryan also has enthusiasm for mentorship and he mentored an intern while he was reporting to me. I observed firsthand that Ryan worked hard to create a welcoming environment and provide regular guidance for the intern's project. The intern spoke highly of Ryan's guidance and support when their internship concluded.",
            
            "Ryan is a talented individual with a passion for research and a drive to succeed. I am confident that he will be a valuable asset to any team."
          ].map((paragraph, i) => (
            <p key={i} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          )),
          author: <a href="https://www.linkedin.com/in/daniel-golden/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Daniel Golden</a>,

          role: "Machine Learning Lead at Google Health"
        },
        {
          text: "I had the pleasure of working under Ryan's direction on a research project applying Machine Learning methods to a novel medical application. Ryan was generous with his time, offering technical guidance and feedback on my progress. He was never discouraged by the challenges of the project, and quickly provided answers to my questions, or connected me to somebody else that could, then stayed engaged to ensure follow-through. As a mentor, Ryan was kind, caring, and thoughtful of my needs. I would be ecstatic to have another opportunity to work him.",
          author: <a href="https://www.linkedin.com/in/ryanneph/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Ryan Neph</a>,
          role: "Senior Software Engineer at Google"
        },
        {
          text: "Ryan was my mentor at Google for the past two years. Aside from his notable AI credentials and self-starter attitude, Ryan is a remarkable coworker and person. He comes to work everyday with a positive attitude and truly cares about the well-being of his teammates. It was an honor to work with Ryan and he will be a valuable addition to any team he joins--not simply due to his technical skills, but also with the supporting presence he will provide to the rest of the team.",
          author: <a href="https://www.linkedin.com/in/kendallpark/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Kendall Park</a>,
          role: "MD-PhD Student and Software Developer"
        },
        {
          text: "Ryan was a mentor on my 20% role at Google and our project TL. Throughout our time together, he has demonstrated technical, organizational, and interpersonal excellence; he provided detailed help on my data analysis project, coordinated multiple team priorities, and spearheaded a hackathon in collaboration with sister research teams to upgrade our collective infrastructure. Ryan's skillset would make him a valuable team member or leader no matter where he goes—on top of being a fantastic person to work with.",
          author: <a href="https://www.linkedin.com/in/musicbyjing/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Jing Liu</a>,
          role: "Software Engineer at Google"
        }
      ]
    },
    {
      category: "Cross-Functional Collaboration",
      quotes: [
        {
          text: "I had the pleasure to work with Ryan on a collaboration with another business unit in Asia with the goal of customizing, retraining and deploying an existing medical ML solution. In his role as the tech and project lead, he effectively brought all stakeholders to one table in order to identify required changes to the existing stack and agree upon the best solution approach. He assigned project roles and responsibilities early on, effectively tracked progress, and identified and escalated roadblocks quickly. I was particularly impressed by his strong focus on timely and impactful outcomes, his very strong technical understanding, and outstanding team player spirit.",
          author: <a href="https://www.linkedin.com/in/timo-kohlberger-b5a1408/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Timo Kohlberger</a>,
          role: "Senior Software Engineer at Google"
        },
        {
          text: "Ryan and I worked together during my time as a 20% Program Manager supporting the Health AI team at Google. Ryan's expertise and professionalism in developing end-to-end AI-based models and conducting research continuously added an immense amount of value to the projects he was part of. Combined with his outstanding communication skills, Ryan is also an absolute pleasure to work with; he is always helpful with confidence and enthusiasm. Ryan's skills, personal and leadership qualities would make him an invaluable addition to any project or organisation.",
          author: <a href="https://www.linkedin.com/in/charlottehardt/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Charlotte Hardt</a>,
          role: "Senior Innovation Consultant at Google"
        }
      ]
    },
    {
      category: "Technical Expertise and Innovation",
      quotes: [

        {
          text: "Ryan is an independent, self-motivated, and personable Software and ML Research Engineer. From being able to independently understand, formulate, and compose solutions, collaborate with a variety of engineers and cross-functional stakeholders, Ryan has the skills needed to thrive in an ambiguous and dynamic work environment. Ryan's diverse skill set is apparent from the projects he independently drove, which demonstrate both versatility in applying cutting edge deep learning techniques to solve real-world problems and the ability to work with experts from various fields to make these efforts successful: from lung cancer detection on chest CTs, natural language processing of medical reports, to being a tech lead (TL) on our geo-spatial modeling efforts in environmental health. Furthermore, during his time on my team, Ryan also became a mentor and coach to more junior engineers, and would bring that technical leadership to any organization lucky enough to hire him.",
          author: <a href="https://www.linkedin.com/in/krish-eswaran-1ab2b612/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Krish Eswaran</a>,
          role: "Senior Staff Software Engineer at Google"
        },
        {
          text: "Ryan is an extremely strong ML engineer with expertise in developing and tuning complex multi-stage ML models for use in healthcare applications, and then carrying the work through to the next stage of understanding the different workflows and set ups where the model may be most useful. Perhaps more importantly, he's a team player and a fast learner - traits that when combined with his technical skills, makes him an asset to any team.",
          author: <a href="https://www.linkedin.com/in/yunliu0/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Yun Liu</a>,
          role: "Senior Staff Research Scientist at Google"
        },
        {
          text: [
            "I had the pleasure of working with Ryan on my team, where he demonstrated exceptional technical skills and leadership abilities. Ryan led the development of the air quality modeling project where he coordinated a team of 6 contributors. He was also the technical lead for the creation of AI-based vision models for incidental lung cancer detection using chest CT scans.",
            
            "Ryan's expertise in AI and machine learning was invaluable as he designed and conducted reader studies to evaluate the integration of lung cancer AI models into clinical workflows. He also showed his ability to lead cross-functional collaboration by designing the integration of NLP and multi-modal models for clinical applications.",
            
            "In short, I highly recommend Ryan for any senior software engineering role. He would be an asset to any team and would bring a wealth of technical knowledge, leadership experience, and a commitment to delivering outstanding results."
          ].map((paragraph, i) => (
            <p key={i} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          )),
          author: <a href="https://www.linkedin.com/in/marcin-sieniek/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Marcin Sieniek</a>,
          role: "Staff Software Engineer at Google"
        },
        {
          text: "Ryan is an extremely strong ML research engineer with expertise building ML models for healthcare. More importantly, his drive and enthusiasm for projects in this domain, his perseverance, along with his highly collegiate style of working makes him an asset to any team.",
          author: <a href="https://www.linkedin.com/in/shruthi-prabhakara-9396804b/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Shruthi Prabhakara</a>,
          role: "Engineering Lead, AI @ Google Health"
        },
        {
          text: [
            "I worked closely with Ryan for a long time. He is one of the best scientists, engineers, and team players I have known.",
            
            "We worked together on a geospatial modeling project, and he was the tech lead of this project. He collaborated with colleagues from diverse scientific backgrounds to identify problems and opportunities in this project. He also leveraged HPC and machine-learning frameworks to develop effective and efficient computational solutions. Furthermore, as the tech lead, he played a critical role in sharing and explaining our computational models and applications to a broad audience from diverse disciplines in Google.",
            
            "In addition to his impressive engineering and communication skills, he also has a record of publications comparable to professors at top-tier research universities. He has numerous highly-cited research papers in the medical imaging domain.",
            
            "Ryan is a truly outstanding scientist and a reliable teammate. Any company would be lucky to have him."
          ].map((paragraph, i) => (
            <p key={i} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          )),
          author: <a href="hhttps://www.linkedin.com/in/anz25/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">An Zheng</a>,
          role: "Software Engineer at Google"
        },
      ]
    },
    {
      category: "Work Ethic and Team Spirit",
      quotes: [
        {
          text: "Ryan is a brilliant engineer who was one of my most favorite people to work with at Google. We spent almost 2 years working together on AI-based systems for managing lung cancer. Some of Ryan's greatest strengths are his ability to quickly pick up new concepts, his work ethic, and his humility. He's incredibly approachable, very easy to work with, and always willing to lend a helping hand. Ryan will be an asset to any team, and I highly recommend him!",
          author: <a href="https://www.linkedin.com/in/charlestlau/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Charles Lau</a>,

          role: "Research Radiologist at Google / Associate Clinical Professor"
        },
        {
          text: "I loved working with Ryan!!! He was always positive and was a real team player. I loved how he always looked out for other people, especially the more junior engineers.",
          author: <a href="https://www.linkedin.com/in/godbolevarun/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Varun Godbole</a>,

          role: "Senior Software Engineer at Google"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 z-10 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h1 className="text-white text-xl font-light">Ryan Arman, PhD</h1>
          <div className="flex flex-wrap gap-4 md:gap-8">
            <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#work" className="text-gray-300 hover:text-white transition">Work</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-24 md:pt-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ryan Arman</h2>
          <p className="text-xl md:text-2xl text-blue-400 mb-8">Transforming Healthcare, Robotics, AI, and Ranking Systems with Two Decades of Innovation and Leadership</p>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Hi, I'm Ryan Arman, a technical leader, innovator, and entrepreneur with over two decades of experience in machine learning, medical devices, human-AI interaction, robotics, and ranking systems. 
          </p>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            My journey spans groundbreaking contributions in healthcare AI, robotics, and ranking systems. I've built solutions that directly impact lives, from improving cancer diagnosis workflows to enabling precision in robotic surgery and optimizing large-scale ranking systems. 
            </p>     

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition">
              Learn More About Me
            </a>
            <a href="#work" className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition">
              Explore My Work
            </a>
            <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition">
              Get in Touch
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/rmnajafi/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <Linkedin size={32} />
            </a>
            <a href="https://github.com/ryan-najafi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
              <Github size={32} />
            </a>
            <a href="https://scholar.google.com/citations?user=8Ypm7kQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <GraduationCap size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <GraduationCap className="mr-2" /> Personal Background
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Born as Mohammad Najafi in Tehran, Iran, I later chose the name Ryan Arman to align with my personal and professional journey. This name reflects my Persian heritage and carries a meaning of strength and aspiration. It symbolizes my commitment to authenticity, embracing cultural roots while forging a new path.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I combined my passion for real-world systems with technical expertise, working in computer hardware and electronics while pursuing my B.Sc. in Electrical Engineering. Motivated to create impactful innovations, I earned a Master's in Biomedical Engineering and, in 2009, moved to Canada for a Ph.D. at the University of British Columbia. There, I pivoted to medical imaging and robotics, inventing new ultrasound calibration methods that won the Best Paper Award at IPCAI (2012) and developing systems like an eye-gaze tracker for dementia detection, which became a Johnson & Johnson Cognition Challenge finalist (2013).
              </p>
            </div>
            <div className="relative">
              <img 
                src="/img1.jpeg"
                alt="Lake Bled with mountains and church"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Briefcase className="mr-2" /> Global Career Journey
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                <span><strong>Stanford University:</strong> Postdoctoral researcher in Radiation Oncology, using ultrasound to track internal prostate motion during radiation therapy.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                <span><strong>Think Surgical:</strong> Proposed and developed a robot calibration system ensuring sub-millimeter precision for robotic surgeries.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                <span><strong>Amazon:</strong> Implemented a Deep Learning Ranker for Amazon Music Search and TA'd for Amazon ML University.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                <span><strong>Google:</strong> Developed a Radiology Co-Pilot for lung cancer diagnosis and led an Air Quality Modeling project for geospatial environmental health.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                <span><strong>Entrepreneurship:</strong> Founded Yora AI to bring ranking AI solutions to more people and use cases.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                <span><strong>Meta:</strong> Joined in May 2024 to develop ads ranking systems, building scalable and privacy-preserving ML models.</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Brain className="mr-2" /> Skills & Expertise
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Machine Learning</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>Computer Vision</li>
                    <li>NLP</li>
                    <li>Robotics</li>
                    <li>Ranking Systems</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Programming</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>Python</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>SQL</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Award className="mr-2" /> Recognition
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <Award className="mr-2 mt-1 text-yellow-600 flex-shrink-0" />
                  <span>Best Paper Award: IPCAI (2012) for novel ultrasound calibration</span>
                </li>
                <li className="flex items-start">
                  <Award className="mr-2 mt-1 text-yellow-600 flex-shrink-0" />
                  <span>
                    <a 
                      href="https://academic.oup.com/radadv/pages/best-of-radiology-advances?login=false"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      Best of Radiology Advances 2024
                    </a>
                    : Recognized for breast cancer detection work
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="mr-2 mt-1 text-yellow-600 flex-shrink-0" />
                  <span>$15,000 GRAND-NCE Commercialization Grant for NMotive Research</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Work & Projects</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(workCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2 rounded-full transition ${
                  activeTab === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{workCategories[activeTab].title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workCategories[activeTab].projects.map((project, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-blue-600 mb-4">{project.period}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What People Say</h2>
          
          {testimonials.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.quotes.map((quote, qIndex) => (
                  <div key={qIndex} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                    <p className="text-gray-600 mb-4 italic">{quote.text}</p>
                    <div className="text-gray-900 font-semibold">{quote.author}</div>
                    <div className="text-gray-500">{quote.role}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Let's Connect</h3>
              <p className="text-gray-600">
                I'm always interested in hearing about new opportunities, collaborations, 
                or just connecting with fellow innovators in the field.
              </p>
              <div className="flex space-x-8 justify-center mt-8">
                <a href="https://www.linkedin.com/in/rmnajafi/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600 group">
                  <Linkedin className="mr-2 group-hover:scale-110 transition-transform" size={24} /> 
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/ryan-najafi" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600 group">
                  <Github className="mr-2 group-hover:scale-110 transition-transform" size={24} /> 
                  <span>GitHub</span>
                </a>
                <a href="https://scholar.google.com/citations?user=8Ypm7kQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600 group">
                  <GraduationCap className="mr-2 group-hover:scale-110 transition-transform" size={24} /> 
                  <span>Google Scholar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;