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
    Card,
    CardSection,
    Input,
    Button,
    Spinner
} from '../common'

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
        if (this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Text
                style={signUpButtonStyle}
                onPress={this.onSignUpPress.bind(this)}
            >
                Sign Up
            </Text>
        )
    }

    render() {
        const {
            loginContainer,
            buttonContainer,
            buttonView,
            errorText } = styles
        return (
            <Card style={loginContainer}>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="******"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <View style={buttonContainer}>
                        <View style={buttonView}>
                            {this.renderLoginButton()}
                        </View>
                        <View style={buttonView}>
                            {this.renderSignUpButton()}
                        </View>
                    </View>
                </CardSection>
                <Text style={errorText}>
                    {this.props.error}
                </Text>
            </Card>
        )
    }
}

const styles = {
    loginContainer: {
        marginTop: 50,
        padding: 10,
    },
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    signUpButtonStyle: {
        color: '#007aff',
        fontWeight: 'bold',
        padding: 6,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonView: {
        flexDirection: 'row',
        padding: 4,
        marginTop: 8,
    },
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth

    return { email, password, error, loading }
}

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(Loginform)