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

const NaturalEnvironmentModal: React.FC<Props> = (props) => {
    const { toggle } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>総面積</Text>の1位は
                <Text style={{ fontWeight: 'bold' }}>北海道</Text>で
                <Text style={{ fontWeight: 'bold' }}>780万ha</Text>、47位は
                <Text style={{ fontWeight: 'bold' }}>香川県</Text>で
                <Text style={{ fontWeight: 'bold' }}>18万ha</Text>。
            </Text>
            <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>年平均気温</Text>の1位は
                <Text style={{ fontWeight: 'bold' }}>沖縄県</Text>で
                <Text style={{ fontWeight: 'bold' }}>23.5℃</Text>、47位は
                <Text style={{ fontWeight: 'bold' }}>北海道</Text>で
                <Text style={{ fontWeight: 'bold' }}>9.5℃</Text>。
            </Text>
            <TouchableOpacity onPress={toggle} style={styles.closeIcon}>
                <Icon name="closecircle" size={wp('5%')} color="#807E7C" />
            </TouchableOpacity>
        </View>
    );
};

export default NaturalEnvironmentModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffc',
        position: 'relative'
    },
    text: {
        fontSize: wp('3%'),
        marginBottom: wp('3%')
    },
    closeIcon: {
        position: 'absolute',
        left: wp('2%'),
        top: hp('5%')
    }
});
