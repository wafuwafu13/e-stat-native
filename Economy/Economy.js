import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Condition from './Condition';
import Descripiton from './Description';

class Economy extends Component {
    render() {
        return(
            <ScrollView>
              <Descripiton />
              <Condition />
            </ScrollView>
        )
    }
}

export default Economy;