import { combineReducers } from 'redux';
import draggableReducer from './draggable-reducer'
import authReducer from './AuthReducer'


const reducers = combineReducers({
    draggable: draggableReducer,
    auth: authReducer,
})

export default reducers