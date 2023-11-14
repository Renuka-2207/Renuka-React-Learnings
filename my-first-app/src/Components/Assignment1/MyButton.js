import React, { useState } from 'react';


function MyButton() {
  //Declaring state variable 'initialText' with value 'Hello World'
  //Using destructuring and declaring function 'setDisplayText'
  const [initialText, setDisplayText] = useState("Hello World");

  // Function to handle button click and toggle text
  const changeText= () => {
    // Toggle between "Hello World" and "Hello Renuka"
    const newText = initialText=== "Hello World" ? "Hello Renuka" : "Hello World";
    setDisplayText(newText);
  };


  return (
  //Using fragment to render multiple elements.
    <>
      <h1>{initialText}</h1>
      <button onClick={changeText}>Change Text</button>
    </>
  );
}

export default MyButton;
