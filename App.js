import React, { Component } from 'react';
import Menu from './Menu';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
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

      const Drawer = createDrawerNavigator(
        {
          閉じる: {
            screen: RootStack,
            navigationOptions:{
              drawerIcon:  <Icon name="check" size={24} />
            }
          },
          グラフ選択: {
            screen: Menu,
            navigationOptions:{
              drawerIcon:  <Icon name="check" size={24} />
            }
          }
        },
        {
          initialRouteName: '閉じる'
        }
      )

      const AppContainer = createAppContainer(Drawer)

      return(
          <AppContainer />
      )
    }
}

export default App;