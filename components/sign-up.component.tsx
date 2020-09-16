import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

const SignUp = (props: any) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Hello,</Text>
        <Text style={styles.instruction}>Sign Up</Text>
      </View>
      <View>
        <View style={styles.inputBlock}>
          <View style={styles.textRow}>
            <Icon name="create" size={18} style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Full Name"
              onChangeText={(e) => setFullName(e)}
            />
          </View>
          <View style={styles.textRow}>
            <Icon style={styles.inputIcon} name="face" size={18} color="#900" />
            <TextInput
              style={styles.textInput}
              placeholder="User Name"
              onChangeText={(e) => setUserName(e)}
            />
          </View>
          <View style={styles.textRow}>
            <Icon
              style={styles.inputIcon}
              name="email"
              size={18}
              color="#900"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={(e) => setEmail(e)}
            />
          </View>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("password")}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginText}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 30,
    paddingLeft: 25,
    paddingRight: 25,
  },
  header: {
    fontSize: 22,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    width: '70%',
    textAlign: 'center'
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  instruction: {
    fontSize: 30,
  },
  inputBlock: {
    height: "28vh",
    display: "flex",
    alignItems: 'center'
  },
  inputIcon: {
    marginBottom: 7,
  },
  textInput: {
    padding: 15,
    marginBottom: 10,
    textAlign: 'center'
  },
  loginText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    letterSpacing: 2,
  },
  loginLink: {
    textDecorationLine: "underline",
    paddingLeft: 10,
  },
  textRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
  },
});
