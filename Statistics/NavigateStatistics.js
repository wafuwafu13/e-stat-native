import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Statistics from './Statistics';
import Variable from './Variable';

class NavigateStatistics extends Component {

    render(){
        const RootStack = createStackNavigator(
            {
                Statistics: Statistics,
                Variable: Variable,
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