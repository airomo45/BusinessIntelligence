import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import moment from "moment";

import BarChartView from '../components/native/BarChartView'
import LineChartView from '../components/native/LineChartView'


export default class BusinessDetail extends React.Component {
  state = {
    showLineChart: false,
  }
  toggleChartView(){
    // alert("Changing Charts");
    this.state.showLineChart?
    this.setState({
      showLineChart: false
    })
    :
    this.setState({
      showLineChart: true
    })

  }
  render() {

   

    var details = this.props.route.params.info
    var rev = details.revenue

    console.log(rev);




    var dateList = rev.map(item => moment(item.date).format('MM/YYYY' ))

    var valueList = rev.map(item => (item.value)/100000 )

    dateList = dateList.reverse()
    valueList = valueList.reverse()

    console.log(valueList);
    

    console.log(dateList);



    return (
      <View style={styles.container1}>
        <Text style={styles.title}>
          Business Name: {" "}
          <Text style={styles.titleAlt}>
          {details.name}

          </Text>
        </Text>
        <Text style={[styles.title, {marginBottom: 20}]}>
          Location: {" "}
          
          <Text style={styles.titleAlt}>
          {details.location.address + ", " + details.location.city  
          + ', ' + details.location.country}
          </Text>
        </Text>

        <Button
        title={this.state.showLineChart? "Switch to Bar Chart View" : "Switch to Line Chart View"}
        onPress={() => this.toggleChartView()}
        />



        {
        this.state.showLineChart?  
         <LineChartView
          xValues={dateList}
          yValues={valueList}
        />
        :
        <BarChartView
          xValues={dateList}
          yValues={valueList}
      />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
},

title: {
  margin: 10,
  alignItems: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  justifyContent: 'center',

},
container1: {
  paddingTop: 20,
  paddingBottom: 30,
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#F5FCFF',
  alignItems: 'stretch',
  flexDirection: 'column',
  flex: 1,
},
titleAlt: {
  color: "#007aff", 
  textDecorationStyle: "solid", 
  textDecorationLine: "underline"
}

});
