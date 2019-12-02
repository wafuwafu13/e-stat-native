import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Okinawa extends Component {
    static navigationOptions = {
        title: '沖縄',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：144万3千人(25位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：70万9千人(25位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：73万4千人(25位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：17.1%(1位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：61.9%(4位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：21.0%(47位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：142万8千人(23位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.94(1位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：228,098ha(44位)</Text>
                  <Text></Text>
                  <Text>年平均気温：23.6℃(1位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：3日(47位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：120日(14位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：0日(47位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：71%(17位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Okinawa;