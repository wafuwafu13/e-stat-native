import React, { Component } from 'react';
import {View, Dimensions, ScrollView, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Button } from 'react-native-elements';
import top from '../assets/Prefecture.png';
import Icon from 'react-native-vector-icons/FontAwesome5'

class LogoTitle extends React.Component {
  render() {
    return (
      <Icon
        name="money-bill-wave-alt" size={30} style={{color:'white'}}
      />
    );
  }
}

class Menu extends Component {

    static navigationOptions = {
      headerTitle: () => <LogoTitle />,
      title: '戻る',
      headerTintColor: 'red',
    };

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
              <ScrollView style={{backgroundColor: '#DDDDDD'}}>
                <Button
                  title="北海道"
                  onPress= {()=> this.props.navigation.navigate('Hokkaido')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Menu;