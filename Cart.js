import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/AntDesign";

export default class Cart extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon
        style={{ paddingLeft: 10 }}
        name="menu"
        size={30}
        color="white"
        onPress={() => navigate.openDrawer()}
      />
    ),
    headerTitle: "Cart",
    headerRight: null,

    headerStyle: {
      backgroundColor: "#ffaa3e"
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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> </Text>
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
    color: "white",
    fontSize: 30
  }
});
