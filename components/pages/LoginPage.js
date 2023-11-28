import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  const handleForgotPass = () => {
    navigation.navigate("ForgotPass");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/1200x/e8/6a/c8/e86ac8ff57659f7d814b35470667ffdf.jpg",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            onPress={toggleShowPassword}
            style={styles.eyeIconContainer}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}> Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.loginButton,
            styles.registerButton,
            styles.forgotPassButtonText,
          ]}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}> Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.loginButton,
            styles.registerButton,
            styles.forgotPassButtonText,
          ]}
          onPress={handleForgotPass}
        >
          <Text style={styles.forgotPassButtonText}> Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "85%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  passwordInput: {
    flex: 1,
  },
  eyeIconContainer: {
    padding: 10,
  },
  loginButton: {
    backgroundColor: "#35748C",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "70%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  registerButton: {
    marginTop: 10,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgotPassButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginPage;
