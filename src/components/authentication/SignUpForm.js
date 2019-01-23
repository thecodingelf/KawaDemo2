import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import {
    emailChanged,
    passwordChanged,
    usernameChanged,
    createUser
} from '../../actions/authentication/Auth'
import {
    Input,
    Button,
    Spinner
} from '../common'
import { styles } from './Auth.styles'

class SignUpform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            username: "",

        };
    }
    onEmailChange(text) {
        this.props.emailChanged(text)
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
    onUsernameChange(text) {
        this.props.usernameChanged(text)
    }
    onButtonPress() {
        this.props.createUser(this.state.email, this.state.password, this.state.username)
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Create user
            </Button>
        )
    }

    render() {
        const { 
            errorText,
            signUpContainer,
            signUpinputStyle,
            signUpButtonContainer,
            signUpButtonView,
        } = styles
        return (
            <View style={signUpContainer}>
                <View style={signUpinputStyle}>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={(value) => this.setState({ email: value })}
                        value={this.state.email}
                    />
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="******"
                        onChangeText={(value) => this.setState({ password: value })}
                        value={this.state.password}
                    />
                    <Input
                        label="Username"
                        placeholder="username"
                        onChangeText={(value) => this.setState({ username: value })}
                        value={this.state.username}
                    />
                    <Text style={errorText}>
                        {this.props.error}
                    </Text>
                </View>
                <View style={signUpButtonContainer}>
                    <View style={signUpButtonView}>
                        {this.renderButton()}
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, username, error, loading } = auth

    return { email, password, username, error, loading }
}

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, usernameChanged, createUser
})(SignUpform)