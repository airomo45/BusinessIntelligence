import * as React from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import BusinessButtonCard from '../components/BusinessButtonCard'

import businessData from '../data.json'



export default class Businesses extends React.Component {

      renderItem = ({item, index}) => {


      return (
        <BusinessButtonCard parentProps={this.props} info={item} name={item.name}/>
      );
    }
  render() {



    // console.log(businessData);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          List of Companies:
        </Text>
        <Text style={styles.paragraph}>
          Tap on company name for more info.
        </Text>

        {/* <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Profile')}
      /> */}
        
        <FlatList 
          data={businessData}
          renderItem={this.renderItem}
          />

      </View>

    )
    // return <FlatList />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

},

title: {
  margin: 20,
  alignItems: 'center',
  fontSize: 25,
  fontWeight: 'bold',
  textAlign: 'center',
  justifyContent: 'center',
  color: "#004289",
  textDecorationLine: "underline"


},
paragraph:{
  marginTop: 5,
  marginBottom: 25,
  alignItems: 'center',
  fontSize: 18,
  // fontWeight: 'bold',
  textAlign: 'center',
  justifyContent: 'center',
  color: "#004289"
}

});

