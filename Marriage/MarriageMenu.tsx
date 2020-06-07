import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SumMarriageModal from './SumMarriage/SumMarriageModal';
import UnmarrideModal from './Unmarride/UnmarrideModal';
import DivorcerateModal from './Divorcerate/DivorcerateModal';

import DrawerIcon from '../src/elements/DrawerIcon';
import SubMenuTitle from '../src/elements/SubMenuTitle';
import SubMenuIcon from '../src/elements/SubMenuIcon';
import GraphMenu from '../src/elements/GraphMenu';


const MarriageMenu = ({navigation}: any) => {

    const [sumMarriageModalVisible, setSumMarriageModalVisible] = useState(false)
    const [unmarrideModalVisible, setUnmarrideModalVisible] = useState(false)
    const [divorcerateModalVisible, setDivorcerateModalVisible] = useState(false)

    const sumMarriageToggleModal = () => {
        setSumMarriageModalVisible(!sumMarriageModalVisible)
    }

    const unmarrideToggleModal = () => {
        setUnmarrideModalVisible(!unmarrideModalVisible)
    }

    const divorcerateToggleModal = () => {
        setDivorcerateModalVisible(!divorcerateModalVisible)
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
                    結 婚
                </SubMenuTitle>
                <SubMenuIcon item="marriage">
                    3つのグラフ
                </SubMenuIcon>
            </View>
            <ScrollView>
                <View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity 
                          style={styles.menu}
                          onPress={sumMarriageToggleModal}>
                            <Modal isVisible={ sumMarriageModalVisible }>
                                {/* <SumMarriageModal toggle={this} /> */}
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('SumMarriageSwiper')}>
                                結婚件数
                            </GraphMenu>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={styles.menu}
                          onPress={unmarrideToggleModal}>
                            <Modal isVisible={ unmarrideModalVisible }>
                                {/* <UnmarrideModal toggle={this} /> */}
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('UnmarrideSwiper')}>
                                40~45歳男女の未婚率
                            </GraphMenu>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={styles.menu}
                          onPress={divorcerateToggleModal}>
                            <Modal isVisible={ divorcerateModalVisible }>
                                {/* <DivorcerateModal toggle={this} /> */}
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('DivorcerateSwiper')}>
                                離婚率
                            </GraphMenu>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default MarriageMenu;


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
