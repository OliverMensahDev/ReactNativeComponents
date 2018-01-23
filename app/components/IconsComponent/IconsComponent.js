import React, {Component} from 'react';
import {Text, View,ToolbarAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class IconsComponent extends Component{
    render(){
        return (
        <View>
            <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
                Login with Facebook
            </Icon.Button>
            <Icon 
                name="user"
                size={40}
                color='#3b5998'
            />
        </View>
        )
    }
}