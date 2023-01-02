import React from "react";
import { Image, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import theme from "../themes";

const RepoItemsHeader = (props) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ paddingRight: 7 }}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight='bold'>{props.fullName}</StyledText>
      <StyledText color='textSecondary'>{props.description}</StyledText>
      <StyledText style={styles.language}>{props.language}</StyledText>
    </View>
  </View>
)

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    margin: 'auto',
    borderRadius: 4
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 4
  },
});

export default RepoItemsHeader;