import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Explanation = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                総人口は
                <Text style={{color: 'red'}}>1億2千700万人</Text>
                男性の総人口は
                <Text style={{color: 'red'}}>6千184万人</Text>
                、女性の総人口は
                <Text style={{color: 'red'}}>6千525万人</Text>
                となっています。
            </Text>
            <Text style={styles.text}>
                日本の出生数は年々減少し続けており、2016年は出生数が
                <Text style={{color: 'red'}}>97万6千人</Text>
                となり、初めて100万人を割り大きな話題となりました。
            </Text>
            <Text style={styles.text}>
                出生数が1番多かった1949年の
                <Text style={{color: 'red'}}>269万人</Text>
                と比べると、半分以下となっています。
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