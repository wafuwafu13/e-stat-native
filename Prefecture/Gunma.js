import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Gunma extends Component {
    static navigationOptions = {
        title: '群馬',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：196万人(18位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：96万8千人(19位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：99万2千人(18位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.3%(24位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：58.7%(15位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：28.9%(31位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：155万2千人(20位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.47(31位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Gunma;