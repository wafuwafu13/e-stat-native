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

const DivorcerateChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let divorcerateList: chartData[] = divorcerateData();

    let tickList: number[] = [];
    for (let i = 1930; i <= 2015; i += 5) {
        tickList.push(i);
    }
    let tickValueList = [];
    for (let i = 5; i <= 30; i += 5) {
        tickValueList.push(i);
    }

    const data: chartData[] = divorcerateList;

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
                    <VictoryAxis tickValues={tickList} />
                    <VictoryAxis dependentAxis tickValues={tickValueList} />
                    <VictoryLine data={data} style={{ data: { stroke: 'purple' } }} />
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
