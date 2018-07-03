import { combineReducers } from 'redux'
import AuthReducer from './authentication/AuthReducer'
import DraggableReducer from './draggable/Draggable-reducer'

export default combineReducers({
    auth: AuthReducer,
    draggable: DraggableReducer
})