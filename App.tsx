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
import SumPopulationSwiper from './src/components/Population/SumPopulation/Swiper';
import SexPopulationSwiper from './src/components/Population/SexPopulation/Swiper';
import EstimatePopulationSwiper from './src/components/Population/EstimatePopulation/Swiper';
import BirthrateSwiper from './src/components/Population/Birthrate/Swiper';
import TransitionPopulationSwiper from './src/components/Population/TransitionPopulation/Swiper';
import BodyMenu from './src/components/Body/BodyMenu';
import HeightSwiper from './src/components/Body/Height/Swiper';
import WeightSwiper from './src/components/Body/Weight/Swiper';
import MarriageMenu from './src/components/Marriage/MarriageMenu';
import SumMarriageSwiper from './src/components/Marriage/SumMarriage/Swiper';
import UnmarrideSwiper from './src/components/Marriage/Unmarride/Swiper';
import DivorcerateSwiper from './src/components/Marriage/Divorcerate/Swiper';
import IncomeMenu from './src/components/Income/IncomeMenu';
import AnnualIncomeSwiper from './src/components/Income/AnnualIncome/Swiper';
import Overview from './src/components/Overview/Overview';
import PrefectureMenu from './src/components/Prefecture/PrefectureMenu';
import PrefecturePopulationSwiper from './src/components/Prefecture/Population/Swiper';
import NaturalEnvironmentSwiper from './src/components/Prefecture/NaturalEnvironment/Swiper';
import DeathMenu from './src/components/Death/DeathMenu'

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
    PrefectureMenu: undefined;
    PrefecturePopulationSwiper: undefined;
    NaturalEnvironmentSwiper: undefined;
    DeathMenu: undefined
};

export type DrawerNavigatorParamList = {
    ホーム: undefined;
    人口: undefined;
    身長_体重: undefined;
    結婚: undefined;
    年収: undefined;
    都道府県: undefined;
    死亡: undefined;
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
                    name="PrefectureMenu"
                    component={PrefectureMenu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PrefecturePopulationSwiper"
                    component={PrefecturePopulationSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="NaturalEnvironmentSwiper"
                    component={NaturalEnvironmentSwiper}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DeathMenu"
                    component={DeathMenu}
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
                <Drawer.Screen name="都道府県" component={PrefectureMenu} />
                <Drawer.Screen name="死亡" component={DeathMenu} />
                <Drawer.Screen name="アプリについて" component={Overview} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
