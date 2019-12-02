import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Oita extends Component {
    static navigationOptions = {
        title: '大分',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：115万2千人(33位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：54万6千人(34位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：60万7千人(33位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.4%(21位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：55.8%(41位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：31.8%(10位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：89万6千人(32位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.62(10位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：634,073ha(22位)</Text>
                  <Text></Text>
                  <Text>年平均気温：16.8℃(9位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：29日(18位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：90日(38位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：8日(38位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：70%(20位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Oita;