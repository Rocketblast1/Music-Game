import React , {useState, useEffect, useRef} from 'react'
import {useSpring, animated} from 'react-spring'


export default function Note(props) {
 const [style, setsStyle] = useState({
     position: 'absolute',
     top: '434px',
     opacity: 1,
     height: '19px',
     width: '100%',
     background: 'red'
 })
 const [note, set, stop] = useSpring(() => (style))
 useEffect(() => {
    set({background: 'yellow', top: '0px', config:{duration: 1000}})
     return () => {
     }
 }, [])

    return (
         <animated.section style={note}>
            NOTE
        </animated.section>
    )
}

