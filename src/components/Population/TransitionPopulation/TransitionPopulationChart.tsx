import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import {
    VictoryLine,
    VictoryChart,
    VictoryTheme,
    VictoryAxis
    // @ts-ignore
} from 'victory-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Loading from '../../../elements/Loading';

import { chartData } from '../../../types/chartData';

import { transitionPopulationData } from '../../../data/Population/transitionPopulationData';

import { tickValue } from '../../../data/tickValue';

const TransitionPopulationChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let transitionPopulationList: chartData[] = transitionPopulationData();

    let tickXList: number[] = tickValue(1945, 2015, 5);
    let tickYList: number[] = tickValue(70000000, 120000000, 10000000);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 3000);
    }, [spinner]);

    return (
        <View style={styles.container}>
            <Loading visible={spinner} />
            <Text style={styles.title}>人口推移(国勢調査)</Text>
            <View style={styles.chart}>
                <VictoryChart
                    style={styles.chart}
                    animate={{ duration: 2000, easing: 'bounce' }}
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                >
                    <VictoryAxis tickValues={tickXList} />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(y: any) => `${y / 100000000}億`}
                        tickValues={tickYList}
                    />
                    <VictoryLine
                        data={transitionPopulationList}
                        style={{ data: { stroke: '#c43a31' } }}
                    />
                </VictoryChart>
            </View>
        </View>
    );
};

export default TransitionPopulationChart;

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

const height = Dimensions.get('window').height;
