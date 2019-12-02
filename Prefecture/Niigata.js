import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Niigata extends Component {
    static navigationOptions = {
        title: '新潟',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：226万7千人(15位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：109万8千人(15位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：116万9千人(15位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.7%(39位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：57.0%(29位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：31.3%(13位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：169万8千人(15位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.41(37位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：1,258,415ha(5位)</Text>
                  <Text></Text>
                  <Text>年平均気温：13.7℃(39位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：10日(43位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：169日(6位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：61日(9位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：75%(6位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Niigata;