import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import EstimatePopulation from './EstimatePopulation';
import SumPopulation from './SumPopulation';
import SexPopulation from './SexPopulation';
import Descripiton from './Description';
import Birthrate from './Birthrate';
import TransitionPopulation from './TransitionPopulation';

class Population extends Component {
    render() {
        return(
            <ScrollView style={{backgroundColor: '#DDDDDD'}}>
              <Descripiton />
              <SumPopulation />
              <SexPopulation />
              <EstimatePopulation />
              <TransitionPopulation />
              <Birthrate />
            </ScrollView>
        )
    }
}

export default Population;