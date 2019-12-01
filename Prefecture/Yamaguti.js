import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Yamaguti extends Component {
    static navigationOptions = {
        title: '山口',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：138万3千人(27位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：65万5千人(27位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：72万7千人(26位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.9%(34位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：54.7%(44位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：33.4%(4位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：103万5千人(27位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.57(12位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Yamaguti;