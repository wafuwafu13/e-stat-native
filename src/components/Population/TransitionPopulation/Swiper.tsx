import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import TransitionPopulationChart from './Chart';
import TransitionPopulationData from './TransitionPopulationData';

import SwiperHeader from '../../../elements/SwiperHeader';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

type TransitionPopulationSwiperNavigationProp = StackNavigationProp<
    RootStackParamList,
    'TransitionPopulationSwiper'
>;

type Props = {
    navigation: TransitionPopulationSwiperNavigationProp;
};

const TransitionPopulationSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader title="人口推移(国勢調査)" onPress={() => navigation.goBack()} />
                <TransitionPopulationChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader title="人口推移" onPress={() => navigation.goBack()} />
                <TransitionPopulationData />
            </View>
        </Swiper>
    );
};

export default TransitionPopulationSwiper;

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
