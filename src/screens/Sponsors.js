import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView
} from "react-native";
// import Icon from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";
const uuidV4 = require("uuid")

class Sponsors extends Component {
  static navigationOptions = {
    headerTitle: "Sponsors",
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
    const { sponsors } = this.props;
    const BASE_URL = `https://michaelconlanapp.com`;

    return sponsors.data ? (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text
              style={{
                color: "white",
                fontSize: 22,
                // fontFamily: "sans-serif",
                fontWeight: "bold"
              }}
            >
              PROUD SPONSORS
            </Text>
          </View>
          <View style={{flex:1,flexDirection:'column',alignItems:'center',marginTop:20}}>
           <ScrollView>
            {sponsors.data.sponsor.map((item, i) => (
              <TouchableOpacity key={uuidV4()}
                activeOpacity={0.8}
                onPress={() => Linking.openURL(item.websiteURL)}
                style={{margin:20}}
              >
                <Image
                  source={{uri:`${BASE_URL}${item.imgURL}`}}
                  style={{ height: 120, width: 200, borderRadius: 10 }}
                />
              </TouchableOpacity>
            ))}
            </ScrollView>
          </View>
        </View>
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
    flex: 1,
    backgroundColor: "black"
  }
});
function mapStateToProps(state) {
  return {
    sponsors: state.sponsor
  };
}

export default connect(mapStateToProps)(Sponsors);
