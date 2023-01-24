import React  from "react";
import { Text, FlatList } from "react-native";
import RepoItem from "./RepoItem";
import useRepos from "../hooks/useRepos";

const RepoList = () => {
  const { repos } = useRepos()
  return (
    <FlatList
      data={repos}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <RepoItem {...repo} />
      )}
    />
  );
}

export default RepoList;