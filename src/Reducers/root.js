import { RECEIVE_USER, VALIDATE_USER, USER_DETAIL } from '../actions/index'


export function users(state = {}, action){
    switch(action.type){
        case RECEIVE_USER:
            return{
                ...state,
                allUsers : [...action.users],
            }
        case VALIDATE_USER:
            return{
                ...state,
                loggedInUser: action.user
            }
        case USER_DETAIL:
            return{
                ...state,
                userDetailId:action.id
            }
        default:
            return state
    }
}