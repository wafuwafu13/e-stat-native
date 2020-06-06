import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Explanation = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.text}>
                平成27年の総人口は男性が
                <Text style={{color: 'red'}}>6千184万人</Text>
                、女性が
                <Text style={{color: 'red'}}>6千523万人</Text>
                でした。
            </Text>
            <Text style={styles.text}>
                平成29年の簡易生命表によると、平均寿命は男性が
                <Text style={{color: 'red'}}>81.09歳</Text>
                、女性が
                <Text style={{color: 'red'}}>87.26歳</Text>
                です。
            </Text>
            <Text style={styles.text}>
                女性の方が長生きなのは日本に限ったことではなく、世界中の国で女性の方が長生きであり、その理由は先天的な生物学的要因と、後天的な社会文化的要因があります。
            </Text>
            <Text style={styles.text}>
                生物学的要因の1つとして、老化を遅らせる抗酸化物質を作るシステムをもつX染色体が挙げられ、男性の1つに対し女性は2つを有します。
            </Text>
            <Text style={styles.text}>
                社会文化的要因の1つとして、女性の社会進出の遅れが挙げられ、男性より社会的なストレスを受けにくく、寿命が長くなると考えられています。
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
        fontSize: wp('2.5%'),
        marginBottom: wp('3%'),
    }
})