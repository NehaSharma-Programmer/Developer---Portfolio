
import "../styles/skills.css";

import {
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";


function Skills(){

const skills = [

{
name:"Java",
icon:<FaJava/>
},

{
name:"JavaScript",
icon:<FaJs/>
},

{
name:"React.js",
icon:<FaReact/>
},

{
name:"Node.js",
icon:<FaNodeJs/>
},

{
name:"Express.js",
icon:<SiExpress/>
},

{
name:"MongoDB",
icon:<SiMongodb/>
},

{
name:"Tailwind CSS",
icon:<SiTailwindcss/>
},

{
name:"MySQL",
icon:<SiMysql/>
},

{
name:"Git & GitHub",
icon:<FaGithub/>
},

{
name:"DSA",
icon:"🧠"
},

{
name:"OOP",
icon:"⚙️"
}


];


return(

<section className="skills" id="skills">

<h2>
Technical Skills
</h2>


<div className="skills-container">


{
skills.map((skill,index)=>(

<div 
className="skill-card"
key={index}
>


<div className="skill-icon">
{skill.icon}
</div>


<h3>
{skill.name}
</h3>


</div>


))
}


</div>


</section>

)


}


export default Skills;