import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class StyledComponent extends Component{
    state = {
    }

    render(){
        return (
        <View>
            <Text style={styles.myText}>Styled Component</Text>
            <View style={styles.view1}></View>
            <View style={styles.view2}></View>
            <View style={styles.view3}></View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    myText: {
        color:'blue',
        fontSize:20,
        textAlign:'center',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: {width:1, height:1},
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        padding: 5
    },

    view1: {
        width: 100,
        height: 50,
        backgroundColor: '#FF5300'
    },

    view2: {
        width: 200,
        height: 100,
        backgroundColor: '#FF7431'
    },

    view3: {
        width: 300,
        height: 150,
        backgroundColor: '#FF9700'
    }
});