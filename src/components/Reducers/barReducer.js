export const initialState = {

}

const barReducer = (state, action) => {
    switch(action.type){
        case 'toggle-fall':
            return{
                ...state,
                isFalling: !state.isFalling
            }
        case 'fall':
            return{
                ...state,
                count: state.count++
            }
        default:
            return state
    }
}

export default barReducer;
