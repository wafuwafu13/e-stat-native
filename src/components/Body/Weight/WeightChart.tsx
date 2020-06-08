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

import { manWeightData } from '../../../data/Body/manWeightData';
import { womanWeightData } from '../../../data/Body/womanWeightData';

const WeightChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let manWeightList: chartData[] = manWeightData();
    let womanWeightList: chartData[] = womanWeightData();

    let tickXList: number[] = [];
    for (let i = 1; i <= 26; i++) {
        tickXList.push(i);
    }
    let tickYList = [];
    for (let i = 10; i <= 70; i += 5) {
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
            <Text style={styles.title}>男女別平均体重(平成28年国民健康・栄養調査)</Text>
            <View style={styles.chart}>
                <VictoryChart
                    animate={{ duration: 2000, easing: 'bounce' }}
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                >
                    <VictoryAxis tickValues={tickXList} />
                    <VictoryAxis dependentAxis tickValues={tickYList} />
                    <VictoryGroup
                        colorScale={['#3399FF', '#FF66CC']}
                        offset={2}
                        style={{ data: { width: 1.5 } }}
                    >
                        <VictoryLine data={manWeightList} />
                        <VictoryLine data={womanWeightList} />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        </View>
    );
};

export default WeightChart;

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
