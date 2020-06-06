import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Explanation = () => {    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                1930年の離婚率は
                <Text style={{color: 'red'}}>9.2%</Text>
                でした。
            </Text>
            <Text style={styles.text}>
                近年では離婚率は上昇し続けていて、2015年の離婚率は
                <Text style={{color: 'red'}}>26.3%</Text>
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