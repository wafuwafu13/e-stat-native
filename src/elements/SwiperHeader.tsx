import React from 'react';
import { Header } from 'react-native-elements';
import BackArrow from './BackArrow';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

type Props = {
    title: string;
    onPress: () => void;
};

const SwiperHeader: React.FC<Props> = (props) => {
    const { title, onPress } = props;
    return (
        <Header
            leftComponent={<BackArrow onPress={onPress} />}
            centerComponent={{
                text: title,
                style: { color: '#5A4242', fontSize: wp('3%') }
            }}
            backgroundColor="#F0FCFF"
        />
    );
};

export default SwiperHeader;
