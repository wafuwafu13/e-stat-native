import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class PrefectureMenu extends Component {
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>県</Text>
            <Button
             title="北海道"
             onPress= {() => this.props.navigation.navigate('Hokkaido')}
            />
            </View>
        )
    }
}

export default PrefectureMenu;