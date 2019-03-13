import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: '',
      password: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <TextInput style={styles.textInput}
            placeholder="Type user here"
            spellCheck = {false}
            onChangeText={(user) => this.setState({user})}
            />
            <TextInput style={styles.textInput}
            placeholder="Type password here"
            secureTextEntry = {true}
            spellCheck = {false}
            onChangeText={(password) => this.setState({password})}
            />
          <Button  
            onPress={onPressLearnMore}
            title="Login"
            color="#841584"
            accessibilityLabel="Learn more about this purple button">
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    flex: 1,
    backgroundColor: '#e6ffee'
  },
  textInput: {
    height: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red'
  },
  desc: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  more: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'green'
  },
  
  view1:{
    flex: 1,
    borderRightColor: 'red',
    borderWidth: 1
  },
  view2:{
    flex: 1,
    borderRightColor: 'white',
    borderWidth: 1
  },
  view3:{
    flex: 1,
    //borderRightColor: 'blue',
    borderWidth: 1
  }

});
