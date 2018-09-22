import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import FirebaseHandler from '../../handlers/firebasehandlers/FirebaseHandlers'
import {
    SAVE_DRAGGABLE,
    SAVE_TREE_XCOORDINATES,
    SAVE_TREE_YCOORDINATES,
    SAVE_ROCK_XCOORDINATES,
    SAVE_ROCK_YCOORDINATES,
    SAVE_FLOWER_XCOORDINATES,
    SAVE_FLOWER_YCOORDINATES,
    SAVE_WAVE_XCOORDINATES,
    SAVE_WAVE_YCOORDINATES,
    SAVE_FISH_XCOORDINATES,
    SAVE_FISH_YCOORDINATES,
    SAVE_DRIFTWOOD_XCOORDINATES,
    SAVE_DRIFTWOOD_YCOORDINATES,
    SAVE_CLAM_XCOORDINATES,
    SAVE_CLAM_YCOORDINATES,
} from '../types/types'

export const saveDraggable = (x, y, user, item) => {
    return (dispatch) => {
        FirebaseHandler.setCoordinates(x, y, user, item)
        .then(
            Actions.client()
        )
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
        } else if (itemLabel == 'wave') {
            dispatch({ type: SAVE_WAVE_XCOORDINATES, payload: coordX })
            dispatch({ type: SAVE_WAVE_YCOORDINATES, payload: coordY })
        } else if (itemLabel == 'fish') {
            dispatch({ type: SAVE_FISH_XCOORDINATES, payload: coordX })
            dispatch({ type: SAVE_FISH_YCOORDINATES, payload: coordY })
        } else if (itemLabel == 'driftwood') {
            dispatch({ type: SAVE_DRIFTWOOD_XCOORDINATES, payload: coordX })
            dispatch({ type: SAVE_DRIFTWOOD_YCOORDINATES, payload: coordY })
        } else if (itemLabel == 'clam') {
            dispatch({ type: SAVE_CLAM_XCOORDINATES, payload: coordX })
            dispatch({ type: SAVE_CLAM_YCOORDINATES, payload: coordY })
        }
    }
}