import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Toyama extends Component {
    static navigationOptions = {
        title: '富山',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：105万6千人(位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：51万1千人(37位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：54万4千人(37位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.8%(36位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：56.6%(31位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：31.6%(12位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：81万7千人(36位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.55(17位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Toyama;