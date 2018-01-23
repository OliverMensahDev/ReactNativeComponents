import React, {Component} from 'react';
import {Text, View, ToolbarAndroid, TouchableHighlight, StyleSheet} from 'react-native';

export default class SceneComponent1 extends Component{
    navScene1(){
        this.props.navigator.push({
            id: 'scene1'
        });
    }

    render(){
        return (
        <View>
            <View>
                <ToolbarAndroid style={styles.toolbar} title={this.props.title} />
                <TouchableHighlight onPress={this.navScene1.bind(this)}>
                    <Text>Go To Scene 1</Text>
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