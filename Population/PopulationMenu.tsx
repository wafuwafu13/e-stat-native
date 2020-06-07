import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SumPopulationModal from './SumPopulation/SumPopulationModal';
import SexPopulationModal from './SexPopulation/SexPopulationModal';
import EstimatePopulationModal from './EstimatePopulation/EstimatePopulationModal';
import BirthrateModal from './Birthrate/BirthrateModal';
import TransitionPopulationModal from './TransitionPopulation/TransitionPopulationModal';

import SubMenuTitle from '../src/elements/SubMenuTitle';
import SubMenuIcon from '../src/elements/SubMenuIcon';
import GraphMenu from '../src/elements/GraphMenu';

type Props = {
    navigation: any
}

const PopulationMenu: React.FC<Props> = ({navigation}: any) => {

    const [sumPopulationModalVisible, setSumPopulationModalVisible] = useState(false)
    const [sexPopulationModalVisible, setSexPopulationModalVisible] = useState(false)
    const [estimatePopulationModalVisible, setEstimatePopulationModalVisible] = useState(false)
    const [birthrateModalVisible, setBirthrateModalVisible] = useState(false)
    const [transitionPopulationModalVisible, setTransitionPopulationModalVisible] = useState(false)

    const sumPopulationToggleModal = () => {
        setSumPopulationModalVisible(!sumPopulationModalVisible)
    }

    const sexPopulationToggleModal = () => {
        setSexPopulationModalVisible(!sexPopulationModalVisible)
    }

    const estimatePopulationToggleModal = () => {
        setEstimatePopulationModalVisible(!estimatePopulationModalVisible)
    }

    const birthrateToggleModal = () => {
        setBirthrateModalVisible(!birthrateModalVisible)
    }

    const transitionPopulationToggleModal = () => {
        setTransitionPopulationModalVisible(!transitionPopulationModalVisible)
    }

    return(
        <View style={styles.container}>
            <View style={styles.side}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Menu")}
                  style={styles.homeIcon}
                >
                    <Icon name="home" size={wp('5%')} color="#807E7C"/>
                </TouchableOpacity>
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
                          onPress={sumPopulationToggleModal}>
                            <Modal isVisible={sumPopulationModalVisible}>
                                <SumPopulationModal toggle={sumPopulationToggleModal} />
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('SumPopulationSwiper')}>
                                年齢別総人口
                            </GraphMenu>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={styles.menu}
                          onPress={sexPopulationToggleModal}>
                            <Modal isVisible={ sexPopulationModalVisible }>
                                <SexPopulationModal toggle={sexPopulationToggleModal} />
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('SexPopulationSwiper')}>
                                男女別総人口
                            </GraphMenu>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={styles.menu}
                          onPress={estimatePopulationToggleModal}>
                            <Modal isVisible={ estimatePopulationModalVisible }>
                                <EstimatePopulationModal toggle={estimatePopulationToggleModal} />
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('EstimatePopulationSwiper')}>
                                人口推計
                            </GraphMenu>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={styles.menu}
                          onPress={birthrateToggleModal}>
                            <Modal isVisible={ birthrateModalVisible }>
                                <BirthrateModal toggle={birthrateToggleModal} />
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('BirthrateSwiper')}>
                                合計特殊出生率
                            </GraphMenu>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={styles.menu}
                          onPress={transitionPopulationToggleModal}>
                            <Modal isVisible={ transitionPopulationModalVisible }>
                                <TransitionPopulationModal toggle={transitionPopulationToggleModal} />
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('TransitionPopulationSwiper')}>
                                人口推移
                            </GraphMenu>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
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
    homeIcon: {
        position: 'absolute',
        left: wp('2%'),
        top: hp('5%')
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
