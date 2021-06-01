export function managePresents(state, action){
    switch(action.type){
        case "INCREASE":
            return {numberOfPresents: state.numberOfPresents + 1}
        case "DECREASE":
            return {numberOfPresents: state.numberOfPresents > 0 ? state.numberOfPresents -1 : 0 }
        default: 
            return state
    }
}
