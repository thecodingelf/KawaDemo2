import { combineReducers } from 'redux';
import draggableReducer from './draggable-reducer'


const reducers = combineReducers({
    draggable: draggableReducer
})

export default reducers