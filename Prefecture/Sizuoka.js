import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Sizuoka extends Component {
    static navigationOptions = {
        title: '静岡',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：367万5千人(10位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：181万人(10位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：186万6千人(10位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.6%(15位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：58.3%(19位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：29.1%(29位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：294万2千人(10位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.52(23位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Sizuoka;