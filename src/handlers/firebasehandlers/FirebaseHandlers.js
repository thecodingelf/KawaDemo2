import firebase from 'firebase'

export default class FirebaseHandler {
    static async setCoordinates(x, y , user, item) {
        await firebase.database().ref(`users/${user}/${item}/`)
            .update({
                coordX: x,
                coordY: y
            })
    }
}