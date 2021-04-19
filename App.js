import React from "react";
import { View } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListItem from "./app/components/ListItem";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return (
    // <Screen>
    //   <ListItem
    //     title="myTitle"
    //     ImageComponent={<Icon name="email" size={50} />}
    //   ></ListItem>
    // </Screen>
    <ListingsScreen />

    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title="Red jacket for sale"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   ></Card>
    //   <UserInfo
    //     image={require("./app/assets/mosh.jpg")}
    //     name="Mosh Hamedani"
    //     details="5 Listings"
    //   />
    // </View>
  );
}
