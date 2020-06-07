import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { YellowBox } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import HomeMenu from './src/components/HomeMenu';
import PopulationMenu from './src/components/Population/PopulationMenu';
import SumPopulationSwiper from './src/components/Population/SumPopulation/SumPopulationSwiper';
import SexPopulationSwiper from './src/components/Population/SexPopulation/SexPopulationSwiper';
import EstimatePopulationSwiper from './src/components/Population/EstimatePopulation/EstimatePopulationSwiper';
import BirthrateSwiper from './src/components/Population/Birthrate/BirthrateSwiper';
import TransitionPopulationSwiper from './src/components/Population/TransitionPopulation/TransitionPopulationSwiper';
import BodyMenu from './src/components/Body/BodyMenu';
import HeightSwiper from './src/components/Body/Height/HeightSwiper';
import WeightSwiper from './src/components/Body/Weight/WeightSwiper';
import MarriageMenu from './src/components/Marriage/MarriageMenu';
import SumMarriageSwiper from './src/components/Marriage/SumMarriage/SumMarriageSwiper';
import UnmarrideSwiper from './src/components/Marriage/Unmarride/UnmarrideSwiper';
import DivorcerateSwiper from './src/components/Marriage/Divorcerate/DivorcerateSwiper';
import IncomeMenu from './src/components/Income/IncomeMenu';
import AnnualIncomeSwiper from './src/components/Income/AnnualIncome/AnnauIncomeSwiper';
import Overview from './src/components/Overview/Overview';

export type RootStackParamList = {
    HomeMenu: undefined;
    PopulationMenu: undefined;
    SumPopulationSwiper: undefined;
    SexPopulationSwiper: undefined;
    EstimatePopulationSwiper: undefined;
    BirthrateSwiper: undefined;
    TransitionPopulationSwiper: undefined;
    BodyMenu: undefined;
    HeightSwiper: undefined;
    WeightSwiper: undefined;
    MarriageMenu: undefined;
    SumMarriageSwiper: undefined;
    UnmarrideSwiper: undefined;
    DivorcerateSwiper: undefined;
    IncomeMenu: undefined;
    AnnualIncomeSwiper: undefined;
    Overview: undefined;
};

export type DrawerNavigatorParamList = {
    ホーム: undefined;
    人口: undefined;
    身長_体重: undefined;
    結婚: undefined;
    年収: undefined;
    アプリについて: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

const App: React.FC = () => {
    const createStack = (): JSX.Element => {
        return (
            <Stack.Navigator initialRouteName="HomeMenu">
                <Stack.Screen
                    name="HomeMenu"
                    component={HomeMenu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PopulationMenu"
                    component={PopulationMenu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SumPopulationSwiper"
                    component={SumPopulationSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SexPopulationSwiper"
                    component={SexPopulationSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="EstimatePopulationSwiper"
                    component={EstimatePopulationSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BirthrateSwiper"
                    component={BirthrateSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TransitionPopulationSwiper"
                    component={TransitionPopulationSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BodyMenu"
                    component={BodyMenu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HeightSwiper"
                    component={HeightSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="WeightSwiper"
                    component={WeightSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MarriageMenu"
                    component={MarriageMenu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SumMarriageSwiper"
                    component={SumMarriageSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="UnmarrideSwiper"
                    component={UnmarrideSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DivorcerateSwiper"
                    component={DivorcerateSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="IncomeMenu"
                    component={IncomeMenu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AnnualIncomeSwiper"
                    component={AnnualIncomeSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Overview"
                    component={Overview}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="ホーム" children={createStack} />
                <Drawer.Screen name="人口" component={PopulationMenu} />
                <Drawer.Screen name="身長_体重" component={BodyMenu} />
                <Drawer.Screen name="結婚" component={MarriageMenu} />
                <Drawer.Screen name="年収" component={IncomeMenu} />
                <Drawer.Screen name="アプリについて" component={Overview} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;