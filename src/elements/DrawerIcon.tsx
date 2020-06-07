import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

type Props = {
    onPress: () => void;
};

const DrawerIcon: React.FC<Props> = (props) => {
    const { onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={styles.modalIcon}>
            <Icon name="list-alt" size={wp('5%')} color="#807E7C" />
        </TouchableOpacity>
    );
};

export default DrawerIcon;

const styles = StyleSheet.create({
    modalIcon: {
        position: 'absolute',
        left: wp('2%')
    }
});
