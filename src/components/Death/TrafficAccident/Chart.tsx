import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import {
    VictoryLine,
    VictoryChart,
    VictoryTheme,
    VictoryAxis,
    VictoryGroup
    // @ts-ignore
} from 'victory-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Loading from '../../../elements/Loading';

import { chartData } from '../../../types/chartData';
import { trafficAccidentData } from '../../../data/Death/trafficAccidentData';

import { tickValue } from '../../../data/tickValue';

const TrafficAccident: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let trafficAccidentList: chartData[] = trafficAccidentData();

    let tickXList: number[] = tickValue(2005, 2019, 1);
    let tickYList: number[] = tickValue(3000, 7000, 1000);

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
                    <VictoryAxis tickValues={tickXList} tickFormat={(x: any) => `${x}`} />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(y: any) => `${y}`}
                        tickValues={tickYList}
                    />

                    <VictoryLine
                        data={trafficAccidentList}
                        style={{ data: { stroke: 'purple' } }}
                    />
                </VictoryChart>
            </View>
        </View>
    );
};

export default TrafficAccident;

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
