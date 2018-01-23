import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';

export default class PickerComponent extends Component{
   state = {
            category: 'Technology'
    }

    onValueChange = (value) => {
        this.setState({category: value});
    }

    render(){
        return (
        <View>
            <Picker
                selectedValue={this.state.category}
                onValueChange={(category) => this.onValueChange(category)}
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