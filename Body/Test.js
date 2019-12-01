import React, { Component } from 'react';
import { ActivityIndicator, View} from 'react-native';
import { WebView } from 'react-native-webview';
import {Dimensions} from 'react-native';

class Test extends Component {

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
          <WebView source={{ uri: 'https://www.amazarashi.com/' }} />
      );
      }
    }
  }

export default Test;