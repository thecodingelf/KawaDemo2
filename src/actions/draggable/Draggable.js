import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import FirebaseHandler from '../../handlers/firebasehandlers/FirebaseHandlers'

export const SAVE_DRAGGABLE = 'save_draggable'

export const saveDraggable = ({ coordX, coordY }) => {
    return (dispatch) => {
        dispatch({ type: SAVE_DRAGGABLE })

        FirebaseHandler.setCoordinates(coordX, coordY)
    }
}
