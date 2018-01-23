import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableHighlight} from 'react-native';

export default class FlatListComponent extends Component{
    state = {
        todoDataSource: []
    }

    componentDidMount(){
        this.fetchTodos();
    }

    fetchTodos =() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then((response) => response.json())
            .then((response) => {
                this.setState(prevState => {
                    return {
                        todoDataSource: prevState.todoDataSource.concat(response)
                    };
                  }, console.log(this.state.todoDataSource));
            })
    }

    render(){
        return (
            <FlatList
                style={styles.listContainer}
                data={this.state.todoDataSource}
                renderItem={(info) => (
                    <Text>{info.item.title}</Text>
                )}
            />
            )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent:'center',
        padding:12,
        backgroundColor:'#f6f6f6',
        marginBottom:3
    },
    text:{
        flex:1
    }
});
