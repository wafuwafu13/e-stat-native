import React, { useState, useEffect } from 'react';
import { StyleSheet, View,  Text, Dimensions } from 'react-native';
// @ts-ignore
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryGroup } from 'victory-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Loading from '../../../elements/Loading';

import { chartData } from '../../../types/chartData';

const UnmarridChart: React.FC = () => {

    const [spinner, setSpinner] = useState<boolean>(true)

    let manUnmarridList: chartData[] = [];
    let womanUnmarridList: chartData[] = [];
    let UnmarridYear: number[] = [];

    for(let i = 1920; i <= 2015; i+=5){
        if(i == 1945) continue;
        UnmarridYear.push(i);
    }

    let manUnmarrid: number[] = [2.82, 2.26, 2.433, 2.425, 2.73, 1.88, 1.73, 2.03, 2.44, 2.82,
                       3.66, 4.75, 7.44, 11.78, 16.51, 18.69, 22.70, 28.6, 29.96]

    let womanUnmarrid: number[] = [2.15, 1.89, 1.79, 1.792, 2, 1.99, 2.34, 3.14, 4.67, 5.29,
                         4.99, 4.45, 4.89, 5.78, 6.76, 8.64, 12.24, 17.37, 19.3]

    for(let i = 0; i <= 18; i++){
      manUnmarridList.push({
        x:  UnmarridYear[i],
        y:  manUnmarrid[i]
      });
      womanUnmarridList.push({
        x: UnmarridYear[i],
        y: womanUnmarrid[i]
      });
    }

    let tickXList: number[] = [];
    for(let i = 1920; i <= 2015; i+=5){
        tickXList.push(i);
    }

    let tickYList: number[] = [];
    for(let i = 5; i <= 30; i+=5){
        tickYList.push(i);
    }

    const manData: chartData[] = manUnmarridList;
    const womanData: chartData[] = womanUnmarridList

    useEffect(() => {
      setTimeout(() => {
        setSpinner(false)
      }, 5000)
    }, [spinner])

    return(
      <View style={styles.container}>
          <Loading visible={spinner}/>
          <Text style={styles.title}>
              40~45歳男女の未婚率(国勢調査)
          </Text>
          <View style={styles.chart}>
              <VictoryChart
                theme={VictoryTheme.material}
                height={height*0.8}
                animate={{ duration: 5000, easing: "bounce" }}
              >
                <VictoryAxis
             　   tickValues={tickXList}
                />
                <VictoryAxis dependentAxis
                  tickValues={tickYList}
                />
                  <VictoryGroup
                    colorScale={["#3399FF", "#FF66CC"]}
                    offset={2}
                    style={{data:{width:1.5}}}
                  >
                    <VictoryLine
                      data={manData}
                    />
                    <VictoryLine
                      data={womanData}
                    />
                  </VictoryGroup>
              </VictoryChart>
          </View>
      </View>
    )
}

export default UnmarridChart;

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

const height: number = Dimensions.get('window').height;