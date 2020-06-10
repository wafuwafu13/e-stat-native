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

const UnmarrideModal: React.FC<Props> = (props) => {
    const { toggle } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>40~45歳男女の未婚率</Text>は増加傾向にある。
            </Text>
            <Text style={styles.text}>
                1920年<Text style={{ color: 'blue' }}>男性</Text>は
                <Text style={{ fontWeight: 'bold' }}>2.82%</Text>、1920年
                <Text style={{ color: 'red' }}>女性</Text>は
                <Text style={{ fontWeight: 'bold' }}>2.15%</Text>。
            </Text>
            <Text style={styles.text}>
                2015年<Text style={{ color: 'blue' }}>男性</Text>は
                <Text style={{ fontWeight: 'bold' }}>29.96%</Text>、2015年
                <Text style={{ color: 'red' }}>女性</Text>は
                <Text style={{ fontWeight: 'bold' }}>19.3%</Text>。
            </Text>
            <TouchableOpacity onPress={toggle} style={styles.closeIcon}>
                <Icon name="closecircle" size={wp('5%')} color="#807E7C" />
            </TouchableOpacity>
        </View>
    );
};

export default UnmarrideModal;

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
