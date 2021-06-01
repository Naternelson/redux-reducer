export function manageFriends(state, action){
    const {friend} = action
    const {friends} = state 
    switch(action.type){
        case 'ADD_FRIEND':
            friends.push(friend)
            return {friends} 
        case 'REMOVE_FRIEND': 
            const index = friends.indexOf(friend)
            friends.splice(index,1)
            return {friends}
        default:
            return state 
    }
}
