import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Tottori extends Component {
    static navigationOptions = {
        title: '鳥取',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：56万5千人(47位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：27万4千人(47位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：29万5千人(47位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.7%(14位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：56.3%(34位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：31.0%(18位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：44万8千人(18位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.66(7位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：350,713ha(41位)</Text>
                  <Text></Text>
                  <Text>年平均気温：15.2℃(30位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：15日(34位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：157日(7位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：40日(13位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：73%(13位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Tottori;