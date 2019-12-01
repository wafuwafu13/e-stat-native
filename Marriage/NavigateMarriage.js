import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Marriage from './Marriage';
import Test from './Test';

class NavigateMarriage extends Component {

    render(){
        const RootStack = createStackNavigator(
            {
                Marriage: Marriage,
                Test: Test,
            },
            {
                initialRouteName: 'Marriage',
            },
        );

        const AppContainer = createAppContainer(RootStack);

        return(
            <AppContainer />
        )
    }
}

export default NavigateMarriage;