import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from '../src/AuthProvider'
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { AuthNavProps } from '../src/AuthParamList'
import { Input, Button } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";

const Signup = ({ navigation, route }: AuthNavProps<"Login">) => {
  // const { user } = useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleChangeEmail = (email: string) => {
    setEmail(email)
  }
  const handleChangePassword = (password: string) => {
    setPassword(password)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>

      <View style={styles.footer}>
        <Input 
          placeholder="email@address.com"
          leftIcon={{ type: 'material', name: 'email' }}
          onChangeText={(email) => handleChangeEmail(email)}
        />
        <Input 
          placeholder="Password"
          leftIcon={{ type: 'material', name: 'lock' }}
          secureTextEntry
          onChangeText={(pw) => handleChangePassword(pw)}
        />
        <Input 
          placeholder="Confirm Password"
          leftIcon={{ type: 'material', name: 'lock' }}
          secureTextEntry
          errorStyle={{ color: 'red' }}
          errorMessage='ENTER A VALID ERROR HERE'
          onChangeText={(pw) => handleChangePassword(pw)}
        />
        <Button
          style={styles.button}
          title="Sign Up"
          buttonStyle={{
            backgroundColor:'dodgerblue'
          }}
        />
        <View style={styles.goBack}>
          <Text> 
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#b6e1f6'
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      marginTop: 10,
  },
  goBack: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center'
  },
});

export default Signup

