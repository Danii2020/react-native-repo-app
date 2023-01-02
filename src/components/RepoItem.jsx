import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepoStats from "./RepoStats";

const RepoItem = (props) => (
  <View
    key={props.id}
    style={styles.container}>
    <StyledText
      fontSize='subheading'
      fontWeight='bold'
    >{props.description}
    </StyledText>
    <StyledText>{props.language}</StyledText>
    <RepoStats {...props} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RepoItem;