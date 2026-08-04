
import {useState} from "react";
import axios from "axios";


function Contact(){


const [form,setForm]=useState({

name:"",
email:"",
message:""

});



const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

})

}




const submitForm=async(e)=>{

e.preventDefault();


try{

await axios.post(

"https://your-render-backend-url.onrender.com/api/contact",

form

);


alert("Message Sent Successfully");


}

catch(error){

alert("Something went wrong");

}


}



return(

<section id="contact">


<h1>
Contact Me
</h1>



<div className="contact-info">


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




<form onSubmit={submitForm}>


<input

name="name"

placeholder="Your Name"

onChange={handleChange}

/>



<input

name="email"

placeholder="Email"

onChange={handleChange}

/>



<textarea

name="message"

placeholder="Message"

onChange={handleChange}

/>



<button>
Send Message
</button>


</form>



</section>


)

}


export default Contact;