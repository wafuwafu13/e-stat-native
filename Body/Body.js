import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Height from './Height';
import Weight from './Weight';
import top from '../assets/Body.png';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class LogoTitle extends React.Component {
  render() {
    return (
      <Icon
        name="weight" size={30} style={{color:'white'}}
      />
    );
  }
}

class Body extends Component {

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
                <Height />
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('HeightWeb')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Weight />
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('WeightWeb')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <View style={{alignItems: 'center', marginTop: 20}}>
                 <Icon name="weight" size={50} style={{color: 'white'}}/>
               </View>
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Body;