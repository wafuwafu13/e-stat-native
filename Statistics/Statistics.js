import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Button, Card } from 'react-native-elements';
import top from '../assets/Statistics.png';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

class LogoTitle extends React.Component {
    render() {
      return (
        <Icon
          name="graph" size={30} style={{color:'white'}}
        />
      );
    }
}

class Statistics extends Component {

    static navigationOptions = {
      headerTitle: () => <LogoTitle />,
      title: '戻る',
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
                <Card>
                  <Text>1.母集団・標本・確率変数</Text>
                </Card>
                <Button
                  title="変数・値・分布"
                  onPress= {()=> this.props.navigation.navigate('Variable')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Statistics;