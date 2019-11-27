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
             
             title="収入"
             type="outline"
             raised
             style={{marginTop: 5}}
             onPress= {() => this.props.navigation.navigate('Income')}
            />
            <Button
             
             title="経済"
             type="outline"
             raised
             style={{marginTop: 5}}
             onPress= {() => this.props.navigation.navigate('Economy')}
            />
            <Button
             
             title="教育"
             type="outline"
             raised
             style={{marginTop: 5}}
             onPress= {() => this.props.navigation.navigate('Education')}
            />
            <Button
             
             title="自殺"
             type="outline"
             raised
             style={{marginTop: 5}}
             onPress= {() => this.props.navigation.navigate('Suicide')}
            />
            </View>
        )
    }
}

export default Menu;