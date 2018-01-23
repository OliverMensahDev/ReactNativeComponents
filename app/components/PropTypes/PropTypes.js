import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Text, View} from 'react-native';

export default class PropType extends Component{
    constructor(){
        super();
        this.state = {
            showMessage: true
        }
    }

    static defaultProps = {
        message: 'Hello Brad'
    }

    hideMsg = () => {
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

PropType.propTypes = {
    message: PropTypes.string
}