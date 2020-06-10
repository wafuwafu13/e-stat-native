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

const HeightPopulationModal: React.FC<Props> = (props) => {
    const { toggle } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>平均身長</Text>は以下の通りである。
            </Text>
            <Text style={styles.text}>
                12歳の<Text style={{ color: 'blue' }}>男性</Text>は
                <Text style={{ fontWeight: 'bold' }}>150.8cm</Text>、
                <Text style={{ color: 'red' }}>女性</Text>は
                <Text style={{ fontWeight: 'bold' }}>151.1cm</Text>。
            </Text>
            <Text style={styles.text}>
                25歳の<Text style={{ color: 'blue' }}>男性</Text>は
                <Text style={{ fontWeight: 'bold' }}>170.5cm</Text>、
                <Text style={{ color: 'red' }}>女性</Text>は
                <Text style={{ fontWeight: 'bold' }}>155.2cm</Text>。
            </Text>
            <TouchableOpacity onPress={toggle} style={styles.closeIcon}>
                <Icon name="closecircle" size={wp('5%')} color="#807E7C" />
            </TouchableOpacity>
        </View>
    );
};

export default HeightPopulationModal;

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
