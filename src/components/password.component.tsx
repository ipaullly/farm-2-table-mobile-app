import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

const Password = (props: any) => {
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Hello,</Text>
        <Text style={styles.instruction}>Sign Up</Text>
      </View>
      <View>
        <View style={styles.inputBlock}>
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
          <View style={styles.passwordInstructions}>
            <Text
              style={{
                fontSize: 15,
                paddingTop: 5,
                paddingBottom: 5,
              }}
            >
              Password should be:
            </Text>
            <Text
              style={{
                fontSize: 13,
                padding: 6,
              }}
            >
              At least 8 characters
            </Text>
            <Text
              style={{
                fontSize: 13,
                padding: 6,
              }}
            >
              At least one uppercase letter
            </Text>
            <Text
              style={{
                fontSize: 13,
                padding: 6,
              }}
            >
              At least one number
            </Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("login")}
          >
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Password;

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
    backgroundColor: "pink",
    padding: 10,
    width: "70%",
    textAlign: "center",
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  instruction: {
    fontSize: 30,
  },
  inputBlock: {
    height: "28vh",
    display: "flex",
    alignItems: "center",
  },
  inputIcon: {
    marginBottom: 7,
  },
  textInput: {
    padding: 15,
    marginBottom: 10,
    textAlign: "center",
  },
  textRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  passwordInstructions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginLeft: -40,
  },
});
