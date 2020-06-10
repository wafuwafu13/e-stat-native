import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Tiba extends Component {
    static navigationOptions = {
        title: '千葉',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：624万6千人(6位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：310万3千人(6位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：314万3千人(6位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.1%(28位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：60.8%(6位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：27.1%(40位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：546万3千人(6位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.34(41位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：515,761ha(28位)</Text>
                  <Text></Text>
                  <Text>年平均気温：16.3℃(17位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：34日(12位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：90日(38位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：14日(27位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：64%(39位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Tiba;