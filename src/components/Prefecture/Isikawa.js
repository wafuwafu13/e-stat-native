import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Isikawa extends Component {
    static navigationOptions = {
        title: '石川',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：114万7千人(34位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：55万6千人(33位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：59万1千人(34位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.6%(15位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：58.5%(16位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：28.8%(32位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：94万7千人(31位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.54(18位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：418,605ha(35位)</Text>
                  <Text></Text>
                  <Text>年平均気温：15.0℃(31位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：11日(42位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：179日(4位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：51日(11位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：68%(26位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Isikawa;