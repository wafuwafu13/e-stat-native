import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Menu extends Component {
    render(){
        return(
            <View　style={{marginTop: 20}}>
            <Button
             icon={
                 <Icon
                   name="human-handsdown"
                   size={25}
                 />
             }
             title="人口"
             type="outline"
             raised
             onPress= {() => this.props.navigation.navigate('Population')}
            />
            <Button
             title="身長・体重"
             type="outline"
             raised
             style={{marginTop: 5}}
             onPress= {() => this.props.navigation.navigate('Body')}
            />
            <Button
             title="結婚"
             type="outline"
             raised
             style={{marginTop: 5}}
             onPress= {() => this.props.navigation.navigate('Marriage')}
            />
            <Button
             title="年収"
             type="outline"
             raised
             style={{marginTop: 5}}
             onPress= {() => this.props.navigation.navigate('Income')}
            />
            </View>
        )
    }
}

export default Menu;