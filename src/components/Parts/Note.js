import React , {useContext, useState, useRef} from 'react'
import timerContext from '../Contexts/timerContext'

export default function Note() {
    let gameTime = useContext(timerContext)
    const [style, setstyle] = useState({height: '20px', border: 'solid black 1px', background: 'turquoise', bottom: '-215px', position: 'relative'})
    let stateRef = useRef(style)
    return (
         <section style={style} onClick={()=>{
             setstyle({
                 ...style,
                 bottom: `${stateRef.current.bottom + 5} + px`
             })
             stateRef.current = style
         }}>
            {gameTime.count}
        </section>
    )
}

