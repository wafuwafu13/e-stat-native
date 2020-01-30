import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Yamanasi extends Component {
    static navigationOptions = {
        title: '山梨',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：82万3千人(42位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：40万3千人(41位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：42万1千人(42位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.0%(33位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：58.2%(21位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：29.8%(24位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：59万8千人(43位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.50(28位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：446,527ha(32位)</Text>
                  <Text></Text>
                  <Text>年平均気温：14.9℃(32位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：44日(6位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：86日(42位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：9日(36位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：58%(47位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Yamanasi;