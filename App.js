import React, { Component } from 'react';
import Menu from './Menu';
import Population from './Population/Population';
import Body from './Body/Body';
import Marriage from './Marriage/Marriage';
import Income from './Income/Income';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class App extends Component {
    render(){
        const RootStack= createStackNavigator(
            {
              Home: Menu,
              Population: Population,
              Body: Body,
              Marriage: Marriage,
              Income: Income,
            },
            {
              initialRouteName: 'Home',
            }
        );

        const AppContainer = createAppContainer(RootStack);

        return(
          <AppContainer />
        )
    }
}

export default App;