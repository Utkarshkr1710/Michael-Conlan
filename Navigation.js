
import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions } from 'react-native';

import Home from './/Home';
import Product from './Product';
import Notification from './Notification';

import {
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  DrawerItems
} from "react-navigation";

import Icons from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/AntDesign";


class NavRoutes extends Component {

  render() {
    return (
     <AppContainer />
    )
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
  <View
    style={{
      height: 130,
      backgroundColor: "royalblue",
      flexDirection: "row",
      paddingTop:30
    }}
  >
    
    <Text
      style={{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 30,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 18
      }}
    >
      {" "}
      CenTex AIR{" "}
    </Text>
  </View>
  <ScrollView>
    <DrawerItems
        activeBackgroundColor='royalblue'
        activeTintColor='white'
         {...props} />
  </ScrollView>
</SafeAreaView>

  );

const HomeTabNavigator = createBottomTabNavigator(
  {
    Home,
    Product,
    Notification
  },
  {
    navigationOptions: {
      tabBarVisible: false
    },
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "royalblue",
      inactiveTintColor: "royalblue",
      inactiveBackgroundColor: "#E0E0E0",
      labelStyle: {
        fontSize: 20,
        padding: 10
      }
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
          marginTop: 0,
          backgroundColor: "royalblue"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        }
      };
    }
  }
);

const HomeStackNavigator = createStackNavigator(
  {
    HomeTabNavigator: HomeTabNavigator,
    Product: { screen: Product },
    Notification: { screen: Notification },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            name="setting"
            size={30}
            color="white"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: (
          <Icons
            style={{ paddingRight: 10 }}
            name="location"
            size={30}
            color="white"
            onPress={() => navigation.navigate("location")}
          />
        )
      };
    }
  }
);



const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeStackNavigator },
    Product: { screen: Product },
    Notification: { screen: Notification },
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth:300
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  welcome: { screen: Home },
 
  Home: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator, AppDrawerNavigator);

export default NavRoutes;