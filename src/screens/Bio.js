import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";

class Bio extends Component {
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
    const { bio } = this.props;
    const BASE_URL = `https://michaelconlanapp.com`;

    return bio.data ? (
      <View style={styles.container}>
        <ImageBackground
           source={{uri:`${BASE_URL}${bio.data.bio[0].imgURL}`}}
          style={{ flex: 1, }}
        >
        <View style={{flex:1,backgroundColor:"#000",opacity:0.7}}>


        
          <View style={{ margin: 20, alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                // fontFamily: "roboto sans-serif",
                fontSize: 22,
                textAlign: "justify",
                opacity: 1
              }}
            >
             {bio.data.bio[0].title}
            </Text>
          </View>
          <View style={{ margin: 20 }}>
            <Text
              style={{
                color: "white",
                // fontFamily: "roboto sans-serif",
                fontSize: 20,
                textAlign: "justify",
                opacity: 1
              }}
            >
               {bio.data.bio[0].h1}
            </Text>
          </View>

          <View style={{ margin: 20 }}>
            <Text
              style={{
                color: "white",
                // fontFamily: "roboto sans-serif",
                fontSize: 20,
                textAlign: "justify",
                opacity: 1
              }}
            >{bio.data.bio[0].h2}</Text>
          </View>
          </View>
        </ImageBackground>
      </View>
    ) : (
      <ActivityIndicator
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        size={"small"}
        color={"#aaa"}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
function mapStateToProps(state) {
  return {
    bio: state.bio
  };
}

export default connect(mapStateToProps)(Bio);
