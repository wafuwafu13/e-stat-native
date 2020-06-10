import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { chartData } from '../../../types/chartData';

import { estimateManPopulationData } from '../../../data/Population/estimateManPopulationData';

const EstimateManPopulationData: React.FC = () => {
    const data: chartData[] = estimateManPopulationData();

    const renderData = ({ item }: { item: chartData }) => {
        let itemY: string = String(item.y);
        return (
            <ScrollView>
                <Card>
                    <View style={styles.item}>
                        <Text style={styles.x}>{item.x}年</Text>
                        <Text>{itemY.replace(/(\d)(?=(\d\d\d)+$)/g, '$1,')}万人</Text>
                    </View>
                </Card>
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
        alignItems: 'center',
        marginBottom: wp('5%')
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: wp('20%'),
        paddingRight: wp('20%'),
        position: 'relative'
    },
    x: {
        position: 'absolute',
        left: wp('0.5%')
    }
});
