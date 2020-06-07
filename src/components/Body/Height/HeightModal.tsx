import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {
    toggle: () => void;
};

const HeightPopulationModal: React.FC<Props> = (props) => {
    const { toggle } = props;

    return (
        <View style={styles.container}>
            <Text>平成28年国民健康・栄養調査の結果を表示します。</Text>
            <Text>
                国民健康・栄養調査は、毎年、食生活状況、喫煙、運動習慣などを調べており、
            </Text>
            <Text>
                国における健康増進対策や生活習慣病対策に不可欠な調査です。
            </Text>
            <Button title="閉じる" onPress={toggle} />
        </View>
    );
};

export default HeightPopulationModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffc'
    }
});
