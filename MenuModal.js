import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class MenuModal extends Component{

    render(){

       // const {navigate} = this.props.navigation
        const styles = StyleSheet.create({
            container:{
                flex: 1,
                alignItems: 'center',
            },
            select:{
                alignItems: 'center',
                justifyContent: 'center',
                width: wp('50%'),
                height: hp('10%'),
                marginBottom: hp('8%'),
                borderRadius: 10,
                backgroundColor: '#F0FCFF'
            },
            text:{
                fontSize: 25,
                color: '#343535'
            },
        })

        return(
            <View style={styles.container}>
                <TouchableOpacity
                  style={styles.select} 
                  
                >
                    <Text style={styles.text}>
                        グラフ選択画面
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.select} 
                  
                >
                    <Text style={styles.text}>
                        グラフ選択画面
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.select} 
                  
                >
                    <Text style={styles.text}>
                        グラフ選択画面
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.select}
                >
                    <Text style={styles.text}>
                        グラフ選択画面
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.props.nav.toggleModal}
                >
                <Icon name="closecircle" size={50} color="#FF5F5F"/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default MenuModal;