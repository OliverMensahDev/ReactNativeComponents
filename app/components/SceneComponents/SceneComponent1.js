import React, {Component} from 'react';
import {AppRegistry, Text, View, ToolbarAndroid, TouchableHighlight, StyleSheet} from 'react-native';

export default class SceneComponent1 extends Component{
    navScene2(){
        this.props.navigator.push({
            id: 'scene2'
        });
    }

    render(){
        return (
        <View>
            <View>
                <ToolbarAndroid style={styles.toolbar} title={this.props.title} />
                <TouchableHighlight onPress={this.navScene2.bind(this)}>
                    <Text>Go To Scene 2</Text>
                </TouchableHighlight>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height:58,
        backgroundColor:'#f6f6f6'
    }
});
AppRegistry.registerComponent('SceneComponent1', () => SceneComponent1);