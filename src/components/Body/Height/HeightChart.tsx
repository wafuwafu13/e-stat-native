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

import { manHeightData } from '../../../data/Body/manHeightData';
import { womanHeightData } from '../../../data/Body/womanHeightData';

const HeightChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let manHeightList: chartData[] = manHeightData();
    let womanHeightList: chartData[] = womanHeightData();

    let tickList: number[] = [];
    for (let i = 1; i <= 26; i++) {
        tickList.push(i);
    }
    let tickValueList = [];
    for (let i = 80; i <= 175; i += 5) {
        tickValueList.push(i);
    }

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 3000);
    }, [spinner]);

    return (
        <View style={styles.container}>
            <Loading visible={spinner} />
            <Text style={styles.title}>男女別平均身長(平成28年国民健康・栄養調査)</Text>
            <View style={styles.chart}>
                <VictoryChart
                    animate={{ duration: 2000, easing: 'bounce' }}
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                >
                    <VictoryAxis tickValues={tickList} />
                    <VictoryAxis dependentAxis tickValues={tickValueList} />
                    <VictoryGroup
                        colorScale={['#3399FF', '#FF66CC']}
                        offset={2}
                        style={{ data: { width: 1.5 } }}
                    >
                        <VictoryLine data={manHeightList} />
                        <VictoryLine data={womanHeightList} />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        </View>
    );
};

export default HeightChart;

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
