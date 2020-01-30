import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Income from './Income';
import AnnualIncomeWeb from './AnnualIncomeWeb';

class NavigateIncome extends Component {

    render(){
        const RootStack = createStackNavigator(
            {
                Income: Income,
                AnnualIncomeWeb: AnnualIncomeWeb,
            },
            {
                initialRouteName: 'Income',

                defaultNavigationOptions: {
                    headerStyle: {
                      backgroundColor: '#000055',
                    },
                  },
            },
        );

        const AppContainer = createAppContainer(RootStack);

        return(
            <AppContainer />
        )
    }
}

export default NavigateIncome;