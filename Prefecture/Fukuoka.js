import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Fukuoka extends Component {
    static navigationOptions = {
        title: '福岡',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：510万7千人(9位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：241万5千人(9位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：269万2千人(9位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：13.2%(8位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：59.7%(11位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：27.1%(40位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：455万4千人(7位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.51(25位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：498,652ha(29位)</Text>
                  <Text></Text>
                  <Text>年平均気温：17.6℃(3位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：25日(24位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：108日(20位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：12日(29位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：69%(25位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Fukuoka;