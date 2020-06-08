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

import { birthrateData } from '../../../data/Population/birthrateData';

const BirthrateChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let birthrateList: chartData[] = birthrateData();

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 3000);
    }, [spinner]);

    let tickXValueList: number[] = [];
    for (let i = 1945; i <= 2015; i += 5) {
        tickXValueList.push(i);
    }

    let tickYValueList: number[] = [];
    for (let i = 1; i <= 4.8; i += 0.2) {
        tickYValueList.push(Math.round(i * 10) / 10);
    }

    return (
        <View style={styles.container}>
            <Loading visible={spinner} />
            <Text style={styles.title}>合計特殊出生率</Text>
            <View style={styles.chart}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                    animate={{ duration: 2000, easing: 'bounce' }}
                >
                    <VictoryAxis tickValues={tickXValueList} />
                    <VictoryAxis dependentAxis tickValues={tickYValueList} />
                    <VictoryLine data={birthrateList} style={{ data: { stroke: '#c43a31' } }} />
                </VictoryChart>
            </View>
        </View>
    );
};

export default BirthrateChart;

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
