import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Hyogo extends Component {
    static navigationOptions = {
        title: '兵庫',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：550万3千人(7位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：262万4千人(7位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：287万9千人(7位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.6%(15位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：59.1%(14位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：28.3%(35位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：453万2千人(8位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.47(31位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：840,094ha(1２位)</Text>
                  <Text></Text>
                  <Text>年平均気温：16.8℃(9位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：24日(26位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：86日(42位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：15日(24位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：65%(36位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Hyogo;