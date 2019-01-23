import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../../actions/authentication/Auth'
import {
    Input,
    Button,
    Spinner
} from '../common'
import { styles } from './Auth.styles'

class Loginform extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
    onLoginPress() {
        const { email, password } = this.props

        this.props.loginUser({ email, password })
    }
    onSignUpPress() {
        Actions.signUp()
    }
    renderLoginButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onLoginPress.bind(this)}>
                Log In
            </Button>
        )
    }

    renderSignUpButton() {
        const { signUpButtonStyle } = styles
        return (
            <Text
                style={signUpButtonStyle}
                onPress={this.onSignUpPress.bind(this)}
            >
                Sign Up
            </Text>
        )
    }

    renderForgotPassword() {
        const { forgotPassword } = styles
        return (
            <Text
                onPress={() => Actions.resetPassword()}
                style={forgotPassword}
            >
                Forgot password?
        </Text>
        )
    }

    render() {
        const {
            loginContainer,
            buttonContainer,
            inputStyle,
            buttonView,
            errorText,
        } = styles
        return (
            <View style={loginContainer}>
                <View style={inputStyle}>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="******"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                    <Text style={errorText}>
                        {this.props.error}
                    </Text>
                </View>
                    <View style={buttonContainer}>
                        <View style={buttonView}>
                            {this.renderLoginButton()}
                        </View>
                        <View style={buttonView}>
                            {this.renderSignUpButton()}
                        </View>
                        <View style={buttonView}>
                            {this.renderForgotPassword()}
                        </View>
                    </View>
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth

    return { email, password, error, loading }
}

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(Loginform)