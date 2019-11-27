import React, { Component } from 'react';
import { ScrollView } from 'react-native'
import EstimatePopulation from './EstimatePopulation';
import SumPopulation from './SumPopulation';
import SexPopulation from './SexPopulation';

class Population extends Component {
    render() {
        return(
            <ScrollView style={{backgroundColor: '#808080'}}>
              <SumPopulation />
              <SexPopulation />
              <EstimatePopulation />
            </ScrollView>
        )
    }
}

export default Population;