import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Policy extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon
        style={{ paddingLeft: 10 }}
        name="ios-arrow-back"
        size={30}
        color="white"
        onPress={() => navigate("Legal")}
      />
    ),
    headerTitle: "Privacy Policy",
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
    this.state = {
      privacy: ""
    };
  }
  componentDidMount() {
    const privacy = this.props.navigation.getParam("data", "NO-ID");
    this.setState({ privacy });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.heading}>{this.state.privacy}</Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  heading: {
    justifyContent: "center",
    padding: 20,
    color: "white",
    fontSize: 17,
    // fontFamily: "Roboto",
    textAlign: "justify",
    paddingBottom: 100
  }
});
