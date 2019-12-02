import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Aomori extends Component {
    static navigationOptions = {
        title: '青森',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：127万8千人(31位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：60万人(32位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：67万8千人(31位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.0%(46位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：57.2%(27位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：31.8%(10位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：82万3千人(35位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.43(36位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：964,564ha(8位)</Text>
                  <Text></Text>
                  <Text>年平均気温：10.7℃(45位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：14日(37位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：172日(5位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：114日(2位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：75%(6位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Aomori;