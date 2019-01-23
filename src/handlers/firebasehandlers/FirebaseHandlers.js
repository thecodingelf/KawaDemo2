import firebase from 'firebase'

export default class FirebaseHandler {
    static async setCoordinates(x, y , user, item, activeScene) {
        let newCoordKey = await
            firebase.database()
            .ref(`users/${user}/scenes/${activeScene}`)
            .child(`elements/${item}`).push().key
        await firebase.database()
            .ref(`users/${user.uid}/scenes/${activeScene}/`)
            .child(`elements/${item}/` + newCoordKey)
            .update({
                coordX: x,
                coordY: y
            })
    }

    static async addTree(x, y, user, item, activeScene) {
        await firebase.database()
            .ref(`users/${user}/scenes/${activeScene}/`)
            .child(`elements/${item}`)
            .push({
                coordX: x,
                coordY: y
            })
    }
}
