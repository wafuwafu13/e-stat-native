import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Menu extends Component {
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>メニューページ</Text>
            <Button
             title="人口"
             onPress= {() => this.props.navigation.navigate('Population')}
            />
            <Button
             title="身長・体重"
             onPress= {() => this.props.navigation.navigate('Body')}
            />
            </View>
        )
    }
}

export default Menu;