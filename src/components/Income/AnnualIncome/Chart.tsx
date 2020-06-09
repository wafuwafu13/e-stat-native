import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import {
    VictoryBar,
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
import { manAnnualIncomeData } from '../../../data/Income/manAnnualIncomeData';
import { womanAnnualIncomeData } from '../../../data/Income/womanAnnualIncomeData';

import { tickValue } from '../../../data/tickValue';

const AnnualIncome: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let manAnnualIncomeList: chartData[] = manAnnualIncomeData();
    let womanAnnualIncomeList: chartData[] = womanAnnualIncomeData();

    let tickList: number[] = tickValue(0, 7000000, 1000000);

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
                    <VictoryAxis />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(y: any) => `${y / 10000}万`}
                        tickValues={tickList}
                    />
                    <VictoryGroup
                        colorScale={['#3399FF', '#FF66CC']}
                        offset={10}
                        style={{ data: { width: 10 } }}
                    >
                        <VictoryBar data={manAnnualIncomeList} />
                        <VictoryBar data={womanAnnualIncomeList} />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        </View>
    );
};

export default AnnualIncome;

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
