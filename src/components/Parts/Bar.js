import React, {useState, useRef, useContext, useEffect} from 'react'
import TimerContext from '../Contexts/TimerContext'
import Note from './Note.js'

export default function Bar(props) {
    const detectionTopOffset = useRef('285px')
    const [style, setStyle] = useState({
        sections: {
        // 2 miss styles: top, bottom, 1 good style, 1 perfect style
        miss: {
          top: {
            position: `relative`,
            display: `flex`,
            border: `solid black 0.5px`,
            background: `red`,
            padding: `2px`,
            height: `100px`,
            top: `${detectionTopOffset.current}`,
            fontSize: `74%`,
          },
          bottom: {
            position: `relative`,
            display: `flex`,
            border: `solid black 0.5px`,
            background: `red`,
            padding: `2px`,
            height: `20px`,
            top: `${detectionTopOffset.current}`,
            fontSize: `74%`,
          },
        },
        good: {
          position: `relative`,
          display: `flex`,
          border: `solid black 0.5px`,
          background: `yellow`,
          padding: `2px`,
          height: `20px`,
          top: `${detectionTopOffset.current}`,
          fontSize: `74%`,
        },
        perfect: {
          position: `relative`,
          display: `flex`,
          border: `solid black 0.5px`,
          background: `#34a8eb`,
          padding: `2px`,
          top: `${detectionTopOffset.current}`,
          fontSize: `66%`,
        },
      },
      noteArray:[],
      initialNoteHeight: 217
    })

  let gameTime = useContext(TimerContext)
  let generatedNoteArray = useRef(style.noteArray)
  useEffect(() => {
    style.noteArray = generatedNoteArray.current
  }, [style.noteArray,])

//-----------------------------NOTE GENERATION-------------------------------------
function generateNote(ih) {
  return (
    <Note key={gameTime.count} style={{...style.sections.perfect, top: `${ih}px`}}>
    </Note>
  )
}
//------------------------------CREATE ALL NOTES-----------------------------------
  function addNote(){
    const notesArray = style.noteArray;
    notesArray.push(generateNote(style.initialNoteHeight));
    console.log(notesArray)
    return notesArray
  }

    return (
        <div
        id={`bar - ${props.start}`}
        style={{
          gridArea: `1/${props.start}/${props.end}/${props.end}`,
          height: "500px",
          border: "solid black 1px",
        }}
      >

        {/* Bar Div */}
        BAR {props.start}
        <div id={`detection-areas-container`} style={{textAlign: "center"}}>

          {/* Detection Areas */}

          <section id={"miss-top"} style={style.sections.miss.top}>
            MISS
          </section>

          <section id={"good-top"} style={style.sections.good}>
            GOOD
          </section>

          <section id={"perfect"} style={style.sections.perfect} onClick={()=>{
            addNote()
            // incrementHeight();
          }}>
            PERFECT
          </section>

          <section id={"good-bottom"} style={style.sections.good}>
            GOOD
          </section>

          <section id={"miss-bottom"} style={style.sections.miss.bottom}>
            MISS
          </section>

          <section>
            {generatedNoteArray.current}
          </section>

        </div>
      </div>

    )
}



