import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import SexPopulationChart from './SexPopulationChart';
import Explanation from './Explanation';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

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
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.modalIcon}>
                    <Icon name="arrow-left" size={wp('5%')} color="#807E7C" />
                </TouchableOpacity>
                <SexPopulationChart />
            </View>
            <View style={styles.container}>
                <Explanation />
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
