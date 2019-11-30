import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import EstimatePopulation from './EstimatePopulation';
import SumPopulation from './SumPopulation';
import SexPopulation from './SexPopulation';
import Descripiton from './Description';
import Birthrate from './Birthrate';
import TransitionPopulation from './TransitionPopulation';
import top from '../assets/Population.png';
import { WebView } from 'react-native-webview';
import Test from './Test';
import { Card, Button } from 'react-native-elements';

class Population extends Component {

    render() {
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;
        return(
            <ParallaxScrollView
              backgroundImage="url(${logo})"
              parallaxHeaderHeight={300}
              renderForeground={() => (
              <View>
                <Image source={top} style={{width: width, height: height}}/>
              </View>
              )}>
              <ScrollView style={{backgroundColor: '#DDDDDD'}}>
                <Descripiton />
                <SumPopulation />
                <Button
                  title="詳しく"
                  onPress= {()=> this.props.navigation.navigate('Test')}
                  type="outline"
                />
                <SexPopulation />
                <EstimatePopulation />
                <Birthrate />
                <TransitionPopulation />
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Population;