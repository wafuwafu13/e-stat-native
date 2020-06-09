import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
                    onPress={() => navigation.goBack()}
                />
                <UnmarrideChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader title="男性未婚率" onPress={() => navigation.goBack()} />
                <ManUnmarrideData />
            </View>
            <View style={styles.container}>
                <SwiperHeader title="男性未婚率" onPress={() => navigation.goBack()} />
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
