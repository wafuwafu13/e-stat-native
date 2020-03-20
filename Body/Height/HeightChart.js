import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryGroup } from 'victory-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class HeightChart extends Component {

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
      let manHeightBox = [];
      let womanHeightBox = [];
      let manHeight = [79.0, 87.9, 95.1, 101.3, 108.2, 114.8, 123.2, 128.2, 133.7, 138.3, 
                       144.7, 150.8, 160.3, 164.3, 168.6, 170.4, 170.3, 170.3, 171.3, 172.3,
                       172.0, 170.2, 171.4, 173.0, 170.5, 171.4]
      let womanHeight = [78.3, 87.8, 94.6, 101.5, 108.3, 116.6, 121.6, 126.1, 134.4, 139.8,
                         146.0, 151.1, 154.1, 156.8, 156.8, 157.4, 157.3, 157.5, 155.9, 159.5,
                         157.9, 158.5, 157.4, 157.3, 155.2, 158.8]
      for(let i = 0; i <= 25; i++){
        manHeightBox.push({});
        womanHeightBox.push({});
        manHeightBox[i].x = i+1;
        womanHeightBox[i].x = i+1;
        manHeightBox[i].y = manHeight[i];
        womanHeightBox[i].y = womanHeight[i];
      }
      let tickBox = [];
      for(let i = 1; i <= 26; i++){
        tickBox.push(i);
      }
      let tickValuesBox = [];
      for(let i = 80; i <= 175; i+=5){
        tickValuesBox.push(i);
      }
      const manData = manHeightBox;
      const womanData = womanHeightBox
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
                男女別平均身長(平成28年国民健康・栄養調査)
            </Text>
            <View style={styles.chart}>
                <VictoryChart
                  animate={{ duration: 5000, easing: "bounce" }}
                  theme={VictoryTheme.material}
                  height={height*0.8}
                >
                  <VictoryAxis
               　   tickValues={tickBox}
                  />
                  <VictoryAxis dependentAxis
                    tickValues={tickValuesBox}
                  />
                    <VictoryGroup
                      colorScale={["#3399FF", "#FF66CC"]}
                      offset={2}
                      style={{data:{width:1.5}}}
                    >
                      <VictoryLine
                        data={manData}
                      />
                      <VictoryLine
                        data={womanData}
                      />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        </View>
      )
    }
}

export default HeightChart;