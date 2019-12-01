import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Okayama extends Component {
    static navigationOptions = {
        title: '岡山',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：190万7千人(20位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：91万6千人(21位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：99万1千人(19位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.8%(12位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：57.5%(25位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：29.7%(26位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：162万人(16位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.54(18位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Okayama;