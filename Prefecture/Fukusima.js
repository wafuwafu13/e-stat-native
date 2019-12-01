import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Fukusima extends Component {
    static navigationOptions = {
        title: '秋田',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：188万2千人(21位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：93万2千人(20位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：95万1千人(21位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.7%(39位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：58.1%(22位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：30.2%(22位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：131万4千人(24位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.57(12位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Fukusima;