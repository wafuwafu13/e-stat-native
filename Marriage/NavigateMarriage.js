import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Marriage from './Marriage';
import SumWeb from './SumWeb';
import UnmarrideWeb from './UnmarrideWeb';
import DivorcerateWeb from './DivorcerateWeb'

class NavigateMarriage extends Component {

    render(){
        const RootStack = createStackNavigator(
            {
                Marriage: Marriage,
                SumWeb: SumWeb,
                UnmarrideWeb: UnmarrideWeb,
                DivorcerateWeb: DivorcerateWeb,

            },
            {
                initialRouteName: 'Marriage',

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

export default NavigateMarriage;