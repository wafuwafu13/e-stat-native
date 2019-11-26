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
            <Button
             title="結婚"
             onPress= {() => this.props.navigation.navigate('Marriage')}
            />
            <Button
             title="収入"
             onPress= {() => this.props.navigation.navigate('Income')}
            />
            <Button
             title="経済"
             onPress= {() => this.props.navigation.navigate('Economy')}
            />
            <Button
             title="教育"
             onPress= {() => this.props.navigation.navigate('Education')}
            />
            <Button
             title="自殺"
             onPress= {() => this.props.navigation.navigate('Suicide')}
            />
            </View>
        )
    }
}

export default Menu;