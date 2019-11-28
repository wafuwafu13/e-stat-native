import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AnnualIncome from './AnnualIncome';
import Descripiton from './Description';

class Income extends Component {
    render() {
        return(
            <ScrollView style={{backgroundColor: '#DDDDDD'}}>
              <Descripiton />
              <AnnualIncome />
            </ScrollView>
        )
    }
}

export default Income;