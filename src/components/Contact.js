
import React from "react";
import { Await } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function Contact() {
  const [firstname, setfirstname]= useState('');
  const [lastname, setlastname]= useState('');
  const [email,setemail]= useState('');
  const [number,setnumber]=useState('');
  const [description,setdescription]= useState('');
const handlefnText= (evt)=>{
  setfirstname(evt.target.value);
};
const handlelnText= (evt)=>{
  setlastname(evt.target.value);
};
const handleemailText=(evt)=>{
  setemail(evt.target.value);
};
const handlenumberText=(evt)=>{
  setnumber(evt.target.value);
};
const handledescriptionText=(evt)=>{
  setdescription(evt.target.value);
};
const handleSubmit=()=>{
var obj={
  firstname:firstname,
  lastname:lastname,
  email:email,
  number:number,
description:description
};
axios
.post('https://water4all.rankyatra.com/submit',obj)
.then((res)=>{
  alert('Thank you! Form Submitted Successfully');
})
.catch((err)=>{
  alert(err);
});
};
  return (
    <div className="p-0.5 align-center mt-10 mb-10 mx-auto flex flex-wrap justify-center items-start sm:items-center">
      <div className="mr-8">
        <span className="text-[limegreen] text-lg">&nbsp;HAVE QUESTIONS?</span>
        <br />
        <h1 className="text-5xl sm:text-6xl">Contact Us</h1>
        <div className="box2 mt-4">
          <p>
            Share the details of your project - like scope, timeframes, or
            business challenges you'd like to solve. Our team will carefully
            study them and we'll figure out the next move together.
          </p>
        </div>
        <span className="text-[limegreen] text-lg">&nbsp;Call Us</span>
        <br />
        <span className="text-xl">&nbsp; +91 6264601696
  </span> <br/>
            <span className="text-xl">&nbsp;
            +91 8959409296</span>
        <br />
        <br />
        <span className="text-[limegreen] text-base">
          &nbsp;PROJECT INQUIRIES
        </span>
        <br />
        <span className="text-xl">&nbsp;rishusinfotech4@gmail.com</span>
        <br />
        <br />
        <span className="text-[limegreen] text-base">
          &nbsp;CAREER INQUIRIES
        </span>
        <br />
        <span className="text-xl">&nbsp;rishusinfotech@gmail.com</span>
        <br />
        <br />
        <span className="text-[limegreen] text-base">&nbsp;VISIT Us</span>
        <br />
        <span className="text-xl">
          &nbsp;401 Sai Ram Plaza Mangal Nagar near by mata gujri ibus stop
        </span>
      </div>
      <div className="box3">
        <h1>Exploring a project idea?</h1>
        <form>
          <input className="input" type="text" placeholder="First Name" onChange={handlefnText} />
          <input className="input" type="text" placeholder="Last Name" onChange={handlelnText}/>
          <input className="input" type="text" placeholder="Email Address" onChange={handleemailText}/>
          <input className="input" type="text" placeholder="Contact Number" onChange={handlenumberText}/>
          <br/>
          <div className="pt-10 ">
            <input
              type="text"
              placeholder="Description" onChange={handledescriptionText}
              style={{
                width: "85%",
                height: "150px",
                border: "1px solid rgba(206, 212, 218, 0.8)",
                borderRadius: "1%",
                textAlign:'start'
              }}
            />
          </div>
          <br />
          <button className="btn text-[20px] bg-green-500 text-white px-3 py-1 rounded" onClick={handleSubmit} >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}