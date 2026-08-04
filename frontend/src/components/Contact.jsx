
import "../styles/contact.css";
import { useState } from "react";


function Contact(){

const [formData,setFormData] = useState({

name:"",
email:"",
message:""

});


const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};



const handleSubmit=(e)=>{

e.preventDefault();


alert("Message sent successfully!");


setFormData({

name:"",
email:"",
message:""

});


};



return(

<section className="contact" id="contact">


<h2>
Contact Me
</h2>



<div className="contact-container">


<div className="contact-info">


<h3>
Let's Connect
</h3>


<p>
📍 Meerut, India
</p>


<p>
📧 nehasha952@gmail.com
</p>


<p>
📞 +91-9582953685
</p>


<p>
Github:
github.com/NehaSharma-Programmer
</p>


<p>
LinkedIn:
linkedin.com/in/neha-sharma-7099a0327
</p>


</div>




<form 
className="contact-form"
onSubmit={handleSubmit}
>


<input

type="text"

name="name"

placeholder="Your Name"

value={formData.name}

onChange={handleChange}

/>



<input

type="email"

name="email"

placeholder="Your Email"

value={formData.email}

onChange={handleChange}

/>




<textarea

name="message"

placeholder="Your Message"

rows="5"

value={formData.message}

onChange={handleChange}

/>



<button>
Send Message
</button>



</form>



</div>


</section>

)

}


export default Contact;