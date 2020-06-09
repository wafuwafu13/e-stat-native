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

import { manUnmarrideData } from '../../../data/Marriage/manUnmarrideData';
import { womanUnmarrideData } from '../../../data/Marriage/womanUnmarrideData';

import { tickValue } from '../../../data/tickValue';

const UnmarridChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let manUnmarridList: chartData[] = manUnmarrideData();
    let womanUnmarridList: chartData[] = womanUnmarrideData();

    let tickXList: number[] = tickValue(1920, 2015, 5);
    let tickYList: number[] = tickValue(5, 30, 5);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 3000);
    }, [spinner]);

    return (
        <View style={styles.container}>
            <Loading visible={spinner} />
            <Text style={styles.title}>40~45歳男女の未婚率(国勢調査)</Text>
            <View style={styles.chart}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                    animate={{ duration: 2000, easing: 'bounce' }}
                >
                    <VictoryAxis tickValues={tickXList} />
                    <VictoryAxis dependentAxis tickValues={tickYList} />
                    <VictoryGroup
                        colorScale={['#3399FF', '#FF66CC']}
                        offset={2}
                        style={{ data: { width: 1.5 } }}
                    >
                        <VictoryLine data={manUnmarridList} />
                        <VictoryLine data={womanUnmarridList} />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        </View>
    );
};

export default UnmarridChart;

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
