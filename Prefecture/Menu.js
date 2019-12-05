import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Card, Button } from 'react-native-elements';
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
                <Card containerStyle={{alignItems: 'center',}}>
                  <Text>北海道・東北</Text>
                </Card>
                <Button
                  title="北海道"
                  onPress= {()=> this.props.navigation.navigate('Hokkaido')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="青森"
                  onPress= {()=> this.props.navigation.navigate('Aomori')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="岩手"
                  onPress= {()=> this.props.navigation.navigate('Iwate')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                 <Button
                  title="宮城"
                  onPress= {()=> this.props.navigation.navigate('Miyagi')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="秋田"
                  onPress= {()=> this.props.navigation.navigate('Akita')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="山形"
                  onPress= {()=> this.props.navigation.navigate('Yamagata')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="福島"
                  onPress= {()=> this.props.navigation.navigate('Fukusima')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Card　containerStyle={{alignItems: 'center',}}>
                  <Text>関東</Text>
                </Card>
                <Button
                  title="茨城"
                  onPress= {()=> this.props.navigation.navigate('Ibaragi')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="栃木"
                  onPress= {()=> this.props.navigation.navigate('Totigi')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="群馬"
                  onPress= {()=> this.props.navigation.navigate('Gunma')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="埼玉"
                  onPress= {()=> this.props.navigation.navigate('Saitama')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="千葉"
                  onPress= {()=> this.props.navigation.navigate('Tiba')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="東京"
                  onPress= {()=> this.props.navigation.navigate('Tokyo')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="神奈川"
                  onPress= {()=> this.props.navigation.navigate('Kanagawa')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Card　containerStyle={{alignItems: 'center',}}>
                  <Text>北陸・甲信</Text>
                </Card>
                <Button
                  title="新潟"
                  onPress= {()=> this.props.navigation.navigate('Niigata')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="富山"
                  onPress= {()=> this.props.navigation.navigate('Toyama')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="石川"
                  onPress= {()=> this.props.navigation.navigate('Isikawa')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="福井"
                  onPress= {()=> this.props.navigation.navigate('Fukui')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="山梨"
                  onPress= {()=> this.props.navigation.navigate('Yamanasi')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="長野"
                  onPress= {()=> this.props.navigation.navigate('Nagano')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Card　containerStyle={{alignItems: 'center',}}>
                  <Text>東海</Text>
                </Card>
                <Button
                  title="岐阜"
                  onPress= {()=> this.props.navigation.navigate('Gifu')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="静岡"
                  onPress= {()=> this.props.navigation.navigate('Sizuoka')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="愛知"
                  onPress= {()=> this.props.navigation.navigate('Aiti')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="三重"
                  onPress= {()=> this.props.navigation.navigate('Mie')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Card　containerStyle={{alignItems: 'center',}}>
                  <Text>近畿</Text>
                </Card>
                 <Button
                  title="滋賀"
                  onPress= {()=> this.props.navigation.navigate('Siga')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="京都"
                  onPress= {()=> this.props.navigation.navigate('Kyoto')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="大阪"
                  onPress= {()=> this.props.navigation.navigate('Osaka')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="兵庫"
                  onPress= {()=> this.props.navigation.navigate('Hyogo')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="奈良"
                  onPress= {()=> this.props.navigation.navigate('Nara')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="和歌山"
                  onPress= {()=> this.props.navigation.navigate('Wakayama')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Card　containerStyle={{alignItems: 'center',}}>
                  <Text>中国</Text>
                </Card>
                <Button
                  title="鳥取"
                  onPress= {()=> this.props.navigation.navigate('Tottori')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="島根"
                  onPress= {()=> this.props.navigation.navigate('Simane')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="岡山"
                  onPress= {()=> this.props.navigation.navigate('Okayama')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="広島"
                  onPress= {()=> this.props.navigation.navigate('Hirosima')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="山口"
                  onPress= {()=> this.props.navigation.navigate('Yamaguti')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Card　containerStyle={{alignItems: 'center',}}>
                  <Text>四国</Text>
                </Card>
                <Button
                  title="徳島"
                  onPress= {()=> this.props.navigation.navigate('Tokusima')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="香川"
                  onPress= {()=> this.props.navigation.navigate('Kagawa')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="愛媛"
                  onPress= {()=> this.props.navigation.navigate('Ehime')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="高知"
                  onPress= {()=> this.props.navigation.navigate('Kouti')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Card　containerStyle={{alignItems: 'center',}}>
                  <Text>九州・沖縄</Text>
                </Card>
                <Button
                  title="福岡"
                  onPress= {()=> this.props.navigation.navigate('Fukuoka')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="佐賀"
                  onPress= {()=> this.props.navigation.navigate('Saga')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="長崎"
                  onPress= {()=> this.props.navigation.navigate('Nagasaki')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="熊本"
                  onPress= {()=> this.props.navigation.navigate('Kumamoto')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="大分"
                  onPress= {()=> this.props.navigation.navigate('Oita')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="宮崎"
                  onPress= {()=> this.props.navigation.navigate('Miyazaki')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="鹿児島"
                  onPress= {()=> this.props.navigation.navigate('Kagosima')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
                <Button
                  title="沖縄"
                  onPress= {()=> this.props.navigation.navigate('Okinawa')}
                  type="clear"
                  titleStyle= {{color:'#000080'}}
                />
              </ScrollView>
            </ParallaxScrollView>
        )
    }
}

export default Menu;