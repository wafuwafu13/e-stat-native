import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Descripiton extends Component {
    render(){
        return(
            <ScrollView>
              <Card>
                <Text style={{marginBottom: 10}}>エリート「おれは商社で働くエリートサラリーマン。」</Text>
                <Text style={{marginBottom: 10}}>エリート「年収1500万円だぜ。庶民とは格が違うんだ。」</Text>
                <Text style={{marginBottom: 10}}>エリート「庶民には興味はないが、せっかくだから年収のグラフでも見てやるか」</Text>
                <Text style={{marginBottom: 10}}>エリート「煙草スパー」</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Descripiton;