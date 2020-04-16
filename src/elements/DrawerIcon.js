import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class DrawerIcon extends Component {

    render(){

        const { onPress, itemMenu } = this.props
        
        return(
            <>
              {itemMenu ? (
                  <TouchableOpacity
                    onPress={onPress}
                    style={[styles.commonModalIcon, styles.itemMenuModalIcon]}
                  >
                    <Icon name="list-alt" size={wp('5%')} color="#807E7C"/>
                  </TouchableOpacity>
              ) : (

                  <TouchableOpacity
                    onPress={onPress}
                    style={styles.commonModalIcon}
                  >
                    <Icon name="list-alt" size={wp('5%')} color="#807E7C"/>
                  </TouchableOpacity>
              )}
            </>
        )
    }
}

export default DrawerIcon


const styles = StyleSheet.create({
    commonModalIcon:{
        position: 'absolute',
        left: wp('2%'),
    },
    itemMenuModalIcon:{
        top: hp('5%'),
    }
})