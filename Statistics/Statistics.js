import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Button, Card } from 'react-native-elements';
import top from '../assets/Statistics.png';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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
            parallaxHeaderHeight={hp('80%')}
            renderForeground={() => (
              <View>
                <Image source={top} style={{width: width, height: height}}/>
              </View>
            )}>
              <ScrollView style={{backgroundColor: '#DDDDDD'}}>
                <Card　containerStyle={{alignItems: 'center',}}>
                  <Text>第1章  母集団・標本・確率変数</Text>
                </Card>
                <Button
                  title="1-1  変数・分布"
                  onPress= {()=> this.props.navigation.navigate('Variable')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="1-2  平均"
                  onPress= {()=> this.props.navigation.navigate('Average')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="1-3  分散"
                  onPress= {()=> this.props.navigation.navigate('Dispersion')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Card　containerStyle={{alignItems: 'center',}}>
                  <Text>第6章  数学的知識</Text>
                </Card>
                <Button
                  title="6-1  シグマの計算"
                  onPress= {()=> this.props.navigation.navigate('Sigma')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <View style={{alignItems: 'center', marginTop: 20}}>
                  <Icon name="graph" size={50} style={{color: 'white'}}/>
                </View>
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Statistics;