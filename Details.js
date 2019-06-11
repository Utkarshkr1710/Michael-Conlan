import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import SwiperFlatList from "react-native-swiper-flatlist";
//export const { width, height } = Dimensions.get("window");

export default class Details extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon
        style={{ paddingLeft: 10 }}
        name="back"
        size={30}
        color="white"
//        onPress={() => navigate.openDrawer()}
        onPress={() =>this.props.navigation.navigate("Details")}

      />
    ),
    headerTitle: "Matches",
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
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("./images/vs.jpg")}
              style={{
                flex: 1,
                width: "100%",
                height: 280
                //resizeMode: "cover"
              }}
            />
          </View>

          <View style={{ margin: 20, marginTop: 40 }}>
            <Text style={{ color: "white", fontSize: 20 }}>Schedule Date and Timing:</Text>
          </View>

          <View style={{ margin: 20, marginTop: 40 }}>
            <Text style={{ color: "white", fontSize: 20 }}>Head To Head:</Text>
          </View>


              
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#159B62",
                width: "90%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "white", fontSize: 22,fontWeight:'bold' ,fontFamily:'monospace'}}>ABOUT</Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 20,
              marginTop:10
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 20 }}>5 ft 7 in</Text>
            </View>

            <View>
              <Text style={{ color: "white", fontSize: 20 }}>Height</Text>
            </View>

            <View>
              <Text style={{ color: "white", fontSize: 20 }}>5 ft 7 in</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 20,
              marginTop:10
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 20 }}>57 Kg</Text>
            </View>

            <View>
              <Text style={{ color: "white", fontSize: 20 }}>Weight</Text>
            </View>

            <View>
              <Text style={{ color: "white", fontSize: 20 }}>57 Kg</Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 20,
              marginTop:10
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 20 }}>175 cm</Text>
            </View>

            <View>
              <Text style={{ color: "white", fontSize: 20 }}>Reach</Text>
            </View>

            <View>
              <Text style={{ color: "white", fontSize: 20 }}>175 cm</Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 20,
              marginTop:10
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 20 }}>Orthodox</Text>
            </View>

            <View>
              <Text style={{ color: "white", fontSize: 20 }}>Stance</Text>
            </View>

            <View>
              <Text style={{ color: "white", fontSize: 20 }}>Orthodox</Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 20,
              marginTop:10
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 20 }}>6 KO</Text>
            </View>

            <View>
              <Text style={{ color: "white", fontSize: 20 }}>Record</Text>
            </View>

            <View>
              <Text style={{ color: "white", fontSize: 20 }}>6 KO</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  child: {
    height: height * 0.4,
    width,
    justifyContent: "center"
  },
  text: {
    fontSize: 40,
    textAlign: "center"
  }
});
