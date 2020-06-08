import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

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

import { sumMarriageData } from '../../../data/Marriage/sumMarriageData';

const SumMariageChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let sumMariageList: chartData[] = sumMarriageData();

    let tickXList: number[] = [];
    for (let i = 1930; i <= 2015; i += 5) {
        tickXList.push(i);
    }
    let tickYList = [];
    for (let i = 500000; i <= 1100000; i += 100000) {
        tickYList.push(i);
    }

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 3000);
    }, [spinner]);

    return (
        <View style={styles.container}>
            <Loading visible={spinner} />
            <Text style={styles.title}>結婚件数(人口動態調査)</Text>
            <View style={styles.chart}>
                <VictoryChart
                    animate={{ duration: 2000, easing: 'bounce' }}
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                >
                    <VictoryAxis tickValues={tickXList} />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(y: any) => `${y / 10000}万`}
                        tickValues={tickYList}
                    />
                    <VictoryLine
                        data={sumMariageList}
                        style={{ data: { stroke: 'gold' } }}
                        offset={2}
                    />
                </VictoryChart>
            </View>
        </View>
    );
};

export default SumMariageChart;

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
