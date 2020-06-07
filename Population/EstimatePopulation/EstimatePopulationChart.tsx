import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import axios from 'axios';
// @ts-ignore
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme, VictoryAxis } from 'victory-native';
// @ts-ignore
import config from '../../config';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Loading from '../../src/elements/Loading';

const EstimatePopulationChart = () => {

    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setError] = useState<any>(null)
    const [sumPopulation, setSumpopulation] = useState([])
    const [manPopulation, setManpopulation] = useState([])
    const [womanPopulation, setWomanpopulation] = useState([])
    const [spinner, setSpinner] = useState(true)

    let APP_ID = config.APP_ID
    let API_URL = "http://api.e-stat.go.jp/rest/2.1/app/json/getStatsData"
    let statsDataId ="0003312312"
    let GET_URL = API_URL;
    GET_URL += "?appId=" + escape(APP_ID);
    GET_URL += "&statsDataId=" + escape(statsDataId);

    let sumPopulationList: any = [];
    let manPopulationList: any = [];
    let womanPopulationList: any = [];
    // 0~98歳
    for(let i = 0; i <= 98; i++){
      sumPopulationList.push({
        x: i
      });
      manPopulationList.push({
        x: i
      });
      womanPopulationList.push({
        x: i
      });
    };

    useEffect(() => {
        setTimeout(()=>{
          setSpinner(false)
        }, 8000)

        axios.get(GET_URL)
        .then((res) => {
            const jsonData = res.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF;
            // 数字はjsonの始まりと終わり
            for(let i = 1; i <= 99; i++){
              sumPopulationList[i-1].y = Number(jsonData.VALUE[i].$)
            };
            for(let i = 205; i <= 303; i++){
              manPopulationList[i-205].y = Number(jsonData.VALUE[i].$)
            };
            for(let i = 409; i <= 507; i++){
              womanPopulationList[i-409].y = Number(jsonData.VALUE[i].$)
            }

            setIsLoaded(true);
            setSumpopulation(sumPopulationList);
            setManpopulation(manPopulationList);
            setWomanpopulation(womanPopulationList);
        })
        .catch((error) => {
            setIsLoaded(false)
            setError(error)
        })
    }, [])

    let tickXvalueList = [];
    for(let i = 5; i <= 95; i+=5){
      tickXvalueList.push(i)
    }
    let tickYValueList = [];
    for(let i = 250; i <= 2000; i+=250){
      tickYValueList.push(i)
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
              人口推計(平成30年10月1日現在)
            </Text>
            <View style={styles.chart}>
                <VictoryChart
                  animate={{ duration: 5000, easing: "bounce" }}
                  theme={VictoryTheme.material}
                  height={height*0.8}
                  margin={2}
                >
                  <VictoryAxis
                   tickValues={tickXvalueList}
                  />
                  <VictoryAxis dependentAxis
                    tickFormat={(y: any) => (`${y/10}万`)}
                    tickValues={tickYValueList}
                  />
                  <VictoryGroup
                    colorScale={["#66CC66", "#3399FF", "#FF66CC"]}
                    offset={2}
                    style={{data:{width:1.5}}}
                  >
                    <VictoryBar
                      data={sumPopulation}
                    />
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

export default EstimatePopulationChart;

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