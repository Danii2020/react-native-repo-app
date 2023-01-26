import React  from "react";
import { Text, FlatList } from "react-native";
import RepoItem from "./RepoItem";
import useRepos from "../hooks/useRepos";

const RepoList = () => {
  const { repos, refetch } = useRepos()
  return (
    <FlatList
      onRefresh={refetch}
      data={repos}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <RepoItem {...repo} />
      )}
    />
  );
}

export default RepoList;