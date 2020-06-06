import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Explanation = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                1945年の総人口は
                <Text style={{color: 'red'}}>7千199万人</Text>
                、2015年の総人口は
                <Text style={{color: 'red'}}>1億2千700万人</Text>
                です。
            </Text>
            <Text style={styles.text}>
                1985年ごろまでは年月に比例して人口も増加していましたが、ここ数年で増加が止まり、減少に向かっていることが分かります。
            </Text>
            <Text style={styles.text}>
                初めて人口が減少したのは2005年で、合計特殊出生率は
                <Text style={{color: 'red'}}>1.26</Text>
                、出生率は
                <Text style={{color: 'red'}}>107万人</Text>
                でそれぞれ過去最低でした。
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