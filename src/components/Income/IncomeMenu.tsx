import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import AnnualIncomeModal from './AnnualIncome/AnnualIncomeModal';

import SubMenuTitle from '../../elements/SubMenuTitle';
import SubMenuIcon from '../../elements/SubMenuIcon';
import GraphMenu from '../../elements/GraphMenu';


const IncomeMenu = ({navigation}: any) => {

    const [annualIncomeModalVisible, setAnnualIncomeModalVisible] = useState(false)

    const annualIncomeToggleModal = () => {
        setAnnualIncomeModalVisible(!annualIncomeModalVisible)
    }

    return(
        <View style={styles.container}>
            <View style={styles.side}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("HomeMenu")}
                  style={styles.homeIcon}
                >
                    <Icon name="home" size={wp('5%')} color="#807E7C"/>
                </TouchableOpacity>
                <SubMenuTitle>
                    年 収
                </SubMenuTitle>
                <SubMenuIcon item="income">
                    1つのグラフ
                </SubMenuIcon>
            </View>
            <ScrollView>
                <View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity 
                          style={styles.menu}
                          onPress={annualIncomeToggleModal}>
                            <Modal isVisible={ annualIncomeModalVisible }>
                                <AnnualIncomeModal toggle={annualIncomeToggleModal} />
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('AnnualIncomeSwiper')}>
                                男女・年代別平均年収
                            </GraphMenu>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default IncomeMenu;


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