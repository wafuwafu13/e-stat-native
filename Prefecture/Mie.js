import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Mie extends Component {
    static navigationOptions = {
        title: '三重',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：180万人(22位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：87万7千人(22位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：92万3千人(23位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.6%(15位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：58.4%(17位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：29.0%(30位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：143万人(22位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.49(29位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：577,441ha(25位)</Text>
                  <Text></Text>
                  <Text>年平均気温：16.1℃(20位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：36日(11位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：98日(29位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：22日(20位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：63%(43位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Mie;