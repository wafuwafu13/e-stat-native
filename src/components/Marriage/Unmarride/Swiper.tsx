import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import UnmarrideChart from './Chart';
import ManUnmarrideData from './ManUnmarrideData';
import WomanUnmarrideData from './WomanUnmarrideData';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import SwiperHeader from '../../../elements/SwiperHeader';

type UnmarrideSwiperNavigationProp = StackNavigationProp<RootStackParamList, 'UnmarrideSwiper'>;

type Props = {
    navigation: UnmarrideSwiperNavigationProp;
};

const UnmarrideSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader
                    title="40~45歳男女の未婚率(国勢調査)"
                    fontSize="3%"
                    onPress={() => navigation.goBack()}
                />
                <UnmarrideChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="男性未婚率"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <ManUnmarrideData />
            </View>
            <View style={styles.container}>
                <SwiperHeader
                    title="男性未婚率"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <WomanUnmarrideData />
            </View>
        </Swiper>
    );
};

export default UnmarrideSwiper;

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
