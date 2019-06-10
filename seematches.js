import React, { Component } from "react";
import {
  FlatList,
  Text,
  View,
  Alert,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/Ionicons";

export default class seematches extends Component {
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
    headerTitle: "Upcoming Matches",
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

    this.state = {
      FlatListItems: [
        { key: "A vs B", day: "Date & Timing" },
        { key: "A vs C", day: "Date & Timing" },
        { key: "A vs D", day: "Date & Timing" },
        { key: "A vs E", day: "Date & Timing" },
        { key: "A vs F", day: "Date & Timing" },
        { key: "A vs G", day: "Date & Timing" },
        { key: "A vs H", day: "Date & Timing" },
        { key: "A vs I", day: "Date & Timing" },
      ]
    };
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#607D8B"
        }}
      />
    );
  };

  GetItem(item) {
    Alert.alert(item);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.MainContainer}>
          <FlatList
            data={this.state.FlatListItems}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <View>
                  <Text
                    style={styles.item}
                    //onPress={this.GetItem.bind(this, item.key)}
                  >
                    {" "}
                    {item.key}{" "}
                  </Text>
                  <Text
                    style={styles.item}
                    //onPress={this.GetItem.bind(this, item.key)}
                  >
                    {" "}
                    {item.day}{" "}
                  </Text>
                </View>

                <View>
                  <Icons
                    style={{ paddingRight: 20 }}
                    name="ios-arrow-forward"
                    size={30}
                    color="white"
                    onPress={() => this.props.navigation.navigate("Details")}
                  />
                </View>
              </View>
            )}
          />
        </View>
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
  MainContainer: {
    // Setting up View inside content in Vertically center.
    justifyContent: "center",
    flex: 1,
    margin: 10,
    backgroundColor: "black"
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "white"
  }
});
