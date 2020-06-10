import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { icon } from '../types/icon';
import { bgColor } from '../types/bgColor';

type Props = {
    item: 'population' | 'body' | 'marriage' | 'income' | 'prefecture';
    onPress: () => void;
    children?: React.ReactNode;
};

const MenuItem: React.FC<Props> = (props) => {
    const { item, onPress } = props;
    const bgColor: bgColor = {
        population: '#99D260',
        body: '#56A7E2',
        marriage: '#FF5F5F',
        income: '#FAFD71',
        prefecture: '#FA902F'
    };
    const icon: icon = {
        population: <Icon name="child" size={wp('10%')} color="#4C8469" />,
        body: <Icon name="ruler" size={wp('10%')} color="#324CA8" />,
        marriage: <Icon name="heartbeat" size={wp('10%')} color="#9E1212" />,
        income: <Icon name="money-bill-wave" size={wp('10%')} color="#E0BB5B" />,
        prefecture: <Icon name="globe-asia" size={wp('10%')} color="#966215" />
    };

    return (
        <TouchableOpacity
            style={[styles.icon, { backgroundColor: bgColor[item] }]}
            onPress={onPress}
        >
            {icon[item]}
            <Text style={styles.explanation}>{props.children}</Text>
        </TouchableOpacity>
    );
};

export default MenuItem;

const styles = StyleSheet.create({
    explanation: {
        marginTop: hp('2%'),
        fontSize: wp('2%'),
        color: '#4B4B4B'
    },
    icon: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: wp('0.7%'),
        borderRadius: 10,
        borderColor: '#EEF5F6',
        backgroundColor: '#99D260'
    }
});
