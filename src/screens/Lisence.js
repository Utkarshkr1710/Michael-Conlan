import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Lisence extends Component {
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
    headerTitle: "Lisence",
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
      license: ""
    };
  }
  componentDidMount() {
    const license = this.props.navigation.getParam("data", "NO-ID");
    this.setState({ license });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}> {this.state.license} </Text>
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
    padding: 10,
    color: "white",
    fontSize: 20,
    // fontFamily: "Roboto",
    textAlign: "justify"
  }
});
