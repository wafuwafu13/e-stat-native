import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

type Props = {
    onPress: () => void;
};

const BackArrow: React.FC<Props> = (props) => {
    const { onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name="arrow-left" size={wp('5%')} color="#807E7C" />
        </TouchableOpacity>
    );
};

export default BackArrow;
