import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import axios from 'axios';

import {
    VictoryBar,
    VictoryChart,
    VictoryGroup,
    VictoryTheme,
    VictoryAxis
    // @ts-ignore
} from 'victory-native';
// @ts-ignore
import config from '../../../../config';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Loading from '../../../elements/Loading';

import { chartData } from '../../../types/chartData';
import { manPopulationData } from '../../../data/Population/manPopulationData';
import { womanPopulationData } from '../../../data/Population/womanPopulationData';

import { tickValue } from '../../../data/tickValue';

const SexPopulation: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let manPopulationList: chartData[] = manPopulationData();
    let womanPopulationList: chartData[] = womanPopulationData();

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 3000);
    }, [spinner]);

    let tickXList: number[] = tickValue(5, 95, 5);
    let tickYList: number[] = tickValue(250000, 1250000, 250000);

    return (
        <View style={styles.container}>
            <Loading visible={spinner} />
            <Text style={styles.title}>男女別総人口(平成27年国勢調査)</Text>
            <View style={styles.chart}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                    margin={2}
                    animate={{ duration: 2000, easing: 'bounce' }}
                >
                    <VictoryAxis tickValues={tickXList} />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(y: any) => `${y / 10000}万`}
                        tickValues={tickYList}
                    />
                    <VictoryGroup
                        colorScale={['#3399FF', '#FF66CC']}
                        offset={2}
                        style={{ data: { width: 1.5 } }}
                    >
                        <VictoryBar data={manPopulationList} />
                        <VictoryBar data={womanPopulationList} />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        </View>
    );
};

export default SexPopulation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCCCCC',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: wp('3%'),
        color: '#3E3D3D'
    },
    chart: {
        marginBottom: hp('15%')
    }
});

const height: number = Dimensions.get('window').height;
