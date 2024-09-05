import "./App.css";
import {
  AiFillHtml5,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineConsoleSql,
  AiOutlineWhatsApp,
  AiOutlineMail
} from "react-icons/ai";
import { FaCss3Alt, FaReact, FaBootstrap, FaJava } from "react-icons/fa";
import { SiJavascript, SiGit } from "react-icons/si";
import {
  DiNodejsSmall,
  DiMongodb,
  DiPython,
} from "react-icons/di";
// import {VscVscode} from "react-icons/vsc";
import ProjectCard from "./projectcard/ProjectCard";
import { useState, useEffect } from "react";
import { project } from "./projectcard/projectData";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [data] = useState(project);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <>
      <div className="navbar" id="navbar" >
        <div className="logo">
          <h2>NF </h2>
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li>
                <a href="#homepage">Home</a>{" "}
              </li>
            </ul>
            <ul>
              <li>
                <a href="#about">About</a>{" "}
              </li>
            </ul>
            <ul>
              <li>
                <a href="#project">Project</a>{" "}
              </li>
            </ul>
            <ul>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="homepage" id="homepage">
        <div className="container">
          <div className="content">
            <h1 className="heading" data-aos="zoom-out">
              {" "}
              Hello, I'm Narjis Fatima
            </h1>
            <p className="info">
              Passionate Computer Science student with strong frontend
              development skills{" "}
            </p>
            <div style={{display: 'flex', flexDirection: 'row', gap: '1.4rem'}}>
              <button>
                <a href="#project">project</a>{" "}
              </button>
              <button>
                <a href="https://drive.google.com/file/d/1p6db8_52Zq5Bwkv822S6x5RT8W1TPVpl/view?usp=sharing" target="_blank"  rel="noreferrer">Resume</a>{" "}
              </button>
            </div>
          </div>
          <div className="social-icon" data-aos="zoom-in">
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/narjis-fatima-7b563922a"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="icons" />
              </a>
            </div>

            <div className="icon">
              <a
                href="https://github.com/narjisfatima169/narjisfatima169"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="icons" />
              </a>
            </div>
            <div className="icon">
              <a
                href="mailto:fatimanarjis00786@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail className="icons" />
              </a>
            </div>
            <div className="icon">
              <a
                href="//wa.me/918291126896"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp className="icons" />
              </a>
            </div>
            <div className="icon">
            </div>
          </div>
        </div>
      </div>

      {/* aboutpage */}

      <div className="about" id="about" data-aos="fade-up">
        <div className="container">
          <h1 className="heading-text">about me</h1>
          <div className="info-text">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </div>

          <div className="main-content">
            <div className="left-content" data-aos="fade-right">
              <div className="content-heading">Get To Know me !</div>
              <div className="content-para">
              I am Narjis Fatima, a final-year <strong> B.Tech</strong> student majoring in <strong>Computer Science and Engineering</strong> at PSIT Kanpur. With a strong foundation in<strong> frontend development</strong>, I specialize in React.js, creating dynamic and responsive web applications. I am also highly proficient in HTML, CSS, and JavaScript, enabling me to craft seamless user interfaces.
              </div>
              <div className="content-para">
              In addition to my frontend skills, I am well-versed in <strong>Java</strong>and currently deepening my knowledge in <strong>Data Structures and Algorithms (DSA)</strong> using Java. My academic journey has equipped me with a solid understanding of core computer science concepts, and I am always eager to take on new challenges and grow both personally and professionally.
              </div>
              <div className="content-para">
              I am actively seeking <strong>internship</strong> opportunities where I can contribute my expertise in frontend development and Java, learn from industry professionals, and further refine my skill set. If you have an opportunity that aligns with my background, I would love to <strong>connect </strong>and explore how I can bring value to your team.
              </div>
              <button>
                <a href="#contact">contact</a>
              </button>
            </div>
            <div className="right-content" data-aos="fade-left">
              <div className="content-heading">My Skills</div>
              <div className="skills">
                <div className="skills__skill" data-aos="fade-up">
                  HTML5 <AiFillHtml5 className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  css <FaCss3Alt className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  javascript <SiJavascript className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  React . js <FaReact className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  Git <SiGit className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  github <AiFillGithub className="skills__icon" />
                </div>
                {/* <div className="skills__skill" data-aos="fade-up">
                  Vs code <VscVscode className="skills__icon" />
                </div> */}
                <div className="skills__skill" data-aos="fade-up">
                  Bootstrap <FaBootstrap className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  node js <DiNodejsSmall className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  mongo db <DiMongodb className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  sql <AiOutlineConsoleSql className="skills__icon" />{" "}
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  java <FaJava className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  python <DiPython className="skills__icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product  */}
      <div id="project">
        <div className="container">
          <h1 className="heading-text">Project</h1>
          <div className="info-text">
            Here you will find some of the personal projects{" "}
          </div>
          <div className="containerr">
            {data && data.map((ele) => <ProjectCard ele={ele} key={ele.id} />)}
          </div>
        </div>
      </div>

      {/* contact page  */}

      <div className="contact" id="contact">
        <div className="container">
          <h1 className="heading-text">Contact</h1>
          <div className="info-text">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </div>
          <div className="screen" data-aos="zoom-in">
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                </div>
                <div className="app-contact">
                  <a
                    href="https://www.linkedin.com/in/narjis-fatima-7b563922a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin className="contact-icon" />
                  </a>
                  <a
                    href="https://github.com/narjisfatima169/narjisfatima169"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="contact-icon" />
                  </a>
                  <a
                    href="mailto:fatimanarjis00786@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineMail className="contact-icon" />
                  </a>
                  <a
                    href="//wa.me/918291126896"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineWhatsApp className="contact-icon" />
                  </a>
                </div>
              </div>
              <div className="screen-body-item">
                <form
                  className="app-form"
                  action="https://formspree.io/f/mbjegnoa"
                  method="POST"
                >
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      placeholder="MESSAGE"
                      rows="4"
                      name="message"
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button type="submit">SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* footer  */}
      <div id="footer" className="footer">
        <div className="container">develop by Narjis Fatima</div>
      </div>
    </>
  );
}

export default App;
