import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Aomori extends Component {
    static navigationOptions = {
        title: '青森',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：127万8千人(31位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：60万人(32位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：67万8千人(31位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.0%(46位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：57.2%(27位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：31.8%(10位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：82万3千人(35位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.43(36位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Aomori;