import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Test extends Component {
    render() {
      return (
        <WebView source={{ uri: 'https://qiita.com/ozaki25/items/9da8e313e026f447c421' }} />
      );
    }
  }

export default Test;