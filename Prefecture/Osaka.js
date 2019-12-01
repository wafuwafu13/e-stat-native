import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Osaka extends Component {
    static navigationOptions = {
        title: '大阪',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：882万3千人(3位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：424万1千人(3位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：458万3千人(3位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.1%(28位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：60.7%(8位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：27.2%(38位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：733万5千人(3位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.35(39位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Osaka;