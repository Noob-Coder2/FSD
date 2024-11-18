import React from "react";
import Student from "./Student";

function App() {
  var a = 12;
  const myStyle={
    backgroundColor: '#06ffa5',
    color: 'aquamarine'
  }
  return(
    <div>
    <div style = {{backgroundColor : '#d1dfff'}}>ABES ENGINEERING COLLEGE</div>
      <div style = {myStyle}>{a}</div>
    <div style={myStyle}>
      <Student college = "ABES" roll="12" name = "Rohan" branch = "EC"/>
    </div>
    </div>
  )
}

export default App