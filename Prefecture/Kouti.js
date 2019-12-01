import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Kouti extends Component {
    static navigationOptions = {
        title: '高知',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：71万4千人(45位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：33万6千人(45位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：37万7千人(45位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.3%(43位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：54.5%(45位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：34.2%(2位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：49万8千人(46位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.56(14位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Kouti;