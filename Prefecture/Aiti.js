import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Aiti extends Component {
    static navigationOptions = {
        title: '愛知',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：752万5千人(4位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：376万4千人(4位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：376万1千人(4位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：13.4%(4位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：62.0%(3位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：24.6%(45位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：689万9千人(4位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.54(18位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：517,292ha(27位)</Text>
                  <Text></Text>
                  <Text>年平均気温：15.9℃(22位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：31日(16位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：105日(23位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：13日(28位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：64%(39位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Aiti;