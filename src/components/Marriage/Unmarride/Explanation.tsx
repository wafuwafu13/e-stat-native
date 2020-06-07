import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Explanation: React.FC = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                1920年の40歳~45歳男性の未婚率は
                <Text style={{color: 'red'}}>2.82%</Text>
                で、40歳~45歳女性の未婚率は
                <Text style={{color: 'red'}}>2.15%</Text>
                でした。
            </Text>
            <Text style={styles.text}>
                近年では未婚率は上昇し続けていて、2015年の40歳~45歳男性の未婚率は
                <Text style={{color: 'red'}}>29.96%</Text>
                、40歳~45歳女性の未婚率は
                <Text style={{color: 'red'}}>19.3%</Text>
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