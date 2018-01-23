import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

export default class TextInputComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    static defaultProps = {
        value: 'Hello World'
    }

    onChangeText(value){
        this.setState({value: value});
    }

    onSubmitEditing(e){
        console.log('onSubmitEditing Called: '+ e);
    }

    onBlur(e){
        console.log('onBlur Called');
    }

    onFocus(e){
        console.log('onFocus Called');
    }

    render(){
        return (
        <View>
            <TextInput 
                placeholder="Type Something"
                value={this.state.value}
                maxLength={10}
                selectionColor='red'
                selectTextOnFocus={false}
                editable={false}
                onFocus = {(e) => this.onFocus(e)}
                onBlur = {(e) => this.onBlur(e)}
                onChangeText = {(value) => this.onChangeText(value)}
                onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
            />
            <Text>{this.state.value}</Text>
        </View>
        )
    }
}