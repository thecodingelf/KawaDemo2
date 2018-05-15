import firebase from 'firebase'

export default class FirebaseHandler {
    static async setCoordinates(x, y) {
        await firebase.database().ref(`users/${currentUserUID}/item/`)
            .update({
                coordX: x,
                coordY: y
            })
    }
}