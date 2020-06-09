import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import BirthrateChart from './Chart';
import BirthrateData from './BirthrateData';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import SwiperHeader from '../../../elements/SwiperHeader';

type BirthrateSwiperNavigationProp = StackNavigationProp<RootStackParamList, 'BirthrateSwiper'>;

type Props = {
    navigation: BirthrateSwiperNavigationProp;
};

const BirthrateSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader
                    title="合計特殊出生率"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <BirthrateChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="合計特殊出生率"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <BirthrateData />
            </View>
        </Swiper>
    );
};

export default BirthrateSwiper;

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
