
import {

FaJava,
FaReact,
FaNodeJs,
FaGitAlt

} from "react-icons/fa";


import {

SiMongodb,
SiJavascript,
SiExpress,
SiTailwindcss

} from "react-icons/si";



const skills=[

["Java",<FaJava/>],

["JavaScript",<SiJavascript/>],

["React.js",<FaReact/>],

["Node.js",<FaNodeJs/>],

["Express.js",<SiExpress/>],

["MongoDB",<SiMongodb/>],

["Tailwind CSS",<SiTailwindcss/>],

["Git/Github",<FaGitAlt/>],

["DSA","🧠"],

["OOP","⚙️"]

];



function Skills(){

return(

<section id="skills">


<h1>
Technical Skills
</h1>


<div className="skills">


{
skills.map((skill,index)=>(

<div className="skill-card" key={index}>

<span>{skill[1]}</span>

<p>{skill[0]}</p>


</div>


))
}



</div>



</section>

)

}



export default Skills;