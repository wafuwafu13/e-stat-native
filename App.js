import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Menu from './Menu';
import PopulationMenu from './Population/PopulationMenu';
import SumPopulationSwiper from './Population/SumPopulation/SumPopulationSwiper';
import SexPopulationSwiper from './Population/SexPopulation/SexPopulationSwiper';
import EstimatePopulationSwiper from './Population/EstimatePopulation/EstimatePopulationSwiper';
import BirthrateSwiper from './Population/Birthrate/BirthrateSwiper';
import TransitionPopulationSwiper from './Population/TransitionPopulation/TransitionPopulationSwiper';


class App extends Component {

    render(){
      const Stack = createStackNavigator(
        {
          Home: Menu,
          PopulationMenu: PopulationMenu,
          SumPopulationSwiper: SumPopulationSwiper,
          SexPopulationSwiper: SexPopulationSwiper,
          EstimatePopulationSwiper: EstimatePopulationSwiper,
          BirthrateSwiper: BirthrateSwiper,
          TransitionPopulationSwiper: TransitionPopulationSwiper,
        },
        {
          initialRouteName: 'Home',
          headerMode: 'none',
        }
      )

      const Drawer = createDrawerNavigator(
        {
          閉じる: {
            screen: Stack,
            navigationOptions:{
              drawerIcon:  <Icon name="chevron-left" size={24} color="#636D70"/>
            }
          },
          グラフ選択: {
            screen: Menu,
            navigationOptions:{
              drawerIcon:  <Icon name="chart-bar" size={24} color="#636D70"/>
            }
          },
          人口: {
            screen: PopulationMenu,
            navigationOptions:{
              drawerIcon:  <Icon name="chart-bar" size={24} color="#636D70"/>
            }
          },
        },
        {
          initialRouteName: '閉じる',
          unmountInactiveRoutes: true,
          drawerWidth: wp('25%'),
          tintColor: 'red',
          drawerBackgroundColor: '#F0FCFF'
          
        }
      )

      const AppContainer = createAppContainer(Drawer)

      return(
          <AppContainer />
      )
    }
}

export default App;