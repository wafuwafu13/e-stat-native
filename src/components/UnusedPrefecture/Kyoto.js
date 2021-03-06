import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Kyoto extends Component {
    static navigationOptions = {
        title: '京都',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：259万9千人(13位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：124万2千人(13位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：135万7千人(13位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：11.9%(34位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：59.6%(12位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：28.6%(33位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：213万6千人(13位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.31(44位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：461,220ha(31位)</Text>
                  <Text></Text>
                  <Text>年平均気温：16.0℃(21位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：20日(32位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：103日(24位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：29日(17位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：66%(35位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Kyoto;