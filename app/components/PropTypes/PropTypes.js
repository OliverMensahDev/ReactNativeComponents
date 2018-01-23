import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class PropTypes extends Component{
    constructor(){
        super();
        this.state = {
            showMessage: true
        }
    }

    static defaultProps = {
        message: 'Hello Brad'
    }

    hideMsg(){
        this.setState({showMessage: false});
    }

    componentWillMount(){
        this.hideMsg();
    }

    render(){
        let msg = this.state.showMessage ? this.props.message : 'No Message';
        return (
        <View>
            <Text>{msg}</Text>
        </View>
        )
    }
}

SimpleComponent1.propTypes = {
    message: React.PropTypes.string
}