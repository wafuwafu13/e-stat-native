import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Descripiton extends Component {
    render(){
        return(
            <ScrollView>
              <Card>
                <Text style={{marginBottom: 10}}>オス「わんわん！」</Text>
                <Text style={{marginBottom: 10}}>メス「ん、どうしたの？何かくわえてるじゃない。」</Text>
                <Text style={{marginBottom: 10}}>オス「わんわん！人の身長と体重のデータだわん！」</Text>
                <Text style={{marginBottom: 10}}>メス「面白そうね。一緒に見ましょう。」</Text>
                <Text style={{marginBottom: 10}}>オス「わんわん！わんわん！わんわん！わんわん！わんわん！わんわん！」</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Descripiton;