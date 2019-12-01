import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Kagawa extends Component {
    static navigationOptions = {
        title: '香川',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：96万7千人(39位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：46万9千人(38位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：49万9千人(40位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.4%(21位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：56.5%(32位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：31.1%(15位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：77万6千人(37位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.65(8位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Kagawa;