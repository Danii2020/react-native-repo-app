import React from "react";
import { View, StyleSheet } from "react-native";
import RepoItemsHeader from "./RepoItemsHeader";
import RepoStats from "./RepoStats";

const RepoItem = (props) => (
  <View
    key={props.id}
    style={styles.container}>
    <RepoItemsHeader {...props} />
    <RepoStats {...props} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5
  }
});

export default RepoItem;