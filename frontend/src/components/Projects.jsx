
import "../styles/projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


function Projects(){

const projects=[

{
title:"TaskFlow",
stack:"MERN Stack",
description:
"Mini Project Management System with authentication, project management, task CRUD operations, Kanban board and admin dashboard.",
features:[
"User Authentication",
"Role Based Access",
"Kanban Board",
"Admin Dashboard",
"Task Management"
],
github:"https://github.com/NehaSharma-Programmer/Taskflow1",
live:"#"
},


{
title:"Job Portal",
stack:"MERN Stack",
description:
"Full-stack job portal connecting job seekers and employers with job listings, profiles and application tracking.",
features:[
"Job Listings",
"Candidate Profiles",
"Resume Upload",
"Employer Job Posting"
],
github:"#",
live:"#"
},


{
title:"MechMate",
stack:"MERN Stack",
description:
"Automobile Service Management System allowing customers to book and track vehicle servicing with AI chatbot support.",
features:[
"Vehicle Service Booking",
"Service Tracking",
"Customer Management",
"AI Chatbot"
],
github:"#",
live:"#"
},


{
title:"Labour Management System",
stack:"MERN Stack",
description:
"Platform connecting labourers with employers through worker profiles and job listings.",
features:[
"Worker Profiles",
"Job Listings",
"Assignment Tracking"
],
github:"#",
live:"#"
}


];


return(

<section className="projects" id="projects">


<h2>
Projects
</h2>


<div className="project-container">


{
projects.map((project,index)=>(


<div className="project-card" key={index}>


<h3>
{project.title}
</h3>


<span>
{project.stack}
</span>


<p>
{project.description}
</p>


<ul>

{
project.features.map((item,i)=>(

<li key={i}>
{item}
</li>

))
}

</ul>


<div className="project-buttons">


<a href={project.github} target="_blank">
<FaGithub/> Github
</a>


<a href={project.live}>
<FaExternalLinkAlt/> Demo
</a>


</div>


</div>


))
}


</div>


</section>

)

}


export default Projects;