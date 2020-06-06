import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class ChartTitle extends Component{
    render(){
        return(
            <Text style={styles.title}>
                { this.props.children }
            </Text>
        )
    }
}

export default ChartTitle

const styles = StyleSheet.create({
    title:{
      fontSize: wp('3%'),
      color: '#3E3D3D',
    }
})