import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import AnnualIncomeChart from './Chart';
import ManAnnualIncomeData from './ManAnnualIncomeData';
import WomanAnnualIncomeData from './ManAnnualIncomeData';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import SwiperHeader from '../../../elements/SwiperHeader';

type AnnualIncomeSwiperNavigationProp = StackNavigationProp<
    RootStackParamList,
    'AnnualIncomeSwiper'
>;

type Props = {
    navigation: AnnualIncomeSwiperNavigationProp;
};

const AnnualIncomeSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader
                    title="男女・年代別平均年収(平成28年民間給与実態統計調査)"
                    fontSize="2.5%"
                    onPress={() => navigation.goBack()}
                />
                <AnnualIncomeChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="男性平均年収"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <ManAnnualIncomeData />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="女性平均年収"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <WomanAnnualIncomeData />
            </View>
        </Swiper>
    );
};

export default AnnualIncomeSwiper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCCCCC'
    },
    modalIcon: {
        marginLeft: wp('2%'),
        marginTop: hp('2%')
    }
});
