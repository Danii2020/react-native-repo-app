import React from "react";
import { View } from "react-native";
import Constants from "expo-constants";
import RepoList from "./RepoList";

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
            <RepoList />
        </View>
    )
}

export default Main;