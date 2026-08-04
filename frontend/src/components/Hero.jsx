
import "../styles/hero.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hello">
          Hello 👋 I'm
        </p>

        <h1>
          Neha Sharma
        </h1>


        <h2>
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "Full Stack Developer",
              2000
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>


        <p className="description">
          B.Tech Computer Science Engineering student passionate about
          building scalable full-stack web applications using React,
          Node.js, Express.js and MongoDB.
        </p>


        <div className="hero-buttons">

          <a href="/resume.pdf" download>
            <button>
              Download Resume
            </button>
          </a>


          <a 
          href="https://github.com/NehaSharma-Programmer"
          target="_blank"
          >
            <FaGithub/>
          </a>


          <a 
          href="https://linkedin.com/in/neha-sharma-7099a0327"
          target="_blank"
          >
            <FaLinkedin/>
          </a>

        </div>


      </div>


      <div className="hero-image">

        <div className="profile-circle">
          👩‍💻
        </div>

      </div>


    </section>
  );
}


export default Hero;