import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Saitama extends Component {
    static navigationOptions = {
        title: '埼玉',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：731万人(5位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：364万8千人(5位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：366万2千人(5位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.3%(24位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：61.7%(5位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：26.0%(42位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：652万4千人(5位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.36(38位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Saitama;