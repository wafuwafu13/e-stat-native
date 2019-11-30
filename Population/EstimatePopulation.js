import React, { Component } from 'react';
import { Text, ScrollView, Dimensions } from 'react-native';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme, VictoryAxis } from 'victory-native';
import { Card } from 'react-native-elements';

class EstimatePopulation extends Component {

  constructor(props) {
    super(props);
    this.state= {
      isLoaded: true,
      error: null,
      sumPopulation: [],
      manPopulation: [],
      womanPopulation: [],
    }
  }

  componentWillMount() {

    let APP_ID = "857f6df73c559e37a4dabc4d2b7eb090d8b9893d"
    let API_URL = "http://api.e-stat.go.jp/rest/2.1/app/json/getStatsData"
    let statsDataId ="0003312312"
    let GET_URL = API_URL;
    GET_URL += "?appId=" + escape(APP_ID);
    GET_URL += "&statsDataId=" + escape(statsDataId);

    axios.get(GET_URL)
    .then(
      (result) =>{
        let ageStart = 0;
        let ageEnd = 98;
        let sumPopulationBox = [];
        let sumStart = 1;
        let sumEnd = 99;
        let manPopulationBox = [];
        let manStart = 205;
        let manEnd = 303;
        let womanPopulationBox = [];
        let womanStart = 409;
        let womanEnd = 507;
        for(let i = ageStart; i <= ageEnd; i++){
          sumPopulationBox.push({});
          manPopulationBox.push({});
          womanPopulationBox.push({});
        };
        for(let i = 0; i <= 98; i++){
          sumPopulationBox[i].x = i;
          manPopulationBox[i].x = i;
          womanPopulationBox[i].x = i;
        }
        for(let i = sumStart; i <= sumEnd; i++){
          sumPopulationBox[i-sumStart].y = Number(result.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$)
        };
        for(let i = manStart; i <= manEnd; i++){
          manPopulationBox[i-manStart].y = Number(result.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$)
        };
        for(let i = womanStart; i <= womanEnd; i++){
          womanPopulationBox[i-womanStart].y = Number(result.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$)
        }
        this.setState({
          isLoaded: true,
          sumPopulation: sumPopulationBox,
          manPopulation: manPopulationBox,
          womanPopulation: womanPopulationBox,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error: error,
        })
      },
     )
   }

   render(){
     const error = this.state.error;
     const isLoaded = this.state.isLoaded;
     const sumData = this.state.sumPopulation;
     const manData = this.state.manPopulation;
     const womanData = this.state.womanPopulation;
     const height = Dimensions.get('window').height;
     if(error){
       return <Text>Error: {error.message}</Text>;
     } else if (!isLoaded) {
       return <Text>Loading...</Text>;
     } else {
       return(
        <ScrollView>
           <Card title="人口推計 (平成30年10月1日)" height={height*0.95} containerStyle={{paddingTop: 20,}}>
             <VictoryChart
               theme={VictoryTheme.material}
               height={height*0.8}
               margin={2}
             >
               <VictoryAxis
               　tickValues={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]}
               />
               <VictoryAxis dependentAxis
                 tickFormat={(y) => (`${y/10}万`)}
                 tickValues={[250, 500, 750, 1000, 1250, 1500, 1750, 2000]}
               />
               <VictoryGroup
                 colorScale={["#66CC66", "#3399FF", "#FF66CC"]}
                 offset={2}
                 style={{data:{width:1.5}}}
               >
                 <VictoryBar
                   data={sumData}
                 />
                 <VictoryBar
                   data={manData}
                 />
                 <VictoryBar
                   data={womanData}
                 />
               </VictoryGroup>
             </VictoryChart>
           </Card>
           <Card>
            <Text style={{marginBottom: 10}}>父「うーん。0~5歳あたりを見ても人口は増えていないなー。」</Text>
            <Text style={{marginBottom: 10}}>息子「2016年に初めて出生数が100万人を割ったんだよ。」</Text>
            <Text style={{marginBottom: 10}}>息子「出生数だけでいうとベビーブームの時は250万人を超えていたんだよ。」</Text>
            <Text style={{marginBottom: 10}}>父「その頃と比べてだいたい4割しかうまれていないのか。。。」</Text>
            <Text style={{marginBottom: 10}}>息子「合計特殊出生率を見たらもっと分かりやすいんじゃない？」</Text>
            <Text style={{marginBottom: 10}}>父「(ゴソゴソゴソゴソ)」</Text>
           </Card>
         </ScrollView>
       )
     }
   }
}

export default EstimatePopulation;