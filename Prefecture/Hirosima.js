import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Hirosima extends Component {
    static navigationOptions = {
        title: '広島',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：282万9千人(12位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：137万2千人(12位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：145万7千人(11位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：13.0%(9位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：58.4%(17位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：28.6%(33位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：242万8千人(11位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.56(14位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：847,963ha(11位)</Text>
                  <Text></Text>
                  <Text>年平均気温：16.3℃(17位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：27日(20位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：92日(37位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：20日(21位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：63%(43位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Hirosima;