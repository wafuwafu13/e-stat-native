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

import TrafficAccidentChart from './Chart';
import TrafficAccidentData from './TrafficAccidentData';

type AnnualIncomeSwiperNavigationProp = StackNavigationProp<RootStackParamList, 'SuicideSwiper'>;

type Props = {
    navigation: AnnualIncomeSwiperNavigationProp;
};

const SuicideSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader
                    title="死亡交通事故数(道路の交通に関する統計)"
                    fontSize="2.5%"
                    onPress={() => navigation.goBack()}
                />
                <TrafficAccidentChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="死亡交通事故数"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <TrafficAccidentData />
            </View>
        </Swiper>
    );
};

export default SuicideSwiper;

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
