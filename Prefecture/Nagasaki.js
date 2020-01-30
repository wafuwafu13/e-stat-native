import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Nagasaki extends Component {
    static navigationOptions = {
        title: '長崎',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：135万4千人(29位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：63万6千人(29位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：71万8千人(28位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.8%(12位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：55.9%(38位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：31.3%(13位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：98万2千人(30位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.70(4位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：413,088ha(37位)</Text>
                  <Text></Text>
                  <Text>年平均気温：17.3℃(5位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：26日(21位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：108日(20位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：10日(32位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：74%(9位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Nagasaki;