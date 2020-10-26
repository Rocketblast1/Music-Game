export const initialState = {
    count: 0,
    isPaused: false
}

const timerReducer = (state, action) => {
    switch(action.type){
        case 'toggle-pause':
            return{
                ...state,
                isPaused: !state.isPaused
            }
        case 'increment':
            return{
                ...state,
                count: state.count++
            }
        default:
            return state
    }
}

export default timerReducer;
