import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import SumMarriageModal from './SumMarriage/Modal';
import UnmarrideModal from './Unmarride/Modal';
import DivorcerateModal from './Divorcerate/Modal';

import SubMenuTitle from '../../elements/SubMenuTitle';
import SubMenuIcon from '../../elements/SubMenuIcon';
import GraphMenu from '../../elements/GraphMenu';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

type MarriageMenuNavigationProp = StackNavigationProp<RootStackParamList, 'MarriageMenu'>;

type Props = {
    navigation: MarriageMenuNavigationProp;
};

const MarriageMenu: React.FC<Props> = ({ navigation }) => {
    const [sumMarriageModalVisible, setSumMarriageModalVisible] = useState<boolean>(false);
    const [unmarrideModalVisible, setUnmarrideModalVisible] = useState<boolean>(false);
    const [divorcerateModalVisible, setDivorcerateModalVisible] = useState<boolean>(false);

    const sumMarriageToggleModal = (): void => {
        setSumMarriageModalVisible(!sumMarriageModalVisible);
    };

    const unmarrideToggleModal = (): void => {
        setUnmarrideModalVisible(!unmarrideModalVisible);
    };

    const divorcerateToggleModal = (): void => {
        setDivorcerateModalVisible(!divorcerateModalVisible);
    };

    return (
        <View style={styles.container}>
            <View style={styles.side}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeMenu')}
                    style={styles.homeIcon}
                >
                    <Icon name="home" size={wp('5%')} color="#807E7C" />
                </TouchableOpacity>
                <SubMenuTitle>結 婚</SubMenuTitle>
                <SubMenuIcon item="marriage">3つのグラフ</SubMenuIcon>
            </View>
            <ScrollView>
                <View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menu} onPress={sumMarriageToggleModal}>
                            <Modal isVisible={sumMarriageModalVisible}>
                                <SumMarriageModal toggle={sumMarriageToggleModal} />
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('SumMarriageSwiper')}>
                                結婚件数
                            </GraphMenu>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={unmarrideToggleModal}>
                            <Modal isVisible={unmarrideModalVisible}>
                                <UnmarrideModal toggle={unmarrideToggleModal} />
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('UnmarrideSwiper')}>
                                40~45歳男女の未婚率
                            </GraphMenu>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={divorcerateToggleModal}>
                            <Modal isVisible={divorcerateModalVisible}>
                                <DivorcerateModal toggle={divorcerateToggleModal} />
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('DivorcerateSwiper')}>
                                離婚率
                            </GraphMenu>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default MarriageMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F0FCFF'
    },
    side: {
        position: 'relative',
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF5F5F'
    },
    homeIcon: {
        position: 'absolute',
        left: wp('2%'),
        top: hp('5%')
    },
    menuContainer: {
        marginTop: hp('10%')
    },
    menu: {
        width: wp('60%'),
        height: hp('30%'),
        marginRight: wp('7%'),
        marginLeft: wp('8%'),
        marginBottom: hp('10%'),
        borderBottomWidth: wp('1%'),
        borderBottomColor: '#E4E0E0',
        backgroundColor: 'white'
    }
});
