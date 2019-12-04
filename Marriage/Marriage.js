import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import SumMariage from './SumMariage';
import Unmarrid from './Unmarried';
import Divorcerate from './Divorcerate';
import top from '../assets/Marriage.png';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'

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
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('SumWeb')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Unmarrid />
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('UnmarrideWeb')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Divorcerate />
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('DivorcerateWeb')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <View style={{alignItems: 'center', marginTop: 20}}>
                 <Icon name="heart" size={50} style={{color: 'white'}}/>
               </View>
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Marriage;