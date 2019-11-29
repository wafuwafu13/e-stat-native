import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Height from './Height';
import Weight from './Weight';
import Descripiton from './Description';

class Body extends Component {
    render() {
        return(
            <ScrollView style={{backgroundColor: '#DDDDDD'}}>
              <Descripiton />
              <Height />
              <Weight />
            </ScrollView>
        )
    }
}

export default Body;