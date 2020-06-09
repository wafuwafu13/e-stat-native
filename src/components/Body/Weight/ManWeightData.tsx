import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { chartData } from '../../../types/chartData';
import { manWeightData } from '../../../data/Body/manWeightData';

const ManWeightData: React.FC = () => {
    const data: chartData[] = manWeightData();

    const renderData = ({ item }: { item: chartData }) => {
        let itemY: string = String(item.y);
        return (
            <ScrollView>
                <View style={styles.item}>
                    <Text style={styles.text}>{item.x}歳</Text>
                    <Text>{item.y}kg</Text>
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

export default ManWeightData;

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
