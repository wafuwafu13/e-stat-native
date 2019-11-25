import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Menu extends Component {
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>メニューページ</Text>
            <Button
             title="全国"
             onPress= {() => this.props.navigation.navigate('NationwideMenu')}
            />
            <Button
             title="都道府県"
             onPress= {() => this.props.navigation.navigate('PrefectureMenu')}
            />
            </View>
        )
    }
}

export default Menu;