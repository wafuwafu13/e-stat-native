import React from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { YellowBox } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Menu from './Menu';
import PopulationMenu from './Population/PopulationMenu';
import SumPopulationSwiper from './Population/SumPopulation/SumPopulationSwiper';
import SexPopulationSwiper from './Population/SexPopulation/SexPopulationSwiper';
import EstimatePopulationSwiper from './Population/EstimatePopulation/EstimatePopulationSwiper';
import BirthrateSwiper from './Population/Birthrate/BirthrateSwiper';
import TransitionPopulationSwiper from './Population/TransitionPopulation/TransitionPopulationSwiper';
import BodyMenu from './Body/BodyMenu';
import HeightSwiper from './Body/Height/HeightSwiper';
import WeightSwiper from './Body/Weight/WeightSwiper';
import MarriageMenu from './Marriage/MarriageMenu';
import SumMarriageSwiper from './Marriage/SumMarriage/SumMarriageSwiper';
import UnmarrideSwiper from './Marriage/Unmarride/UnmarrideSwiper';
import DivorcerateSwiper from './Marriage/Divorcerate/DivorcerateSwiper';
import IncomeMenu from './Income/IncomeMenu';
import AnnualIncomeSwiper from './Income/AnnualIncome/AnnauIncomeSwiper';
import Overview from './Overview/Overview';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {

      // const Stack = createStackNavigator(
      //   {
      //     Home: Menu,
      //     PopulationMenu: PopulationMenu,
      //     SumPopulationSwiper: SumPopulationSwiper,
      //     SexPopulationSwiper: SexPopulationSwiper,
      //     EstimatePopulationSwiper: EstimatePopulationSwiper,
      //     BirthrateSwiper: BirthrateSwiper,
      //     TransitionPopulationSwiper: TransitionPopulationSwiper,
      //     BodyMenu: BodyMenu,
      //     HeightSwiper: HeightSwiper,
      //  WeightSwiper: WeightSwiper,
      //     MarriageMenu: MarriageMenu,
      //     SumMarriageSwiper: SumMarriageSwiper,
      //     UnmarrideSwiper: UnmarrideSwiper,
      //  DivorcerateSwiper: DivorcerateSwiper,
      //  IncomeMenu: IncomeMenu,
      //  AnnualIncomeSwiper: AnnualIncomeSwiper,
      //     Overview: Overview,
      //   },
      //   {
      //     initialRouteName: 'Home',
      //     headerMode: 'none',
      //   }
      // )

      // const Drawer = createDrawerNavigator(
      //   {
      //     閉じる:{
      //       screen: Stack,
      //       navigationOptions:{
      //         drawerIcon:  <Icon name="chevron-left" size={24} color="#636D70"/>
      //       }
      //     },
      //     グラフ選択:{
      //       screen: Menu,
      //       navigationOptions:{
      //         drawerIcon:  <Icon name="chart-bar" size={24} color="#636D70"/>
      //       }
      //     },
      //     人口:{
      //       screen: PopulationMenu,
      //       navigationOptions:{
      //         drawerIcon:  <Icon name="child" size={24} color="#636D70"/>
      //       }
      //     },
      //     身長_体重:{
      //       screen: BodyMenu,
      //       navigationOptions:{
      //         drawerIcon:  <Icon name="ruler" size={20} color="#636D70"/>
      //       }
      //     },
      //     結婚:{
      //       screen: MarriageMenu,
      //       navigationOptions:{
      //         drawerIcon:  <Icon name="heartbeat" size={24} color="#636D70"/>
      //       }
      //     },
      //     年収:{
      //       screen: IncomeMenu,
      //       navigationOptions:{
      //         drawerIcon:  <Icon name="money-bill-wave" size={20} color="#636D70"/>
      //       }
      //     },
      //     アプリについて:{
      //       screen: Overview,
      //       navigationOptions:{
      //         drawerIcon:  <Icon name="address-card" size={20} color="#636D70"/>
      //       }
      //     },
          
      //   },
      //   {
      //     initialRouteName: 'グラフ選択',
      //     unmountInactiveRoutes: true,
      //     drawerWidth: wp('25%'),
      //     drawerBackgroundColor: '#F0FCFF'
      //   }
      // )

      // const AppContainer = createAppContainer(Drawer)

      // YellowBox.ignoreWarnings(['Remote debugger']);
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu"
            component={Menu}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="PopulationMenu"
            component={PopulationMenu}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SumPopulationSwiper"
            component={SumPopulationSwiper}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SexPopulationSwiper"
            component={SexPopulationSwiper}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="EstimatePopulationSwiper"
            component={EstimatePopulationSwiper}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="BirthrateSwiper"
            component={BirthrateSwiper}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="TransitionPopulationSwiper"
            component={TransitionPopulationSwiper}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="BodyMenu"
            component={BodyMenu}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="HeightSwiper"
            component={HeightSwiper}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="WeightSwiper"
            component={WeightSwiper}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MarriageMenu"
            component={MarriageMenu}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SumMarriageSwiper"
            component={SumMarriageSwiper}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="UnmarrideSwiper"
            component={UnmarrideSwiper}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="DivorcerateSwiper"
            component={DivorcerateSwiper}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="IncomeMenu"
            component={IncomeMenu}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="AnnualIncomeSwiper"
            component={AnnualIncomeSwiper}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Overview"
            component={Overview}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;