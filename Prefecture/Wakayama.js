import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Wakayama extends Component {
    static navigationOptions = {
        title: '和歌山',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：94万5千人(40位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：44万4千人(40位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：50万1千人(39位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.8%(36位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：55.9%(38位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：32.2%(6位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：68万8千人(39位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.52(23位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Wakayama;