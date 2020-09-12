import React, { useState, useEffect, useRef, useReducer } from "react";

export default function Rectangle() {
  // static contextType = RectangleContext;
  const [style, setStyle] = useState({
    button: {
      detectionArea:{
        background: "red",
        border: "solid black 1px",
        buttonOffset: "4%",
      },
      background: "red",
      border: "solid black 1px",
      buttonOffset: "4%",
    },
    bar: {
      background: "red",
      border: "solid black 1px",
      height: "400px",
    },
    section:{
      position: "relative",
      border: `dashed blue 0.5px`,
      background: {},
      top: ``,
      height: "100px",
    },
    numOfCol: 4,
    numOfRows: 2,
    notesArray: [],
    colors: ["red", "blue", "green", "orange", "yellow", "purple", "lightblue"],
    divPosition:{
      height: "",
    }
  });
  const [falling, setFalling] = useState({
    isFalling: true,
    fallSpeed: 10,
  });

  const fallSettings = useRef(falling);
  const fallingSpeed = useRef(falling.fallSpeed);
  const detectionArea = useRef(`${style.bar.height} - ${style.button.buttonOffset}`);
  const currentStyle = useRef(style);
  const topDetectionAreaThing = useRef(`calc(${detectionArea.current})`)
  const colorsArray = useRef(style.colors);
  
function getRandomColor(){
  const randomColor = style.colors[Math.floor(Math.random(style.colors.length) * style.colors.length )]
  return randomColor
}
  let randomColor = useRef(getRandomColor())
  function reduceHeight(){
    
  }
  


  return (
    <div
      id={"bar-grid"}
      style={{
        display: "grid",
        gridAutoColumn: `repeat(4 , 100px)`,
        gridAutoRows: `repeat( 2 , 100px)`,
        paddingBottom: `0%`,
        border: "solid black 1px",
      }}
    >
      <div
        id={"bar-1"}
        style={{
          gridArea: " 1 / 1 / 2 / 2  ",
          position: "relative",
          height: "400px",
          border: "solid black 1px",
        }}
      >
        BAR 1
        <section
          style={currentStyle.current.section}
          onClick={()=>{
          }}
        >
          NOTE
        </section>
      </div>
      <div
        id={"bar-2"}
        style={{
          gridArea: " 1 / 2 / 3 / 3  ",
          position: "relative",
          height: style.bar.height,
          border: "solid black 1px",
        }}
      >
        BAR 2
        <section
          style={{
            position: "relative",
            border: `dashed blue 0.5px`,
            background: "red",
            top: ``,
            height: "100px",
          }}
        >
          NOTE 2
        </section>
      </div>
      <div
        id={"bar-3"}
        style={{
          gridArea: " 1 / 3 / 4 / 4  ",
          position: "relative",
          height: "400px",
          border: "solid black 1px",
        }}
      >
        BAR 3
        <section
          style={{
            position: "relative",
            border: `dashed blue 0.5px`,
            background: "red",
            top: `calc(${detectionArea.current})`,
            height: "100px",
          }}
        >
          NOTE 3
        </section>
      </div>
      <div
        id={"bar-4"}
        style={{
          gridArea: " 1 / 4 / 2 / 4  ",
          position: "relative",
          height: "400px",
          border: "solid black 1px",
        }}
      >
        BAR 4
        <section
          style={currentStyle.current.section}
        >
          NOTE 4
        </section>
      </div>
      <button
        id={"button-1"}
        style={{
          height: "100px",
          gridArea: " 2 / 1 / 2 / 2 ",
          border: "solid black 1px",
        }}
      >
        DETECTION AREA 1
      </button>
      <button
        id={"button-2"}
        style={{
          height: "100px",
          gridArea: " 2 / 2 / 3 / 3 ",
          border: "solid black 1px",
        }}
      >
        DETECTION AREA 2
      </button>
      <button
        id={"button-3"}
        style={{
          height: "100px",
          gridArea: " 2 / 3 / 3 / 4 ",
          border: "solid black 1px",
        }}
      >
        DETECTION AREA 3
      </button>
      <button
        id={"button-4"}
        style={{
          height: "100px",
          gridArea: " 2 / 4 / 4 / 4 ",
          border: "solid black 1px",
        }}
      >
        DETECTION AREA 4
      </button>
    </div>
  );
}
