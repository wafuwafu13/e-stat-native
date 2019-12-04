import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Body from './Body';
import HeightWeb from './HeightWeb';
import WeightWeb from './WeightWeb';

class NavigateBody extends Component {

    render(){
        const RootStack = createStackNavigator(
            {
                Body: Body,
                HeightWeb: HeightWeb,
                WeightWeb: WeightWeb,
            },
            {
                initialRouteName: 'Body',
            },
        );

        const AppContainer = createAppContainer(RootStack);

        return(
            <AppContainer />
        )
    }
}

export default NavigateBody;