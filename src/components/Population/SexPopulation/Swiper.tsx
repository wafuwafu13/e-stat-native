import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import SexPopulationChart from './Chart';
import ManPopulationData from './ManPopulationData';
import WomanPopulationData from './WomanPopulationData';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import SwiperHeader from '../../../elements/SwiperHeader';

type SexPopulationSwiperNavigationProp = StackNavigationProp<
    RootStackParamList,
    'SexPopulationSwiper'
>;

type Props = {
    navigation: SexPopulationSwiperNavigationProp;
};

const SexPopulationSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader
                    title="男女別総人口(平成27年国勢調査)"
                    onPress={() => navigation.goBack()}
                />
                <SexPopulationChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader title="男性人口" onPress={() => navigation.goBack()} />
                <ManPopulationData />
            </View>
            <View style={styles.container}>
                <SwiperHeader title="女性人口" onPress={() => navigation.goBack()} />
                <WomanPopulationData />
            </View>
        </Swiper>
    );
};

export default SexPopulationSwiper;

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
