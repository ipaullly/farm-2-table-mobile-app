import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../store/auth-context";

const SignIn = (props: any) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true)

  const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Hello,</Text>
        <Text style={styles.instruction}>Welcome Back!</Text>
      </View>
      <View>
        <View style={styles.inputBlock}>
          <View style={styles.textRow}>
            <Icon name="create" size={18} style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Phone No."
              onChangeText={(e) => setPhone(e)}
            />
          </View>
          <View style={styles.textRow}>
            <Icon name="lock" size={18} style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={hidePassword}
              onChangeText={(e) => setPassword(e)}
            />
            {hidePassword ? (
              <TouchableOpacity
                onPress={() => setHidePassword(false)}
              >
                <Icon 
                name="visibility"
                size={18} 
                style={styles.inputIcon} 
              />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setHidePassword(true)}
              >
                <Icon 
                  name="visibility-off" 
                  size={18} style={styles.inputIcon}  
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => signIn({ phone, password })}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("register")}>
            <Text style={styles.loginLink}>sign up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

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
  loginContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  loginText: {
    letterSpacing: 2
  },
  loginLink: {
    textDecorationLine: "underline",
    paddingLeft: 10,
  },
  textRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: '80%',
    borderBottomWidth: 1,
  },
});
