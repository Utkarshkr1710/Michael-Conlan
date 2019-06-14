import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
export const { width, height } = Dimensions.get("window");
import Icons from "react-native-vector-icons/Feather";

export default class Cart extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon
        style={{ paddingLeft: 10 }}
        name="menu"
        size={30}
        color="white"
        onPress={() => this.props.navigation.navigate.openDrawer()}
      />
    ),
    headerTitle: "Michael Conlan",
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
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1, marginTop: 50, padding: 40 }}>
              <View
                style={{
                  width: 350,
                  height: 500,
                  backgroundColor: "white",
                  borderRadius: 20,
                  elevation: 50
                }}
              >
                <View
                  style={{
                    backgroundColor: "#0D6B87",
                    height: "38%",
                    borderRadius: 20
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 30
                    }}
                  >
                    <Text style={{ fontSize: 30, color: "white" }}>
                      Fun Fact!
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 30
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        width: 30
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 30,
                          color: "black",
                          textAlign: "center"
                        }}
                      >
                        1
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "white",
                    height: "17%",
                    borderRadius: 20
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 20
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontSize: 30,
                        // fontFamily: "vincHand"
                      }}
                    >
                      Do You Know?
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    height: "43%",
                    borderRadius: 20
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 20
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontSize: 22,
                        // fontFamily: "vincHand",
                        textAlign: "justify",
                        margin: 20
                      }}
                    >
                      Michael Conlan height is 173cm (5 ft 7 in ) but he can
                      reach upto 175 cm.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ flex: 1, marginTop: 50, padding: 40 }}>
              <View
                style={{
                  width: 350,
                  height: 500,
                  backgroundColor: "white",
                  borderRadius: 20,
                  elevation: 50
                }}
              >
                <View
                  style={{
                    backgroundColor: "#0D6B87",
                    height: "38%",
                    borderRadius: 20
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 30
                    }}
                  >
                    <Text style={{ fontSize: 30, color: "white" }}>
                      Fun Fact!
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 30
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        width: 30
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 30,
                          color: "black",
                          textAlign: "center"
                        }}
                      >
                        2
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "white",
                    height: "17%",
                    borderRadius: 20
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 20
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontSize: 30,
                        // fontFamily: "vincHand"
                      }}
                    >
                      Do You Know?
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20
                  }}
                >
                  <Icon name="music" size={70} color="black" />
                </View>
                <View
                  style={{
                    height: "43%",
                    borderRadius: 20
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 30
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontSize: 22,
                        // fontFamily: "vincHand",
                        textAlign: "justify",
                        margin: 20
                      }}
                    >
                      Michael Conlan's favourite song is "Grace" (by Jim McCann)
                      and he listens it when he walks out on Fight Night.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
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
