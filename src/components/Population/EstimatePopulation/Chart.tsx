import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import {
    VictoryLine,
    VictoryChart,
    VictoryGroup,
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

import { estimateSumPopulationData } from '../../../data/Population/estimateSumPopulationData';
import { estimateManPopulationData } from '../../../data/Population/estimateManPopulationData';
import { estimateWomanPopulationData } from '../../../data/Population/estimateWomanPopulationData';

import { tickValue } from '../../../data/tickValue';

const EstimatePopulationChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let sumPopulationList: chartData[] = estimateSumPopulationData();
    let manPopulationList: chartData[] = estimateManPopulationData();
    let womanPopulationList: chartData[] = estimateWomanPopulationData();

    let tickXList: number[] = tickValue(2020, 2080, 10);
    let tickYList: number[] = tickValue(130000, 30000, 10000);

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
                    animate={{ duration: 2000, easing: 'bounce' }}
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                    margin={2}
                >
                    <VictoryAxis tickValues={tickXList} />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(y: any) => `${y / 100000}億`}
                        tickValues={tickYList}
                    />
                    <VictoryGroup
                        colorScale={['#66CC66', '#3399FF', '#FF66CC']}
                        offset={2}
                        style={{ data: { width: 1.5 } }}
                    >
                        <VictoryLine data={sumPopulationList} />
                        <VictoryLine data={manPopulationList} />
                        <VictoryLine data={womanPopulationList} />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        </View>
    );
};

export default EstimatePopulationChart;

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
