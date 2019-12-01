import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Body from './Body';
import Test from './Test';

class NavigateBody extends Component {

    render(){
        const RootStack = createStackNavigator(
            {
                Body: Body,
                Test: Test,
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