
import {motion} from "framer-motion";


const projects=[


{

title:"TaskFlow",

tech:"MERN Stack",

desc:
"Mini Project Management System with authentication, project management, task CRUD operations, Kanban board and admin dashboard.",

features:[
"User Authentication",
"Role Based Access",
"Kanban Board",
"Admin Dashboard",
"Task Management"
]

},



{

title:"Job Portal",

tech:"MERN Stack",

desc:
"Full-stack job portal connecting job seekers and employers with job listings, profiles and application tracking.",

features:[
"Job Listings",
"Candidate Profiles",
"Resume Upload",
"Employer Job Posting"
]

},



{

title:"MechMate",

tech:"MERN Stack",

desc:
"Automobile Service Management System allowing customers to book and track vehicle servicing with AI chatbot support.",

features:[
"Vehicle Service Booking",
"Service Tracking",
"Customer Management",
"AI Chatbot"
]

},



{

title:"Labour Management System",

tech:"MERN Stack",

desc:
"Platform connecting labourers with employers through worker profiles and job listings.",

features:[
"Worker Profiles",
"Job Listings",
"Assignment Tracking"
]

}



];




function Projects(){


return(

<section id="projects">


<h1>
Projects
</h1>


<div className="projects">


{

projects.map((project,index)=>(


<motion.div

className="project-card"

key={index}

initial={{opacity:0,scale:0.8}}

whileInView={{opacity:1,scale:1}}

transition={{duration:0.5}}

>


<h2>
{project.title}
</h2>


<h4>
{project.tech}
</h4>


<p>
{project.desc}
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



<button>
View Github
</button>



</motion.div>


))

}



</div>


</section>

)

}


export default Projects;