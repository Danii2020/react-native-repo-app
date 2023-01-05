import React from "react";
import { Text, View } from "react-native";
import RepoList from "./RepoList";
import AppBar from "./AppBar";
import { Redirect, Route, Switch} from "react-router-native";

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Switch>
              <Route path="/" exact>
                <RepoList />
              </Route>
              <Route path="/signin" exact>
                <Text>Work in progress</Text>
              </Route>
              <Redirect to="/" />
            </Switch>
        </View>
    )
}

export default Main;