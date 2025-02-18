import React, { useState } from 'react';
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import Profilepic from './profile_photo.jpeg';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100',
    text: isDarkMode ? 'text-white' : 'text-gray-800',
    title: isDarkMode ? 'text-blue-400' : 'text-indigo-900',
    card: isDarkMode ? 'bg-gray-800' : 'bg-white',
    cardHover: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-blue-50',
    gradient: isDarkMode 
      ? 'bg-gradient-to-r from-gray-800 to-gray-700' 
      : 'bg-gradient-to-r from-blue-50 to-indigo-50',
    secondaryText: isDarkMode ? 'text-gray-300' : 'text-gray-700',
    borderColor: isDarkMode ? 'border-gray-700' : 'border-slate-200',
  };

  return (
    <div className={`min-h-screen ${themeClasses.background} ${themeClasses.text} transition-colors duration-300`}>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 ${isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg z-40`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-16">
            <div className="hidden md:flex items-center justify-center space-x-8">
              <a 
                href="#home" 
                className={`${themeClasses.secondaryText} hover:${themeClasses.title} text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-opacity-10 hover:bg-indigo-500`}
              >
                HOME
              </a>
              <a 
                href="#education" 
                className={`${themeClasses.secondaryText} hover:${themeClasses.title} text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-opacity-10 hover:bg-indigo-500`}
              >
                EDUCATION
              </a>
              <a 
                href="#skills" 
                className={`${themeClasses.secondaryText} hover:${themeClasses.title} text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-opacity-10 hover:bg-indigo-500`}
              >
                SKILLS
              </a>
              <a 
                href="#experience" 
                className={`${themeClasses.secondaryText} hover:${themeClasses.title} text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-opacity-10 hover:bg-indigo-500`}
              >
                EXPERIENCE
              </a>
              <a 
                href="#projects" 
                className={`${themeClasses.secondaryText} hover:${themeClasses.title} text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-opacity-10 hover:bg-indigo-500`}
              >
                PROJECTS
              </a>
              <a 
                href="#certifications" 
                className={`${themeClasses.secondaryText} hover:${themeClasses.title} text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-opacity-10 hover:bg-indigo-500`}
              >
                CERTIFICATIONS
              </a>
              <a 
                href="#achievements" 
                className={`${themeClasses.secondaryText} hover:${themeClasses.title} text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-opacity-10 hover:bg-indigo-500`}
              >
                ACHIEVEMENTS
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Theme Toggle Button */}
      <div className="fixed top-0 right-0 p-4 z-50 flex items-center justify-center">
        <button
          onClick={toggleTheme}
          className={`p-2.5 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-800'} shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center`}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Home Section */}
      <section id="home" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className={`text-4xl font-bold mb-4 ${themeClasses.title}`}>Hi, I'm Vijay Abhinav Telukunta</h1>
              <p className={`text-xl ${themeClasses.secondaryText} mb-8`}>AI and Software Enthusiast</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="mailto:vtelukunta@ufl.edu" className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/Abhinav-Telukunta" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg">
                  <Github size={20} />
                </a>
                <a href="https://leetcode.com/u/algorithm_unlock/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg">
                  <SiLeetcode size={20} /> 
                </a>
                <a href="https://www.hackerrank.com/profile/abhitelukunta" target="_blank" rel="noopener noreferrer" 
                className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                  <SiHackerrank size={20} /> 
                </a>
                <a href="https://www.linkedin.com/in/telukunta-vijay-abhinav/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                  <Linkedin size={20} /> 
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-xl">
                <img      
                  src={Profilepic}             
                  alt="Profile" 
                  className="w-full h-full object-cover object-top rounded-full hover:scale-105 transition-transform duration-300"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education section */}
      <section id="education" className={`py-16 ${themeClasses.card}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${themeClasses.title}`}>Education</h2>
            <div className="space-y-12">
              {[
                {
                  degree: "Master of Science in Computer Science",
                  institution: "University of Florida | Gainesville, Florida",
                  period: "August 2023 - May 2025",
                  gpa: "GPA: 4/4",
                  description: "Relevant coursework: Advanced Data Structures, Analysis of Algorithms, Applied Machine Learning, Deep Learning, Data Engineering, Software Engineering."
                },
                {
                  degree: "Bachelor of Technology in Computer Science",
                  institution: "Jawaharlal Nehru Technological University | Hyderabad, India",
                  period: "July 2018 - July 2022",
                  gpa: "GPA: 3.52/4",
                  description: "Relevant coursework: Database Management, Operating Systems, Object Oriented Programming, Computer Networks, Data Science for Engineers, Web Technologies."
                }
              ].map((edu, index) => (
              <div key={index} className={`${themeClasses.gradient} p-8 rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold ${themeClasses.title}`}>{edu.degree}</h3>
                    <p className={`text-lg ${themeClasses.secondaryText} mt-2`}>{edu.institution}</p>
                    {/* Highlighted GPA Section */}
                    <div className="mt-4">
                      <span className={`${isDarkMode ? 'bg-green-800/30 text-green-400' : 'bg-green-100 text-green-700'} px-4 py-2 rounded-full text-sm font-medium inline-block mb-2`}>
                        🎓 {edu.gpa}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className={`${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-indigo-100 text-indigo-700'} px-4 py-2 rounded-full text-sm font-medium`}>
                      {edu.period}
                    </span>
                  </div>
                </div>
                <p className={`${themeClasses.secondaryText} leading-relaxed`}>{edu.description}</p>
              </div>
            ))}
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 ${themeClasses.background}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${themeClasses.title}`}>Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Programming Skills */}
            <div className={`${themeClasses.card} p-8 rounded-xl shadow-lg`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-blue-900/30' : 'bg-indigo-100'} rounded-lg flex items-center justify-center`}>
                  <svg className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-indigo-600'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3L3 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3L21 8L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold ${themeClasses.title}`}>Programming</h3>
              </div>
              <div className="space-y-3">
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Python, Java, C, C++</span>
                </div>
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>C#, F#, .NET, SQL</span>
                </div>
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Javascript, Typescript, Golang</span>
                </div>
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Linux, Bash, Shell</span>
                </div>
              </div>
            </div>

            {/* Frameworks and Tools */}
            <div className={`${themeClasses.card} p-8 rounded-xl shadow-lg`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-blue-900/30' : 'bg-indigo-100'} rounded-lg flex items-center justify-center`}>
                  <svg className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM12 4C13.1 4 14 4.9 14 6C14 7.1 13.1 8 12 8C10.9 8 10 7.1 10 6C10 4.9 10.9 4 12 4ZM12 20C10.9 20 10 19.1 10 18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18C14 19.1 13.1 20 12 20ZM16.24 12C16.56 12.86 16.5 13.88 16.03 14.61C15.56 15.34 14.68 15.49 13.94 15.25C13.19 15.01 12.92 14.2 13.28 13.47C13.65 12.74 14.53 12.59 15.06 12.93C15.33 13.08 15.44 13.46 15.24 13.79C15.03 14.13 14.65 14.2 14.33 14.03C14.01 13.86 13.89 13.48 14.04 13.14C14.2 12.81 14.58 12.69 14.91 12.84C15.01 12.91 15.03 12.91 15.06 12.93C15.58 12.64 16.24 12 16.24 12Z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold ${themeClasses.title}`}>Frameworks & Tools</h3>
              </div>
              <div className="space-y-3">
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>React, Redux, NodeJs, Express, Jest</span>
                </div>
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Pytest, Fast API, AWS, REST API, Kafka</span>
                </div>
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>HTML5, CSS, Flask, Bootstrap</span>
                </div>
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Git, Postman, Docker, Kubernetes</span>
                </div>
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>JUnit, Selenium, PostgreSQL, MongoDB</span>
                </div>
              </div>
            </div>

            {/* AI */}
            <div className={`${themeClasses.card} p-8 rounded-xl shadow-lg`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-blue-900/30' : 'bg-indigo-100'} rounded-lg flex items-center justify-center`}>
                  <svg className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12C2 15.5 3.93 18.59 6.78 20.32C6.62 20.58 6.5 20.87 6.5 21.17C6.5 22.33 7.67 23.33 9 23.83C9.19 23.94 9.4 24 9.6 24C10.2 24 10.8 23.8 11.3 23.4C12.04 22.62 13.48 21.92 14.72 21.32C15.99 20.72 17.11 20.21 18.08 19.86C18.33 19.74 18.58 19.62 18.82 19.5C20.12 18.96 21 17.64 21 16C21 12.69 17.31 9 14 9H10C6.69 9 3 12.69 3 16C3 17.64 3.88 18.96 5.18 19.5C5.42 19.62 5.67 19.74 5.92 19.86C6.89 20.21 8.01 20.72 9.28 21.32C10.52 21.92 11.96 22.62 12.7 23.4C13.2 23.8 13.8 24 14.4 24C14.6 24 14.81 23.94 15 23.83C16.33 23.33 17.5 22.33 17.5 21.17C17.5 20.87 17.38 20.58 17.22 20.32C20.07 18.59 22 15.5 22 12C22 6.48 17.52 2 12 2Z" />
                  </svg>
                </div>
                {/* <div className={`w-12 h-12 ${isDarkMode ? 'bg-green-900/30' : 'bg-green-100'} rounded-lg flex items-center justify-center`}>
                  <svg className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C10.9 2 10 2.9 10 4V5H8C6.9 5 6 5.9 6 7V17C6 18.1 6.9 19 8 19H16C17.1 19 18 18.1 18 17V7C18 5.9 17.1 5 16 5H14V4C14 2.9 13.1 2 12 2ZM10 8C10 7.45 10.45 7 11 7H13C13.55 7 14 7.45 14 8V16C14 16.55 13.55 17 13 17H11C10.45 17 10 16.55 10 16V8Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div> */}
                <h3 className={`text-xl font-semibold ${themeClasses.title}`}>AI</h3>
              </div>
              <div className="space-y-3">
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Machine learning, Deep Learning, Computer Vision</span>
                </div>
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Tensorflow, PyTorch, Keras</span>
                </div>
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Numpy, Pandas, Scikit-Learn</span>
                </div>
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Natural Language Processing, Image Processing</span>
                </div>
                <div className={`flex items-center ${themeClasses.gradient} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Supervised Learning, Unsupervised Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className={`py-16 ${themeClasses.card}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${themeClasses.title}`}>Experience</h2>
          <div className="space-y-12">
            {[
              {
                title: "Graduate Teaching Assistant",
                company: "University of Florida | Gainesville, Florida",
                period: "August 2024 - May 2025",
                description: "Assisted in delivering lectures and graded 15 assignments for Computer Architecture and Embedded Systems courses. Conducted 2 hours of office sessions per week, clarifying complex concepts and guiding students in successfully completing technical projects."
              },
              {
                title: "Software Engineer",
                company: "NCR Corporation | Hyderabad, India",
                period: "January 2022 - July 2023",
                description: "Developed a silent login feature in React enabling automatic user authentication through session ID persistence, eliminating the need for manual credential entry and reducing user login time by up to 10 seconds, enhancing overall user experience. Handled frontend API requests by invoking corresponding endpoints and implemented loaders, popups and snackbars to capture API and WebSocket responses, reducing debugging time by 30% and improving user interaction. Used Kafka which works on publish subscribe model to improve processing time of cash handling transactions such as deposit, withdrawal, get balance by 20%. Wrote Jest unit tests for new UI components, achieving 90% code coverage and minimizing post release bugs. Collaborated effectively in an Agile team, consistently involved in planning meetings, design discussions and technical debt sessions, resulting in the successful delivery of 30 sprints and 3 major product releases."
              },
              {
                title: "Engineering Intern",
                company: "OpenText | Bengaluru, India",
                period: "October 2021 - December 2021",
                description: "Developed Selenium automation scripts on a BDD JBehave framework for a web application, automating 30 test cases and manually executing 44 test cases, resulting in improved test coverage by 20%."
              },
              {
                title: "Research and Development Intern",
                company: "Genoparadigm | Hyderabad, India",
                period: "August 2020 - June 2021",
                description: "Created an automated breast cancer detection system in Python using the Detectron2 neural network, achieving 98% accuracy in localizing and predicting mitosis regions in whole slide images through transfer learning. Authored technical documentation, simplifying project concepts and workflows, which reduced onboarding time by 40%."
              },
            ].map((exp, index) => (
              <div key={index} className={`${themeClasses.gradient} p-8 rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold ${themeClasses.title}`}>{exp.title}</h3>
                    <p className={`text-lg ${themeClasses.secondaryText} mt-2`}>{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className={`${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-indigo-100 text-indigo-700'} px-4 py-2 rounded-full text-sm font-medium`}>
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className={`${themeClasses.secondaryText} list-disc pl-5`}>
                  {exp.description.split(".").map((point, idx) => 
                    point && <li key={idx}>{point}.</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 ${themeClasses.background}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${themeClasses.title}`}>Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Aorta Segmentation",
                description: "The primary goal of this project is to evaluate deep learning models for automated multi-class segmentation of the aorta in 3D medical images. Accurate segmentation is essential for assessing conditions such as aneurysms, dissections, and other vascular diseases, ultimately aiding in clinical decision-making and enhancing patient outcomes.",
                link: "https://github.com/Abhinav-Telukunta/3D-Segmentation"
              },
              {
                title: "Supermarket Sales Insights",
                description: "This project analyzes supermarket sales data to uncover key insights and build predictive models using regression and classification techniques. By preprocessing the data, engineering features, and applying machine learning models, it explores relationships between factors like gross income, unit price, customer demographics, and shopping patterns.",
                link: "https://github.com/Abhinav-Telukunta/Supermarket-Sales-Insights"
              },
              {
                title: "Image Registration",
                description: "This project focuses on medical image registration using the VoxelMorph framework, a deep learning-based approach. The model aligns moving images to fixed images by optimizing two loss functions: Normalized Cross-Correlation (NCC) and Sum of Squared Differences (SSD).",
                link: "https://github.com/Abhinav-Telukunta/Image-Registration"
              },
              {
                title: "Redactor",
                description: "This project implements a powerful text redaction tool designed to identify and redact sensitive information from textual data. Leveraging the Google Cloud Natural Language API, SpaCy, and NLTK, the tool processes text to detect and redact sensitive entities such as names, addresses, dates, phone numbers, and specific concepts.",
                link: "https://github.com/Abhinav-Telukunta/Redactor"
              },
              {
                title: "Incident Analysis and Visualization",
                description: "This project processes incident summary data from PDF reports provided by the Norman Police Department. By extracting the 'Incident' column, it counts the occurrences of each type of incident (e.g., 'animal bite': 5) and visualizes into clustering, bar graph and word cloud.",
                link: "https://github.com/Abhinav-Telukunta/Incident-Analysis-and-Visualization"
              },
              {
                title: "Personal Finance Tracker",
                description: "Personal Finance Tracker which keeps track of your expenses, displays useful insights so that spending can be planned smart.",
                link: "https://github.com/Abhinav-Telukunta/Personal-Finance-Tracker"
              },
              
            ].map((project, index) => (
              <div key={index} className={`${themeClasses.card} p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300`}>
                <h3 className={`text-xl font-semibold mb-2 ${themeClasses.title}`}>{project.title}</h3>
                <p className={`${themeClasses.secondaryText} mb-4`}>{project.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-indigo-600 hover:text-indigo-800'} transition-colors duration-200`}
                  >
                    <Github className="mr-1" size={16} />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-16 ${themeClasses.card}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${themeClasses.title}`}>Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${themeClasses.gradient} p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300`}>
              <h3 className={`text-2xl font-bold ${themeClasses.title} mb-4`}>Deep Learning Specialization</h3>
              <div className={`${themeClasses.secondaryText} mb-4`}>
                <span className="font-semibold">Certifier:</span> Coursera
              </div>
              <a 
                href="https://www.coursera.org/account/accomplishments/specialization/SY3JVGS7JNJT" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-indigo-600 hover:text-indigo-800'} transition-colors duration-200`}
                >
                  View Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
              </a>
            </div>
            <div className={`${themeClasses.gradient} p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300`}>
              <h3 className={`text-2xl font-bold ${themeClasses.title} mb-4`}>Angular</h3>
              <div className={`${themeClasses.secondaryText} mb-4`}>
                <span className="font-semibold">Certifier:</span> Coursera
              </div>
              <a 
                href="https://www.coursera.org/account/accomplishments/records/WJMSP7L8H2C3" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-indigo-600 hover:text-indigo-800'} transition-colors duration-200`}
                >
                  View Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
              </a>
            </div>
            <div className={`${themeClasses.gradient} p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300`}>
              <h3 className={`text-2xl font-bold ${themeClasses.title} mb-4`}>Bootstrap</h3>
              <div className={`${themeClasses.secondaryText} mb-4`}>
                <span className="font-semibold">Certifier:</span> Coursera
              </div>
              <a 
                href="https://www.coursera.org/account/accomplishments/records/NB3TGLHFSWQA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-indigo-600 hover:text-indigo-800'} transition-colors duration-200`}
                >
                  View Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-16 ${themeClasses.background}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${themeClasses.title}`}>Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Scholarship",
                description: "Issued By: University of Florida"
              },
              {
                title: "Gold medalist",
                description: "Issued By: Jawaharlal Nehru Technological University"
              },
              {
                title: "NPTEL Discipline Star",
                description: "Issued By: National Programme on Technology Enhanced Learning (NPTEL)."
              }
            ].map((achievement, index) => (
              <div key={index} className={`${themeClasses.card} p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300`}>
                <h3 className={`text-xl font-semibold mb-2 ${themeClasses.title}`}>{achievement.title}</h3>
                <p className={`${themeClasses.secondaryText} mb-4`}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
