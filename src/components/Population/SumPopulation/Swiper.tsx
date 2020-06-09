import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import SumPopulationChart from './Chart';
import SumPopulationData from './SumPopulationData';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import SwiperHeader from '../../../elements/SwiperHeader';

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
                    title="年齢別総人口(平成27年国勢調査)"
                    fontSize="3%"
                    onPress={() => navigation.goBack()}
                />
                <SumPopulationChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader title="総人口" fontSize="3.5%" onPress={() => navigation.goBack()} />
                <SumPopulationData />
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
