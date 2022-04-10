import { StyleSheet, Text, View, TextInput, Image,Pressable,Alert} from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {firebase, db} from '../firebase'

const loginVALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().required('Email is required').email('Enter a valid email'),
  password: yup.string().required('Password is required').min(6 ,({min})=>`Password must be at least ${min} characters`)
})


const LoginScreen = ({navigation}) => {

  const onLogin = async (email,password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email,password)
      console.log('Login Successful',email,password)
      navigation.navigate('Homescreen')
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  return (
  <SafeAreaView style={styles.container}>
    <View>
      <Image source = {{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"}} style={{height:100,width:100}}/>
      <Image source = {require('../assets-insta/header-logo.png')} style={{height:50,width:100,resizeMode:"contain"}}/> 
    </View>
    <View style={styles.inner}>
    
      <Formik
        style={styles.form}
        validationSchema={loginVALIDATION_SCHEMA}
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          onLogin(values.email,values.password)
          }}
          validateOnMount={true}>
        {({ handleChange, handleBlur, handleSubmit, values,errors,isValid }) => (
          <>
            <TextInput
              style={[styles.input,{
                borderColor: (!errors.email) || values.email.length < 1 ? '#ccc' : 'red'
              }]}
              name="email"
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholderTextColor="grey"
            />
            {errors.email && <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>}
            <TextInput
              style={[styles.input,{
                borderColor: (!errors.password) || values.password.length < 1 ? '#ccc' : 'red'
              }]}
              name="password"
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholderTextColor="grey"
            />
            {errors.password && <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>}
            <TouchableOpacity>
              <Text style={{color:"white",alignSelf:"flex-end",marginTop:10}}>Forgot Password?</Text>
            </TouchableOpacity>
            <Pressable style={styles.button(isValid)} onPress={handleSubmit} title="Login" >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <View style={{flexDirection:"row", justifyContent:"center"}}>
                <Text style={styles.text}>New User?  </Text>
                <TouchableOpacity onPress ={()=>navigation.navigate("SignUpScreen")}>
                        <Text style={styles.text}>Sign Up</Text>
                </TouchableOpacity> 
              </View>
          </>
        )}
        </Formik>
      </View>
      <Text></Text>

    
  </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
    width:'100%',
    backgroundColor:"black"
  },
  inner: {
  
  width:'100%',
  //backgroundColor:"grey",
  
  padding:10,
  },
  form: {
    //backgroundColor:"red",
  },

  input: {
    fontSize: 20,
    fontWeight: '300',
    color:"white",
    paddingTop:15,
    borderColor:"grey",
    borderWidth:0.5,
    height:50,
    borderRadius:10,
    marginBottom:10,
  },
  button: isValid=>({
    
    width:'100%',
    height:50,
    alignSelf:"center",
    backgroundColor:isValid ? "green" : "grey",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    
  }),
  text: {color:"white",
    alignSelf:"center",
    marginTop:10
},
  

  
})