import React, {useState}   from 'react'



export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase!', 'success');
  }

  const handleLowClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase!', 'success');
  }


  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value)
  }

 const handleCopy = () => {
    console.log('I am copy')
    var text = document.getElementById('myBox')
    text.select();
    // text.setSelectionRange(0,9999)
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to Clipboard!', 'success');
 }

 const handleExtraSpaces = () => {
  let newText = text.split(/\s+/)
  setText(newText.join(' '))
  props.showAlert('Extra spaces removed!', 'success');
}












  // const speak = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = text;
  //   window.speechSynthesis.speak(msg);
  // }

  // const write = () => {
  //   let msg3 = new writeSynthesisUtterance();
  //   msg3.text = text;
  //   window.WritableStream.write(msg3);
  // }






  const [text, setText] = useState('');
                    <h1>{props.heading}</h1>
  //  text = "new text"; // Wrong way to change the state
  //  setText= ("new text"); // Correct way to change the state

  return (
    <>      

    <div className="container" style={{color: props.mode=== 'dark'?'white':'#042743'}}> 
                    <h1>{props.heading}</h1>

                       <div className="mb-3">
                 
 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color:props.mode=== 'dark'?'white':'#042743'} } id="myBox" rows="8"></textarea>
                    </div>
                    
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert into Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert into Lowercase</button>
                    {/* <button type="submit" onClick={write} className="btn btn-warning mx-2 my-2">write</button>    */}
                    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
              </div>

             <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
              <h2>Your text summary</h2>
              <p> {text.split(" ") .filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
              <p> {0.008 * text.split(" ").length } Minutes read</p>
              <h2> Preview </h2>
              <p>{text.length>0?text: "Enter something in the textbox above to preveiw it here"}</p>


             </div>

      </>

  )
}
