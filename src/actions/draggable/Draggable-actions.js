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
    SAVE_VERTICALLINE_XCOORDINATES,
    SET_ACTIVE_SCENE,
} from '../types/types'

export const saveDraggable = (x, y, user, item, activeScene) => {
    return (dispatch) => {
        FirebaseHandler.setCoordinates(x, y, user, item, activeScene)
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
        } else if (itemLabel == 'verticalline') {
            dispatch({ type: SAVE_VERTICALLINE_XCOORDINATES, payload: coordX })
        }
    }
}

export const setActiveScene = ( newSceneKey ) => {
    return { type: SET_ACTIVE_SCENE, payload: newSceneKey};
}

export const addTree = (x, y, user, item, activeScene) => {
    return (dispatch) => {
        FirebaseHandler.addTree(x, y, user, item, activeScene)
    }
}

/* export const addElement = (item, coordX, coordY) => {
    return (dispatch) => {
        let elementObj = {
            type: item,
            coordX: coordX,
            coordY: coordY
        }
        let objArray = [...this.state.allElements, elementObj]
        dispatch({ type: Types.CANVAS, payload: objArray })
    }
} */

export const setTreeCoordinates = (coordX, coordY, itemLabel) => {
    console.log("X:", coordX, "\nY:", coordY, "\nITEM LABEL:", itemLabel)
    return function (dispatch) {

        if (itemLabel == 'tree') {
            dispatch({ type: SAVE_TREE_XCOORDINATES, payload: coordX })
            dispatch({ type: SAVE_TREE_YCOORDINATES, payload: coordY })
        }
    }
}

/* export const addElement = (x, y, user, item, activeScene) => {
    switch (action.type) {
        case ADD_TREE:
            return (dispatch) => {
                FirebaseHandler.addTree(x, y, user, item, activeScene)
            }
        case ADD_ROCK:
            return { ...state, rockX: action.payload, rockY: action.payload };
        case ADD_FLOWER:
            return { ...state, flowerX: action.payload, flowerY: action.payload };
        case ADD_WAVE:
            return { ...state, waveX: action.payload, waveY: action.payload  };
        case ADD_FISH:
            return { ...state, fishX: action.payload, fishY: action.payload };
        case ADD_DRIFTWOOD:
            return { ...state, driftwoodX: action.payload, driftwoodY: action.payload };
        case ADD_CLAM:
            return { ...state, clamX: action.payload, clamY: action.payload };
        case SAVE_VERTICALLINE_XCOORDINATES:
            return { ...state, verticallineX: action.payload };
        default:
            return { ...state }
    }
} */