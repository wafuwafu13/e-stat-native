import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import EstimatePopulationChart from './Chart';
import EstimateSumPopulationData from './EstimateSumPopulationData';
import EstimateManPopulationData from './EstimateManPopulationData';
import EstimateWomanPopulationData from './EstimateWomanPopulationData';

import SwiperHeader from '../../../elements/SwiperHeader';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

type EstimatePopulationSwiperNavigationProp = StackNavigationProp<
    RootStackParamList,
    'EstimatePopulationSwiper'
>;

type Props = {
    navigation: EstimatePopulationSwiperNavigationProp;
};

const EstimatePopulationSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader
                    title="人口推計(平成30年10月1日現在)"
                    fontSize="3%"
                    onPress={() => navigation.goBack()}
                />
                <EstimatePopulationChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="推定総人口"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <EstimateSumPopulationData />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="推定男性人口"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <EstimateManPopulationData />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="推定女性人口"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <EstimateWomanPopulationData />
            </View>
        </Swiper>
    );
};

export default EstimatePopulationSwiper;

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
