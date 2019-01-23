import React, { Component } from 'react'
import { 
    View, 
    Text, 
    ToastAndroid, 
} from 'react-native'
import { connect } from 'react-redux'
import firebase from 'firebase'
import {
    emailChanged,
    resetPassword
} from '../../actions/authentication/Auth'
import {
    Input,
    Button,
    Spinner
} from '../common'
import { styles } from './Auth.styles'

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }
    }
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    resetPassword () {
            firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                ToastAndroid.show('Email was sent to reset your password, please check your email and some cases spam folder', ToastAndroid.SHORT)
            })
    }
    
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.resetPassword.bind(this)}>
                Reset Password
            </Button>
        )
    }

    render() {
        const { 
            errorText,
            resetPasswordContainer,
            resetInputStyle,
            resetButtonContainer,
            resetButtonView,
        } = styles
        return (
            <View style={resetPasswordContainer}>
                <View style={resetInputStyle}>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={(value) => this.setState({ email: value })}
                        value={this.state.email}
                    />
                    <Text style={errorText}>
                        {this.props.error}
                    </Text>
                </View>
                <View style={resetButtonContainer}>
                    <View style={resetButtonView}>
                        {this.renderButton()}
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, error, loading } = auth

    return { email, error, loading }
}

export default connect(mapStateToProps, {
    emailChanged, resetPassword
})(ResetPassword)