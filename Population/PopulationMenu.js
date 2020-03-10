import React, { Component } from 'react';
import { View, Button } from 'react-native';

class PopulationMenu extends Component{
    render(){
        return(
            <View>
                <Button 
                  title="人口推移"
                  onPress= {() => this.props.navigation.navigate('TransitionPopulation')}
                />
            </View>
        )
    } 
}

export default PopulationMenu;