import React, { useState, useEffect, useRef, useContext} from "react";
import TimerContext from '../Contexts/TimerContext'
import Bar from './Bar'
import Note from "./Note";

export default function BarGrid() {
  const [style, setStyle] = useState({
    //Initialization Data
    numOfCol: 4,
    numOfRows: 2,
    barArray: [],
    notesArray: [],
  });

  let generatedBarArray = useRef(style.barArray)
  let generatedNoteArray = useRef(style.notesArray)
  let gameTime = useContext(TimerContext)

  useEffect(()=>{
    generatedBarArray.current = createBarGrid();
    generatedNoteArray.current = style.notesArray
  },[])
//------------------------------BAR GENERATION-------------------------------------
  function generateBar(barColumnStart, barColumnEnd) {
    return (
      <Bar key={barColumnStart} start={barColumnStart} end={barColumnEnd}>
      </Bar>
    )
  }
//------------------------------CREATE ALL BARS------------------------------------
  function createBarGrid() {
    const lines = style.numOfCol;
    const barArray = style.barArray;
    for (let index = 0; index < lines; index++) {
      barArray.push(generateBar(index + 1, index + 2));
    }
    generatedBarArray = barArray
    return barArray;
  }

//-----------------------------BAR GRID--------------------------------------------
  return (
    <div
      id={"bar-grid"}
      style={{
        display: "grid",
        gridAutoColumn: `repeat(${style.numOfCol} , 100px)`,
        gridAutoRows: `repeat( ${style.numOfRows} , 100px)`,
        paddingBottom: `0%`,
        border: "solid black 0.5px",
        minWidth: `calc(${style.numOfCol} * 75px)`,
      }}
    >
      {generatedBarArray.current}
    </div>
  );
}
