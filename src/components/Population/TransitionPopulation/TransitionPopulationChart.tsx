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

const TransitionPopulationChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let transitionPopulationList: chartData[] = [];
    let transitionPopulationYear: number[] = [];

    for (let i = 1945; i <= 2015; i += 5) {
        transitionPopulationYear.push(i);
    }
    transitionPopulationYear[15] = 2019;

    let transitionPopulation: number[] = [
        71998104,
        84114574,
        90076594,
        94301623,
        99209137,
        104665171,
        111939643,
        117060396,
        121048923,
        123611167,
        125570246,
        126925843,
        127767994,
        128057352,
        127094745,
        126443000
    ];

    for (let i = 0; i <= 15; i++) {
        transitionPopulationList.push({
            x: transitionPopulationYear[i],
            y: transitionPopulation[i]
        });
    }

    let tickXValueList: number[] = [];
    for (let i = 1945; i <= 2015; i += 5) {
        tickXValueList.push(i);
    }

    let tickYValueList: number[] = [];
    for (let i = 70000000; i <= 120000000; i += 10000000) {
        tickYValueList.push(i);
    }

    const data: chartData[] = transitionPopulationList;

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 6000);
    }, [spinner]);

    return (
        <View style={styles.container}>
            <Loading visible={spinner} />
            <Text style={styles.title}>人口推移(国勢調査)</Text>
            <View style={styles.chart}>
                <VictoryChart
                    style={styles.chart}
                    animate={{ duration: 5000, easing: 'bounce' }}
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                >
                    <VictoryAxis tickValues={tickXValueList} />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(y: any) => `${y / 100000000}億`}
                        tickValues={tickYValueList}
                    />
                    <VictoryLine
                        data={data}
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
