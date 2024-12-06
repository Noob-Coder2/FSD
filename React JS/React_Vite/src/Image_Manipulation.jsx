import React, { useState } from 'react'
import logo from "./assets/logo.png"

function Image_Manipulation() {
    const [height, setHeight] = useState(100)
    const [width, setWidth] = useState(100)
    const [red, setRed] = useState()
    const [blue, setBlue] = useState()
    const [green, setGreen] = useState()
    const [angle, setAngle] = useState()

    function Increase_height() {
        setHeight(height + 10);
    }
    function Increase_width() {
        setWidth(width + 10);
    }
    function rotate() {
        setAngle(angle + 30);
    }
    function colorchange() {
        setRed(Math.random()*255);
        setBlue(Math.random()*255);
        setGreen(Math.random()*255);
    }
    return (
        <div style={{
            height: '600px',
            width: '600px',
            border: '2px solid royalblue',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: `rgb(${red},${green},${blue})`,
        }}>
            Image_Manipulation
            <br /><br />
            <img src={logo} height={height} width={width} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={Increase_height}>Enhance Height</button>
            &nbsp;
            <button onClick={Increase_width}>Enhance Width</button>
            &nbsp;
            <button onClick={rotate}>Rotate</button>
            &nbsp;
            <button onClick={colorchange}>BackGround Colour Change</button>
            &nbsp;
        </div>
    )
}

export default Image_Manipulation