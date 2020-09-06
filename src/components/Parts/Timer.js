import React, {useState, useEffect, useRef} from 'react'


export default function Timer() {
const [state, setState] = useState({
    count: 0,
    isPaused: true
})

let time = useRef(state.count)
let timeisPaused = useRef(state.isPaused)
const pausedTime = useRef()


useEffect(() => {
    time.current = state.count
    if (timeisPaused.current !== true){
        state.count = setInterval(() => {
            setState({
                count: time.current 
            })
            }, .032) 
    }
        else return 
    
}, [state.count, state.isPaused])

    return (
       <div>
            <button style={{padding: 10}} onClick={()=>{
                timeisPaused.current = timeisPaused.current ? false : true
            }}>
            Pause Timer
            </button>
            <h2> 
            Game Time : {timeisPaused.current ? (time) => {
                pausedTime.current = time.current
                return clearInterval(time.current)
                `Paused at: ${pausedTime.current}` 
            }: time.current }  
             </h2> 
       </div>
    )
}
