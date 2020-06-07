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
                12歳男性の平均身長は
                <Text style={{ color: 'red' }}>150.8cm</Text>
                、12歳女性の平均身長は
                <Text style={{ color: 'red' }}>151.1cm</Text>
                で、12歳までは男性と女性の身長差がほとんどないことが分かります。
            </Text>
            <Text style={styles.text}>成長期に入ると一気に身長差が開き始めます。</Text>
            <Text style={styles.text}>
                25歳男性の平均身長は
                <Text style={{ color: 'red' }}>170.5cm</Text>
                、25歳女性の平均身長は
                <Text style={{ color: 'red' }}>155.2cm</Text>
                です。
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
