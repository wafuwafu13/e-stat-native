import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { YellowBox } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Menu from './Menu';
import PopulationMenu from './Population/PopulationMenu';
import SumPopulationSwiper from './Population/SumPopulation/SumPopulationSwiper';
import SexPopulationSwiper from './Population/SexPopulation/SexPopulationSwiper';
import EstimatePopulationSwiper from './Population/EstimatePopulation/EstimatePopulationSwiper';
import BirthrateSwiper from './Population/Birthrate/BirthrateSwiper';
import TransitionPopulationSwiper from './Population/TransitionPopulation/TransitionPopulationSwiper';
import BodyMenu from './Body/BodyMenu';
import HeightSwiper from './Body/Height/HeightSwiper';
import WeightSwiper from './Body/Weight/WeightSwiper';
import MarriageMenu from './Marriage/MarriageMenu';
import SumMarriageSwiper from './Marriage/SumMarriage/SumMarriageSwiper';
import UnmarrideSwiper from './Marriage/Unmarride/UnmarrideSwiper';
import DivorcerateSwiper from './Marriage/Divorcerate/DivorcerateSwiper';
import IncomeMenu from './Income/IncomeMenu';
import AnnualIncomeSwiper from './Income/AnnualIncome/AnnauIncomeSwiper';
import Overview from './Overview/Overview';



class App extends Component {

    render(){
      const Stack = createStackNavigator(
        {
          Home: Menu,
          PopulationMenu: PopulationMenu,
          SumPopulationSwiper: SumPopulationSwiper,
          SexPopulationSwiper: SexPopulationSwiper,
          EstimatePopulationSwiper: EstimatePopulationSwiper,
          BirthrateSwiper: BirthrateSwiper,
          TransitionPopulationSwiper: TransitionPopulationSwiper,
          BodyMenu: BodyMenu,
          HeightSwiper: HeightSwiper,
          WeightSwiper: WeightSwiper,
          MarriageMenu: MarriageMenu,
          SumMarriageSwiper: SumMarriageSwiper,
          UnmarrideSwiper: UnmarrideSwiper,
          DivorcerateSwiper: DivorcerateSwiper,
          IncomeMenu: IncomeMenu,
          AnnualIncomeSwiper: AnnualIncomeSwiper,
          Overview: Overview,
        },
        {
          initialRouteName: 'Home',
          headerMode: 'none',
        }
      )

      const Drawer = createDrawerNavigator(
        {
          閉じる:{
            screen: Stack,
            navigationOptions:{
              drawerIcon:  <Icon name="chevron-left" size={24} color="#636D70"/>
            }
          },
          グラフ選択:{
            screen: Menu,
            navigationOptions:{
              drawerIcon:  <Icon name="chart-bar" size={24} color="#636D70"/>
            }
          },
          人口:{
            screen: PopulationMenu,
            navigationOptions:{
              drawerIcon:  <Icon name="child" size={24} color="#636D70"/>
            }
          },
          身長_体重:{
            screen: BodyMenu,
            navigationOptions:{
              drawerIcon:  <Icon name="ruler" size={20} color="#636D70"/>
            }
          },
          結婚:{
            screen: MarriageMenu,
            navigationOptions:{
              drawerIcon:  <Icon name="heartbeat" size={24} color="#636D70"/>
            }
          },
          年収:{
            screen: IncomeMenu,
            navigationOptions:{
              drawerIcon:  <Icon name="money-bill-wave" size={20} color="#636D70"/>
            }
          },
          アプリについて:{
            screen: Overview,
            navigationOptions:{
              drawerIcon:  <Icon name="address-card" size={20} color="#636D70"/>
            }
          },
          
        },
        {
          initialRouteName: 'グラフ選択',
          unmountInactiveRoutes: true,
          drawerWidth: wp('25%'),
          drawerBackgroundColor: '#F0FCFF'
        }
      )

      const AppContainer = createAppContainer(Drawer)

      YellowBox.ignoreWarnings(['Remote debugger']);

      return(
          <AppContainer />
      )
    }
}

export default App;