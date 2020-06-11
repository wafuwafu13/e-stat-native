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
import { sumSuicideData } from '../../../data/Death/sumSuicideData';
import { manSuicideData } from '../../../data/Death/manSuicideData';
import { womanSuicideData } from '../../../data/Death/womanSuicideData';

import { tickValue } from '../../../data/tickValue';

const Suicide: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let sumSuicideList: chartData[] = sumSuicideData();
    let manSuicideList: chartData[] = manSuicideData();
    let womanSuicideList: chartData[] = womanSuicideData();

    let tickXList: number[] = tickValue(1, 12, 1);
    let tickYList: number[] = tickValue(0, 110, 10);

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
                    <VictoryAxis tickValues={tickXList} tickFormat={(x: any) => `${x}月`} />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(y: any) => `${y}人`}
                        tickValues={tickYList}
                    />
                    <VictoryGroup
                        colorScale={['#66CC66', '#3399FF', '#FF66CC']}
                        offset={10}
                        style={{ data: { width: 3 } }}
                    >
                        <VictoryLine data={sumSuicideList} />
                        <VictoryLine data={manSuicideList} />
                        <VictoryLine data={womanSuicideList} />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        </View>
    );
};

export default Suicide;

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
