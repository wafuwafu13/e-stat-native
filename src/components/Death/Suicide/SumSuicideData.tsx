import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { chartData } from '../../../types/chartData';
import { sumSuicideData } from '../../../data/Death/sumSuicideData';

const SumSuicideData: React.FC = () => {
    const data: chartData[] = sumSuicideData();

    const renderData = ({ item }: { item: chartData }) => {
        return (
            <ScrollView>
                <Card>
                    <View style={styles.item}>
                        <Text style={styles.x}>{item.x}月</Text>
                        <Text>{item.y}人</Text>
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

export default SumSuicideData;

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
