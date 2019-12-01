import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Iwate extends Component {
    static navigationOptions = {
        title: '青森',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：125万5千人(32位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：60万4千人(31位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：65万1千人(32位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.5%(41位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：56.7%(30位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：31.9%(9位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：88万4千人(33位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.47(31位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Iwate;