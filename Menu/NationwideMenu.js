import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class NationwideMenu extends Component {
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>全国</Text>
            <Button
             title="総人口"
             onPress= {() => this.props.navigation.navigate('SumPopulation')}
            />
            </View>
        )
    }
}

export default NationwideMenu;