import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Simane extends Component {
    static navigationOptions = {
        title: '島根',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：68万5千人(46位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：33万人(46位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：33万5千人(46位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.4%(21位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：54.1%(47位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：33.6%(3位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：52万8千人(45位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.72(3位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：670,806ha(19位)</Text>
                  <Text></Text>
                  <Text>年平均気温：15.3℃(29位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：21日(31位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：148日(9位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：35日(15位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：76%(3位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Simane;