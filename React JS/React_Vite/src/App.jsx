import React from "react";
import Student from "./Student";
import logo from "./assets/logo.png"
import StudentState from "./StudentState";
import UserofState from "./UserofState";
import Image_Manipulation from "./Image_Manipulation";

function App() {
  var a = 12;
  const myStyle = {
    backgroundColor: '#06ffa5',
    color: 'aquamarine'
  }
  const style2 = {
    backgroundColor: '#06ffa5',
    color: 'aquamarine',
    display: 'flex'
  }

  const d = {
    college: "ABESEC",
    name: "Rohan",
    roll: "6844",
    pic: <img src={logo} alt="college logo" height={100} width={100} />
  }

  return (
    <div>
      {/* <div>
        <StudentState />
      </div> */}

      {/* <div style={{ backgroundColor: '#d1dfff' }}>ABES ENGINEERING COLLEGE</div>
      <div style={myStyle}>{a}</div>
      <div style={style2}>
        <Student data={d} />
        <Student data={d} />
        <Student data={d} />
        <Student data={d} />



        <Student
          college="ABES"
          pic={<img src={logo} alt="passed image file" height={50} width={100} />}
          roll="12"
          name="Rohan"
          branch="EC" />
      </div> */}
      <div>
      <UserofState/>
      </div>
      <div>
        <Image_Manipulation/>
      </div>

    </div>
  )
}

export default App