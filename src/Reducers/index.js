import { loadingBarReducer } from 'react-redux-loading'
import { combineReducers } from 'redux'
import { users } from './root'

export default combineReducers({
    users,
    loadingBar : loadingBarReducer
})