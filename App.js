import React, { Component } from 'react';
import Menu from './Menu';
import NationwideMenu from './NationwideMenu';
import SumPopulation from './SumPopulation';
import PrefectureMenu from './PrefectureMenu';
import Hokkaido from './Hokkaido';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class App extends Component {
    render(){
        const RootStack= createStackNavigator(
            {
              Home: Menu,
              NationwideMenu: NationwideMenu,
              SumPopulation: SumPopulation,
              PrefectureMenu: PrefectureMenu,
              Hokkaido: Hokkaido
            },
            {
              initialRouteName: 'Home',
            }
        );

        const AppContainer = createAppContainer(RootStack);

        return(
          <AppContainer />
        )
    }
}

export default App;