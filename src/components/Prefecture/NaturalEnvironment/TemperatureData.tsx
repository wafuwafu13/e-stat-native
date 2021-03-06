import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { prefectureData } from '../../../types/prefectureData';
import { temperatureData } from '../../../data/Prefecture/temperatureData';

const TotalAreaData: React.FC = () => {
    const data: prefectureData[] = temperatureData();

    const renderData = ({ item, index }: { item: prefectureData; index: number }) => {
        return (
            <ScrollView>
                <Card>
                    <View style={styles.item}>
                        <Text style={styles.x}>
                            {index + 1}位 {item.x}
                        </Text>
                        <Text>{item.y}℃</Text>
                    </View>
                </Card>
            </ScrollView>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderData} keyExtractor={(item) => item.x} />
        </View>
    );
};

export default TotalAreaData;

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
