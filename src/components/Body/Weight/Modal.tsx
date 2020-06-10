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

const WeightPopulationModal: React.FC<Props> = (props) => {
    const { toggle } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>平均体重</Text>は以下の通りである。
            </Text>
            <Text style={styles.text}>
                12歳の<Text style={{ color: 'blue' }}>男性</Text>は
                <Text style={{ fontWeight: 'bold' }}>42.1kg</Text>、
                <Text style={{ color: 'red' }}>女性</Text>は
                <Text style={{ fontWeight: 'bold' }}>41.2kg</Text>。
            </Text>
            <Text style={styles.text}>
                25歳の<Text style={{ color: 'blue' }}>男性</Text>は
                <Text style={{ fontWeight: 'bold' }}>68.5kg</Text>、
                <Text style={{ color: 'red' }}>女性</Text>は
                <Text style={{ fontWeight: 'bold' }}>52.8kg</Text>。
            </Text>
            <TouchableOpacity onPress={toggle} style={styles.closeIcon}>
                <Icon name="closecircle" size={wp('5%')} color="#807E7C" />
            </TouchableOpacity>
        </View>
    );
};

export default WeightPopulationModal;

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
