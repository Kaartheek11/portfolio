import { motion } from 'framer-motion'
import heroImage from './assets/portfolio/Hero-image.jpeg'
import aboutImage from './assets/portfolio/About-C3acYoLP.jpeg'
import project4 from './assets/portfolio/project-4-D2aQLXBi.jpg'
import project5 from './assets/portfolio/project-5-CIuO_Tvz.jpeg'
import project6 from './assets/portfolio/project-6-lopvhMPB.jpeg'
import project7 from './assets/portfolio/project-7-B_-1D55O.jpeg'
import project8 from './assets/portfolio/project-8-ChfycG0i.jpeg'
import project9 from './assets/portfolio/project-9-C5pAk14e.jpeg'
import project10 from './assets/portfolio/project-10-CY6uateE.jpeg'
import project11 from './assets/portfolio/project-11-CFS0KN3p.jpeg'
import project12 from './assets/portfolio/project-12-Cxdv5ewc.jpeg'
import './App.css'

const sectionVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const itemVariant = {
  hidden: { x: -50, opacity: 0, y: 20 },
  visible: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.01, ease: [0.22, 1, 0.36, 1] },
    
  },
}

const listVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const replayViewport = { once: false, amount: 0.22 }

const experience = [
  {
    date: '2024 APR - 2024 AUG',
    role: 'Senior Software Development Engineer - Darwinbox',
    description:
      'Worked on scaling distributed backend systems and improving deployment reliability for high-traffic enterprise applications supporting 100K+ concurrent users. Focused on building scalable services using Django, Node.js, Redis, and Kubernetes while improving system availability, deployment speed, and operational efficiency. Contributed to frontend development with React and TypeScript to create smoother real-time user experiences and reduce perceived latency. Regularly collaborated with cross-functional teams to optimize production systems, improve CI/CD workflows, and deliver stable, production-ready solutions in fast-paced environments.',
    technologies:
      'Python Django Node.js React TypeScript Redis Kubernetes Docker Jenkins PostgreSQL CI/CD AWS',
  },
  {
    date: '2022 MAY - 2024 APR',
    role: 'Software Development Engineer - Darwinbox',
    description:
      'Designed and optimized scalable microservices and distributed systems handling millions of requests per day, focusing on performance, resiliency, and secure service communication. Built backend services with Django, Node.js, REST, and gRPC while working extensively with PostgreSQL, MongoDB, Redis, Cassandra, and DynamoDB to improve throughput and reduce latency. Developed modern React applications with efficient state management and integrated observability tools like CloudWatch, Kibana, and New Relic to improve monitoring and debugging across production environments. Worked closely with infrastructure, product, and engineering teams to build reliable and maintainable systems at scale.',
    technologies:
      'Node.js Django React TypeScript PostgreSQL MongoDB Redis Cassandra DynamoDB REST gRPC AWS CloudWatch Kibana New Relic',
  },
  {
    date: '2022 JAN - 2022 MAY',
    role: 'Software Development Intern - Darwinbox',
    description:
      'Built internal tools and infrastructure-focused solutions while gaining hands-on experience with distributed systems and cloud-native development. Developed a Rust-based visualization tool for infrastructure lifecycle management and worked on financial workflow systems integrating Stripe APIs with durable AWS storage solutions. Focused on improving debugging efficiency, payment reliability, and backend workflow stability while collaborating with senior engineers in a production-driven environment.',
    technologies: 'Rust AWS S3 RDS Stripe APIs Protobuf Distributed Systems Backend Development',
  },
  {
    date: '2021 JUN - 2021 DEC',
    role: 'Software Development Intern - Exposys Data Labs',
    description:
      'Worked on cloud migration and frontend modernization projects using AWS, Terraform, Docker, and React. Helped migrate infrastructure to AWS while implementing CI/CD pipelines and observability tooling to improve deployment reliability and monitoring. Built modular React micro-frontends integrated with GraphQL APIs and automated deployment workflows, contributing to improved scalability and maintainability of the platform.',
    technologies: 'React GraphQL AWS Terraform Docker Jenkins Prometheus Grafana CloudWatch CI/CD',
  },
]

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'Developed a fully functional and responsive portfolio website showcasing projects, professional experiences, and personal details with an intuitive interface and seamless navigation across devices.',
    tech: 'HTML CSS React Node.js JavaScript Framer Motion',
    image: project4,
  },
  {
    title: 'Imagify SaaS Platform',
    description:
      'Built a full-stack MERN application that converts text prompts into generated images, with secure authentication, account management, and a credit-based generation workflow.',
    tech: 'HTML CSS Angular Firebase',
    image: project5,
  },
  {
    title: 'EvalForge',
    description:
      'Built a scalable LLM evaluation platform with React + FastAPI, supporting automated LLM-as-judge scoring and human-in-the-loop evaluation workflows. Achieved 91% agreement across 1,500 responses while reducing manual evaluation effort by 70% through integrated analytics and failure analysis.',
    tech: 'Python FastAPI React TypeScript LLM-as-Judge',
    image: project10,
  },
  {
    title: 'WeatherWise',
    description:
      'Created an interactive weather app that provides live weather and forecasts, enhanced with AI-generated summaries using OpenAI and OpenWeatherMap APIs in a Streamlit interface.',
    tech: 'Python Streamlit OpenAI',
    image: project6,
  },
  {
    title: 'PDF-Insight',
    description:
      'Developed a PDF query assistant that extracts content from multiple documents, builds vector embeddings, and serves context-aware answers using LLM-based retrieval.',
    tech: 'Python LangChain Gemini FAISS OpenAI Embeddings',
    image: project9,
  },
  {
    title: 'Fake News Prediction',
    description:
      'Implemented an NLP and machine learning pipeline using TF-IDF and Logistic Regression to classify news as real or fake, then deployed it with a Streamlit UI for live predictions.',
    tech: 'Python Pandas Numpy NLTK Scikit-Learn Streamlit',
    image: project7,
  },
  {
    title: 'NLP ToolKit',
    description:
      'Built a Hugging Face Transformer-powered NLP toolkit supporting code summarization, text summarization, sentiment analysis, text rephrasing, and humanized rewriting.',
    tech: 'Python Streamlit Hugging Face Transformers',
    image: project8,
  },
  
  {
    title: 'Reinforcement Learning Project',
    description:
      'Implemented SARSA and Double Q-Learning in a custom grid-world environment and analyzed hyperparameter impact on policy quality and learning stability.',
    tech: 'Python Gym Pandas Numpy Matplotlib',
    image: project11,
  },
  {
    title: 'Personal AI Trainer',
    description:
      'Designed a touchless AI trainer using MediaPipe and OpenCV for hands-free interaction and responsive motion-based controls.',
    tech: 'Machine Learning OpenCV MediaPipe Python',
    image: project12,
  },
]

