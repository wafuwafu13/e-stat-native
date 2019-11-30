import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Descripiton extends Component {
    render(){
        return(
            <ScrollView>
              <Card>
                <Text style={{marginBottom: 10}}>〜令和元年のとある親子〜</Text>
                <Text style={{marginBottom: 10}}>父「おい息子よ、人口のデータに興味はないか？」</Text>
                <Text style={{marginBottom: 10}}>息子「興味しかないよ！」</Text>
                <Text style={{marginBottom: 10}}>父「そうか、なら最高だ。今日コンビニのくじでこれが当たったんだ。」</Text>
                <Text style={{marginBottom: 10}}>息子「なにそれ？」</Text>
                <Text style={{marginBottom: 10}}>父「人口のグラフだよ。せっかくだから一緒に見ないか？」</Text>
                <Text style={{marginBottom: 10}}>息子「うわっ、めっちゃレアなやつじゃん！早くみたい！」</Text>
                <Text style={{marginBottom: 10}}>父「そう興奮するなって、お前ほんとに人口すきだなー。」</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Descripiton;