import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HeightModal from './Height/HeightModal';
import WeightModal from './Weight/WeightModal';
import DrawerIcon from '../src/elements/DrawerIcon';
import SubMenuTitle from '../src/elements/SubMenuTitle';
import SubMenuIcon from '../src/elements/SubMenuIcon';
import GraphMenu from '../src/elements/GraphMenu';


const PopulationMenu: React.FC = ({navigation}: any) => {

    const [heightModalVisible, setHeightModalVisible] = useState(false)
    const [weightModalVisible, setWeightModalVisible] = useState(false)

    const heightToggleModal = () => {
        setHeightModalVisible(!heightModalVisible)
    }

    const weightToggleModal = () => {
        setWeightModalVisible(!weightModalVisible)
    }

    return(
        <View style={styles.container}>
            <View style={styles.side}>
                {/* <DrawerIcon onPress={() => navigation.toggleDrawer()} itemMenu/> */}
                <SubMenuTitle>
                    身長・体重
                </SubMenuTitle>
                <SubMenuIcon item="body">
                    1つのグラフ
                </SubMenuIcon>
            </View>
            <ScrollView>
                <View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity 
                          style={styles.menu}
                          onPress={heightToggleModal}>
                            <Modal isVisible={ heightModalVisible }>
                                {/* <HeightModal toggle={this} /> */}
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('HeightSwiper')}>
                                男女別平均身長
                            </GraphMenu>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={styles.menu}
                          onPress={weightToggleModal}>
                             <Modal isVisible={ weightModalVisible }>
                                {/* <WeightModal toggle={this} /> */}
                            </Modal>
                            <GraphMenu onPress={() => navigation.navigate('WeightSwiper')}>
                                男女・年代別平均体重
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
        backgroundColor: '#56A7E2',
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
