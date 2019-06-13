import React, { Component } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions
} from "react-native";

import Home from "./Home";
import Notification from "./Notification";
import Details from "./Details";
import seematches from "./seematches";
import Videos from "./Videos";
import Match from "./Match";
import All from "./All";
import Bio from "./Bio";
import Gall from "./Gall";
import Sponsers from "./Sponsers";
import Legal from "./Legal";
import Terms from "./Terms";
import Policy from "./Policy";
import Lisence from "./Lisence";
import Shares from "./Shares";
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
class NavRoutes extends Component {
  render() {
    return <AppContainer />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 250,
        backgroundColor: "#FF883E",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../../images/fav2.jpg")}
            style={{ marginTop: 10, height: 130, width: 120 }}
          />
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "sans-serif",
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
            color: "white",
            fontSize: 20,
            textAlign: "center",
            fontFamily: "sans-serif"
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
      />
      {/* <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:100}}>
        <Text style={{color:'black',fontSize:18,fontFamily:'sans-serif'}}>version</Text>

        <Text style={{color:'black',fontSize:18,fontFamily:'sans-serif'}}>1.0.0</Text>

        </View> */}
    </ScrollView>
  </SafeAreaView>
);

const HomeTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
            size={20}
            color={tintColor}
            style={{ marginTop: 20 }}
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
            size={20}
            color={tintColor}
            style={{ marginTop: 20 }}
          />
        )
      }
    },
    Gallery: {
      screen: Gall,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome
            name="photo"
            size={20}
            color={tintColor}
            style={{ marginTop: 20 }}
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
            style={{ marginTop: 20 }}
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
      activeBackgroundColor: "#159B62",
      inactiveTintColor: "white",
      inactiveBackgroundColor: "#FF883E",
      labelStyle: {
        fontSize: 15,
        //padding: 10,
        marginTop: 10
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
          flex: 1,
          fontFamily: "sans-serif"
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
    Details: { screen: Details },
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
    Gallery: { screen: Gall },
    Sponsers: {
      screen: Sponsers,
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
    },
    Match1: { screen: Match }
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
    Gallery: { screen: Gall },
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

const AppSwitchNavigator = createSwitchNavigator({
  //welcome: { screen: HomeScreen },

  Dashboard: { screen: AppDrawerNavigator },
  Match1: { screen: Match }
});

const AppContainer = createAppContainer(AppSwitchNavigator, AppDrawerNavigator);

export default NavRoutes;
