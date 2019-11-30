import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Descripiton extends Component {
    render(){
        return(
            <ScrollView>
              <Card>
                <Text style={{marginBottom: 10}}>チャラ男「（よし。あの子をナンパしよう。）」</Text>
                <Text style={{marginBottom: 10}}>チャラ女「（あの男にナンパされたいわ。）」</Text>
                <Text style={{marginBottom: 10}}>チャラ男「ヘイ彼女！1人かい？」</Text>
                <Text style={{marginBottom: 10}}>チャラ女「（きたわ。）はぁ〜い！1人よ！」</Text>
                <Text style={{marginBottom: 10}}>チャラ男「一緒にグラフを見ないかい？」</Text>
                <Text style={{marginBottom: 10}}>チャラ女「もちろんよ！フォォォォォ〜！！！！」</Text>
                <Text style={{marginBottom: 10}}>チャラ男「(いい女だ)」</Text>
                <Text style={{marginBottom: 10}}>アナウンス「ピンポンパンポ〜ン↑」</Text>
                <Text style={{marginBottom: 10}}>アナウンス「公共の場ではお静かに行動してください。」</Text>
                <Text style={{marginBottom: 10}}>アナウンス「ピンポンパンポ〜ン↓」</Text>
                <Text style={{marginBottom: 10}}>チャラ女「テヘペロ〜！フォォォォォ〜！！！！」</Text>
                <Text style={{marginBottom: 10}}>チャラ男「(いい女だ)」</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Descripiton;