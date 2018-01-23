import React, {Component} from 'react';
import {Text, View, TouchableHighlight, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class TouchableComponent extends Component{
    state = {
            toggle:true
    }

    render(){
        let isToggle = this.state.toggle ? 'YES': 'NO';
        return (
        <View>
            <Text>{isToggle}</Text>
            <TouchableHighlight 
                underlayColor='red'
                onPress={() => this.setState({toggle: !this.state.toggle})}>
                <Text style={styles.toggle}>Toggle</Text>
            </TouchableHighlight>

            <TouchableOpacity
                onPress={() => this.setState({toggle: !this.state.toggle})}>
                <Image 
                    style={styles.button}
                    source={require('./button.png')}
                />
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    toggle: {
        padding:8,
        backgroundColor:'#ccc'
    }
});