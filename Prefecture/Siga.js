import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Siga extends Component {
    static navigationOptions = {
        title: '滋賀',
        headerTintColor: '#000080',
    }

    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：141万3千人(26位)</Text>
                  <Text></Text>
                  <Text>総人口(男)：69万7千人(26位)</Text>
                  <Text></Text>
                  <Text>総人口(女)：71万6千人(29位)</Text>
                  <Text></Text>
                  <Text>15歳未満人口割合：14.1%(2位)</Text>
                  <Text></Text>
                  <Text>15~64歳人口割合：60.6%(9位)</Text>
                  <Text></Text>
                  <Text>65歳以上人口割合：25.3%(43位)</Text>
                  <Text></Text>
                  <Text>将来推計人口(2045年)：126万2千人(25位)</Text>
                  <Text></Text>
                  <Text>合計特殊出生率：1.54(18位)</Text>
              </Card>
              <Card title="自然環境">
                  <Text>総面積：401,738ha(38位)</Text>
                  <Text></Text>
                  <Text>年平均気温：14.8℃(34位)</Text>
                  <Text></Text>
                  <Text>年間快晴日数：23日(28位)</Text>
                  <Text></Text>
                  <Text>年間降水日数：148日(9位)</Text>
                  <Text></Text>
                  <Text>年間雪日数：35日(15位)</Text>
                  <Text></Text>
                  <Text>年平均相対湿度：73%(13位)</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Siga;