import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SumMariage from './SumMariage';
import Unmarrid from './Unmarried';
import Descripiton from './Description';
import Divorcerate from './Divorcerate';

class Marriage extends Component {
    render() {
        return(
            <ScrollView style={{backgroundColor: '#DDDDDD'}}>
              <Descripiton />
              <SumMariage />
              <Unmarrid />
              <Divorcerate />
            </ScrollView>
        )
    }
}

export default Marriage;