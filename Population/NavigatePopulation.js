import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Population from './Population';
import Test from './Test';

class NavigatePopulation extends Component {

    render(){
        const RootStack = createStackNavigator(
            {
                Population: Population,
                Test: Test,
            },
            {
                initialRouteName: 'Population',
            },
        );

        const AppContainer = createAppContainer(RootStack);

        return(
            <AppContainer />
        )
    }
}

export default NavigatePopulation;