
import {motion} from "framer-motion";


function Experience(){

return(

<section id="experience">


<h1>
Experience
</h1>


<motion.div

className="experience-card"

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.6}}

>


<h2>
MERN Stack Developer Intern
</h2>


<h3>
Anudip Foundation
</h3>


<p>

Worked on full-stack web development projects using
MERN stack technologies.

</p>


<ul>

<li>
Developed responsive React.js user interfaces
</li>

<li>
Built REST APIs using Node.js and Express.js
</li>

<li>
Worked with MongoDB database design and CRUD operations
</li>

<li>
Implemented authentication and backend integration
</li>

<li>
Collaborated on real-world software development projects
</li>


</ul>


</motion.div>


</section>

)

}


export default Experience;