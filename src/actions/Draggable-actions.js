import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import FirebaseHandler from '../handlers/firebasehandlers/FirebaseHandlers'
import {
    SAVE_DRAGGABLE,
    SAVE_TREE_XCOORDINATES,
    SAVE_TREE_YCOORDINATES,
    SAVE_ROCK_XCOORDINATES,
    SAVE_ROCK_YCOORDINATES,
    SAVE_FLOWER_XCOORDINATES,
    SAVE_FLOWER_YCOORDINATES,
} from './types'

export const saveDraggable = (x, y, user, item) => {
    return (dispatch) => {
        FirebaseHandler.setCoordinates(x, y, user, item)
    }
}

export const setCoordinates = (coordX, coordY, itemLabel) => {
    console.log("X:", coordX, "\nY:", coordY, "\nITEM LABEL:", itemLabel)
    return function (dispatch) {

        if (itemLabel == 'tree') {
            dispatch({ type: SAVE_TREE_XCOORDINATES, payload: coordX })
            dispatch({ type: SAVE_TREE_YCOORDINATES, payload: coordY })
        } else if (itemLabel == 'rock') {
            dispatch({ type: SAVE_ROCK_XCOORDINATES, payload: coordX })
            dispatch({ type: SAVE_ROCK_YCOORDINATES, payload: coordY })
        } else if (itemLabel == 'flower') {
            dispatch({ type: SAVE_FLOWER_XCOORDINATES, payload: coordX })
            dispatch({ type: SAVE_FLOWER_YCOORDINATES, payload: coordY })
        }
    }
}