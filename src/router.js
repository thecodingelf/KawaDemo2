import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import Main from './components/main/Main'
import River from './components/river/River'
import MyRivers from './components/myrivers/MyRivers';
import Information from './components/info/Information';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="client" hideNavBar>
                    <Scene
                        key="name"
                        component={Main}
                        initial
                    />
                </Scene>
                <Scene key="main" hideNavBar>
                    <Scene
                        key="river"
                        component={River}
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