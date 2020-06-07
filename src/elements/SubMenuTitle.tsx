import React from 'react';
import { StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type Props = {
    children?: React.ReactNode
}

const SubMenuTitle: React.FC<Props> = props => {
    return(
        <Animatable.Text animation="bounceInUp" style={styles.subMenuTitle}>
            { props.children }
        </Animatable.Text>
    )
}

export default SubMenuTitle;

const styles = StyleSheet.create({
    subMenuTitle:{
        marginBottom: hp('5%'),
        fontSize: wp('3%'),
        color: '#4B4B4B',
    },
})