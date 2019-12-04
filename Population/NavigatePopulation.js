import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Population from './Population';
import SumWeb from './SumWeb';
import SexWeb from './SexWeb';
import EstimateWeb from './EstimateWeb';
import BirthrateWeb from './BirthrateWeb';
import TransitionWeb from './TransitionWeb';

class NavigatePopulation extends Component {

    render(){
        const RootStack = createStackNavigator(
            {
                Population: Population,
                SumWeb: SumWeb,
                SexWeb: SexWeb,
                EstimateWeb: EstimateWeb,
                BirthrateWeb: BirthrateWeb,
                TransitionWeb: TransitionWeb,
            },
            {
                initialRouteName: 'Population',

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

export default NavigatePopulation;