import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class GeolocationComponent extends Component{
    state = {
        position:'unknown'
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            let myPosition = JSON.stringify(position);
            this.setState({position: myPosition})
        },
        (error) => alert(JSON.stringify(error)));
    }


    render(){
        return (
        <View>
            <Text>POSITION: {this.state.position}</Text> 
        </View>
        )
    }
}