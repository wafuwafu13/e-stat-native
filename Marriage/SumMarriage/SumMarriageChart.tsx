import React, { useState, useEffect } from 'react';
import { StyleSheet, View,  Text, Dimensions } from 'react-native';
// @ts-ignore
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Loading from '../../src/elements/Loading';

const SumMariageChart = () => {

    const [spinner, setSpinner] = useState(true)

    let sumMariageList = [];
    let sumMariageYear = [];
    for(let i = 2017; i >= 2000; i--){
        sumMariageYear.push(i);
    }
    for(let i = 1995; i >= 1950; i-=5){
        sumMariageYear.push(i);
    }
    sumMariageYear[28] = 1947;
    sumMariageYear[29] = 1943;
    for(let i = 1940; i >= 1930; i-=5){
        sumMariageYear.push(i);
    }

    let sumMariage = [606866, 620531, 635156, 643749, 660613, 668869, 661895, 700214, 707734, 726106,
                      719822, 730971, 714265, 720417, 740191, 757331, 799999, 798138, 791888, 722138,
                      735850, 774702, 941628, 1029405, 954852, 866115, 714861, 715081, 934170, 743842,
                      666575, 556730, 506674]

    for(let i = 0; i <= 32; i++){
        sumMariageList.push({
          x: sumMariageYear[i],
          y: sumMariage[i]
        });
    }

    let tickXList = [];
    for(let i = 1930; i <= 2015; i+=5){
        tickXList.push(i);
    }
    let tickYList = [];
    for(let i = 500000; i <= 1100000; i+=100000){
        tickYList.push(i);
    }

    const data = sumMariageList;
    const height = Dimensions.get('window').height;

    useEffect(() => {
      setTimeout(() => {
        setSpinner(false)
      }, 3000)
    }, [spinner])

    return(
        <View style={styles.container}>
            <Loading visible={spinner}/>
            <Text style={styles.title}>
                結婚件数(人口動態調査)
            </Text>
            <View style={styles.chart}>
                <VictoryChart
                  animate={{ duration: 4000, easing: "bounce" }}
                  theme={VictoryTheme.material}
                  height={height*0.8}
                >
                  <VictoryAxis
             　     tickValues={tickXList}
                  />
                  <VictoryAxis dependentAxis
                    tickFormat={(y: any) => (`${y/10000}万`)}
                    tickValues={tickYList}
                  />
                    <VictoryScatter
                      data={data}
                      style={{data: {fill: "gold"}}}
                      size={5}
                    />
                </VictoryChart>
            </View>  
        </View>
    )
}

export default SumMariageChart;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: wp('3%'),
    color: '#3E3D3D',
  },
  chart:{
    marginBottom: hp('15%')
  }
})