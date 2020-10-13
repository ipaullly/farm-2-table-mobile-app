import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../store/auth-context";

const SignUp = (props: any) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  
  const [signUpLoading, setSignUpLoading] = useState(false)
  const [email, setEmail] = useState("");

  const [emailRes, setEmailRes] = useState<any>(null);
  const [phoneRes, setPhoneRes] = useState<any>(null);
  const [nameRes, setNameRes] = useState<any>(null);
  const [passwordRes, setPasswordRes] = useState<any>(null);

  const [feedback, setFeedback] = useState<any>(null);

  const [showEmailAlert, setShowEmailAlert] = useState<any>(null);
  const [showPhoneAlert, setShowPhoneAlert] = useState<any>(null);
  const [showPasswordAlert, setShowPasswordAlert] = useState<any>(null);
  const [showNameAlert, setShowNameAlert] = useState<any>(null);

  const [showSuccessRegistration, setShowSuccessRegistration] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  const { signUp, isLoading } = useContext(AuthContext);

  const handleRegister = async ( ) => {
    setSignUpLoading(true)
    const res: any = await signUp({ phone, password, email, name });
    if (typeof res === 'object' && res !== null) {
      setFeedback(res)
      if ('email' in res) {
        setEmailRes(res.email)
      }
      if ('phone' in res) {
        setPhoneRes(res.phone)
      }
      if ('name' in res) {
        setNameRes(res.name)
      }
      if ('password' in res) {
        setPasswordRes(res.password)
      }
      if ('id' in res) {
        setUser(res.name);
      }
    }
    setSignUpLoading(false);
    // setShowEmailAlert(false)
    // setShowPhoneAlert(false)
    // setShowNameAlert(false)
    // setShowPasswordAlert(false)
  };

  useEffect(() => {
    if(emailRes) {
      setShowEmailAlert(true)
    }
    if(phoneRes) {
      setShowPhoneAlert(true)
    }
    if(nameRes) {
      setShowNameAlert(true)
    }
    if(passwordRes) {
      setShowPasswordAlert(true)
    }
    if(user) {
      setShowSuccessRegistration(true)
    }
  }, [emailRes, phoneRes, nameRes, passwordRes, user])
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Hello,</Text>
        <Text style={styles.instruction}>Sign Up</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputBlock}>
          <View style={styles.textRow}>
            <Icon name="create" size={18} style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              onChangeText={(e) => setName(e)}
            />
          </View>
          <View style={styles.textRow}>
            <Icon style={styles.inputIcon} name="face" size={18} color="#900" />
            <TextInput
              style={styles.textInput}
              placeholder="Phone"
              onChangeText={(e) => setPhone(e)}
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
              onChangeText={(e) => {
                setEmail(e)
              }}
            />
          </View>
          <View style={styles.textRow}>
            <Icon name="lock" size={18} style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={false}
              onChangeText={(e) => setPassword(e)}
            />
          </View>
        </View>
        <View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.button}
              // onPress={() => handleRegister()}
              onPress={() => setShowSuccessRegistration(true)}
            >
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
          <View>
          <AwesomeAlert
            show={showEmailAlert}
            showProgress={false}
            title="Validation Error"
            message={emailRes? emailRes: ''}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor="#e0a226"
            
            onConfirmPressed={() => {
              setShowEmailAlert(false)
            }}
          />
          <AwesomeAlert
            show={showPhoneAlert}
            showProgress={false}
            title="Validation Error"
            message={phoneRes? phoneRes: ''}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor="#e0a226"
            
            onConfirmPressed={() => {
              setShowPhoneAlert(false)
            }}
          />
          <AwesomeAlert
            show={showNameAlert}
            showProgress={false}
            title="Validation Error"
            message={nameRes? nameRes: ''}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor="#e0a226"
            
            onConfirmPressed={() => {
              setShowNameAlert(false)
            }}
          />
          <AwesomeAlert
            show={showPasswordAlert}
            showProgress={false}
            title="Validation Error"
            message={passwordRes? passwordRes: ''}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor="#e0a226"
            
            onConfirmPressed={() => {
              setShowPasswordAlert(false)
            }}
          />
          <AwesomeAlert
            show={showSuccessRegistration}
            showProgress={false}
            title="Success"
            message={`Account created for user ${user}`}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Sign In to Your Account"
            confirmButtonColor="#58e026"
            
            onConfirmPressed={() => {
              setShowSuccessRegistration(false);
              // props.navigation.navigate("login")
            }}
          />
          </View>
          <View style={styles.loginText}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {signUpLoading? (<View style={styles.loader}>
        <ActivityIndicator size="large" color="#33e026" />
      </View>) : null}
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
    position: 'relative',
    overflow: 'hidden'
  },
  body: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
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
  loader: {
    position: "absolute",
    zIndex: 3,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
  }
});
