import React, { Component } from 'react';
import Menu from './Menu/Menu';
import NationwideMenu from './Menu/NationwideMenu';
import SumPopulation from './Nationwide/SumPopulation';
import PrefectureMenu from './Menu/PrefectureMenu';
import Hokkaido from './Prefecture/Hokkaido';
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