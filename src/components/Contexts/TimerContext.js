import {createContext} from 'react'
import timerReducer , {initialState} from '../Reducers/timerReducer'

export const TimerContext = createContext(timerReducer(initialState,''));
export default TimerContext;
