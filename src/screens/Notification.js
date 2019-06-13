import React, { Component } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
     <View style={styles.container}>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   backgroundColor:'black'
 }
});
