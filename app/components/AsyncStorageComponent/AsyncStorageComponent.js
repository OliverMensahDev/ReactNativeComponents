import React, {Component} from 'react';
import {Text, View, AsyncStorage, TextInput} from 'react-native';


export default class AsyncStorageComponent extends Component{
    state ={
        name:""
    }

    saveName = (value) =>{
        AsyncStorage.setItem('name', value);
        this.setState({name: value});
    }

    getName = () =>{
        AsyncStorage.getItem('name').then((value) => {
            this.setState({name: value});
        });
    }

    saveTodos = () =>{
        AsyncStorage.setItem('todos', JSON.stringify(todos));
    }

    getTodos = () => {
        AsyncStorage.getItem('todos').then((value) => {
            console.log(JSON.parse(value));
        });
    }

    render(){
        return (
        <View>
            <TextInput 
                placeholder="Type Name"
                onSubmitEditing={(e) => this.saveName(e.nativeEvent.text)}
            />
            <Text>Current Name: {this.state.name}</Text>
        </View>
        )
    }
}