import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import UnmarrideChart from './UnmarrideChart';
import Explanation from './Explanation';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

type UnmarrideSwiperNavigationProp = StackNavigationProp<RootStackParamList, 'UnmarrideSwiper'>;

type Props = {
    navigation: UnmarrideSwiperNavigationProp;
};

const UnmarrideSwiper: React.FC<Props> = ({ navigation }) => {
    return (
        <Swiper>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.modalIcon}>
                    <Icon name="arrow-left" size={wp('5%')} color="#807E7C" />
                </TouchableOpacity>
                <UnmarrideChart />
            </View>
            <View style={styles.container}>
                <Explanation />
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
