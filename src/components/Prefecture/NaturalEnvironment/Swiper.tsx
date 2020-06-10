import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import SwiperHeader from '../../../elements/SwiperHeader';

import TotalAreaData from './TotalAreaData';
import TemperatureData from './TemperatureData';

type SumPopulationSwiperNavigationProp = StackNavigationProp<
    RootStackParamList,
    'SumPopulationSwiper'
>;

type Props = {
    navigation: SumPopulationSwiperNavigationProp;
};

const SumPopulationSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader
                    title="総面積ランキング"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <TotalAreaData />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="年平均気温ランキング"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <TemperatureData />
            </View>
        </Swiper>
    );
};

export default SumPopulationSwiper;

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
