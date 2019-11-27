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
      axios.get(GET_URL)
        .then(
          (result) => {
              let start = 0;
              let end = 20;
              let birthrateBox = [];
              for(let i = start; i <= end; i++){
                birthrateBox.push({});
              }
              birthrateBox[0].x = 2017;
              birthrateBox[1].x = 2016;
              birthrateBox[2].x = 2015;
              birthrateBox[3].x = 2014;
              birthrateBox[4].x = 2013;
              birthrateBox[5].x = 2012;
              birthrateBox[6].x = 2011;
              birthrateBox[7].x = 2010;
              birthrateBox[8].x = 2009;
              birthrateBox[9].x = 2008;
              birthrateBox[10].x = 2007;
              birthrateBox[11].x = 2005;
              birthrateBox[12].x = 2000;
              birthrateBox[13].x = 1995;
              birthrateBox[14].x = 1990;
              birthrateBox[15].x = 1985;
              birthrateBox[16].x = 1980;
              birthrateBox[17].x = 1975;
              birthrateBox[18].x = 1970;
              birthrateBox[19].x = 1965;
              birthrateBox[20].x = 1960;
              for(let i = start; i <= end; i++){
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
      if(error){
        return <Text>Error: {error.message}</Text>;
      } else if (!isLoaded) {
        return <Text>Loading...</Text>;
      } else
      return(
        <ScrollView>
            <Card title="合計特殊出生率" height={height*0.95} containerStyle={{paddingTop: 20}}>
                <VictoryChart
                 theme={VictoryTheme.material}
                 height={height*0.8}
                >
                  <VictoryAxis
               　   tickValues={[1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015]}
                  />
                  <VictoryAxis dependentAxis
                    tickValues={[1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2]}
                  />
                    <VictoryLine
                       data={data}
                       style={{
                        data: { stroke: "#c43a31" }
                       }}
                     />
                 </VictoryChart>
             </Card>
               <View style={{alignItems: 'center', marginTop: 20}}>
                 <Icon name="arrow-down-circle" size={50}/>
               </View>
             <Card>
              <Text style={{marginBottom: 10}}>父「このグラフを見て気づいたことはあるかな？」</Text>
             </Card>
          </ScrollView>
      )
    }
}

export default Birthrate;