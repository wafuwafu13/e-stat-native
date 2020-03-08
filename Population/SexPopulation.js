import React, { Component } from 'react';
import { Text, ScrollView, Dimensions } from 'react-native';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme, VictoryAxis } from 'victory-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class SexPopulation extends Component {

    constructor(props) {
        super(props);
        this.state= {
          isLoaded: true,
          error: null,
          manPopulation: [],
          womanPopulation: [],
        }
      }

    componentWillMount() {
        let APP_ID = "857f6df73c559e37a4dabc4d2b7eb090d8b9893d"
        let API_URL = "http://api.e-stat.go.jp/rest/2.1/app/json/getStatsData"
        let cdCat03_M = "0010"
        let cdCat04_M = "0000"
        let cdArea_M = "00000"
        let cdCat02_M = "0010%2C0020%2C0030%2C0040%2C0050%2C0060%2C0070%2C0080%2C0090%2C0100%2C0110%2C0120%2C0130%2C0140%2C0150%2C0160%2C0170%2C0180%2C0190%2C0200%2C0210%2C0220%2C0230%2C0240%2C0250%2C0260%2C0270%2C0280%2C0290%2C0300%2C0310%2C0320%2C0330%2C0340%2C0350%2C0360%2C0370%2C0380%2C0390%2C0400%2C0410%2C0420%2C0430%2C0440%2C0450%2C0460%2C0470%2C0480%2C0490%2C0500%2C0510%2C0520%2C0530%2C0540%2C0550%2C0560%2C0570%2C0580%2C0590%2C0600%2C0610%2C0620%2C0630%2C0640%2C0650%2C0660%2C0670%2C0680%2C0690%2C0700%2C0710%2C0720%2C0730%2C0740%2C0750%2C0760%2C0770%2C0780%2C0790%2C0800%2C0810%2C0820%2C0830%2C0840%2C0850%2C0860%2C0870%2C0880%2C0890%2C0900%2C0910%2C0920%2C0930%2C0940%2C0950%2C0960%2C0970%2C0980%2C0990%2C1000"
        let cdCat01_M = "00710"
        let statsDataId_M ="0003149249"
        let GET_URL_M = API_URL;
        GET_URL_M += "?cdCat03=" + cdCat03_M;
        GET_URL_M += "&cdCat04=" + cdCat04_M;
        GET_URL_M += "&cdArea=" + cdArea_M;
        GET_URL_M += "&cdCat02=" + cdCat02_M;
        GET_URL_M += "&cdCat01=" + cdCat01_M;
        GET_URL_M += "&appId=" + escape(APP_ID);
        GET_URL_M += "&statsDataId=" + escape(statsDataId_M);
        let cdCat03_W = "0020"
        let cdCat04_W = "0000"
        let cdArea_W = "00000"
        let cdCat02_W = "0010%2C0020%2C0030%2C0040%2C0050%2C0060%2C0070%2C0080%2C0090%2C0100%2C0110%2C0120%2C0130%2C0140%2C0150%2C0160%2C0170%2C0180%2C0190%2C0200%2C0210%2C0220%2C0230%2C0240%2C0250%2C0260%2C0270%2C0280%2C0290%2C0300%2C0310%2C0320%2C0330%2C0340%2C0350%2C0360%2C0370%2C0380%2C0390%2C0400%2C0410%2C0420%2C0430%2C0440%2C0450%2C0460%2C0470%2C0480%2C0490%2C0500%2C0510%2C0520%2C0530%2C0540%2C0550%2C0560%2C0570%2C0580%2C0590%2C0600%2C0610%2C0620%2C0630%2C0640%2C0650%2C0660%2C0670%2C0680%2C0690%2C0700%2C0710%2C0720%2C0730%2C0740%2C0750%2C0760%2C0770%2C0780%2C0790%2C0800%2C0810%2C0820%2C0830%2C0840%2C0850%2C0860%2C0870%2C0880%2C0890%2C0900%2C0910%2C0920%2C0930%2C0940%2C0950%2C0960%2C0970%2C0980%2C0990%2C1000"
        let cdCat01_W = "00710"
        let statsDataId_W ="0003149249"
        let GET_URL_W = API_URL;
        GET_URL_W += "?cdCat03=" + cdCat03_W;
        GET_URL_W += "&cdCat04=" + cdCat04_W;
        GET_URL_W += "&cdArea=" + cdArea_W;
        GET_URL_W += "&cdCat02=" + cdCat02_W;
        GET_URL_W += "&cdCat01=" + cdCat01_W;
        GET_URL_W += "&appId=" + escape(APP_ID);
        GET_URL_W += "&statsDataId=" + escape(statsDataId_W);
        let manPopulationBox = [];
        let womanPopulationBox = [];
        for(let i = 0; i <= 98; i++){
          manPopulationBox.push({});
          womanPopulationBox.push({});
          manPopulationBox[i].x = i;
          womanPopulationBox[i].x = i;
        }
        axios.get(GET_URL_M)
          .then(
              (result) => {
                  for(let i = 0; i <= 98; i++){
                    manPopulationBox[i].y = Number(result.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$);
                  }
                  this.setState({
                    isLoaded: true,
                    manPopulation: manPopulationBox,
                  });
              },
              (error) => {
                  this.setState({
                      isLoaded: true,
                      error: error,
                    });
              },
          )
          axios.get(GET_URL_W)
          .then(
              (result) => {
                  for(let i = 0; i <= 98; i++){
                    womanPopulationBox[i].y = Number(result.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$);
                  }
                  this.setState({
                    isLoaded: true,
                    womanPopulation: womanPopulationBox,
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
        const mandata = this.state.manPopulation;
        const womandata = this.state.womanPopulation;
        const height = Dimensions.get('window').height;
        if(error){
            return <Text>Error: {error.message}</Text>;
          } else if (!isLoaded) {
            return <Text>Loading...</Text>;
          } else
          return(
            <ScrollView>
              <Card title="男女別総人口 (平成27年国勢調査)" height={hp('95%')} containerStyle={{paddingTop: 20}}>
                <VictoryChart
                 theme={VictoryTheme.material}
                 height={height*0.8}
                 margin={2}
                >
                  <VictoryAxis
               　   tickValues={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]}
                  />
                  <VictoryAxis dependentAxis
                    tickFormat={(y) => (`${y/10000}万`)}
                    tickValues={[250000, 500000, 750000, 1000000, 1250000]}
                  />
                     <VictoryGroup
                      colorScale={["#3399FF", "#FF66CC"]}
                      offset={2}
                      style={{data:{width:1.5}}}
                     >
                       <VictoryBar
                        data={mandata}
                       />
                       <VictoryBar
                        data={womandata}
                       />
                   </VictoryGroup>
                </VictoryChart>
              </Card>
            </ScrollView>
          )
     }
}

export default SexPopulation;