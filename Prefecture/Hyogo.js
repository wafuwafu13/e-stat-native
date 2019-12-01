import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Hyogo extends Component {
    static navigationOptions = {
        title: '兵庫',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：550万3千人(7位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：262万4千人(7位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：287万9千人(7位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.6%(15位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：59.1%(14位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：28.3%(35位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：453万2千人(8位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.47(31位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Hyogo;