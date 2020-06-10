import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

type Props = {
    toggle: () => void;
};

const AnnualIncomeModal: React.FC<Props> = (props) => {
    const { toggle } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>平均年収</Text>は以下の通りである。
            </Text>
            <Text style={styles.text}>
                20~24歳の<Text style={{ color: 'blue' }}>男性</Text>は
                <Text style={{ fontWeight: 'bold' }}>274万円</Text>、
                <Text style={{ color: 'red' }}>女性</Text>は
                <Text style={{ fontWeight: 'bold' }}>240万円</Text>。
            </Text>
            <Text style={styles.text}>
                50~54歳の<Text style={{ color: 'blue' }}>男性</Text>は
                <Text style={{ fontWeight: 'bold' }}>660万円</Text>、
                <Text style={{ color: 'red' }}>女性</Text>は
                <Text style={{ fontWeight: 'bold' }}>228万円</Text>。
            </Text>
            <TouchableOpacity onPress={toggle} style={styles.closeIcon}>
                <Icon name="closecircle" size={wp('5%')} color="#807E7C" />
            </TouchableOpacity>
        </View>
    );
};

export default AnnualIncomeModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffc'
    },
    text: {
        fontSize: wp('3%'),
        marginBottom: hp('5%')
    },
    closeIcon: {
        position: 'absolute',
        left: wp('2%'),
        top: hp('5%')
    }
});
