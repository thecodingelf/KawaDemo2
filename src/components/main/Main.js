import React, { Component } from 'react'
import firebase from 'firebase'
import {
  View,
  Platform,
  StyleSheet,
  Text
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as draggableActions from '../../actions/draggable/Draggable-actions'
import { Button } from '../common'
import { styles } from './Main.styles'

const instructions = Platform.select({
  ios: 'More features coming soon!',
  android: 'More features coming soon!',
})

class Main extends Component {

  async createScene(scene) {
    var user = await firebase.auth().currentUser
    let newSceneKey = await firebase.database().ref(`users/${user.uid}/scenes`).push({scene: scene}).key
    this.props.setActiveScene(newSceneKey)
    console.log("newSceneKey:",newSceneKey)
    Actions.main()
  }

  render() {
    const { 
      containerStyle, 
      welcomeStyle, 
      instructionsStyle,
      buttonContainer,
      buttonView,
      footer,
    } = styles

    return (
      <View style={containerStyle}>
        <Text style={welcomeStyle}>
          Welcome to Kawa Demo!
        </Text>
        <Text style={instructionsStyle}>
          To get started, create your river.
        </Text>
        <Text style={instructionsStyle}>
          {instructions}
        </Text>
        <View style={buttonContainer}>
          <View style={buttonView}>
            <Button onPress={() => this.createScene("river")}>
              Create My River
            </Button>
          </View>
          <View style={buttonView}>
            <Button onPress={() => Actions.rivers()}>
              My Rivers
            </Button>
          </View>
          <View style={buttonView}>
            <Button onPress={() => Actions.info()}>
              Help/Info
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
      ...state.auth,
      ...state.draggable
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...draggableActions }, dispatch)
}




export default connect(
  mapStateToProps, mapDispatchToProps, null, { 
      withRef: true 
})(Main)
