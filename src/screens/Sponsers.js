import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image ,Linking} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default class Sponsers extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon
        style={{ paddingLeft: 10 }}
        name="back"
        size={30}
        color="white"
        //  onPress={() =>this.props.navigation.navigate.openDrawer()}
        onPress={() => navigate("Home")}
      />
    ),
    headerTitle: "Sponsers",
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
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text
              style={{
                color: "white",
                fontSize: 22,
                fontFamily: "sans-serif",
                fontWeight: "bold"
              }}
            >
              PROUD SPONSERS
            </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 40 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                Linking.openURL("https://www.toprank.com/")
              }
            >
              <Image
                source={require("../../images/toprank.jpg")}
                style={{ height: 120, width: 200, borderRadius: 10 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", marginTop: 40 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                Linking.openURL("https://mtkglobal.com/")
              }
            >
              <Image
                source={require("../../images/mtkn.jpg")}
                style={{ height: 120, width: 200, borderRadius: 10 }}
              />
            </TouchableOpacity>
          </View>

        </View>
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
