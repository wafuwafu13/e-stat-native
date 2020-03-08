import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Population from './Population/Population';

class Menu extends Component{
    render(){
        return(
            <View>
                <Button
                  title="人口"
                  onPress= {()=> this.props.navigation.navigate('Population')}
                />
            </View>
        )
    }
}

export default Menu;