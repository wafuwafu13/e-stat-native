import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Kagosima extends Component {
    static navigationOptions = {
        title: '鹿児島',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：162万6千人(24位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：76万3千人(24位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：86万3千人(24位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：13.4%(4位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：55.8%(41位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：30.8%(19位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：120万4千人(26位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.69(5位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：918,701ha(10位)</Text>
                  <Text></Text>
                  <Text>年平均気温：18.6℃(2位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：37日(10位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：124日(13位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：4日(43位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：73%(13位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Kagosima;