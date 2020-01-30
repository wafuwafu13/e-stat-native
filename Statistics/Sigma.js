import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import {Dimensions} from 'react-native';

class Sigma extends Component {
    static navigationOptions = {
        title: 'シグマの計算',
        headerTintColor: '#FFFF00',
    }

    state = {
        animating: true
      }
    
      componentDidMount() {
        setTimeout(() => {
          this.setState({ animating: false })
        }, 5000);
      }
  
      render() {
        const animating = this.state.animating
        const height = Dimensions.get('window').height; 
        if(animating){
          return(
            <ActivityIndicator size="large" color="#0000ff" animating = {animating} style={{paddingTop: height/2.7}}/>
          )
        } else{
        return (
            <WebView source={{ uri: 'https://toukei.fc2.net/blog-entry-15.html' }} />
        );
        }
    }
}

export default Sigma;