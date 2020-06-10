import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Ibaragi extends Component {
    static navigationOptions = {
        title: '茨城',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：289万2千人(11位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：144万2千人(11位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：145万人(12位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.3%(24位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：59.4%(13位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：28.3%(35位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：223万5千人(12位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.48(30位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：609,719ha(24位)</Text>
                  <Text></Text>
                  <Text>年平均気温：14.2℃(37位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：45日(4位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：97日(30位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：10日(32位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：71%(17位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Ibaragi;