import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import {
    VictoryBar,
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

import { sumPopulationData } from '../../../data/Population/sumPopulationData';

const SumPopulationChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let data: chartData[] = sumPopulationData();

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 3000);
    }, [spinner]);

    return (
        <View style={styles.container}>
            <Loading visible={spinner} />
            <Text style={styles.title}>年齢別総人口(平成27年国勢調査)</Text>
            <View style={styles.chart}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                    animate={{ duration: 2000, easing: 'bounce' }}
                >
                    <VictoryAxis
                        tickValues={[
                            5,
                            10,
                            15,
                            20,
                            25,
                            30,
                            35,
                            40,
                            45,
                            50,
                            55,
                            60,
                            65,
                            70,
                            75,
                            80,
                            85,
                            90,
                            95
                        ]}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(y: any) => `${y / 10000}万`}
                        tickValues={[
                            250000,
                            500000,
                            750000,
                            1000000,
                            1250000,
                            1500000,
                            1750000,
                            2000000
                        ]}
                    />
                    <VictoryBar data={data} style={{ data: { fill: '#66CC66' } }} />
                </VictoryChart>
            </View>
        </View>
    );
};

export default SumPopulationChart;

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
