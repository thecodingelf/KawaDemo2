import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from '../components/authentication/LoginForm'
import SignUpForm from '../components/authentication/SignUpForm'
import ResetPassword from '../components/authentication/ResetPassword'
import Main from '../components/main/Main'
import River from '../components/river/River'
import MyRivers from '../components/myrivers/MyRivers'
import Information from '../components/info/Information'
import PhaseTwoRiver from '../components/river/PhaseTwoRiver'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        hideNavBar
                        key="login"
                        component={LoginForm}
                        initial
                    />
                    <Scene
                        key="signUp"
                        component={SignUpForm}
                    />
                    <Scene 
                        key="resetPassword"
                        component={ResetPassword}
                    />
                </Scene>
                <Scene key="client" hideNavBar>
                    <Scene
                        key="menu"
                        component={Main}
                    />
                </Scene>
                <Scene key="main" hideNavBar>
                    <Scene
                        key="river"
                        component={River}
                    />
                    <Scene
                        key="phasetwo"
                        component={PhaseTwoRiver}
                    />
                </Scene>
                <Scene key="rivers" hideNavBar>
                    <Scene
                        key="myrivers"
                        component={MyRivers}
                    />
                </Scene>
                <Scene key="info" hideNavBar>
                    <Scene
                        key="information"
                        component={Information}
                    />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent