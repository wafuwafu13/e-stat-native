import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Tokyo extends Component {
    static navigationOptions = {
        title: '東京',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：1372万4千人(1位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：676万人(1位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：696万4千人(1位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.2%(44位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：65.7%(1位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：23.0%(46位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：1360万6千人(1位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.21(47位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：219,396ha(45位)</Text>
                  <Text></Text>
                  <Text>年平均気温：15.8℃(24位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：39日(9位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：95日(32位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：7日(41位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：68%(26位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Tokyo;