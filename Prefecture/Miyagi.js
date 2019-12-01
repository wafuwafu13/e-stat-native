import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Miyagi extends Component {
    static navigationOptions = {
        title: '宮城',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：232万3千人(14位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：113万6千人(14位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：118万8千人(14位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.1%(28位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：60.8%(6位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：27.2%(38位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：180万9千人(14位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.31(44位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Miyagi;