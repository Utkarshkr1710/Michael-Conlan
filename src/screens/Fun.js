import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  ActivityIndicator

} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";

class Fun extends Component {
  static navigationOptions = {
    headerTitle: "Fun Facts",
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
    const {  funFacts } = this.props;
    const BASE_URL = `http://172.245.17.145:5015`;
    
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <ScrollView >
            {funFacts ? (
              funFacts.data.map((item, i) => (
                <View key={i} style={{padding:10 }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "#433D3E",
                      width: 340,
                      borderRadius: 10,
                      
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      <Image
                        source={{ uri: `${BASE_URL}${item.imgURl}` }}
                        style={{
                          height: 100,
                          width: 150,
                          borderRadius: 10,
                          marginTop: 10
                        }}
                      />
                    </View>
                    <View style={{ alignItems: "center", margin: 30 }}>
                      <Text
                        style={{
                          fontSize: 22,
                          // fontFamily: "sans-serif",
                          textAlign: "center",
                          color: "white"
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </View>
              ))
            ) : (
              <ActivityIndicator
                size={"small"}
                color={"#aaa"}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              />
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent:'center',
    alignItems:'center'
  }
});
function mapStateToProps(state) {
  return {
    funFacts: state.funFacts.data
  };
}

export default connect(mapStateToProps)(Fun);
