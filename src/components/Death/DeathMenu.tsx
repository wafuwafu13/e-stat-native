import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import SuicideModal from './Suicide/Modal';
import TrafficAccidentModal from './TrafficAccident/Modal';

import SubMenuTitle from '../../elements/SubMenuTitle';
import SubMenuIcon from '../../elements/SubMenuIcon';
import GraphMenu from '../../elements/GraphMenu';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

type MarriageMenuNavigationProp = StackNavigationProp<RootStackParamList, 'DeathMenu'>;

type Props = {
    navigation: MarriageMenuNavigationProp;
};

const DeathMenu: React.FC<Props> = ({ navigation }) => {
    const [sumMarriageModalVisible, setSumMarriageModalVisible] = useState<boolean>(false);
    const [unmarrideModalVisible, setUnmarrideModalVisible] = useState<boolean>(false);

    const suicideToggleModal = (): void => {
        setSumMarriageModalVisible(!sumMarriageModalVisible);
    };

    const trafficAccidentToggleModal = (): void => {
        setUnmarrideModalVisible(!unmarrideModalVisible);
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
                <SubMenuTitle>死 亡</SubMenuTitle>
                <SubMenuIcon item="death">2つのグラフ</SubMenuIcon>
            </View>
            <ScrollView>
                <View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menu} onPress={suicideToggleModal}>
                            <Modal isVisible={sumMarriageModalVisible}>
                                <SuicideModal toggle={suicideToggleModal} />
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('SuicideSwiper')}>
                                自殺
                            </GraphMenu>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={trafficAccidentToggleModal}>
                            <Modal isVisible={unmarrideModalVisible}>
                                <TrafficAccidentModal toggle={trafficAccidentToggleModal} />
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('TrafficAccidentSwiper')}>
                                交通事故
                            </GraphMenu>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default DeathMenu;

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
        backgroundColor: '#E5ADFF'
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
