import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Explanation = () =>{
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.text}>
                平成27年の総人口は
                <Text style={{color: 'red'}}>1億2千700万人</Text>
                でした。
            </Text>
            <Text style={styles.text}>
                66~68歳、つまり1947年~1949年生まれ(団塊の世代)が爆発的に多い理由は、第二次世界大戦の終戦が主な理由です。
            </Text>
            <Text style={styles.text}>
                出生数は
                <Text style={{color: 'red'}}>270万人程度</Text>
                であり、第一次ベビーブームと呼ばれました。
            </Text>
            <Text style={styles.text}>
                41~44歳、つまり1971年~1974年生まれ(団塊ジュニア)あたりに再び人口が増加している理由は、団塊の世代が子供を作ったからで、この現象のことを第二次ベビーブームと呼びます。
            </Text>
            <Text style={styles.text}>
                第三次ベビーブームが起こっていないのは、バブル崩壊、消費税増税、アジア通貨危機などの影響による経済の悪化が主な理由です。
            </Text>
            <Text style={styles.text}>
                69,70歳、つまり1945,46年生まれが少ないのは戦争が影響しているためです。
            </Text>
            <Text style={styles.text}>
                48歳、つまり1966年生まれが少ないのは干支が丙午(ひのえうま)であったためです。
            </Text>
            <Text style={styles.text}>
                丙午年生まれの女性は、気性が激しく夫の命を縮めるという迷信があり、その迷信を信じる人が多かったようです。
            </Text>
        </ScrollView>
    )
}

export default Explanation;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        margin: wp('7%')
    },
    text:{
        fontSize: wp('2%'),
        marginBottom: wp('2%')
    }
})