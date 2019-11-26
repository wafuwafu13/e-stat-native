import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from 'victory-native';
import { Card } from 'react-native-elements';

class AverageBody extends Component {

  constructor(props) {
    super(props);
    this.state= {
      isLoaded: true,
      error: null,
    }
  }

  componentWillMount() {

    let APP_ID = "857f6df73c559e37a4dabc4d2b7eb090d8b9893d"
    let API_URL = "http://api.e-stat.go.jp/rest/2.1/app/json/getStatsData"
    let statsDataId ="0003224177"
    let GET_URL = API_URL;
    GET_URL += "?appId=" + escape(APP_ID);
    GET_URL += "&statsDataId=" + escape(statsDataId);

    axios.get(GET_URL)
    .then(
      (result) =>{
        numberBox = []
        console.log(result.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[1099].$)
        for ( let i = 1099; i <=1120; i+=7){
            numberBox.push(result.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$)
        }
        console.log(numberBox);
        this.setState({
          isLoaded: true,
          number: numberBox,
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
     const { error, isLoaded } = this.state;
     if(error){
       return <Text>Error: {error.message}</Text>;
     } else if (!isLoaded) {
       return <Text>Loading...</Text>;
     } else {
       return(
        <ScrollView>
         <View style={styles.container}>
           <Card title="身長・体重の平均(男)" style={{height: 200, width:300}}>
             {number}
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

export default AverageBody;