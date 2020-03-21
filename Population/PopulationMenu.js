import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SumPopulationModal from './SumPopulation/SumPopulationModal';
import SexPopulationModal from './SexPopulation/SexPopulationModal';
import EstimatePopulationModal from './EstimatePopulation/EstimatePopulationModal';
import BirthrateModal from './Birthrate/BirthrateModal';
import TransitionPopulationModal from './TransitionPopulation/TransitionPopulationModal';


class PopulationMenu extends Component{

    constructor(props){
        super(props);
        this.state = {
            sumPopulationModalVisible: false,
            sexPopulationModalVisible: false,
            estimatePopulationModalVisible: false,
            birthrateModalVisible: false,
            sumPopulationModalVisible: false,
        }
    }

    sumPopulationToggleModal = () => {
        this.setState({ 
            sumPopulationModalVisible: !this.state.sumPopulationModalVisible 
        });
    }

    sexPopulationToggleModal = () => {
        this.setState({ 
            sexPopulationModalVisible: !this.state.sexPopulationModalVisible 
        });
    }

    estimatePopulationToggleModal = () => {
        this.setState({ 
            estimatePopulationModalVisible: !this.state.estimatePopulationModalVisible
        });
    }

    birthrateToggleModal = () => {
        this.setState({ 
            birthrateModalVisible: !this.state.birthrateModalVisible 
        });
    }

    transitionPopulationToggleModal = () => {
        this.setState({ 
            transitionPopulationModalVisible: !this.state.transitionPopulationModalVisible 
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
                backgroundColor: '#99D260',
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
                        人 口
                    </Text>
                    <View>
                        <Icon name="child" size={wp('10%')} color="#4C8469"/>
                    </View>
                    <Text style={styles.iconText}>
                        5つのグラフ
                    </Text>
                </View>
                <ScrollView>
                    <View>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.sumPopulationToggleModal}>
                                <Modal isVisible={ this.state.sumPopulationModalVisible }>
                                    <SumPopulationModal toggle={this} />
                                </Modal>
                                <View style={styles.menuContents}>
                                    <View>
                                        <Text style={styles.graphTitle}>
                                            年齢別総人口
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
                                          onPress={()=>navigate('SumPopulationSwiper')}>
                                            <Text style={styles.buttonText}>
                                                グラフを見る
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.sexPopulationToggleModal}>
                                <Modal isVisible={ this.state.sexPopulationModalVisible }>
                                    <SexPopulationModal toggle={this} />
                                </Modal>
                                <View style={styles.menuContents}>
                                    <View>
                                        <Text style={styles.graphTitle}>
                                            男女別総人口
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
                                          onPress={()=>navigate('SexPopulationSwiper')}>
                                            <Text style={styles.buttonText}>
                                                グラフを見る
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.estimatePopulationToggleModal}>
                                <Modal isVisible={ this.state.estimatePopulationModalVisible }>
                                    <EstimatePopulationModal toggle={this} />
                                </Modal>
                                <View style={styles.menuContents}>
                                    <View>
                                        <Text style={styles.graphTitle}>
                                            人口推計
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
                                          onPress={()=>navigate('EstimatePopulationSwiper')}>
                                            <Text style={styles.buttonText}>
                                                グラフを見る
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.birthrateToggleModal}>
                                <Modal isVisible={ this.state.birthrateModalVisible }>
                                    <BirthrateModal toggle={this} />
                                </Modal>
                                <View style={styles.menuContents}>
                                    <View>
                                        <Text style={styles.graphTitle}>
                                            合計特殊出生率
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
                                          onPress={()=>navigate('BirthrateSwiper')}>
                                            <Text style={styles.buttonText}>
                                                グラフを見る
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.transitionPopulationToggleModal}>
                                <Modal isVisible={ this.state.transitionPopulationModalVisible }>
                                    <TransitionPopulationModal toggle={this} />
                                </Modal>
                                <View style={styles.menuContents}>
                                    <View>
                                        <Text style={styles.graphTitle}>
                                            人口推移
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
                                          onPress={()=>navigate('TransitionPopulationSwiper')}>
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