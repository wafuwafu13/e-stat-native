import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Miyazaki extends Component {
    static navigationOptions = {
        title: '宮崎',
        headerTintColor: '#FFFF00',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：108万9千人(36位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：51万2千人(36位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：57万7千人(35位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：13.4%(4位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：55.5%(43位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：31.1%(15位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：82万4千人(34位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.73(2位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：773,532ha(14位)</Text>
                  <Text></Text>
                  <Text>年平均気温：17.6℃(3位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：54日(3位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：107日(22位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：1日(45位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：74%(9位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Miyazaki;