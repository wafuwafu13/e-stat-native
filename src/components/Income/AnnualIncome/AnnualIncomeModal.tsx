import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {
    toggle: () => void;
};

const AnnualIncomeModal: React.FC<Props> = (props) => {
    const { toggle } = props;

    return (
        <View style={styles.container}>
            <Text>平成28年民間給与実態調査の結果を表示します。</Text>
            <Text>
                民間給与実態調査は、民間の事業所における年間の給与の実態を
            </Text>
            <Text>
                給与階級別、事業所規模別、企業規模別等に明らかにする調査です。
            </Text>
            <Text>20~24歳、25歳~29歳という年代別で調査をしています。</Text>
            <Button title="閉じる" onPress={toggle} />
        </View>
    );
};

export default AnnualIncomeModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffc'
    }
});
