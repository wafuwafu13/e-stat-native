import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AnnualIncomeModal from './AnnualIncome/AnnualIncomeModal';

class IncomeMenu extends Component{

    constructor(props){
        super(props);
        this.state = {
            annualIncomeModalVisible: false,
        }
    }

    annualIncomeToggleModal = () => {
        this.setState({ 
            annualIncomeModalVisible: !this.state.annualIncomeModalVisible 
        });
    }

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
                backgroundColor: '#FAFD71',
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
                fontSize: wp('3%'),
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
                <View style={styles.side}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.toggleDrawer()}
                        style={styles.modalIcon}
                    >
                        <Icon name="list-alt" size={wp('5%')} color="#807E7C"/>
                    </TouchableOpacity>
                    <Text style={styles.iconTitle}>
                        年 収
                    </Text>
                    <View>
                        <Icon name="money-bill-wave" size={wp('10%')} color="#E0BB5B"/>
                    </View>
                    <Text style={styles.iconText}>
                        1つのグラフ
                    </Text>
                </View>
                <ScrollView>
                    <View>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.annualIncomeToggleModal}>
                                <Modal isVisible={ this.state.annualIncomeModalVisible }>
                                    <AnnualIncomeModal toggle={this} />
                                </Modal>
                                <View style={styles.menuContents}>
                                    <View>
                                        <Text style={styles.graphTitle}>
                                            男女・年代別平均年収
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
                                          onPress={()=>navigate('AnnualIncomeSwiper')}>
                                            <Text style={styles.buttonText}>
                                                グラフを見る
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    } 
}

export default IncomeMenu;