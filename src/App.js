import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './Result';
// Generate a random number between 1 and 10 (this runs only once when the app loads)
const secretNum =Math.floor(Math.random() *10)+1

function App() {
    // Creating a state variable 'term' to store the user's input
    // 'setTerm' is the function used to update that input
    const[term , setTerm] =useState("") 
    // This function runs whenever the input value changes
    const handleChange=(e) =>{
        setTerm(e.target.value)// Updates the 'term' state with the new input
    }
  return (
    <div className="container">
        <div className='head'> 
            <label htmlFor="term"> 
                Guess The Number between 1 to 10  
            </label> 
        </div>
        <input  /* Input box for entering a number */
            id='term'// Input ID (helps with accessibility and linking to the label)
            type="text"// Text input field
            name="term"// Name attribute (useful if you work with forms)
            onChange={handleChange}// Runs handleChange function when user types
        />

        <Result secretNum={secretNum} term={term}/>
        
    </div>
  );
}

export default App;
