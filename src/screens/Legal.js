import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
export const { width, height } = Dimensions.get("window");
import {connect} from 'react-redux'

 class Legal extends Component {
  static navigationOptions = {
    headerTitle: "Legal Policies",
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
    const { navigate } = this.props.navigation;
    const {legal} = this.props;
    return (
      legal ? 
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10
          }}
        >
          <View style={{ paddingLeft: 20 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigate("Terms",{ data: legal.data.legal[0].terms })}
            >
              <Text
                style={{ color: "white", fontSize: 20, /*fontFamily: "Roboto"*/ }}
              >
                Terms Of Use{" "}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingRight: 20 }}>
            <Icon name="ios-arrow-forward" size={30} color="white" />
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ paddingLeft: 20 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigate("Policy",{ data: legal.data.legal[0].privacy })}
            >
              <Text
                style={{ color: "white", fontSize: 20, /*fontFamily: "Roboto"*/ }}
              >
                Privacy Policy{" "}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingRight: 20 }}>
            <Icon name="ios-arrow-forward" size={30} color="white" />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10
          }}
        >
          <View style={{ paddingLeft: 20 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigate("Lisence",{ data: legal.data.legal[0].license })}
            >
              <Text
                style={{ color: "white", fontSize: 20, /*fontFamily: "Roboto"*/ }}
              >
                License{" "}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingRight: 20 }}>
            <Icon name="ios-arrow-forward" size={30} color="white" />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 200
          }}
        >
          <Image
            source={require("../../images/logoo.jpg")}
            style={{ height: 125, width: 120 }}
          />

          <Text style={{ color: "white", marginVertical: 10, fontSize: 18 }}>
            1.0.0
          </Text>
        </View>
      </View> :
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
  },
  heading: {
    justifyContent: "center",
    color: "white",
    fontSize: 30
  }
});
function mapStateToProps(state) {
  return {
    legal: state.legal
  };
}

export default connect(mapStateToProps)(Legal);
