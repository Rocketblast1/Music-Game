import React, { useReducer, useEffect} from 'react'
import timerContext from '../Contexts/timerContext'
import BarGrid from '../Parts/BarGrid'
import timerReducer , {initialState} from '../Reducers/timerReducer'
import './Game.css'

export default function Game (){

    const [timerState, dispatch] = useReducer(timerReducer, initialState)

    useEffect(() => {
        let gameTime = setInterval(()=>{
            !timerState.isPaused ? dispatch({type: 'increment', payload: timerState.count}) : dispatch({type: '', payload: timerState.isPaused})
        },.016)
            return function (){
            clearInterval(gameTime)
        }
    },[timerState])

    return (
        <div id="Game">
            <div className="app-container">

                <div className="header-container">
                    <h1>YUNG MEN: NOTE BLASTER!!</h1>
                </div>

                <button onClick={()=>{
                    dispatch({type: 'toggle-pause', payload: timerState.isPaused})
                    }}>
                    Pause
                </button>

                <div>
                    {timerState.count}
                </div>

                <timerContext.Provider value={timerState}>
                    <BarGrid>
                    </BarGrid>
                </timerContext.Provider>

            </div>
        </div>
    )
}
