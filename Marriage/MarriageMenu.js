import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SumMarriageModal from './SumMarriage/SumMarriageModal';
import UnmarrideModal from './Unmarride/UnmarrideModal';
import DivorcerateModal from './Divorcerate/DivorcerateModal';
import DrawerIcon from '../src/elements/DrawerIcon';
import SubMenuTitle from '../src/elements/SubMenuTitle';
import SubMenuIcon from '../src/elements/SubMenuIcon';
import GraphMenu from '../src/elements/GraphMenu';


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

        return(
            <View style={styles.container}>
                <View style={styles.side}>
                    <DrawerIcon onPress={() => this.props.navigation.toggleDrawer()} itemMenu/>
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
                              onPress={this.sumMarriageToggleModal}>
                                <Modal isVisible={ this.state.sumMarriageModalVisible }>
                                    <SumMarriageModal toggle={this} />
                                </Modal>
                                <GraphMenu onPress={()=>navigate('SumMarriageSwiper')}>
                                    結婚件数
                                </GraphMenu>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.unmarrideToggleModal}>
                                <Modal isVisible={ this.state.unmarrideModalVisible }>
                                    <UnmarrideModal toggle={this} />
                                </Modal>
                                <GraphMenu onPress={()=>navigate('UnmarrideSwiper')}>
                                    40~45歳男女の未婚率
                                </GraphMenu>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.menu}
                              onPress={this.divorcerateToggleModal}>
                                <Modal isVisible={ this.state.divorcerateModalVisible }>
                                    <DivorcerateModal toggle={this} />
                                </Modal>
                                <GraphMenu onPress={()=>navigate('DivorcerateSwiper')}>
                                    離婚率
                                </GraphMenu>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    } 
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
