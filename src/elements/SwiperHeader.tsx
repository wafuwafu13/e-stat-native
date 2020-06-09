import React from 'react';
import { Header } from 'react-native-elements';
import BackArrow from './BackArrow';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

type Props = {
    title: string;
    fontSize: string;
    onPress: () => void;
};

const SwiperHeader: React.FC<Props> = (props) => {
    const { title, fontSize, onPress } = props;
    return (
        <Header
            leftComponent={<BackArrow onPress={onPress} />}
            centerComponent={{
                text: title,
                style: { color: '#5A4242', fontSize: wp(fontSize) }
            }}
            backgroundColor="#F0FCFF"
        />
    );
};

export default SwiperHeader;
