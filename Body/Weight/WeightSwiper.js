import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Weighthart from './WeightChart';
import Explanation from './Explanation';


class WeightSwiper extends Component{

    render(){
        const styles = StyleSheet.create({
            container:{
                flex: 1,
                backgroundColor: '#CCCCCC',
            },
            modalIcon:{
                marginLeft: wp('2%'),
                marginTop: hp('2%')
            }
        })

        return(
            <Swiper>
                <View style={styles.container}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.toggleDrawer()}
                      style={styles.modalIcon}
                    >
                      <Icon name="list-alt" size={wp('5%')} color="#807E7C"/>
                    </TouchableOpacity>
                    <Weighthart />
                </View>
                <View>
                    <Explanation />      
                </View>
            </Swiper>
        )
    }
}

export default WeightSwiper;