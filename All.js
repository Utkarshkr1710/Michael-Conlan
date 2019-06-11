import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
export const { width, height } = Dimensions.get("window");

export default class componentName extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon
        style={{ paddingLeft: 10 }}
        name="back"
        size={30}
        color="white"
        onPress={() => navigate.openDrawer()}
      />
    ),
    headerTitle: "Training Videos",

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
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 20
            }}
          >
            <View>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 120, width: 170, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 120, width: 170, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 20
            }}
          >
            <View>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 120, width: 170, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 120, width: 170, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 20
            }}
          >
            <View>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 120, width: 170, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 120, width: 170, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>

          {/* <View style={styles.videos}>
            <View style={{ paddingLeft: 20, marginTop: 20 }}>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                  
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 100, width: 150, borderRadius: 10,}}
                />
                
              </TouchableWithoutFeedback>
            </View>

            <View style={{ paddingLeft: 20, marginTop: 20 }}>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 100, width: 150, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>

          <View style={styles.videos}>
            <View style={{ paddingLeft: 20, marginTop: 20 }}>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 100, width: 150, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>

            <View style={{ paddingLeft: 20, marginTop: 20 }}>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 100, width: 150, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.videos}>
            <View style={{ paddingLeft: 20, marginTop: 20 }}>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 100, width: 150, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>

            <View style={{ paddingLeft: 20, marginTop: 20 }}>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 100, width: 150, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.videos}>
            <View style={{ paddingLeft: 20, marginTop: 20 }}>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 100, width: 150, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>

            <View style={{ paddingLeft: 20, marginTop: 20 }}>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Match1")}
              >
                <Image
                  source={require("./images/Train.jpg")}
                  style={{ height: 100, width: 150, borderRadius: 10 }}
                />
              </TouchableWithoutFeedback>
            </View>
          </View> */}
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
  videos: {
    flex: 1,
    flexDirection: "row"
  }
});
