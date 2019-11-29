import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import AnnualIncome from './AnnualIncome';
import Descripiton from './Description';
import top from '../assets/Income.png';

class Income extends Component {
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
                <Descripiton />
                <AnnualIncome />
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Income;