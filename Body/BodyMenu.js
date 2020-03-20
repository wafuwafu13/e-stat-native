import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MenuModal from '../MenuModal';

class PopulationMenu extends Component{

    // state = {
    //     modalVisible: false,
    // };

    // toggleModal = () => {
    //     this.setState({ modalVisible: !this.state.modalVisible });
    // }

    render(){
        const {navigate} = this.props.navigation
        const styles = StyleSheet.create({
            container:{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#F0FCFF',
            },
            side:{
                position: 'relative',
                flex: 10,
                justifyContent: 'center',
      　　　　　　alignItems: 'center',
                backgroundColor: '#56A7E2',
            },
            modalIcon:{
                position: 'absolute',
                marginLeft: wp('2%'),
                left: 0,
                top: hp('5%'),
            },
            menuContainer:{
                marginTop: hp('10%'),
            },
            menu:{
                width: wp('60%'),
                height: hp('30%'),
                marginRight: wp('7%'),
                marginLeft: wp('8%'),
                marginBottom: hp('10%'),
                borderBottomWidth: wp('1%'),
                borderBottomColor: '#E4E0E0',
                backgroundColor: 'white',
            },
            iconTitle:{
                marginBottom: hp('5%'),
                fontSize: wp('3%'),
                color: '#4B4B4B',
            },
            iconText:{
                marginTop: hp('2%'),
                fontSize: wp('2%'),
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
                fontSize: wp('2.5%'),
                color: '#4B4B4B',
            },
            explanation:{
                fontSize: wp('2%'),
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
                fontSize: wp('2.5%'),
                color: '#FFFFFF',
            },
        })

        return(
            <View style={styles.container}>
                 {/* <Modal isVisible={ this.state.modalVisible }>
                    <MenuModal nav={this} />
                </Modal> */}
                <View style={styles.side}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.toggleDrawer()}
                        style={styles.modalIcon}
                    >
                        <Icon name="list-alt" size={wp('5%')} color="#807E7C"/>
                    </TouchableOpacity>
                    <Text style={styles.iconTitle}>
                        身長・体重
                    </Text>
                    <View>
                        <Icon name="ruler" size={wp('10%')} color="#324CA8"/>
                    </View>
                    <Text style={styles.iconText}>
                        2つのグラフ
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
                                            男女別平均身長(平成28年国民健康・栄養調査)
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
                                          onPress={()=>navigate('HeightSwiper')}>
                                            <Text style={styles.buttonText}>
                                                グラフを見る
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={()=>navigate('EstimatePopulation')}>
                                <View style={styles.menuContents}>
                                    <View>
                                        <Text style={styles.graphTitle}>
                                            男女別平均体重(平成28年国民健康・栄養調査)
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
                                          onPress={()=>navigate('WeightSwiper')}>
                                            <Text style={styles.buttonText}>
                                                グラフを見る
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
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