const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express.js',
  'Python',
  'Django',
  'Go',
  'Rust',
  'PostgreSQL',
  'MongoDB',
  'SQL',
  'AWS',
  'Jenkins',
  'Docker',
  'Kubernetes',
  'GraphQL',
  'gRPC',
  'Redis',
  'HTML',
  'CSS',
]

function App() {
  return (
    <main className="portfolio">
      <div className="glow" />
      <header className="top-social">
        <a href="https://www.linkedin.com/in/kaartheek-gottimukkula-4328a71a5/" aria-label="LinkedIn">
          <svg viewBox="0 0 448 512" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8 0 24.1 24.09 0 53.79 0s53.8 24.1 53.8 53.8c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>
        </a>
        <a href="https://github.com/Kaartheek11" aria-label="GitHub">
          <svg viewBox="0 0 496 512" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.4-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.4 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.4-.3 74.8-.3 83.4 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
          </svg>
        </a>
      </header>
      <section className="hero-section section">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="hero-copy"
        >
          <p className="hero-kicker">Kaartheek Gottimukkula</p>
          <h1>Software Engineer</h1>
          <p className="body-text">
          I am a passionate full-stack software engineer with a strong foundation in building scalable, high-performance applications. With experience across professional roles and internships, I work across both frontend and backend technologies, including React, Node.js, Django, and Go, along with cloud platforms like AWS and Kubernetes. I’ve designed and optimized distributed systems that handle millions of requests, improving reliability and reducing latency through efficient database design and caching. My experience includes building responsive user interfaces, developing microservices and secure APIs, and implementing CI/CD pipelines, with a focus on creating efficient, end-to-end solutions for real-world problems.
          </p>
        </motion.div>
        <motion.img
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          src={heroImage}
          alt="Kaartheek Gottimukkula"
          className="hero-image"
        />
      </section>

      <motion.section
        className="section about"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={replayViewport}
      >
        <h2>About <span>Me</span></h2>
        <div className="two-col">
          <motion.img  
          variants={itemVariant} src={aboutImage} alt="About Kaarthek" className="about-image" />
          <motion.div 
          variants={itemVariant} className="about-copy">
            <p className="body-text">
              I’m a software engineer with experience building scalable backend systems, distributed applications, and modern web platforms. Over the past few years, I’ve worked on production-scale systems handling millions of requests, focusing on performance, reliability, and real-time user experiences. My journey started with curiosity about how systems work behind the scenes, which eventually led me into full-stack development, cloud infrastructure, and distributed systems engineering. Currently pursuing my master’s in Computer Science at the University of Utah, I enjoy exploring technologies like Go, Rust, AI/ML, and scalable architectures while continuously challenging myself to learn and build better solutions. Beyond coding, I enjoy solving complex problems, collaborating with people, and finding creative ways to turn ideas into impactful products.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="section technologies"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={replayViewport}
      >
        <h2>Technologies</h2>
        <motion.div className="tech-grid" variants={listVariant}>
          {technologies.map((tech) => (
            <motion.span key={tech} className="tech-pill" variants={itemVariant}>
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="section experience"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Experience</h2>
        <motion.div>
          {experience.map((item) => (
          <motion.article
            key={item.role}
            className="entry"
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="date">{item.date}</p>
            <h3>{item.role}</h3>
            <p className="body-text">{item.description}</p>
            <p className="chips">{item.technologies}</p>
          </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="section projects"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Projects</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={listVariant}
        >
          {projects.map((project) => (
          <motion.article
            key={project.title}
            className="entry project-entry"
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="body-text">{project.description}</p>
              <p className="chips project-tech">{project.tech}</p>
            </div>
          </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="section contact"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={replayViewport}
      >
        <h2>Get in Touch</h2>
        <p className="body-text"> 343 S 500 E, Salt lake city, UT</p>
        <p className="body-text">kaartheek11@gmail.com</p>
      </motion.section>
    </main>
  )
}

export default App
