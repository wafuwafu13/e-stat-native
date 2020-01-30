import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import EstimatePopulation from './EstimatePopulation';
import SumPopulation from './SumPopulation';
import SexPopulation from './SexPopulation';
import Birthrate from './Birthrate';
import TransitionPopulation from './TransitionPopulation';
import top from '../assets/Population.png';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class LogoTitle extends React.Component {
  render() {
    return (
      <Icon
        name="human-handsdown" size={30} style={{color:'#FFFF00'}}
      />
    );
  }
}

class Population extends Component {

  static navigationOptions = {
    headerTitle: () => <LogoTitle />,
    title: '戻る',
  };

    render() {
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;
        return(
            <ParallaxScrollView
              backgroundImage="url(${logo})"
              parallaxHeaderHeight={hp('80%')}
              renderForeground={() => (
              <View>
                <Image source={top} style={{width: width, height: height}}/>
              </View>
              )}>
              <ScrollView style={{backgroundColor: '#DDDDDD'}}>
                <SumPopulation />
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('SumWeb')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <SexPopulation />
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('SexWeb')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <EstimatePopulation />
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('EstimateWeb')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Birthrate />
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('BirthrateWeb')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <TransitionPopulation />
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('TransitionWeb')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <View style={{alignItems: 'center', marginTop: 20}}>
                  <Icon name="human-handsdown" size={50} style={{color: '#000055'}}/>
                </View>
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Population;