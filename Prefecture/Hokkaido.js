import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Hokkaido extends Component {
    static navigationOptions = {
        title: '北海道',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：532万人(8位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：250万6千人(8位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：281万4千人(8位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.1%(45位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：58.3%(19位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：30.7%(20位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：400万4千人(9位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.29(46位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Hokkaido;