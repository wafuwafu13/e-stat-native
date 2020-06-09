import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import WeightChart from './Chart';
import ManWeightData from './ManWeightData';
import WomanWeightData from './WomanWeightData';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import SwiperHeader from '../../../elements/SwiperHeader';

type WeightSwiperNavigationProp = StackNavigationProp<RootStackParamList, 'WeightSwiper'>;

type Props = {
    navigation: WeightSwiperNavigationProp;
};

const WeightSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader
                    title="男女別平均体重(平成28年国民健康・栄養調査)"
                    fontSize="2.5%"
                    onPress={() => navigation.goBack()}
                />
                <WeightChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="男性平均体重"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <ManWeightData />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="女性平均体重"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <WomanWeightData />
            </View>
        </Swiper>
    );
};

export default WeightSwiper;

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
