import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Population from './Population/Population';
import Body from './Body/Body';
import Marriage from './Marriage/Marriage';
import Income from './Income/Income';

class App extends Component {
    render(){
      return(
        <ScrollableTabView>
          <Population tabLabel="人口" />
          <Body tabLabel="身長・体重" />
          <Marriage tabLabel="結婚" />
          <Income tabLabel="年収" />
        </ScrollableTabView>
      )
    }
}

export default App;