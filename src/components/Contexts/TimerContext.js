import {createContext} from 'react'
import timerReducer , {initialState} from '../Reducers/timerReducer'

export const timerContext = createContext(timerReducer(initialState,''));
export default timerContext;
