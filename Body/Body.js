import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Height from './Height';
import Weight from './Weight';
import top from '../assets/Body.png';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'

class Body extends Component {
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
                <Height />
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('Test')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Weight />
                <View style={{alignItems: 'center', marginTop: 20}}>
                 <Icon name="weight" size={50} style={{color: 'white'}}/>
               </View>
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Body;