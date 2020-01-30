import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Saga extends Component {
    static navigationOptions = {
        title: '佐賀',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：82万4千人(41位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：38万9千人(42位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：43万4千人(41位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：13.7%(3位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：57.1%(28位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：29.2%(28位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：66万3千人(40位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.64(9位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：244,068ha(42位)</Text>
                  <Text></Text>
                  <Text>年平均気温：17.0℃(7位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：25日(24位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：94日(34位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：11日(30位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：70%(20位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Saga;