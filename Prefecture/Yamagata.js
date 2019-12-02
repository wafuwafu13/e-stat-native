import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Yamagata extends Component {
    static navigationOptions = {
        title: '秋田',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：110万2千人(35位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：53万1千人(35位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：57万1千人(36位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.8%(36位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：56.0%(37位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：32.2%(6位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：76万8千人(38位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.45(34位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：932,315ha(9位)</Text>
                  <Text></Text>
                  <Text>年平均気温：11.9℃(42位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：10日(43位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：149日(8位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：90日(5位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：74%(9位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Yamagata;