import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

type Props = {
    onPress: () => void;
    children?: React.ReactNode;
};

const GraphMenu: React.FC<Props> = (props) => {
    const { onPress } = props;

    return (
        <View style={styles.menuContents}>
            <View>
                <Text style={styles.graphTitle}>{props.children}</Text>
            </View>
            <View style={styles.menuContentsBottom}>
                <View>
                    <Text style={styles.explanation}>データのまとめ</Text>
                </View>
                <TouchableOpacity style={styles.buttom} onPress={onPress}>
                    <Text style={styles.buttonText}>グラフを見る</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GraphMenu;

const styles = StyleSheet.create({
    menuContents: {
        paddingTop: hp('4%'),
        paddingLeft: wp('2%')
    },
    menuContentsBottom: {
        flexDirection: 'row',
        paddingTop: hp('7%')
    },
    graphTitle: {
        fontSize: wp('3%'),
        color: '#4B4B4B'
    },
    explanation: {
        fontSize: wp('2%'),
        color: '#4B4B4B'
    },
    buttom: {
        width: wp('20%'),
        height: hp('10%'),
        marginLeft: wp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#6E8DDE'
    },
    buttonText: {
        fontSize: wp('2.5%'),
        color: '#FFFFFF'
    }
});
