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
                12歳男性の平均体重は
                <Text style={{ color: 'red' }}>42.1kg</Text>
                、12歳女性の平均体重は
                <Text style={{ color: 'red' }}>41.2kg</Text>
                で、12歳までは男性と女性の体重差がほとんどないことが分かります。
            </Text>
            <Text style={styles.text}>成長期に入ると一気に身長差が開き始めます。</Text>
            <Text style={styles.text}>
                26歳男性の平均体重は
                <Text style={{ color: 'red' }}>68.5kg</Text>
                、26歳女性の平均体重は
                <Text style={{ color: 'red' }}>52.8kg</Text>
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
