import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme, VictoryAxis } from 'victory-native';
import Spinner from 'react-native-loading-spinner-overlay';
import config from '../../config';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class EstimatePopulationChart extends Component {

    constructor(props){
      super(props);
      this.state= {
        isLoaded: true,
        error: null,
        sumPopulation: [],
        manPopulation: [],
        womanPopulation: [],
        spinner: true,
      }
    }

    componentWillMount(){
      let APP_ID = config.APP_ID
      let API_URL = "http://api.e-stat.go.jp/rest/2.1/app/json/getStatsData"
      let statsDataId ="0003312312"
      let GET_URL = API_URL;
      GET_URL += "?appId=" + escape(APP_ID);
      GET_URL += "&statsDataId=" + escape(statsDataId);
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
  
      axios.get(GET_URL)
      .then(
        res =>{
          const jsonData = res.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF;
          for(let i = sumStart; i <= sumEnd; i++){
            sumPopulationBox[i-sumStart].y = Number(jsonData.VALUE[i].$)
          };
          for(let i = manStart; i <= manEnd; i++){
            manPopulationBox[i-manStart].y = Number(jsonData.VALUE[i].$)
          };
          for(let i = womanStart; i <= womanEnd; i++){
            womanPopulationBox[i-womanStart].y = Number(jsonData.VALUE[i].$)
          }
          this.setState({
            isLoaded: true,
            sumPopulation: sumPopulationBox,
            manPopulation: manPopulationBox,
            womanPopulation: womanPopulationBox,
          });
        }
      ).catch(
        error => {
          this.setState({
            isLoaded: false,
            error: error
          })
        }
      )
    }

    componentDidMount(){
      setTimeout(()=>{
        this.setState({
          spinner: false
        })
      }, 8000)
    }

    render(){
      const error = this.state.error;
      const isLoaded = this.state.isLoaded;
      const sumData = this.state.sumPopulation;
      const manData = this.state.manPopulation;
      const womanData = this.state.womanPopulation;
      const height = Dimensions.get('window').height;
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
  
      if(error){
        return <Text>Error: {error.message}</Text>;
      }else if(!isLoaded) {
        return <Text>Loading...</Text>;
      }else{
        return(
          <View style={styles.container}>
              <Spinner
                visible={this.state.spinner}
                textContent="読込中..."
                textStyle={{ color: "#fff" }}
                overlayColor="rgba(0,0,0,0.5)"
              />
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
              </View>
           </View>
        )
      }
    }
}

export default EstimatePopulationChart;