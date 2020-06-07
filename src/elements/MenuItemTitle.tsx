import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

type Props = {
    item: string;
    children?: React.ReactNode;
};

const MenuItemTitle: React.FC<Props> = (props) => {
    const { item } = props;
    const bgColor: any = {
        population: '#99D260',
        body: '#56A7E2',
        marriage: '#FF5F5F',
        income: '#FAFD71'
    };

    return (
        <View style={[styles.title, { backgroundColor: bgColor[item] }]}>
            <Text style={styles.titleText}>{props.children}</Text>
        </View>
    );
};

export default MenuItemTitle;

const styles = StyleSheet.create({
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: wp('0.3%'),
        borderRadius: 100,
        borderColor: '#EEF5F6'
    },
    titleText: {
        fontSize: wp('2.5%'),
        color: '#4B4B4B'
    }
});
