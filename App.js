import React, { Component } from 'react';
import Menu from './Menu';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Population from './Population/Population';
import PopulationMenu from './Population/PopulationMenu';
import EstimatePopulation from './Population/EstimatePopulation';
import TransitionPopulation from './Population/TransitionPopulation';

class App extends Component {
    render(){
      const RootStack = createStackNavigator(
        {
          Home: Menu,
          Population: Population,
          PopulationMenu: PopulationMenu,
          TransitionPopulation: TransitionPopulation,
          EstimatePopulation: EstimatePopulation,
        },
        {
          initialRouteName: 'Home',
          headerMode: 'none',
        }
      )
      const AppContainer = createAppContainer(RootStack);

      return(
          <AppContainer />
      )
    }
}

export default App;