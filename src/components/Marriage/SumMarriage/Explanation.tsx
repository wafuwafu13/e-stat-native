import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const Explanation: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                戦後の1947年の結婚件数は
                <Text style={{ color: 'red' }}>93万4千170件</Text>
                と多くなっています。
            </Text>
            <Text style={styles.text}>
                1954~1973年は高度経済成長期で日本は景気が良かったのもあり、結婚件数は増え続けています。
            </Text>
            <Text style={styles.text}>
                しかし、近年では減少する一方で、2017年の結婚件数は
                <Text style={{ color: 'red' }}>60万6千866件</Text>
                となっています。
            </Text>
        </View>
    );
};

export default Explanation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: wp('7%')
    },
    text: {
        fontSize: wp('2.5%'),
        marginBottom: wp('3%')
    }
});
