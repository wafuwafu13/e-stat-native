import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {

    const createStack = () => {
      return(
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
      )
    }

    return( 
      <NavigationContainer>
        <Drawer.Navigator>
            {/* <Drawer.Screen name="閉じる" children={createStack} /> */}
            <Drawer.Screen name="グラフ選択" children={createStack} />
            <Drawer.Screen name="人口" component={PopulationMenu} />
            <Drawer.Screen name="身長・体重" component={BodyMenu} />
            <Drawer.Screen name="結婚" component={MarriageMenu} />
            <Drawer.Screen name="年収" component={IncomeMenu} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}

export default App;