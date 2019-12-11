import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Statistics extends Component {


    render(){
      // let width = Dimensions.get('window').width;
        //let height = Dimensions.get('window').height;
        return(
              <ScrollView style={{backgroundColor: '#DDDDDD'}}>
                <Card>
                    <Text>このサービスは、政府統計総合窓口(e-Stat)のAPI機能を使用していますが、サービスの内容は国によって保証されたものではありません。</Text>
                    <Text></Text>
                    <Text>Created by 田川裕隆</Text>
                    <Text>twitter:https://twitter.com/wafuwafu13_</Text>
                    <Text>github:https://github.com/wafuwafu13</Text>
                    <Text>ブログ:https://toukei.fc2.net/</Text>
                    <Text>ブログ:https://kyoupurog.hatenablog.com/</Text>
                </Card>
              </ScrollView>
        )
    }
}

export default Statistics;