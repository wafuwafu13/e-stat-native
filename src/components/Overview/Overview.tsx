import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import DrawerIcon from '../../elements/DrawerIcon';

const Overview = ({navigation}: any) => {
    return(
        <View style={styles.container}>
            <DrawerIcon onPress={() => navigation.toggleDrawer()} />
            <View style={styles.text}>
                <Text style={styles.explanation}>
                    このサービスは、政府統計総合窓口(e-Stat)のAPI機能を使用していますが、サービスの内容は国によって保証されたものではありません。
                </Text>
                <Text style={styles.profile}>
                    Created by 田川裕隆 (twitter: @wafuwafu13_)
                </Text>
            </View>
        </View>
    )
}

export default Overview;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: wp('3%'),
    backgroundColor: '#CCCCCC',
  },
  text:{
    position: 'relative',
  },
  explanation:{
    fontSize: wp('2.5%'),
    marginTop: wp('10%')
  },
  profile:{
    position: 'absolute',
    fontSize: wp('2%'),
    marginTop: hp('30%'),
    right: wp('2%')
  }
})
