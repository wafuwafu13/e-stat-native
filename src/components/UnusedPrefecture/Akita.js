import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Akita extends Component {
    static navigationOptions = {
        title: '秋田',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：99万6千人(38位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：46万8千人(39位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：52万8千人(38位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：10.1%(47位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：54.3%(46位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：35.6%(1位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：60万1千人(42位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.35(39位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：1,163,752ha(6位)</Text>
                  <Text></Text>
                  <Text>年平均気温：11.9℃(42位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：6日(46位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：192日(1位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：102日(4位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：76%(3位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Akita;