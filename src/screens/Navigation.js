import React, { Component } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  AppRegistry,
  Clipboard,
  ToastAndroid,
  AlertIOS
} from "react-native";

import Home from "./Home";
import Notification from "./Notification";
import Details from "./Details";
import seematches from "./seematches";
import Videos from "./Videos";
import Match from "./Match";
import All from "./All";
import Bio from "./Bio";
import Sponsors from "./Sponsors";
import Legal from "./Legal";
import Terms from "./Terms";
import Policy from "./Policy";
import Lisence from "./Lisence";
import Shares from "./Shares";
import Fun from "./Fun";

import GalleryScreen from "./GalleryScreen";

import Gallery from "./Gallery";

import {
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  DrawerItems,
  NavigationEvents
} from "react-navigation";

import Icons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Entypo";
import Iconss from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
class NavRoutes extends Component {
  state = {
    s: "ferkbfjrhb"
  };
  render() {
    return <AppContainer />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 250,
        backgroundColor: "black",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../../images/logoo.jpg")}
            style={{ marginTop: 10, height: 132, width: 120 }}
          />
        </View>
        <Text
          style={{
            color: "#159B62",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            // fontFamily: "sans-serif",
            marginTop: 10
          }}
        >
          {" "}
          #TheConlanRevolution{" "}
        </Text>
      </View>

      <View>
        <Text
          style={{
            color: "#FF883E",
            fontSize: 20,
            textAlign: "center"
            // fontFamily: "sans-serif"
          }}
        >
          {" "}
          Professional Record 11-0(6KOs){" "}
        </Text>
      </View>
    </View>

    <ScrollView>
      <DrawerItems
        activeBackgroundColor="white"
        activeTintColor="black"
        {...props}
        style={{}}
        labelStyle={{ color: "black" }}
      />
    </ScrollView>
  </SafeAreaView>
);

const GalleryStack = createStackNavigator(
  {
    Gallery: { screen: Gallery, navigationOptions: { header: null } },
    GalleryScreen: {
      screen: GalleryScreen,
      navigationOptions: {
        header: null,
        headerLeft: <AntDesignIcon name="back" size={22} style={{top: 5, left: 5}} color={"white"} />,
        headerStyle:{backgroundColor: "#000", height: 10}
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
);

const HomeTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
            size={Platform.OS === "ios" ? 20 : 20}
            color={tintColor}
            style={{ marginTop: Platform.OS === "ios" ? 1.5 : 20 }}
          />
        )
      }
    },
    Videos: {
      screen: Videos,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Iconss
            name="video"
            size={Platform.OS === "ios" ? 20 : 20}
            color={tintColor}
            style={{ marginTop: Platform.OS === "ios" ? 1.5 : 20 }}
          />
        )
      }
    },
    Gallery: {
      screen: GalleryStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome
            name="photo"
            size={Platform.OS === "ios" ? 20 : 20}
            color={tintColor}
            style={{ marginTop: Platform.OS === "ios" ? 1.5 : 20 }}
          />
        )
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icons
            name="md-notifications"
            size={24}
            color={tintColor}
            style={{ marginTop: Platform.OS === "ios" ? 2 : 20 }}
          />
        )
      }
    }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    },
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "#FF883E",
      inactiveTintColor: "white",
      inactiveBackgroundColor: "#159B62",
      labelStyle: {
        fontSize: 13,
        //padding: 10,
        marginTop: Platform.OS === "ios" ? 0 : 8
      }
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
          marginTop: 0,
          backgroundColor: "#159B62"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
          flex: 1
          // fontFamily: "sans-serif"
        }
      };
    }
  }
);

const HomeStackNavigator = createStackNavigator(
  {
    HomeTabNavigator: HomeTabNavigator,
    Videos: { screen: Videos },
    Notification: { screen: Notification },
    Fun: {
      screen: Fun,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              name="back"
              size={30}
              color="white"
              onPress={() => navigation.navigate("Home")}
            />
          )
        };
      }
    },

    SeeAll: { screen: seematches },
    AllVideos: {
      screen: All,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              name="back"
              size={30}
              color="white"
              onPress={() => navigation.navigate("Videos")}
            />
          )
        };
      }
    },
    Bio: {
      screen: Bio,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              name="back"
              size={30}
              color="white"
              onPress={() => navigation.navigate("Home")}
            />
          )
        };
      }
    },
    Gallery: { screen: GalleryStack },
    Sponsors: {
      screen: Sponsors,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              name="back"
              size={30}
              color="white"
              onPress={() => navigation.navigate("Home")}
            />
          )
        };
      }
    },
    Legal: {
      screen: Legal,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              name="back"
              size={30}
              color="white"
              onPress={() => navigation.navigate("Home")}
            />
          )
        };
      }
    },
    Terms: {
      screen: Terms,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              name="back"
              size={30}
              color="white"
              onPress={() => navigation.navigate("Legal")}
            />
          )
        };
      }
    },
    Policy: {
      screen: Policy,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              name="back"
              size={30}
              color="white"
              onPress={() => navigation.navigate("Legal")}
            />
          )
        };
      }
    },
    Lisence: {
      screen: Lisence,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              name="back"
              size={30}
              color="white"
              onPress={() => navigation.navigate("Legal")}
            />
          )
        };
      }
    },
    Share: {
      screen: Shares,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              name="back"
              size={30}
              color="white"
              onPress={() => navigation.navigate("Home")}
            />
          )
        };
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            name="menu"
            size={30}
            color="white"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingRight: 10 }}
            name="share"
            size={30}
            color="white"
            onPress={() => navigation.navigate("Share")}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeStackNavigator },
    Gallery: { screen: GalleryStack },
    Bio: { screen: Bio },
    Videos: { screen: Videos },
    Sponsers: { screen: Sponsers },
    Legal: { screen: Legal }
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: 350
  }
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    Dashboard: { screen: AppDrawerNavigator },
    Match1: { screen: Match },
    Details: { screen: Details, navigationOptions: {header: null} }
  },
  {
    backBehavior: "initialRoute"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator, AppDrawerNavigator);

export default NavRoutes;
