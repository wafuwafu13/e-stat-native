import React, { Component } from 'react';
import {View, Dimensions, ScrollView, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Button } from 'react-native-elements';
import top from '../assets/Prefecture.png';

class Menu extends Component {
    render(){
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
              <ScrollView >
                <Button
                  title="北海道"
                  onPress= {()=> this.props.navigation.navigate('Hokkaido')}
                  type="outline"
                />
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Menu;