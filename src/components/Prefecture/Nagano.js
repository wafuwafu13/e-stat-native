import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Nagano extends Component {
    static navigationOptions = {
        title: '長野',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：207万6千人(16位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：101万2千人(16位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：106万4千人(16位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.5%(19位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：56.3%(34位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：31.1%(15位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：161万4千人(17位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.56(14位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：1,356,156ha(4位)</Text>
                  <Text></Text>
                  <Text>年平均気温：11.9℃(42位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：15日(34位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：116日(16位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：76日(6位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：75%(6位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Nagano;