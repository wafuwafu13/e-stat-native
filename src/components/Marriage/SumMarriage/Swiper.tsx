import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import SumMarriageChart from './Chart';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import SwiperHeader from '../../../elements/SwiperHeader';
import SumMarriageData from './SumMarriageData';

type SumMarriageSwiperNavigationProp = StackNavigationProp<RootStackParamList, 'SumMarriageSwiper'>;

type Props = {
    navigation: SumMarriageSwiperNavigationProp;
};

const SumMarriageSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader title="結婚件数(人口動態調査)" onPress={() => navigation.goBack()} />
                <SumMarriageChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader title="結婚件数" onPress={() => navigation.goBack()} />
                <SumMarriageData />
            </View>
        </Swiper>
    );
};

export default SumMarriageSwiper;

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
