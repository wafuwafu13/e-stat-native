import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Tokusima extends Component {
    static navigationOptions = {
        title: '徳島',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：74万3千人(44位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：35万4千人(44位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：38万9千人(44位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.4%(42位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：56.2%(36位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：32.4%(5位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：53万5千人(44位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.51(25位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：414,680ha(36位)</Text>
                  <Text></Text>
                  <Text>年平均気温：16.7℃(14位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：26日(21位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：82日(46位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：10日(32位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：68%(26位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Tokusima;