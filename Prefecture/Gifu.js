import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Gifu extends Component {
    static navigationOptions = {
        title: '岐阜',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：200万8千人(17位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：97万3千人(18位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：103万5千人(17位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.9%(10位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：57.8%(23位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：29.3%(27位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：155万6千人(19位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.51(25位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：1,062,129ha(7位)</Text>
                  <Text></Text>
                  <Text>年平均気温：15.9℃(22位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：40日(8位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：118日(15位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：26日(18位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：65%(36位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Gifu;