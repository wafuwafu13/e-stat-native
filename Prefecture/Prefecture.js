import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Menu from './Menu';
import Hokkaido from './Hokkaido';

class Prefecture extends Component {

    static navigationOptions = {
        headerStyle: {
          backgroundColor: 'red',
        },
      };

    render(){
        const RootStack = createStackNavigator(
            {
                Home: Menu,
                Hokkaido: Hokkaido
            },
            {
                initialRouteName: 'Home',

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

export default Prefecture;