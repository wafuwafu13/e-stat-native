import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { chartData } from '../../../types/chartData';

import { estimateManPopulationData } from '../../../data/Population/estimateManPopulationData';

import { shapeData } from './shapeData';

const EstimateManPopulationData: React.FC = () => {
    const data: chartData[] = estimateManPopulationData();

    const renderData = ({ item }: { item: chartData }) => {
        let Y = shapeData(item.y);
        return (
            <ScrollView>
                <View style={styles.item}>
                    <Text style={styles.text}>{item.x}歳</Text>
                    <Text>{Y}万人</Text>
                </View>
            </ScrollView>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderData} />
        </View>
    );
};

export default EstimateManPopulationData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    item: {
        flex: 1,
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
        justifyContent: 'center',
        paddingLeft: wp('40%'),
        paddingRight: wp('40%')
    },
    text: {
        marginBottom: wp('0.3%')
    }
});
