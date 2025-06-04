import React from "react";
import { useState} from "react";
import "../components/api.css"
import Cat from "../assets/cat.png";



const API = () => {

    const [fact, setFact] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch("https://catfact.ninja/fact");
            const data = await response.json();
            setFact(data); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}; 

const [message, setMessage] = useState("Click me if you want to know a fact about cats!");

function changeMessage() {
    setMessage("Want to know one more? Click me again!");
}



    const generateFact = () => {
        fetchData();
        changeMessage();
    }

return (
       
            <div className="api">
                <div className="button-container">
                <img src={Cat} onClick={generateFact}></img>
                <div className="message">
                    <p className="button-text">{message}</p></div>
                </div>

                <div className="fact-container">
           <p className="fact">{fact.fact}</p>
           </div>
        </div>  
       
)

   
}; 


export default API;