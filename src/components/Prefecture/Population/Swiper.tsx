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

import PrefectureSumPopulationData from './PrefectureSumPopulationData';
import PrefectureOldPopulationData from './PrefectureOldPopulationData';

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
                    title="総人口ランキング"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <PrefectureSumPopulationData />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="老年人口ランキング"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <PrefectureOldPopulationData />
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
