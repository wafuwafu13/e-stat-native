import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import NavigatePrefecture from './Prefecture/NavigatePrefecture';
import NavigatePopulation from './Population/NavigatePopulation';
import Body from './Body/Body';
import Marriage from './Marriage/Marriage';
import Income from './Income/Income';

class App extends Component {
    render(){
      return(
        <ScrollableTabView>
          <NavigatePrefecture tabLabel="都道府県" />
          <NavigatePopulation tabLabel="人口" />
          <Body tabLabel="身長・体重" />
          <Marriage tabLabel="結婚" />
          <Income tabLabel="年収" />
        </ScrollableTabView>
      )
    }
}

export default App;