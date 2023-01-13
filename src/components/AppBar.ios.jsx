import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../themes";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection: "row",
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  scroll: {
    paddingBottom: 15
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

const AppBarTab = ({children, to}) => {
  const { pathname } = useLocation()
  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const IOSAppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to='/'>Repos</AppBarTab>
        <AppBarTab to='/signin'>Sign In</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default IOSAppBar;