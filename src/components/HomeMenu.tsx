import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { Audio } from 'expo-av';

import MenuItemTitle from '../elements/MenuItemTitle';
import MenuItem from '../elements/MenuItem';
import DrawerIcon from '../elements/DrawerIcon';

import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../../App';
import { DrawerNavigatorParamList } from '../../App';

type HomeMenuNavigationProp = CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, 'HomeMenu'>,
    DrawerNavigationProp<DrawerNavigatorParamList>
>;

type Props = {
    navigation: HomeMenuNavigationProp;
};

const HomeMenu: React.FC<Props> = ({ navigation }) => {
    const soundObject = new Audio.Sound();

    async function goto(destination: any): Promise<void> {
        navigation.navigate(destination);
        try {
            await soundObject.loadAsync(require('../../assets/sounds/decision.mp3'));
            await soundObject.playAsync();
        } catch (error) {
            console.log('error...');
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.top}>
                        <DrawerIcon onPress={() => navigation.toggleDrawer()} />
                        <Text style={styles.title}>選べる項目</Text>
                    </View>
                    <View style={styles.menuContainer}>
                        <Animatable.View animation="bounce" style={styles.menu}>
                            <MenuItemTitle item="population">人 口</MenuItemTitle>
                            <MenuItem item="population" onPress={() => goto('PopulationMenu')}>
                                5つのグラフ
                            </MenuItem>
                        </Animatable.View>
                        <Animatable.View animation="bounce" style={styles.menu}>
                            <MenuItemTitle item="body">身長・体重</MenuItemTitle>
                            <MenuItem item="body" onPress={() => goto('BodyMenu')}>
                                2つのグラフ
                            </MenuItem>
                        </Animatable.View>
                        <Animatable.View animation="bounce" style={styles.menu}>
                            <MenuItemTitle item="marriage">結 婚</MenuItemTitle>
                            <MenuItem item="marriage" onPress={() => goto('MarriageMenu')}>
                                3つのグラフ
                            </MenuItem>
                        </Animatable.View>
                    </View>
                    <View style={styles.menuContainer}>
                        <Animatable.View animation="bounce" style={styles.menu}>
                            <MenuItemTitle item="income">年 収</MenuItemTitle>
                            <MenuItem item="income" onPress={() => goto('IncomeMenu')}>
                                1つのグラフ
                            </MenuItem>
                        </Animatable.View>
                        <Animatable.View animation="bounce" style={styles.menu}>
                            <MenuItemTitle item="prefecture">都道府県</MenuItemTitle>
                            <MenuItem item="prefecture" onPress={() => goto('PrefectureMenu')}>
                                5つのランキング
                            </MenuItem>
                        </Animatable.View>
                        <Animatable.View animation="bounce" style={styles.menu}>
                            <MenuItemTitle item="death">死 亡</MenuItemTitle>
                            <MenuItem item="death" onPress={() => goto('DeathMenu')}>
                                3つのグラフ
                            </MenuItem>
                        </Animatable.View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default HomeMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0FCFF'
    },
    main: {
        flex: 1,
        marginBottom: wp('5%')
    },
    top: {
        position: 'relative',
        marginTop: hp('7%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: wp('3.8%'),
        color: '#636D70'
    },
    menuContainer: {
        flexDirection: 'row',
        marginTop: hp('7%')
    },
    menu: {
        flex: 1,
        height: hp('50%'),
        marginLeft: wp('2%'),
        marginRight: wp('2%')
    }
});
