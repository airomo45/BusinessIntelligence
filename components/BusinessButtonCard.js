import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const BusinessButtonCard = (props, {navigation}) => {
    // console.log(">>>>>");
    // console.log(props.parentProps);
    return( 
        <TouchableOpacity  style={styles.buttonContainer}
            onPress={() => props.parentProps.navigation.navigate(
                {
                    name: 'Profile',
                    params: { info: props.info },
                }
            )}
        >
            <Text style={styles.buttonText} >
                {props.name}
            </Text>
        </TouchableOpacity>
        )
}



export default BusinessButtonCard;

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',

      justifyContent: 'center',
      backgroundColor: '#fff',
      marginBottom: 10,
      height: 50,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      
    },
    buttonText:{
        fontSize: 20,
        color: '#373737',
        fontWeight: 'bold'

    }
  });
  