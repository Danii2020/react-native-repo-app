import React from "react";
import { Text, FlatList } from "react-native";
import repositories from "../data/repos";
import RepoItem from "./RepoItem";

const RepoList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <RepoItem {...repo} />
      )}
    />
  );
}

export default RepoList;