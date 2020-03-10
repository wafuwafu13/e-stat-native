import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import axios from 'axios';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class Birthrate extends Component {

    constructor(props) {
        super(props);
        this.state= {
          isLoaded: true,
          error: null,
          bitrhrate: [],
        }
      }

    componentWillMount() {
      let APP_ID = "857f6df73c559e37a4dabc4d2b7eb090d8b9893d"
      let API_URL = "http://api.e-stat.go.jp/rest/2.1/app/json/getStatsData"
      let cdArea = "00000"
      let statsDataId ="0003214667"
      let GET_URL = API_URL;
      GET_URL += "?cdArea=" + cdArea;
      GET_URL += "&appId=" + escape(APP_ID);
      GET_URL += "&statsDataId=" + escape(statsDataId);
      let birthrateBox = [];
      let birthrateYear = [];
      for(let i = 2017; i >= 2007; i--){
        birthrateYear.push(i);
      }
      for(let i = 2005; i >= 1950; i-=5){
        birthrateYear.push(i);
      }
      birthrateYear[23] = 1947;
      for(let i = 0; i <= 23; i++){
        birthrateBox.push({});
        birthrateBox[i].x = birthrateYear[i];
      }
      // jsonから得られないので追加
      birthrateBox[21].y = 2.37;
      birthrateBox[22].y = 3.65;
      birthrateBox[23].y = 4.54;
      axios.get(GET_URL)
        .then(
          (result) => {
              for(let i = 0; i <= 20; i++){
                birthrateBox[i].y = Number(result.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$);
              }
              this.setState({
                isLoaded: true,
                birthrate: birthrateBox,
            });
          (error) => {
            this.setState({
                isLoaded: true,
                error: error,
              });
          }
        },
        )
    }
    render(){
      const error = this.state.error;
      const isLoaded = this.state.isLoaded;
      const data = this.state.birthrate;
      const height = Dimensions.get('window').height;
      let tickXValuesBox = [];
      for(let i = 1945; i <= 2015; i+=5){
        tickXValuesBox.push(i);
      }
      let tickYValuesBox = [];
      for(let i = 1; i <= 4.8; i += 0.2){
        tickYValuesBox.push(Math.round(i*10)/10);
      }
      if(error){
        return <Text>Error: {error.message}</Text>;
      } else if (!isLoaded) {
        return <Text>Loading...</Text>;
      } else
      return(
        <ScrollView>
                <VictoryChart
                 theme={VictoryTheme.material}
                 height={height*0.8}
                 animate={{ duration: 10000, easing: "bounce" }}
                >
                  <VictoryAxis
               　   tickValues={tickXValuesBox}
                  />
                  <VictoryAxis dependentAxis
                    tickValues={tickYValuesBox}
                  />
                    <VictoryLine
                       data={data}
                       style={{
                        data: { stroke: "#c43a31" }
                       }}
                     />
                 </VictoryChart>
          </ScrollView>
      )
    }
}

export default Birthrate;