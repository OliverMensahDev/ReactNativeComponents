import React, {Component} from 'react';
import {Text, View, Slider} from 'react-native';

export default class SliderComponent extends Component{
    state = {
        value: this.props.value,
        max: this.props.max,
        min: this.props.min,
        step: this.props.step
    }

    static defaultProps = {
        value: 3,
        min: 0,
        max: 5,
        step:1
    }

    onValueChange = (value) =>{
        this.setState({value:value});
    }

    onSlideComplete =(value) =>{
        this.setState({value:value});
    }

    render(){
        return (
        <View>
            <Text>{this.state.value}</Text>
            <Slider 
                maximumValue={this.state.max}
                minimumValue={this.state.min}
                step={this.state.step}
                value={this.state.value}
                onValueChange={(value) => this.onValueChange(value)}
                onSlidingComplete={(value) => this.onSlideComplete(value)}
            />
        </View>
        )
    }
}