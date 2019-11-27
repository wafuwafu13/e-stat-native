import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from 'victory-native';
import { Card } from 'react-native-elements';

class SumPopulation extends Component {

    constructor(props) {
        super(props);
        this.state= {
          isLoaded: true,
          error: null,
          sumPopulation: [],
        }
      }

    componentWillMount() {
      let APP_ID = "857f6df73c559e37a4dabc4d2b7eb090d8b9893d"
      let API_URL = "http://api.e-stat.go.jp/rest/2.1/app/json/getStatsData"
      let cdCat03 = "0000"
      let cdCat04 = "0000"
      let cdArea = "00000"
      let cdCat02 = "0000%2C0010%2C0020%2C0030%2C0040%2C0050%2C0060%2C0070%2C0080%2C0090%2C0100%2C0110%2C0120%2C0130%2C0140%2C0150%2C0160%2C0170%2C0180%2C0190%2C0200%2C0210%2C0220%2C0230%2C0240%2C0250%2C0260%2C0270%2C0280%2C0290%2C0300%2C0310%2C0320%2C0330%2C0340%2C0350%2C0360%2C0370%2C0380%2C0390%2C0400%2C0410%2C0420%2C0430%2C0440%2C0450%2C0460%2C0470%2C0480%2C0490%2C0500%2C0510%2C0520%2C0530%2C0540%2C0550%2C0560%2C0570%2C0580%2C0590%2C0600%2C0610%2C0620%2C0630%2C0640%2C0650%2C0660%2C0670%2C0680%2C0690%2C0700%2C0710%2C0720%2C0730%2C0740%2C0750%2C0760%2C0770%2C0780%2C0790%2C0800%2C0810%2C0820%2C0830%2C0840%2C0850%2C0860%2C0870%2C0880%2C0890%2C0900%2C0910%2C0920%2C0930%2C0940%2C0950%2C0960%2C0970%2C0980%2C0990"
      let cdCat01 = "00710"
      let statsDataId ="0003149249"
      let GET_URL = API_URL;
      GET_URL += "?cdCat03=" + cdCat03;
      GET_URL += "&cdCat04=" + cdCat04;
      GET_URL += "&cdArea=" + cdArea;
      GET_URL += "&cdCat02=" + cdCat02;
      GET_URL += "&cdCat01=" + cdCat01;
      GET_URL += "&appId=" + escape(APP_ID);
      GET_URL += "&statsDataId=" + escape(statsDataId);
      //console.log(GET_URL);
      axios.get(GET_URL)
      .then(
        (result) => {
            let start = 1;
            let end = 99;
            let sumPopulationBox = [];
            for(let i = start; i <= end; i++){
                sumPopulationBox.push({});
            }
            for(let i = 0; i <= 98; i++){
                sumPopulationBox[i].x = i;
            }
            for(let i = start; i <= end; i++){
                sumPopulationBox[i-start].y = Number(result.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$)
            }
            this.setState({
                isLoaded: true,
                sumPopulation: sumPopulationBox,
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error: error,
              });
        },
      )
    }
    render(){
        const error = this.state.error;
        const isLoaded = this.state.isLoaded;
        const data = this.state.sumPopulation;
        if(error){
            return <Text>Error: {error.message}</Text>;
          } else if (!isLoaded) {
            return <Text>Loading...</Text>;
          } else
          return(
            <ScrollView>
              <Card title="日本の総人口">
              <VictoryChart
               theme={VictoryTheme.material}
               domainPadding={10}>
                <VictoryBar
                   data={data}
                 />
              </VictoryChart>
              </Card>
            </ScrollView>
          )
     }
}


export default SumPopulation;