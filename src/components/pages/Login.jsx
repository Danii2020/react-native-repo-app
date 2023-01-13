import React from "react";
import { TextInput, View } from "react-native";
import { Formik } from "formik";

const initialValues = {
  email: '',
  password: ''
}

export default function Login () {
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={values => console.log(values)}
    >
      {() => {
        return (
          <View>
            <TextInput />
            <TextInput />
          </View>
        )
      }}

    </Formik>
  )
}