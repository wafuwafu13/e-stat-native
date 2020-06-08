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
import { divorcerateData } from '../../../data/Marriage/divorcerateData';

import { tickValue } from '../../../data/tickValue';

const DivorcerateChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let divorcerateList: chartData[] = divorcerateData();

    let tickXList: number[] = tickValue(1930, 2015, 5);
    let tickYList: number[] = tickValue(5, 30, 5);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 3000);
    }, [spinner]);

    return (
        <View style={styles.container}>
            <Loading visible={spinner} />
            <Text style={styles.title}>離婚率(人口動態調査)</Text>
            <View style={styles.chart}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                    animate={{ duration: 2000, easing: 'bounce' }}
                >
                    <VictoryAxis tickValues={tickXList} />
                    <VictoryAxis dependentAxis tickValues={tickYList} />
                    <VictoryLine data={divorcerateList} style={{ data: { stroke: 'purple' } }} />
                </VictoryChart>
            </View>
        </View>
    );
};

export default DivorcerateChart;

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
