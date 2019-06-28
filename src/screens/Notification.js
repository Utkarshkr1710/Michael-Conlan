import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default class Notification extends Component {
  static navigationOptions = {
    headerTitle: "Notification",
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
        <ScrollView>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center", top: "40%" }}
          >
            <MaterialIcon
              name="notifications-paused"
              size={40}
              color={"white"}
            />
            <Text style={styles.heading}>
              There is no new notification yet
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    justifyContent: "center",
    padding: 20,
    color: "white",
    fontSize: 17,
    // fontFamily: "Roboto",
    textAlign: "justify"
  }
});
