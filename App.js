import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import NavigatePrefecture from './Prefecture/NavigatePrefecture';
import NavigatePopulation from './Population/NavigatePopulation';
import NavigateBody from './Body/NavigateBody';
import NavigateMarriage from './Marriage/NavigateMarriage';
import NavigateIncome from './Income/NavigateIncome';

class App extends Component {
    render(){
      return(
        <ScrollableTabView>
          <NavigatePrefecture tabLabel="都道府県" />
          <NavigatePopulation tabLabel="人口" />
          <NavigateBody tabLabel="身長・体重" />
          <NavigateMarriage tabLabel="結婚" />
          <NavigateIncome tabLabel="年収" />
        </ScrollableTabView>
      )
    }
}

export default App;