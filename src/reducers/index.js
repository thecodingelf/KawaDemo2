import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import DraggableReducer from './Draggable-reducer'

export default combineReducers({
    auth: AuthReducer,
    draggable: DraggableReducer
})