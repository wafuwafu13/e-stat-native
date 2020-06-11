import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import DrawerIcon from '../../elements/DrawerIcon';

import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';
import { DrawerNavigatorParamList } from '../../../App';

type OverviewNavigationProp = CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, 'Overview'>,
    DrawerNavigationProp<DrawerNavigatorParamList>
>;

type Props = {
    navigation: OverviewNavigationProp;
};

const Overview: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.modalIcon}>
            <DrawerIcon onPress={() => navigation.toggleDrawer()}/>
            </View>
            <View style={styles.text}>
                <Text style={styles.explanation}>
                    このサービスは、政府統計総合窓口(e-Stat)のAPI機能を使用していますが、サービスの内容は国によって保証されたものではありません。
                </Text>
                <Text style={styles.profile}>Created by 田川裕隆 (twitter: @wafuwafu13_)</Text>
            </View>
        </View>
    );
};

export default Overview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCCCCC'
    },
    modalIcon: {
        position: 'absolute',
        left: wp('2%'),
        top: wp('2%')

    },
    text: {
        position: 'relative'
    },
    explanation: {
        fontSize: wp('2.5%'),
    },
    profile: {
        position: 'absolute',
        fontSize: wp('2%'),
        marginTop: hp('30%'),
        right: wp('2%')
    }
});
