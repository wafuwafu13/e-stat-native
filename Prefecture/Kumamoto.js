import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Kumamoto extends Component {
    static navigationOptions = {
        title: '熊本',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：176万5千人(23位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：83万3千人(23位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：93万3千人(22位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：13.4%(4位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：56.5%(32位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：30.1%(23位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：144万2千人(21位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.67(6位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：740,948ha(15位)</Text>
                  <Text></Text>
                  <Text>年平均気温：16.9℃(8位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：34日(12位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：102日(26位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：8日(38位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：72%(16位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Kumamoto;