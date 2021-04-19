import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({
  title,
  details,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {details && <AppText style={styles.details}>{details}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.white,
    flexDirection: "row",
  },
  textContainer: {
    paddingLeft: 15,
    justifyContent: "center",
  },
  details: { color: colors.detailText },
  title: { fontWeight: "bold" },
});

export default ListItem;
