import React, {Component} from 'react';
import {AppRegistry, Text, View, ScrollView, Button} from 'react-native';

export default class ScrollViewComponent extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return (
        <View>
            <Button title="Scroll" onPress={() => {_scrollView.scrollTo({y:400})}} />
            <ScrollView
                ref={(scrollView) => {_scrollView = scrollView}}
                contentContainerStyle={{padding:20}}
                horizontal={false}
                onContentSizeChange={(contentWidth, contentHeight) => {console.log('Height: '+contentHeight+' '+'Width: '+contentWidth)}}
                onScroll={() => console.log('Scrolling...')}
                pagingEnabled={false}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={false}
            >
                <Text style={{fontSize:96}}>Start scrolling</Text>
                <Text style={{fontSize:96}}>Hello World</Text>
                <Text style={{fontSize:96}}>Hello World</Text>
                <Text style={{fontSize:96}}>Hello World</Text>
                <Text style={{fontSize:96}}>Hello World</Text>
                <Text style={{fontSize:96}}>Hello World</Text>
            </ScrollView>
        </View>
        )
    }
}

AppRegistry.registerComponent('ScrollViewComponent', () => ScrollViewComponent);