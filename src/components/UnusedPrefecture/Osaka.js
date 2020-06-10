import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Osaka extends Component {
    static navigationOptions = {
        title: '大阪',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：882万3千人(3位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：424万1千人(3位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：458万3千人(3位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.1%(28位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：60.7%(8位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：27.2%(38位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：733万5千人(3位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.35(39位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：190,514ha(46位)</Text>
                  <Text></Text>
                  <Text>年平均気温：16.8℃(9位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：24日(26位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：85日(44位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：18日(22位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：64%(39位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Osaka;