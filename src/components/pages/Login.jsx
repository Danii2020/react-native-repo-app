import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../StyledTextInput";

const initialValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  form: {
    margin: 12
  }
})

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
    <StyledTextInput
    value={field.value}
    onChangeText={value => helpers.setValue(value)}
    {...props}
  />
  )
}

export default function Login () {
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={values => console.log(values)}
    >
      {({handleSubmit}) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name="email"
              placeholder="Email"
            />
            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Login"/>
          </View>
        )
      }}

    </Formik>
  )
}