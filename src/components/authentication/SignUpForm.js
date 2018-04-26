import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import {
    emailChanged,
    passwordChanged,
    createUser
} from '../../actions/authentication/Auth'
import {
    Card,
    CardSection,
    Input,
    Button,
    Spinner
} from '../common'

class SignUpform extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
    onButtonPress() {
        const { email, password } = this.props

        this.props.createUser({ email, password })
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
        const { errorText } = styles
        return (
            <Card>
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
                <Text style={errorText}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth

    return { email, password, error, loading }
}

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, createUser
})(SignUpform)