import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class PopulationMenu extends Component{

    render(){
        const {navigate} = this.props.navigation
        const styles = StyleSheet.create({
            container:{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#F0FCFF',
            },
            leftSide:{
                flex: 6,
                justifyContent: 'center',
      　　　　　　alignItems: 'center',
                backgroundColor: '#99D260',
            },
            menuContainer:{
                marginTop: hp('10%'),
            },
            menu:{
                width: wp('60%'),
                height: hp('30%'),
                marginRight: wp('7%'),
                marginLeft: wp('5%'),
                marginBottom: hp('10%'),
                borderBottomWidth: 5,
                borderBottomColor: '#E4E0E0',
                backgroundColor: 'white',
            },
            iconTitle:{
                marginBottom: hp('5%'),
                fontSize: 20,
                color: '#4B4B4B',
            },
            iconText:{
                marginTop: hp('2%'),
                color: '#4B4B4B',
            },
            menuContents:{
                paddingTop: hp('4%'),
                paddingLeft: wp('2%'),
            },
            menuContentsBottom:{
                flexDirection: 'row',
                paddingTop: hp('7%'),
            },
            graphTitle:{
                fontSize: 20,
                color: '#4B4B4B',
            },
            explanation:{
                fontSize: 15,
                color: '#4B4B4B',
            },
            button:{
                width: wp('20%'),
                height: hp('10%'),
                marginLeft: wp('20%'),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
                backgroundColor: "#6E8DDE",
            },
            buttonText:{
                fontSize: 18,
                color: '#FFFFFF',
            },
            rightSide:{
                flex: 1,
                backgroundColor: '#E4E0E0',
            },
        })

        return(
            <View style={styles.container}>
                <View style={styles.leftSide}>
                    <Text style={styles.iconTitle}>
                        人 口
                    </Text>
                    <View>
                        <Icon name="child" size={70} color="#4C8469"/>
                    </View>
                    <Text style={styles.iconText}>
                        3つのグラフ
                    </Text>
                </View>
                <ScrollView>
                    <View>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={()=>navigate('EstimatePopulation')}>
                                <View style={styles.menuContents}>
                                    <View>
                                        <Text style={styles.graphTitle}>
                                            年齢別総人口(平成２７年国勢調査)
                                        </Text>
                                    </View>
                                    <View style={styles.menuContentsBottom}>
                                        <View>
                                            <Text style={styles.explanation}>
                                                調査の詳細へ >
                                            </Text>
                                        </View>
                                        <TouchableOpacity  
                                          style={styles.button}
                                          onPress={()=>navigate('Population')}>
                                            <Text style={styles.buttonText}>
                                                グラフを見る
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menu}>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menu}>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.rightSide}>
                    </View>
                </ScrollView>
            </View>
        )
    } 
}

export default PopulationMenu;