export const test = (state = 0 , action = {}) => {
    switch(action.type){
        case 'ADD_TO':
            return {...state, ...action}  
        default:
            return state;
    }
}