import React, { Component, useContext} from 'react'
export const TimerContext = useContext();
export default class TimerContextProvider extends Component {
    state = {}
    render() {
        return (
            <TimerContext.Provider>
            </TimerContext.Provider>
        )
    }
}