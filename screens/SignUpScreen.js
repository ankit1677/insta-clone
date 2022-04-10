import { View, Text, StyleSheet, TextInput,  Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { SafeAreaView } from 'react-native'
import {Button} from 'react-native-elements'
import {firebase,db} from '../firebase'

const signUpSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Enter a valid email'), 
    username: yup.string().required('UserName is required'),
    password: yup.string().required('Password is required').min(6, ({min})=>`Password must be at least ${min} characters`)
})

const SignUpScreen = ({navigation}) => {

    const getRandomProfilePic = async () => {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        return data.results[0].picture.large
    }

    const onSignUp = async (email,username,password) => {
        try {
            const authUser=await firebase.auth().createUserWithEmailAndPassword(email,password)
            console.log('SignUp Successful',email,username,password)
            
            db.collection('users').add({
                owner_uid: authUser.user.uid,
                username: username,
                email:authUser.user.email,
                profile_pic: await getRandomProfilePic(),

            })
        } catch (error) {
            Alert.alert(error.message)
        }}
  return (
    <SafeAreaView style={styles.main}>
        <View>
        <Image source = {{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"}} style={{height:100,width:100}}/>
        <Image source = {require('../assets-insta/header-logo.png')} style={{height:50,width:100,resizeMode:"contain"}}/> 
        </View>
        <View style={styles.container}>
            

            <Formik 
                initialValues={{email:'',username:'',password:''}}
                validationSchema={signUpSchema}
                onSubmit={values => {
                    onSignUp(values.email,values.username,values.password)
                    navigation.navigate('LoginScreen')
                    
                }}
                validateOnMount={true}>
                {({handleChange,handleBlur,handleSubmit,values,errors,isValid}) => (
                    <>
                        <TextInput
                            name="email"
                            style={[styles.inputText,{
                                borderColor: (!errors.email) || values.email.length < 1 ? '#ccc' : 'red'
                            }]}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="Email"
                            placeholderTextColor="grey"
                        />
                        {errors.email && <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>}
                        <TextInput
                            name="username"
                            style={[styles.inputText,{
                                borderColor: (!errors.username) || values.username.length < 1 ? '#ccc' : 'red'
                            }]}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            placeholder="Username"
                            placeholderTextColor="grey"
                        />
                        {errors.username && <Text style={{fontSize: 10, color: 'red'}}>{errors.username}</Text>}
                        <TextInput
                            name="password"
                            style={[styles.inputText,{
                                borderColor: (!errors.password) || values.password.length < 1 ? '#ccc' : 'red'
                            }]}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder="Password"
                            placeholderTextColor="grey"
                        />
                        {errors.password && <Text style={{fontSize: 10, color: 'red'}}>{errors.password}</Text>}
                        <Button style={styles.button} onPress={handleSubmit} title="Sign Up" disabled={!isValid} />
                        <View style={{flexDirection:"row", justifyContent:"center"}}>
                            <Text style={styles.text}>Already a user ?</Text>
                            <TouchableOpacity onPress ={()=>navigation.navigate("LoginScreen")}>
                                    <Text style={styles.text}>Login</Text>
                            </TouchableOpacity> 
                        </View>
                    </>
                )}
            </Formik>
        </View>

    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({

    main: {
        flex:1,
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
    width:'100%',
    backgroundColor:"black"

    },
    container: {
        width:'100%',
        padding:10,
    },
    inputText: {
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
    text: {color:"white",
    alignSelf:"center",
    marginTop:10
},
button: {
    padding:15,
    width:'100%',
    alignSelf:"center",
    
    
    
    
  },
})