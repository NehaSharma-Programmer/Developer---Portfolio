
import "../styles/navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar(){

const [open,setOpen] = useState(false);

return(
<nav className="navbar">

<h2 className="logo">
Neha Sharma
</h2>


<div className={open ? "nav-links active" : "nav-links"}>

<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>

</div>


<div 
className="menu"
onClick={()=>setOpen(!open)}
>

{
open ? <FaTimes/> : <FaBars/>
}

</div>


</nav>
)

}

export default Navbar;