import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Hokkaido extends Component {
    render(){
        return(
            <ScrollView　style={{backgroundColor: '#DDDDDD'}}>
              <Card title="人口">
                  <Text>総人口：</Text>
              </Card>
            </ScrollView>
        )
    }
}

export default Hokkaido;