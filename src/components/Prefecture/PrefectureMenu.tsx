import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import SumPopulationModal from '../Population/SumPopulation/Modal';
import SexPopulationModal from '../Population/SexPopulation/Modal';
import PrefecturePopulationModal from '../Prefecture/Population/Modal';
import NaturalEnvironmentModal from '../Prefecture/NaturalEnvironment/Modal';

import SubMenuTitle from '../../elements/SubMenuTitle';
import SubMenuIcon from '../../elements/SubMenuIcon';
import GraphMenu from '../../elements/GraphMenu';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

type PopulationMenuNavigationProp = StackNavigationProp<RootStackParamList, 'PopulationMenu'>;

type Props = {
    navigation: PopulationMenuNavigationProp;
};

const PopulationMenu: React.FC<Props> = ({ navigation }) => {
    const [sumPopulationModalVisible, setSumPopulationModalVisible] = useState<boolean>(false);
    const [sexPopulationModalVisible, setSexPopulationModalVisible] = useState<boolean>(false);

    const sumPopulationToggleModal = (): void => {
        setSumPopulationModalVisible(!sumPopulationModalVisible);
    };

    const sexPopulationToggleModal = (): void => {
        setSexPopulationModalVisible(!sexPopulationModalVisible);
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
                <SubMenuTitle>都道府県</SubMenuTitle>
                <SubMenuIcon item="prefecture">5つのランキング</SubMenuIcon>
            </View>
            <ScrollView>
                <View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menu} onPress={sumPopulationToggleModal}>
                            <Modal isVisible={sumPopulationModalVisible}>
                                <PrefecturePopulationModal toggle={sumPopulationToggleModal} />
                            </Modal>
                            <GraphMenu
                                onPress={() => navigation.navigate('PrefecturePopulationSwiper')}
                            >
                                人口
                            </GraphMenu>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={sexPopulationToggleModal}>
                            <Modal isVisible={sexPopulationModalVisible}>
                                <NaturalEnvironmentModal toggle={sexPopulationToggleModal} />
                            </Modal>
                            <GraphMenu
                                onPress={() => navigation.navigate('NaturalEnvironmentSwiper')}
                            >
                                自然環境
                            </GraphMenu>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default PopulationMenu;

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
        backgroundColor: '#FA902F'
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
