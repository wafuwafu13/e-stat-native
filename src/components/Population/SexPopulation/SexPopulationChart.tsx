import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import axios from 'axios';
// @ts-ignore
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme, VictoryAxis } from 'victory-native';
// @ts-ignore
import config from '../../../../config';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Loading from '../../../elements/Loading';

const SexPopulation = () => {

    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setError] = useState<any>(null)
    const [manPopulation, setManPopulation] = useState([])
    const [womanPopulation, setWomanPopulation] = useState([])
    const [spinner, setSpinner] = useState(true)

    const createUrl = (id: string) => {
        const APP_ID = config.APP_ID;
        const API_URL = "http://api.e-stat.go.jp/rest/2.1/app/json/getStatsData"
        const cdCat03 = id;
        const cdCat04 = "0000";
        const cdArea = "00000";
        const cdCat02 = "0010%2C0020%2C0030%2C0040%2C0050%2C0060%2C0070%2C0080%2C0090%2C0100%2C0110%2C0120%2C0130%2C0140%2C0150%2C0160%2C0170%2C0180%2C0190%2C0200%2C0210%2C0220%2C0230%2C0240%2C0250%2C0260%2C0270%2C0280%2C0290%2C0300%2C0310%2C0320%2C0330%2C0340%2C0350%2C0360%2C0370%2C0380%2C0390%2C0400%2C0410%2C0420%2C0430%2C0440%2C0450%2C0460%2C0470%2C0480%2C0490%2C0500%2C0510%2C0520%2C0530%2C0540%2C0550%2C0560%2C0570%2C0580%2C0590%2C0600%2C0610%2C0620%2C0630%2C0640%2C0650%2C0660%2C0670%2C0680%2C0690%2C0700%2C0710%2C0720%2C0730%2C0740%2C0750%2C0760%2C0770%2C0780%2C0790%2C0800%2C0810%2C0820%2C0830%2C0840%2C0850%2C0860%2C0870%2C0880%2C0890%2C0900%2C0910%2C0920%2C0930%2C0940%2C0950%2C0960%2C0970%2C0980%2C0990%2C1000";
        const cdCat01 = "00710"
        const statsDataId ="0003149249"
        let URL = API_URL;
        URL += "?cdCat03=" + cdCat03;
        URL += "&cdCat04=" + cdCat04;
        URL += "&cdArea=" + cdArea;
        URL += "&cdCat02=" + cdCat02;
        URL += "&cdCat01=" + cdCat01;
        URL += "&appId=" + escape(APP_ID);
        URL += "&statsDataId=" + escape(statsDataId);
  
        return URL
    }

    const manUrl = createUrl("0010");
    const womanUrl = createUrl("0020");
    
    let manPopulationList: any = [];
    let womanPopulationList: any = [];
    for(let i = 0; i <= 98; i++){
      manPopulationList.push({
        x: i
      });
      womanPopulationList.push({
        x: i
      });
    }

    useEffect(() => {

      setTimeout(()=>{
        setSpinner(false)
      }, 8000)

      axios.get(manUrl)
      .then((res) => {
          const manJsonData = res.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF;
          for(let i = 0; i <= 98; i++){
            manPopulationList[i].y = Number(manJsonData.VALUE[i].$);
          }
          setIsLoaded(true)
          setManPopulation(manPopulationList)
      })
      .catch((error) => {
          setIsLoaded(false)
          setError(error)
      })

      axios.get(womanUrl)
      .then((res) => {
          const womanJsonData = res.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF;
          for(let i = 0; i <= 98; i++){
            womanPopulationList[i].y = Number(womanJsonData.VALUE[i].$);
          }
          setIsLoaded(true)
          setWomanPopulation(womanPopulationList)
      })
      .catch((error) => {
          setIsLoaded(false)
          setError(error)
      })
    }, [spinner])

    let tickXvalueList = [];
    for(let i = 5; i <= 95; i+=5){
      tickXvalueList.push(i);
    }
    let tickYValueList = [];
    for(let i = 250000; i <= 1250000; i+=250000){
      tickYValueList.push(i);
    }

    const height = Dimensions.get('window').height;

    if(error){
        return <Text>Error: {error.message}</Text>;
    }else if(!isLoaded) {
      return <Text>Loading...</Text>;
    }else{
      return(
        <View style={styles.container}>
            <Loading visible={spinner}/>
            <Text style={styles.title}>
                男女別総人口(平成27年国勢調査)
            </Text>
            <View style={styles.chart}>
                <VictoryChart
                 theme={VictoryTheme.material}
                 height={height*0.8}
                 margin={2}
                 animate={{ duration: 5000, easing: "bounce" }}
                >
                  <VictoryAxis
           　       tickValues={tickXvalueList}
                  />
                  <VictoryAxis dependentAxis
                    tickFormat={(y: any) => (`${y/10000}万`)}
                    tickValues={tickYValueList}
                  />
                     <VictoryGroup
                      colorScale={["#3399FF", "#FF66CC"]}
                      offset={2}
                      style={{ data: {width:1.5} }}
                     >
                       <VictoryBar
                        data={manPopulation}
                       />
                       <VictoryBar
                        data={womanPopulation}
                       />
                   </VictoryGroup>
                </VictoryChart>
            </View>
        </View>
      )
    }
}

export default SexPopulation;

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