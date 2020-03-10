import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Menu extends Component{
    render(){
        const {navigate} = this.props.navigation
        const styles = StyleSheet.create({
            view:{
                flex: 1,
                backgroundColor: '#F0FCFF'
            },
            text:{
                color: '#636D70',
                marginTop: hp('10%'),
                marginLeft: wp('40%'),
                fontSize: 25
            }
        })
        return(
            <View style={styles.view}>
                <Text style={styles.text}>選べるグラフ</Text>
                <TouchableOpacity
                  onPress= {() => navigate('PopulationMenu')}
                >
                    <Text>人口</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Menu;