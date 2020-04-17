import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme, VictoryAxis } from 'victory-native';
import Loading from '../../src/elements/Loading';
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

      let sumPopulationList = [];
      let manPopulationList = [];
      let womanPopulationList = [];
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
  
      axios.get(GET_URL)
      .then(
        res =>{
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
          this.setState({
            isLoaded: true,
            sumPopulation: sumPopulationList,
            manPopulation: manPopulationList,
            womanPopulation: womanPopulationList,
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
      let tickXvalueList = [];
      for(let i = 5; i <= 95; i+=5){
        tickXvalueList.push(i)
      }
      let tickYValueList = [];
      for(let i = 250; i <= 2000; i+=250){
        tickYValueList.push(i)
      }
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
              <Loading visible={this.state.spinner}/>
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
                      tickFormat={(y) => (`${y/10}万`)}
                      tickValues={tickYValueList}
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