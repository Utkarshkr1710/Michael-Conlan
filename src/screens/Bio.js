import React, { Component } from "react";
import { View, Text, StyleSheet ,Image,ScrollView,ImageBackground} from "react-native";
import Icon from "react-native-vector-icons/Entypo";


export default class Bio extends Component {
  static navigationOptions = {
   
    headerTitle: "Bio",
    headerRight: null,

    headerStyle: {
      backgroundColor: "#159B62"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "center"
      //flex: 1
    }
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
       <ImageBackground
          source={require("../../images/bio.jpg")}
          style={{flex:1}}
        >
        <View style={{ margin: 20, alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              // fontFamily: "roboto sans-serif",
              fontSize: 22,
              textAlign: "justify"
            }}
          >
            “TO REPRESENT MY COUNTRY ON THE WORLD STAGE IS AN HONOUR”
          </Text>
        </View>
        <View style={{ margin: 20 }}>
          <Text
            style={{
              color: "white",
              // fontFamily: "roboto sans-serif",
              fontSize: 20,
              textAlign: "justify"
            }}
          >
            The epitome of passion, the strive for excellence, and pursuit of
            the truth.
          </Text>
        </View>

        <View style={{ margin: 20 }}>
          <Text
            style={{
              color: "white",
              // fontFamily: "roboto sans-serif",
              fontSize: 20,
              textAlign: "justify"
            }}
          >
            Ireland is bursting with pride to call Michael Conlan one of their own. The Belfast-born boxer has fight in his veins. Michael has been one of Ireland’s most successful amateur fighters of all time. His illustrious amateur career saw him win World, European and Commonwealth Gold, as well obtaining Bronze at the London Olympics 2012.

          </Text>
        </View>
       
      
          
        </ImageBackground>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});
