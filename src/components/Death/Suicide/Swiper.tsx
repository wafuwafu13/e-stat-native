import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import SuicideChart from './Chart';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import SwiperHeader from '../../../elements/SwiperHeader';
import SumSuicideData from './SumSuicideData';
import ManSuicideData from './ManSuisideData';
import WomanSuicideData from './WomanSuicideData';

type AnnualIncomeSwiperNavigationProp = StackNavigationProp<RootStackParamList, 'SuicideSwiper'>;

type Props = {
    navigation: AnnualIncomeSwiperNavigationProp;
};

const SuicideSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader
                    title="1日平均自殺死亡数(平成16年度人口動態調査)"
                    fontSize="2.5%"
                    onPress={() => navigation.goBack()}
                />
                <SuicideChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="1日平均自殺数"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <SumSuicideData />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="男性1日平均自殺数"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <ManSuicideData />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="女性1日平均自殺数"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <WomanSuicideData />
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
