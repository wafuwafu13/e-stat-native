import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryGroup } from 'victory-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class AnnualIncome extends Component {

    constructor(props){
        super(props);
        this.state= {
          spinner: true,
        }
    }

    componentDidMount(){
        setTimeout(()=>{
          this.setState({
            spinner: false
          })
        }, 6000)
    }

    render(){
      let manAnnualIncomeBox = [];
      let womanAnnualIncomeBox = [];
      let AnnualIncomeAge = [];
      for(let i = 17; i <= 72; i+=5){
        AnnualIncomeAge.push(i);
      }
      let manAnnualIncome = [1572000, 2745000, 3827000, 4567000, 5117000, 
                             5629000, 6327000, 6609000, 6493000, 4794000,
                             3871000, 3677000]
      let womanAnnualIncome = [1062000, 2407000, 3089000, 3147000, 2999000,
                               3017000, 2994000, 2958000, 2877000, 2283000,
                               1949000, 2066000]
      for(let i = 0; i <= 11; i++){
        manAnnualIncomeBox.push({});
        womanAnnualIncomeBox.push({});
        manAnnualIncomeBox[i].x = AnnualIncomeAge[i];
        womanAnnualIncomeBox[i].x = AnnualIncomeAge[i];
        manAnnualIncomeBox[i].y = manAnnualIncome[i];
        womanAnnualIncomeBox[i].y = womanAnnualIncome[i];
      }
      let tickValuesBox = [];
      for(let i = 0; i <= 7000000; i+=1000000){
        tickValuesBox.push(i);
      }
      const manData = manAnnualIncomeBox;
      const womanData = womanAnnualIncomeBox
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

      return(
        <View style={styles.container}>
             <Spinner
              visible={this.state.spinner}
              textContent="読込中..."
              textStyle={{ color: "#fff" }}
              overlayColor="rgba(0,0,0,0.5)"
            />
            <Text style={styles.title}>
                男女・年代別平均年収(平成28年民間給与実態統計調査)
            </Text>
            <View style={styles.chart}>
                <VictoryChart
                 theme={VictoryTheme.material}
                 height={height*0.8}
                 animate={{ duration: 5000, easing: "bounce" }}
                >
                  <VictoryAxis
                  />
                  <VictoryAxis dependentAxis
                    tickFormat={(y) => (`${y/10000}万`)}
                    tickValues={tickValuesBox}
                  />
                    <VictoryGroup
                      colorScale={["#3399FF", "#FF66CC"]}
                      offset={10}
                      style={{data:{width:10}}}
                    >
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

export default AnnualIncome;