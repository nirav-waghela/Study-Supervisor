import {getUsers, loginUser} from '../Data'
import { showLoading , hideLoading } from 'react-redux-loading'
export const RECEIVE_USER = 'RECEIVE_USER'
export const VALIDATE_USER = 'VALIDATE_USER'
export const USER_DETAIL = 'USER_DETAIL' 


export const receiveUsers = (users) => {
    return{
        type:RECEIVE_USER,
        users
    }
}

export const validateUser = (user) => {
    return{
        type:VALIDATE_USER,
        user
    }
}

export const userDetail = (id) => {
    return {
        type:USER_DETAIL,
        id
    }
}

export const handleValidateUser = (email, password) => {
    return (dispatch) => {
        return loginUser(email, password).then(res => {
            console.log(res)
            if(res.success){
                localStorage.setItem('token', res.token)
                localStorage.setItem('user', JSON.stringify(res.user))
                dispatch(validateUser(res.user))
                window.location.href = ('/')
            }
        }).catch(res=>{
            alert(res)
            window.location.href = ('/login')

        })
    }
}


export const handleUserDetail = (id) => {
    return (dispatch) => {
        return dispatch(userDetail(id))   
    }
}


export const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading())
        return getUsers().then(users => {
            dispatch(receiveUsers(users))
            dispatch(hideLoading())
        })
    }
}