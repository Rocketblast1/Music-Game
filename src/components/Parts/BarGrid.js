import React, { useState, useEffect, useRef } from "react";

export default function Rectangle() {
  // static contextType = RectangleContext;
  const [style, setStyle] = useState({
    button: {
      background: "red",
      border: "solid black 1px",
      buttonOffset: "4%",
    },
    bar: {
      background: "red",
      border: "solid black 1px",
      height: "400px",
    },
    numOfCol: 4,
    numOfRows: 2,
    notesArray: [],
    colors: ["red", "blue", "green", "orange", "yellow", "purple", "lightblue"],
  });
  const [falling, setFalling] = useState({
    isFalling: true,
    fallSpeed: 10,
  });

  const fallSettings = useRef(falling);
  const fallingSpeed = useRef(falling.fallSpeed);
  const buttonFunction = useRef(
    `${style.bar.height} - ${style.button.buttonOffset}`
  );
  const currentStyle = useRef(style);
  const colorsArray = useRef(style.colors);

  function startFalling() {
    setFalling({
      isFalling: true,
      fallSpeed: fallingSpeed.current - fallSettings.current.fallSpeed,
    });
  }

  useEffect(() => {
    startFalling();
  });

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
          style={{
            position: "relative",
            border: `dashed blue 0.5px`,
            background: "red",
            top: `calc(${buttonFunction.current})`,
            height: "100px",
          }}
        >
          DETECTION AREA
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
            top: `calc(${buttonFunction.current})`,
            height: "100px",
          }}
        >
          DETECTION AREA
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
            top: `calc(${buttonFunction.current})`,
            height: "100px",
          }}
        >
          DETECTION AREA
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
          style={{
            position: "relative",
            border: `dashed blue 0.5px`,
            background: "red",
            top: `calc(${buttonFunction.current})`,
            height: "100px",
          }}
        >
          DETECTION AREA
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
        BUTTON 1
      </button>
      <button
        id={"button-2"}
        style={{
          height: "100px",
          gridArea: " 2 / 2 / 3 / 3 ",
          border: "solid black 1px",
        }}
      >
        BUTTON 2
      </button>
      <button
        id={"button-3"}
        style={{
          height: "100px",
          gridArea: " 2 / 3 / 3 / 4 ",
          border: "solid black 1px",
        }}
      >
        BUTTON 3
      </button>
      <button
        id={"button-4"}
        style={{
          height: "100px",
          gridArea: " 2 / 4 / 4 / 4 ",
          border: "solid black 1px",
        }}
      >
        BUTTON 4
      </button>
    </div>
  );
}
