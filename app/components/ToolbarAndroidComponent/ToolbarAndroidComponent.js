import React, {Component} from 'react';
import { Text, View, ToolbarAndroid, StyleSheet} from 'react-native';

export default class ToolbarAndroidComponent extends Component{
    constructor(){
        super();
        this.state = {
            actionText: 'Welcome to my great app!'
        }
    }

    onSettingsClick(){
        console.log('Settings Clicked...');
    }

    onActionSelected(position){
        this.setState({
            actionText: 'SELECTED: '+ toolbarActions[position].title
        });
    }

    render(){
        /*
        return (
        <View>
            <ToolbarAndroid
                style={styles.toolbar}
                title="MyApp"
            />
        </View>
        )
        */

        /*
        return (
        <View>
            <ToolbarAndroid
                style={styles.toolbar}
                logo={require('./app_logo.png')}
                actions={[{title: 'Settings', icon: require('./icon_settings.png'), show:'always'}]}
                onActionSelected={this.onSettingsClick}
            />
        </View>
        )
        */

        return (
        <View>
            <ToolbarAndroid
                style={styles.toolbar}
                logo={require('./ic_launcher.png')}
                actions={toolbarActions}
                onActionSelected={this.onActionSelected.bind(this)}
                subtitle={this.state.actionText}
                title="MyApp"
            />
            <Text style={styles.mainText}>{this.state.actionText}</Text>
        </View>
        )
    }
}

const toolbarActions = [
    {title: 'Create', icon: require('./ic_launcher.png'), show: 'always'},
    {title: 'Action 1'},
    {title: 'Action 2'},
    {title: 'Action 3'},
    {title: 'Action 4'},
    {title: 'Add', icon: require('./Add-icon.png'), show: 'always'},
]

const styles = StyleSheet.create({
    toolbar: {
        height: 58,
        backgroundColor: '#e9eaed'
    },
    mainText: {
        padding:20
    }
});
