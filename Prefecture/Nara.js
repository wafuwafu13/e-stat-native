import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Nara extends Component {
    static navigationOptions = {
        title: '奈良',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：134万8千人(30位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：63万5千人(30位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：71万2千人(30位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.1%(28位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：67.6%(24位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：30.3%(21位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：99万8千人(29位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.33(43位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：369,094ha(40位)</Text>
                  <Text></Text>
                  <Text>年平均気温：15.4℃(27位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：23日(28位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：94日(34位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：24日(19位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：70%(20位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Nara;