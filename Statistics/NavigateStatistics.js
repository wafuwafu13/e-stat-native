import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Statistics from './Statistics';
import Variable from './Variable';
import Average from './Average';
import Dispersion from './Dispersion';
import Sigma from './Sigma';

class NavigateStatistics extends Component {

    render(){
        const RootStack = createStackNavigator(
            {
                Statistics: Statistics,
                Variable: Variable,
                Average: Average,
                Dispersion: Dispersion,
                Sigma: Sigma,
            },
            {
                initialRouteName: 'Statistics',

                defaultNavigationOptions: {
                    headerStyle: {
                      backgroundColor: '#DDDDDD',
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

export default NavigateStatistics;