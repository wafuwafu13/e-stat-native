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

const PrefecturePopulationModal: React.FC<Props> = (props) => {
    const { toggle } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>総人口</Text>の1位は
                <Text style={{ fontWeight: 'bold' }}>東京都</Text>で
                <Text style={{ fontWeight: 'bold' }}>1380万人</Text>、47位は
                <Text style={{ fontWeight: 'bold' }}>鳥取県</Text>で
                <Text style={{ fontWeight: 'bold' }}>5600万人</Text>。
            </Text>
            <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>老年人口</Text>の1位は
                <Text style={{ fontWeight: 'bold' }}>秋田県</Text>で
                <Text style={{ fontWeight: 'bold' }}>36.4%</Text>、47位は
                <Text style={{ fontWeight: 'bold' }}>沖縄県</Text>で
                <Text style={{ fontWeight: 'bold' }}>21.6%</Text>。
            </Text>
            <TouchableOpacity onPress={toggle} style={styles.closeIcon}>
                <Icon name="closecircle" size={wp('5%')} color="#807E7C" />
            </TouchableOpacity>
        </View>
    );
};

export default PrefecturePopulationModal;

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
