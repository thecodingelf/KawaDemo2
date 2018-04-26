import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

export const LOGIN_USER = 'login_user'
export const LOGIN_USER_SUCCESS = 'login_user_success'
export const LOGIN_USER_FAIL = 'login_user_fail'
export const CREATE_USER = 'create_user'
export const CREATE_USER_FAIL = 'create_user_fail'
export const EMAIL_CHANGED = 'email_changed'
export const PASSWORD_CHANGED = 'password_changed'


export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch))
    }
}

export const createUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: CREATE_USER })

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(Actions.pop())
    }
}

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })

    Actions.menu()
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })
}