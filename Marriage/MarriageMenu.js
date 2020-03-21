import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SumMarriageModal from './SumMarriage/SumMarriageModal';
import UnmarrideModal from './Unmarride/UnmarrideModal';
import DivorcerateModal from './Divorcerate/DivorcerateModal';


class MarriageMenu extends Component{

    constructor(props){
        super(props);
        this.state = {
            sumMarriageModalVisible: false,
            unmarrideModalVisible: false,
            divorcerateModalVisible: false,
        }
    }

    sumMarriageToggleModal = () => {
        this.setState({ 
            sumMarriageModalVisible: !this.state.sumMarriageModalVisible 
        });
    }

    unmarrideToggleModal = () => {
        this.setState({ 
            unmarrideModalVisible: !this.state.unmarrideModalVisible 
        });
    }

    divorcerateToggleModal = () => {
        this.setState({ 
            divorcerateModalVisible: !this.state.divorcerateModalVisible 
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
                backgroundColor: '#FF5F5F',
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
                    <Animatable.Text animation="bounceInUp" style={styles.iconTitle}>
                        結 婚
                    </Animatable.Text>
                    <View>
                        <Icon name="heartbeat" size={wp('10%')} color="#9E1212"/>
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
                              onPress={this.sumMarriageToggleModal}>
                                <Modal isVisible={ this.state.sumMarriageModalVisible }>
                                    <SumMarriageModal toggle={this} />
                                </Modal>
                                <View style={styles.menuContents}>
                                    <View>
                                        <Text style={styles.graphTitle}>
                                            結婚件数
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
                                          onPress={()=>navigate('SumMarriageSwiper')}>
                                            <Text style={styles.buttonText}>
                                                グラフを見る
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.unmarrideToggleModal}>
                                <Modal isVisible={ this.state.unmarrideModalVisible }>
                                    <UnmarrideModal toggle={this} />
                                </Modal>
                                <View style={styles.menuContents}>
                                    <View>
                                        <Text style={styles.graphTitle}>
                                            40~45歳男女の未婚率
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
                                          onPress={()=>navigate('UnmarrideSwiper')}>
                                            <Text style={styles.buttonText}>
                                                グラフを見る
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.divorcerateToggleModal}>
                                <Modal isVisible={ this.state.divorcerateModalVisible }>
                                    <DivorcerateModal toggle={this} />
                                </Modal>
                                <View style={styles.menuContents}>
                                    <View>
                                        <Text style={styles.graphTitle}>
                                            離婚率
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
                                          onPress={()=>navigate('DivorcerateSwiper')}>
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

export default MarriageMenu;