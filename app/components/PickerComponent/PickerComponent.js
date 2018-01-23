import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';

export default class PickerComponent extends Component{
    constructor(){
        super();
        this.state = {
            category: 'Technology'
        }
    }

    onValueChange(key, value){
        console.log(key+':'+value);
        this.setState({category: value});
    }

    render(){
        return (
        <View>
            <Picker
                selectedValue={this.state.category}
                onValueChange={this.onValueChange.bind(this, 'category')}
                prompt="Category"
                enabled={true}
                mode="dropdown"
            >
                <item label="Technology" value="technology" />
                <item label="Business" value="business" />
                <item label="Cooking" value="cooking" />
            </Picker>
            <Text>Selected Category: {this.state.category}</Text>
        </View>
        )
    }
}