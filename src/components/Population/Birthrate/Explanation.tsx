import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Explanation = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                日本では人口維持に必要な値は
                <Text style={{color: 'red'}}>2.07</Text>
                とされています。
            </Text>
            <Text style={styles.text}>
                第一次ベビーブームの1947年は
                <Text style={{color: 'red'}}>4.54</Text>
                もあります。
            </Text>
            <Text style={styles.text}>
                その後は低下し続け、2017年には
                <Text style={{color: 'red'}}>1.42</Text>
                にまで下がっています。
            </Text>
        </View>
    )
}

export default Explanation;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        margin: wp('7%')
    },
    text:{
        fontSize: wp('2.5%'),
        marginBottom: wp('3%')
    }
})