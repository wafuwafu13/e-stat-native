import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import AnnualIncome from './AnnualIncome';
import top from '../assets/Income.png';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class LogoTitle extends React.Component {
  render() {
    return (
      <Icon
        name="money-bill" size={30} style={{color:'#FFFF00'}}
      />
    );
  }
}

class Income extends Component {

  static navigationOptions = {
    headerTitle: () => <LogoTitle />,
    title: '戻る',
  };
  
    render() {
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;
        return(
            <ParallaxScrollView
            backgroundImage="url(${top})"
            parallaxHeaderHeight={hp('95%')}
            renderForeground={() => (
              <View>
                <Image source={top} style={{width: width, height: height}}/>
              </View>
            )}>
              <ScrollView style={{backgroundColor: '#DDDDDD'}}>
                <AnnualIncome />
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('AnnualIncomeWeb')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <View style={{alignItems: 'center', marginTop: 20}}>
                 <Icon name="money-bill" size={50} style={{color: '#000055'}}/>
                </View>
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Income;