import firebase from 'firebase'

export function GetUser() {
    var user = firebase.auth().currentUser;

    if (user) {
        //Save to Redux State
    } else {
        // No user is signed in.
    }
})