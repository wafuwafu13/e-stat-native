import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import HeightChart from './Chart';
import ManHeightData from './ManHeightData';
import WomanHeightData from './WomanHeightData';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import SwiperHeader from '../../../elements/SwiperHeader';

type HeightSwiperNavigationProp = StackNavigationProp<RootStackParamList, 'HeightSwiper'>;

type Props = {
    navigation: HeightSwiperNavigationProp;
};

const HeightSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader
                    title="男女別平均身長(平成28年国民健康・栄養調査)"
                    onPress={() => navigation.goBack()}
                />
                <HeightChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader title="男性平均身長" onPress={() => navigation.goBack()} />
                <ManHeightData />
            </View>
            <View style={styles.container}>
                <SwiperHeader title="女性平均身長" onPress={() => navigation.goBack()} />
                <WomanHeightData />
            </View>
        </Swiper>
    );
};

export default HeightSwiper;

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
