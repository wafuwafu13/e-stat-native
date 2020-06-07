import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Explanation: React.FC = () => {        
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                20~24歳の平均年収は男性が
                <Text style={{color: 'red'}}>274万円</Text>
                、女性が
                <Text style={{color: 'red'}}>240万円</Text>
                です。
            </Text>
            <Text style={styles.text}>
                50~54歳の平均年収は
                <Text style={{color: 'red'}}>660万円</Text>
                、女性が
                <Text style={{color: 'red'}}>228万円</Text>
                となっています。
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
        marginBottom: wp('3%'),
    }
})