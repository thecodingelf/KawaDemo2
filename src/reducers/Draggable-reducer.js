import {
    COORDINATE_UPDATE,
    COORDINATE_CREATE,
    COORDINATE_SAVE_SUCCESS
 } from '../actions/types'
  
 const INITIAL_STATE = {
    treeX: '',
    treeY: '',
    rockX:'',
    rockY:'',
    flowerX:'',
    flowerY:'',
    itemLabel: ''
 }
  
 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         case COORDINATE_UPDATE:
             return { ...state, [action.payload.prop]: action.payload.value };
         case COORDINATE_CREATE:
             return INITIAL_STATE
         case COORDINATE_SAVE_SUCCESS:
             return INITIAL_STATE
         default:
             return state
     }
 }