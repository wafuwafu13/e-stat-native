import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Audio } from 'expo-av';
import MenuItemTitle from './src/elements/MenuItemTitle';
import MenuItem from './src/elements/MenuItem';
import DrawerIcon from './src/elements/DrawerIcon';


class Menu extends Component{
    
    render(){

        const {navigate} = this.props.navigation;

        const soundObject = new Audio.Sound();
        async function goto(destination){
            navigate(destination)
            try {
              await soundObject.loadAsync(require('./assets/sounds/decision.mp3'));
              await soundObject.playAsync();
            } 
              catch (error) {
              console.log('error...')
            }
        }

        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.main}>
                        <View style={styles.top}>
                            <DrawerIcon onPress={() => this.props.navigation.toggleDrawer()} />
                            <Text style={styles.title}>
                              選べるグラフ
                            </Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Animatable.View animation="bounce" style={styles.menu}>
                                <MenuItemTitle item="population">
                                    人 口
                                </MenuItemTitle>
                                <MenuItem item="population" onPress={ () => goto('PopulationMenu') }>
                                    5つのグラフ
                                </MenuItem>
                            </Animatable.View>
                            <Animatable.View animation="bounce" style={styles.menu}>
                                <MenuItemTitle item="body">
                                    身長・体重
                                </MenuItemTitle>
                                <MenuItem item="body" onPress={ () => goto('BodyMenu') }>
                                    2つのグラフ
                                </MenuItem>
                            </Animatable.View>
                            <Animatable.View animation="bounce" style={styles.menu}>
                                <MenuItemTitle item="marriage">
                                    結 婚
                                </MenuItemTitle>
                                <MenuItem item="marriage" onPress={ () => goto('MarriageMenu') }>
                                    3つのグラフ
                                </MenuItem>
                            </Animatable.View>
                        </View>
                        <View style={styles.menuContainer}>
                            <Animatable.View animation="bounce" style={styles.menu2}>
                                <MenuItemTitle item="income">
                                    年 収
                                </MenuItemTitle>
                                <MenuItem item="income" onPress={ () => goto('IncomeMenu') }>
                                    1つのグラフ
                                </MenuItem>
                            </Animatable.View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Menu;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F0FCFF',
    },
    main:{
        flex: 1,
    },
    top:{
        position: 'relative',
        marginTop: hp('7%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: wp('3.8%'),
        color: '#636D70',
    },
    menuContainer:{
        flexDirection: 'row',
        marginTop: hp('7%'),
    },
    menu:{
        flex: 1,
        height: hp('50%'),
        marginLeft: wp('2%'),
        marginRight: wp('2%'),
    },
    menu2:{
        flex: 0.3,
        height: hp('50%'),
        marginLeft: wp('2%'),
        marginRight: wp('2%'),
    },
})