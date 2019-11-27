import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native'
import EstimatePopulation from './EstimatePopulation';
import SumPopulation from './SumPopulation';
import SexPopulation from './SexPopulation';

class Population extends Component {
    render() {
        return(
            <ScrollView>
              <SumPopulation />
              <SexPopulation />
              <EstimatePopulation />
            </ScrollView>
        )
    }
}

export default Population;