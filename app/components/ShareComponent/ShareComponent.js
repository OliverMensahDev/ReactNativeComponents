import React, {Component} from 'react';
import {Text, View, StyleSheet, Share, TouchableHighlight} from 'react-native';

export default class ShareComponent extends Component{
      state = {
        result: ''
      }

      shareMessage = () => {
        Share.share({
          message: 'React Native is Dopped'
        })
        .then(this.showResult)
        .catch((error) => this.setState({result: 'error: ' + error.message}));
      }

      shareText = () => {
        Share.share({
          message: 'The Best ',
          title: 'React Native'
        }, {
          dialogTitle: 'Share',
          excludedActivityTypes: [
            'com.apple.UIKit.activity.PostToTwitter'
          ],
          tintColor: 'green'
        })
        .then(this.showResult)
        .catch((error) => this.setState({result: 'error: ' + error.message}));
      }


      showResult = (result) => {
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            this.setState({result: 'shared with an activityType: ' + result.activityType});
          } else {
            this.setState({result: 'shared'});
          }
        } else if (result.action === Share.dismissedAction) {
          this.setState({result: 'dismissed'});
        }
      }

      render() {
        return (
          <View>
          <TouchableHighlight style={styles.wrapper}
            onPress={this.shareMessage}>
          <View style={styles.button}>
            <Text>Click to share message</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper}
          onPress={this.shareText}>
          <View style={styles.button}>
            <Text>Click to share a link</Text>
          </View>
        </TouchableHighlight>
        <Text>{this.state.result}</Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#cccccc',
    padding: 10,
  },
});
