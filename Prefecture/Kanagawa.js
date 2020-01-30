import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Kanagawa extends Component {
    static navigationOptions = {
        title: '神奈川',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：915万9千人(2位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：456万9千人(2位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：459万人(2位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.3%(24位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：62.9%(2位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：24.8%(44位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：831万2千人(2位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.34(41位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：241,617ha(43位)</Text>
                  <Text></Text>
                  <Text>年平均気温：16.3℃(17位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：29日(18位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：97日(30位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：7日(41位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：67%(31位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Kanagawa;