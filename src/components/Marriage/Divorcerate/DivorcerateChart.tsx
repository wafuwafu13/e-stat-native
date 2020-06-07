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

const DivorcerateChart: React.FC = () => {
    const [spinner, setSpinner] = useState<boolean>(true);

    let divorcerateList: chartData[] = [];
    let divorcerateYear: number[] = [];

    for (let i = 2015; i >= 1930; i -= 5) {
        divorcerateYear.push(i);
    }
    divorcerateYear[14] = 1943;

    let divocerate: number[] = [
        26.3,
        26.4,
        26.8,
        24.9,
        20,
        17.9,
        18.5,
        15.5,
        11.2,
        8.5,
        7.5,
        7.4,
        9.5,
        10.5,
        6.2,
        6.8,
        8,
        9.2
    ];

    for (let i = 0; i <= 17; i++) {
        divorcerateList.push({
            x: divorcerateYear[i],
            y: divocerate[i]
        });
    }

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
        }, 5000);
    }, [spinner]);

    return (
        <View style={styles.container}>
            <Loading visible={spinner} />
            <Text style={styles.title}>離婚率(人口動態調査)</Text>
            <View style={styles.chart}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    height={height * 0.8}
                    animate={{ duration: 5000, easing: 'bounce' }}
                >
                    <VictoryAxis tickValues={tickList} />
                    <VictoryAxis dependentAxis tickValues={tickValueList} />
                    <VictoryLine
                        data={data}
                        style={{ data: { stroke: 'purple' } }}
                    />
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