import React, { Component } from 'react';
import { Text, ScrollView, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Descripiton extends Component {
    render(){
        return(
            <ScrollView>
              <Card>
                <Text style={{marginBottom: 10}}>父「このページでは、人口のデータを見ていくぞ！」</Text>
                <Text style={{marginBottom: 10}}>息子「わかったよ父さん！」</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Descripiton;