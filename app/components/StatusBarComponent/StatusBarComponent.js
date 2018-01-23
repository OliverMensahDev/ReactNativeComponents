import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';

export default class StatusBarComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            barColor: this.props.barColor
        }
    }

    static defaultProps = {
        barColor: 'steelblue'
    }

    render(){
        return (
        <View>
            <StatusBar  
                backgroundColor={this.state.barColor}
                barStyle="dark-content"
                hidden={false}
                translucent={false}
            />
            <Text>StatusBar Component</Text>
        </View>
        )
    }
}
