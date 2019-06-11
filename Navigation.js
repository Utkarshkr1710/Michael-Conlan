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

import Home from ".//Home";
import Product from "./Product";
import Notification from "./Notification";
import Cart from "./Cart";
import Details from "./Details";
import seematches from "./seematches";
import ProductDetails from './ProductDetails';
import Facts from './Facts';
import Videos from './Videos';
import Match from "./Match";
import All from "./All";
import About from "./About";
import Fun from "./Fun";
import Bio from "./Bio";
import Gall from "./Gall";
import Sponsers from "./Sponsers"
import {
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  DrawerItems
} from "react-navigation";

import Icons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Entypo";
import Iconss from "react-native-vector-icons/FontAwesome5";

class NavRoutes extends Component {
  render() {
    return <AppContainer />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 130,
        backgroundColor: "#159B62",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:'center'
      }}
    >
    <View>
    <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          textAlign:'center',
          fontFamily: 'sans-serif',
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
          textAlign:'center',
          fontFamily: 'sans-serif',
        }}
      >
        {" "}
        Professional Record 11-0(6KOs)
        {" "}
      </Text>
      
    </View>
    </View>

    <ScrollView>
      <DrawerItems
        activeBackgroundColor="#159B62"
        activeTintColor="white"
        {...props}
      />
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
      inactiveTintColor: "#FF883E",
      inactiveBackgroundColor: "white",
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
          backgroundColor: "#159B62",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          justifyContent:'center',
          alignItems: 'center',
          flex: 1,
          fontFamily: 'sans-serif',
        }
      };
    }
  }
);

const HomeStackNavigator = createStackNavigator(
  {
    HomeTabNavigator: HomeTabNavigator,
    Videos: {screen: Videos},
    Notification: { screen: Notification },
    About:{screen:About},
    Cart: { screen: Cart },
    Details: { screen: Details },
    SeeAll: { screen: seematches },
    Facts:{screen:Facts},
    AllVideos:{screen:All},
    Fun:{screen:Fun},
    Bio:{screen:Bio},
    Gallery:{screen:Gall},
    Sponsers:{screen:Sponsers}
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
           // onPress={() => navigation.navigate("Cart")}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeStackNavigator},
    Gallery:{screen:Gall},
    Bio:{screen:Bio},
    Videos: { screen: Videos },
    Sponsers:{screen:Sponsers}
   
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: 300
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  //welcome: { screen: HomeScreen },

  Dashboard: { screen: AppDrawerNavigator },
  Match1:{screen: Match},
});

const AppContainer = createAppContainer(AppSwitchNavigator, AppDrawerNavigator);

export default NavRoutes;
