import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyC9_SN6ThxplnvAEaVtV6ebVogmt2SynLE",
      authDomain: "one-time-password-42f16.firebaseapp.com",
      databaseURL: "https://one-time-password-42f16.firebaseio.com",
      projectId: "one-time-password-42f16",
      storageBucket: "one-time-password-42f16.appspot.com",
      messagingSenderId: "874136353434"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm/>
        <SignInForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
