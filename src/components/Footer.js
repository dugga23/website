import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="container2">
      <div className="div">
        <span style={{ fontSize: "25px", fontWeight: "bold" }} className="text-green">COMPANY</span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"> <a href="/">Home</a></span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer">
          <a href="/about">About Us</a>
        </span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"> <a href="/services">Services</a></span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"><a href="/career">Career</a></span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"><a href="/contact">Contact</a></span>
      </div>
      <div className="div">
        <span style={{ fontSize: "25px", fontWeight: "bold" }}>
          HIRE DEVELOPER
        </span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"><a href="https://rishusinfotech.in/about/" target="_blank" rel="noopener noreferrer">React Js Developer</a></span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"><a href="https://rishusinfotech.in/about/" target="_blank" rel="noopener noreferrer">React Native Developers</a></span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"><a href="https://rishusinfotech.in/about/" target="_blank" rel="noopener noreferrer">Node Js Developer</a></span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"><a href="https://rishusinfotech.in/about/" target="_blank" rel="noopener noreferrer">Java Developer</a></span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"><a href="https://rishusinfotech.in/about/" target="_blank" rel="noopener noreferrer">UX Designer</a></span>
      </div>
      <div className="div">
        <span style={{ fontSize: "25px", fontWeight: "bold" }}><a href="#">INDUSTRY</a></span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"><a href="#">Logistics</a></span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"><a href="#">Sports</a></span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"><a href="#">ECommerce</a></span>
        <br />
        <span className="hover:text-[#0da219] cursor-pointer"><a href="#">Real-Estate</a></span>
      </div>
      <div className="div">
        <span style={{ fontSize: "25px", fontWeight: "bold" }}>
          QUICK CONTACT
        </span>
        <br />
        <span >
          4rd Floor 401,Sai Ram Plaza Mangal
        </span><br/>
        <span>Mangal
          Nagar,Indore- 452001</span>
        <br />
        <span> Madhya Pradesh,
          India</span>
        <br /><br />
        <span>rishusinfotech4@gmail.com</span>
        <br /><br />
        <span>Contact 
        +91 6264601696
        +91 8959409296
        </span>
      </div>
    </div>
  );
}
