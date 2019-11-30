import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import SumMariage from './SumMariage';
import Unmarrid from './Unmarried';
import Divorcerate from './Divorcerate';
import top from '../assets/Marriage.png';

class Marriage extends Component {
    render() {
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;
        return(
            <ParallaxScrollView
            backgroundImage="url(${top})"
            parallaxHeaderHeight={300}
            renderForeground={() => (
              <View>
                <Image source={top} style={{width: width, height: height}}/>
              </View>
            )}>
              <ScrollView style={{backgroundColor: '#DDDDDD'}}>
                <SumMariage />
                <Unmarrid />
                <Divorcerate />
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Marriage;