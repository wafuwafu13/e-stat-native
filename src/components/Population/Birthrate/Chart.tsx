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

import { tickValue } from '../../../data/tickValue';

const BirthrateChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let birthrateList: chartData[] = birthrateData();

    let tickXList: number[] = tickValue(1945, 2015, 5);
    let tickPreYList: number[] = tickValue(1, 4.8, 0.2);

    let tickYList = tickPreYList.map((i) => Math.round(i * 10) / 10);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 3000);
    }, [spinner]);

    return (
        <View style={styles.container}>
            <Loading visible={spinner} />
            <View style={styles.chart}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                    animate={{ duration: 2000, easing: 'bounce' }}
                >
                    <VictoryAxis tickValues={tickXList} />
                    <VictoryAxis dependentAxis tickValues={tickYList} />
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
