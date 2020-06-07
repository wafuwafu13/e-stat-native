import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import axios from 'axios';
// @ts-ignore
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
// @ts-ignore
import config from '../../../../config';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Loading from '../../../elements/Loading';

const BirthrateChart = () => {

    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setError] = useState<any>(null)
    const [birthrate, setBirthrate] = useState([])
    const [spinner, setSpinner] = useState(true)

    let APP_ID = config.APP_ID
    let API_URL = "http://api.e-stat.go.jp/rest/2.1/app/json/getStatsData"
    let cdArea = "00000"
    let statsDataId ="0003214667"
    let GET_URL = API_URL;
    GET_URL += "?cdArea=" + cdArea;
    GET_URL += "&appId=" + escape(APP_ID);
    GET_URL += "&statsDataId=" + escape(statsDataId);

    let birthrateList: any = [];
    let birthrateYear = [];
    for(let i = 2017; i >= 2007; i--){
      birthrateYear.push(i);
    }
    for(let i = 2005; i >= 1950; i-=5){
      birthrateYear.push(i);
    }
    birthrateYear[23] = 1947;
    for(let i = 0; i <= 23; i++){
      birthrateList.push({
        x: birthrateYear[i]
      });
    }

    useEffect(() => {

        setTimeout(() => {
          setSpinner(false)
        }, 3000)

        axios.get(GET_URL)
        .then((res) => {
            const jsonData = res.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF;
            for(let i = 0; i <= 20; i++){
              birthrateList[i].y = Number(jsonData.VALUE[i].$);
            }
            // apiで得られないので追加
            birthrateList[21].y = 2.37;
            birthrateList[22].y = 3.65;
            birthrateList[23].y = 4.54;
            setIsLoaded(true);
            setBirthrate(birthrateList);
        })
        .catch((error) => {
          setIsLoaded(false)
          setError(error)
        })
    },[])

    let tickXValueList = [];
    for(let i = 1945; i <= 2015; i+=5){
      tickXValueList.push(i);
    }
    let tickYValueList = [];
    for(let i = 1; i <= 4.8; i += 0.2){
      tickYValueList.push(Math.round(i*10)/10);
    }

    const height = Dimensions.get('window').height;

    if(error){
      return <Text>Error: {error.message}</Text>;
    }else if(!isLoaded) {
      return <Text>Loading...</Text>;
    }else
    return(
      <View style={styles.container}>
          <Loading visible={spinner}/>
          <Text style={styles.title}>
              合計特殊出生率
          </Text>
          <View style={styles.chart}>
              <VictoryChart
               theme={VictoryTheme.material}
               height={height*0.8}
               animate={{ duration: 2000, easing: "bounce" }}
              >
                <VictoryAxis
           　       tickValues={tickXValueList}
                />
                <VictoryAxis dependentAxis
                  tickValues={tickYValueList}
                />
                  <VictoryLine
                     data={birthrate}
                     style={{ data: { stroke: "#c43a31" } }}
                   />
              </VictoryChart>
          </View>
      </View>
    )
}

export default BirthrateChart;

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