
import "../styles/hero.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {

  return (

<section className="hero">

<div className="left">

<h3>Hello 👋</h3>

<h1>I'm Neha Sharma</h1>

<TypeAnimation

sequence={[
"Software Developer",
2000,

"MERN Stack Developer",
2000,

"Java Developer",
2000

]}

speed={50}

repeat={Infinity}

/>

<p>

Passionate Full Stack Developer focused on building scalable,
responsive and user-friendly web applications.

</p>

<div className="buttons">

<a href="/resume.pdf" download>

<button>

Download Resume

</button>

</a>

<a
href="https://github.com/NehaSharma-Programmer"
target="_blank"
>

<button>

GitHub

</button>

</a>

<a
href="https://linkedin.com/in/neha-sharma-7099a0327"
target="_blank"
>

<button>

LinkedIn

</button>

</a>

</div>

</div>

<div className="right">

<div className="circle">

👩‍💻

</div>

</div>

</section>

  );
}

export default Hero;