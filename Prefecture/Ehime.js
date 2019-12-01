import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Ehime extends Component {
    static navigationOptions = {
        title: '愛媛',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：136万4千人(28位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：64万5千人(28位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：71万9千人(27位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.1%(28位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：55.9%(38位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：32.1%(8位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：101万2千人(28位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.54(18位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Ehime;