import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SumPopulationModal from './SumPopulation/SumPopulationModal';
import SexPopulationModal from './SexPopulation/SexPopulationModal';
import EstimatePopulationModal from './EstimatePopulation/EstimatePopulationModal';
import BirthrateModal from './Birthrate/BirthrateModal';
import TransitionPopulationModal from './TransitionPopulation/TransitionPopulationModal';
import DrawerIcon from '../src/elements/DrawerIcon';
import SubMenuTitle from '../src/elements/SubMenuTitle';
import SubMenuIcon from '../src/elements/SubMenuIcon';
import GraphMenu from '../src/elements/GraphMenu';


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

        return(
            <View style={styles.container}>
                <View style={styles.side}>
                    <DrawerIcon onPress={() => this.props.navigation.toggleDrawer()} itemMenu/>
                    <SubMenuTitle>
                        人 口
                    </SubMenuTitle>
                    <SubMenuIcon item="population">
                        5つのグラフ
                    </SubMenuIcon>
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
                                <GraphMenu onPress={()=>navigate('SumPopulationSwiper')}>
                                    年齢別総人口
                                </GraphMenu>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.sexPopulationToggleModal}>
                                <Modal isVisible={ this.state.sexPopulationModalVisible }>
                                    <SexPopulationModal toggle={this} />
                                </Modal>
                                <GraphMenu onPress={()=>navigate('SexPopulationSwiper')}>
                                    男女別総人口
                                </GraphMenu>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.estimatePopulationToggleModal}>
                                <Modal isVisible={ this.state.estimatePopulationModalVisible }>
                                    <EstimatePopulationModal toggle={this} />
                                </Modal>
                                <GraphMenu onPress={()=>navigate('EstimatePopulationSwiper')}>
                                    人口推計
                                </GraphMenu>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.birthrateToggleModal}>
                                <Modal isVisible={ this.state.birthrateModalVisible }>
                                    <BirthrateModal toggle={this} />
                                </Modal>
                                <GraphMenu onPress={()=>navigate('BirthrateSwiper')}>
                                    合計特殊出生率
                                </GraphMenu>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.transitionPopulationToggleModal}>
                                <Modal isVisible={ this.state.transitionPopulationModalVisible }>
                                    <TransitionPopulationModal toggle={this} />
                                </Modal>
                                <GraphMenu onPress={()=>navigate('TransitionPopulationSwiper')}>
                                    人口推移
                                </GraphMenu>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    } 
}

export default PopulationMenu;


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
    }
})
