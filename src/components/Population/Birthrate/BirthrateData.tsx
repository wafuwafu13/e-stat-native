import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { chartData } from '../../../types/chartData';
import { birthrateData } from '../../../data/Population/birthrateData';

const BirthrateData: React.FC = () => {
    const data: chartData[] = birthrateData();

    const renderData = ({ item }: { item: chartData }) => {
        return (
            <ScrollView>
                <View style={styles.item}>
                    <Text style={styles.text}>{item.x}年</Text>
                    <Text>{item.y}</Text>
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

export default BirthrateData;

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
