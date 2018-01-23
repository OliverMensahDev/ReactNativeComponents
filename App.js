import React, {Component} from 'react';
import {Text, View ,StyleSheet} from 'react-native';

import TouchableComponent from './app/components/TouchableComponent/TouchableComponent'

export default class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <TouchableComponent />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // image: {
  //   width: 300,
  //   height: 300,
  //   borderRadius: 10,
  // },
});