import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Image } from 'react-native';
import EstimatePopulation from './EstimatePopulation';
import SumPopulation from './SumPopulation';
import SexPopulation from './SexPopulation';
import Birthrate from './Birthrate';
import TransitionPopulation from './TransitionPopulation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class Population extends Component {
    render() {
        return(
              <ScrollView style={{backgroundColor: '#DDDDDD'}}>
                <TransitionPopulation />
                <SumPopulation />
                <SexPopulation />
                <EstimatePopulation />
                <Birthrate />
                
              </ScrollView>
        )
    }
}

export default Population;