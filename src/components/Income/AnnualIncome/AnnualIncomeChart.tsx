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

const AnnualIncome: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let manAnnualIncomeList: chartData[] = [];
    let womanAnnualIncomeList: chartData[] = [];
    let AnnualIncomeAge: number[] = [];

    for (let i = 17; i <= 72; i += 5) {
        AnnualIncomeAge.push(i);
    }

    let manAnnualIncome: number[] = [
        1572000,
        2745000,
        3827000,
        4567000,
        5117000,
        5629000,
        6327000,
        6609000,
        6493000,
        4794000,
        3871000,
        3677000
    ];

    let womanAnnualIncome: number[] = [
        1062000,
        2407000,
        3089000,
        3147000,
        2999000,
        3017000,
        2994000,
        2958000,
        2877000,
        2283000,
        1949000,
        2066000
    ];

    for (let i = 0; i <= 11; i++) {
        manAnnualIncomeList.push({
            x: AnnualIncomeAge[i],
            y: manAnnualIncome[i]
        });
        womanAnnualIncomeList.push({
            x: AnnualIncomeAge[i],
            y: womanAnnualIncome[i]
        });
    }

    let tickValueList: number[] = [];
    for (let i = 0; i <= 7000000; i += 1000000) {
        tickValueList.push(i);
    }

    const manData: chartData[] = manAnnualIncomeList;
    const womanData: chartData[] = womanAnnualIncomeList;

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 6000);
    }, [spinner]);

    return (
        <View style={styles.container}>
            <Loading visible={spinner} />
            <Text style={styles.title}>
                男女・年代別平均年収(平成28年民間給与実態統計調査)
            </Text>
            <View style={styles.chart}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                    animate={{ duration: 5000, easing: 'bounce' }}
                >
                    <VictoryAxis />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(y: any) => `${y / 10000}万`}
                        tickValues={tickValueList}
                    />
                    <VictoryGroup
                        colorScale={['#3399FF', '#FF66CC']}
                        offset={10}
                        style={{ data: { width: 10 } }}
                    >
                        <VictoryBar data={manData} />
                        <VictoryBar data={womanData} />
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
