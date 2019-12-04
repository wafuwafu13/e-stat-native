import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import AnnualIncome from './AnnualIncome';
import top from '../assets/Income.png';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
                <AnnualIncome />
                <Button
                  title="解説を見る"
                  onPress= {()=> this.props.navigation.navigate('AnnualIncomeWeb')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <View style={{alignItems: 'center', marginTop: 20}}>
                 <Icon name="money-bill" size={50} style={{color: 'white'}}/>
                </View>
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Income;