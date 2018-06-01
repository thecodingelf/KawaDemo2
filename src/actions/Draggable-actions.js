import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import FirebaseHandler from '../handlers/firebasehandlers/FirebaseHandlers'

export const SAVE_DRAGGABLE = 'save_draggable'

export const saveDraggable = ({ coordX, coordY }) => {
    return (dispatch) => {
        dispatch({ type: SAVE_DRAGGABLE })

        FirebaseHandler.setCoordinates(coordX, coordY)
    }
}

export const setCoordinates = (coordX, coordY, itemLabel) => {
    return (dispatch) => {

        switch (itemLabel) {
            case 'tree':
                dispatch({ type: SAVE_TREE_XCOORDINATES, payload: coordX })
                dispatch({ type: SAVE_TREE_YCOORDINATES, payload: coordY })
                break;
            case 'rock':
                dispatch({ type: SAVE_ROCK_XCOORDINATES, payload: coordX })
                dispatch({ type: SAVE_ROCK_YCOORDINATES, payload: coordY })
                break;
            case 'flower':
                dispatch({ type: SAVE_FLOWER_XCOORDINATES, payload: coordX })
                dispatch({ type: SAVE_FLOWER_YCOORDINATES, payload: coordY })
                break;
        }
    }
}