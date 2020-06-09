import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import DivorcerateChart from './Chart';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import SwiperHeader from '../../../elements/SwiperHeader';
import DivorcerateData from './DivorcerateData';

type DivorcerateSwiperNavigationProp = StackNavigationProp<RootStackParamList, 'DivorcerateSwiper'>;

type Props = {
    navigation: DivorcerateSwiperNavigationProp;
};

const DivorcerateSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <SwiperHeader
                    title="離婚率(人口動態調査)"
                    fontSize="3.5%"
                    onPress={() => navigation.goBack()}
                />
                <DivorcerateChart />
            </View>
            <View style={styles.container}>
                <SwiperHeader title="離婚率" fontSize="3.5%" onPress={() => navigation.goBack()} />
                <DivorcerateData />
            </View>
        </Swiper>
    );
};

export default DivorcerateSwiper;

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
