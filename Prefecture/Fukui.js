import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Fukui extends Component {
    static navigationOptions = {
        title: '福井',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：77万9千人(43位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：37万8千人(43位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：40万1千人(43位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.9%(10位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：57.3%(26位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：29.8%(24位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：61万4千人(41位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.62(10位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Fukui;