import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

type Props = {
    item: string;
    children?: React.ReactNode;
};

const SubMenuIcon: React.FC<Props> = (props) => {
    const { item } = props;

    const icon: any = {
        population: <Icon name="child" size={wp('10%')} color="#4C8469" />,
        body: <Icon name="ruler" size={wp('10%')} color="#324CA8" />,
        marriage: <Icon name="heartbeat" size={wp('10%')} color="#9E1212" />,
        income: <Icon name="money-bill-wave" size={wp('10%')} color="#E0BB5B" />
    };

    return (
        <>
            <View>{icon[item]}</View>
            <Text style={styles.text}>{props.children}</Text>
        </>
    );
};

export default SubMenuIcon;

const styles = StyleSheet.create({
    text: {
        marginTop: hp('2%'),
        fontSize: wp('2%'),
        color: '#4B4B4B'
    }
});