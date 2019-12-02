import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Totigi extends Component {
    static navigationOptions = {
        title: '栃木',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：195万7千人(19位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：97万4千人(17位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：98万3千人(20位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：12.5%(19位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：60.1%(10位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：27.4%(37位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：156万人(18位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.45(34位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：640,809ha(20位)</Text>
                  <Text></Text>
                  <Text>年平均気温：14.1℃(38位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：45日(4位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：109日(19位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：17日(23位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：68%(26位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Totigi;