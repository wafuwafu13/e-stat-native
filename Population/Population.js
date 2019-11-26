import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native'
import EstimatePopulation from './EstimatePopulation';
import SumPopulation from './SumPopulation';

class Population extends Component {
    render() {
        return(
            <ScrollView>
              <SumPopulation />
              <EstimatePopulation />
            </ScrollView>
        )
    }
}

export default Population;