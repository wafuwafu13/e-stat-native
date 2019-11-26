import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from 'victory-native';
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
        //console.log(result);
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
     if(error){
       return <Text>Error: {error.message}</Text>;
     } else if (!isLoaded) {
       return <Text>Loading...</Text>;
     } else {
       return(
        <ScrollView>
         <View style={styles.container}>
           <Card title="日本の推定人口" style={{height: 200, width:300}}>
             <VictoryChart
               theme={VictoryTheme.material}
               domainPadding={10}>
               <VictoryGroup
                 colorScale={["#66CC66", "#3399FF", "#FF66CC"]}
                 offset={10}
                 style={{data:{width: 3}}}
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
         </View>
         </ScrollView>
       )
     }
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
  }
});

export default EstimatePopulation;