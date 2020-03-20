import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class Menu extends Component{
    
    render(){
        const {navigate} = this.props.navigation
        const styles = StyleSheet.create({
            container:{
                flex: 1,
                backgroundColor: '#F0FCFF',
            },
            main:{
                flex: 1,
            },
            top:{
                position: 'relative',
                marginTop: hp('7%'),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            },
            modalIcon:{
                position: 'absolute',
                left: wp('2%'),
            },
            title:{
                fontSize: wp('3.8%'),
                color: '#636D70',
            },
            menuContainer:{
                flexDirection: 'row',
                marginTop: hp('7%'),
            },
            menu:{
                flex: 1,
                height: hp('50%'),
                marginLeft: wp('2%'),
                marginRight: wp('2%'),
            },
            menu2:{
                flex: 0.3,
                height: hp('50%'),
                marginLeft: wp('2%'),
                marginRight: wp('2%'),
            },
            menuTitle:{
                fontSize: wp('2.5%'),
                color: '#4B4B4B',
            },
            explanation:{
                marginTop: hp('2%'),
                fontSize: wp('2%'),
                color: '#4B4B4B',
            },
            populationTitle:{
                flex: 1,
                justifyContent: 'center',
      　　　　　　alignItems: 'center',
                borderWidth: wp('0.3%'),
                borderRadius: 100,
                borderColor: '#EEF5F6',
                backgroundColor: '#99D260',
            },
            populationIcon:{
                flex: 6,
                justifyContent: 'center',
      　　　　　　alignItems: 'center',
                borderWidth: wp('0.7%'),
                borderRadius: 10,
                borderColor: '#EEF5F6',
                backgroundColor: '#99D260',
            },
            bodyTitle:{
                flex: 1,
                justifyContent: 'center',
      　　　　　　alignItems: 'center',
                borderWidth: wp('0.3%'),
                borderRadius: 100,
                borderColor: '#EEF5F6',
                backgroundColor: '#56A7E2',
            },
            bodyIcon:{
                flex: 6,
                justifyContent: 'center',
      　　　　　　alignItems: 'center',
                borderWidth: wp('0.7%'),
                borderRadius: 10,
                borderColor: '#EEF5F6',
                backgroundColor: '#56A7E2',
            },
            marriageTitle:{
                flex: 1,
                justifyContent: 'center',
      　　　　　　alignItems: 'center',
                borderWidth: wp('0.3%'),
                borderRadius: 100,
                borderColor: '#EEF5F6',
                backgroundColor: '#FF5F5F',
            },
            marriageIcon:{
                flex: 6,
                justifyContent: 'center',
      　　　　　　alignItems: 'center',
                borderWidth: wp('0.7%'),
                borderRadius: 10,
                borderColor: '#EEF5F6',
                backgroundColor: '#FF5F5F',
            },
            incomeTitle:{
                flex: 1,
                justifyContent: 'center',
      　　　　　　alignItems: 'center',
                borderWidth: wp('0.3%'),
                borderRadius: 100,
                borderColor: '#EEF5F6',
                backgroundColor: '#FAFD71',
            },
            incomeIcon:{
                flex: 6,
                justifyContent: 'center',
      　　　　　　alignItems: 'center',
                borderWidth: wp('0.7%'),
                borderRadius: 10,
                borderColor: '#EEF5F6',
                backgroundColor: '#FAFD71',
            },
        })

        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.main}>
                        <View style={styles.top}>
                            <TouchableOpacity
                              onPress={() => this.props.navigation.toggleDrawer()}
                              style={styles.modalIcon}
                            >
                                <Icon name="list-alt" size={wp('5%')} color="#807E7C"/>
                            </TouchableOpacity>
                            <Text style={styles.title}>
                              選べるグラフ 
                            </Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <View style={styles.menu}>
                            
                                <View style={styles.populationTitle}>
                                    <Text style={styles.menuTitle}>
                                        人 口
                                    </Text>
                                </View>
                                <TouchableOpacity 
                                  style={styles.populationIcon}
                                  onPress={()=>navigate('PopulationMenu')}
                                >
                                    <Icon name="child" size={wp('10%')} color="#4C8469"/>
                                    <Text style={styles.explanation}>
                                        5つのグラフ
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menu}>
                                <View style={styles.bodyTitle}>
                                    <Text style={styles.menuTitle}>
                                        身長・体重
                                    </Text>
                                </View>
                                <TouchableOpacity
                                  style={styles.bodyIcon}
                                  onPress={()=>navigate('BodyMenu')}
                                >
                                    <Icon name="ruler" size={wp('10%')} color="#324CA8"/>
                                    <Text style={styles.explanation}>
                                        2つのグラフ
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menu}>
                                <View style={styles.marriageTitle}>
                                    <Text style={styles.menuTitle}>
                                        結 婚
                                    </Text>
                                </View>
                                <TouchableOpacity
                                  style={styles.marriageIcon}
                                  onPress={()=>navigate('MarriageMenu')}
                                >
                                    <Icon name="heartbeat" size={wp('10%')} color="#9E1212"/>
                                    <Text style={styles.explanation}>
                                        3つのグラフ
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.menuContainer}>
                            <View style={styles.menu2}>
                                <View style={styles.incomeTitle}>
                                    <Text style={styles.menuTitle}>
                                        年 収
                                    </Text>
                                </View>
                                <TouchableOpacity
                                  style={styles.incomeIcon}
                                  onPress={()=>navigate('PopulationMenu')}
                                >
                                    <Icon name="money-bill-wave" size={wp('10%')} color="#E0BB5B"/>
                                    <Text style={styles.explanation}>
                                        3つのグラフ
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Menu;