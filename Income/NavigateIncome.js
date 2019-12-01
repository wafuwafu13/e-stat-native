import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Income from './Income';
import Test from './Test';

class NavigateIncome extends Component {

    render(){
        const RootStack = createStackNavigator(
            {
                Income: Income,
                Test: Test,
            },
            {
                initialRouteName: 'Income',
            },
        );

        const AppContainer = createAppContainer(RootStack);

        return(
            <AppContainer />
        )
    }
}

export default NavigateIncome;