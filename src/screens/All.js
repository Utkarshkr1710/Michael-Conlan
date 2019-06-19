import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { connect } from 'react-redux'

const uuidv4 = require("uuid/v4");

export const { width, height } = Dimensions.get("window");

class All extends Component {
  static navigationOptions = {

    headerTitle: "Watch Videos",

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
      category: ""
    };
  }

  componentWillMount = () => {
    const category = this.props.navigation.getParam("category", "NO-ID");
    this.setState({ category });
  };

  render() {
    const { category } = this.state;
    const { videoData } = this.props;
    const { latest, gym, match, exclusive, training } = videoData;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            key={uuidv4()}
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              flexWrap: "wrap"
            }}
          >
            {(category === "latest"
              ? latest.video
              : category === "training"
              ? training.video
              : category === "gym"
              ? gym.video
              : category === "exclusive"
              ? exclusive.video
              : match.video
            ).map((item, i) => (
              <View
                key={uuidv4()}
                style={{
                  width: "45%",
                  height: 110,
                  backgroundColor: "#fefefe",
                  borderRadius: 10,
                  margin: "1.5%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 10
                          }}
                          onPress={() =>
                            this.props.navigation.navigate("Match1", {
                              videoId: item.url, category
                            })
                          }
                        >
                          <Image
                            source={{
                              uri: `https://img.youtube.com/vi/${
                                item.url
                              }/hqdefault.jpg`
                            }}
                            style={{
                              width: "99%",
                              height: "99%",
                              borderRadius: 10
                            }}
                          />
                        </TouchableOpacity>
              </View>
            ))}
          </View>
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


function mapStateToProps(state) {
  return {
    videoData: state.videoData
  };
}

export default connect(mapStateToProps)(All);