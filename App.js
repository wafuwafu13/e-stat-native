import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Prefecture from './Prefecture/Prefecture';
import PopulationNavigation from './Population/PopulationNavigation';
import Body from './Body/Body';
import Marriage from './Marriage/Marriage';
import Income from './Income/Income';

class App extends Component {
    render(){
      return(
        <ScrollableTabView>
          <Prefecture tabLabel="都道府県" />
          <PopulationNavigation tabLabel="人口" />
          <Body tabLabel="身長・体重" />
          <Marriage tabLabel="結婚" />
          <Income tabLabel="年収" />
        </ScrollableTabView>
      )
    }
}

export default App;