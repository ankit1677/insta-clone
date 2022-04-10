import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {firebase} from '../../firebase'

const handleSignOut = async () => {
  try{  
  await firebase.auth().signOut()}
  catch(error){
    console.log(error)
  }
}



const Header= ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress ={()=>handleSignOut()}>
        <Image 
        source={require('../../assets-insta/header-logo.png')}
      style={styles.logo} 

      />

      </TouchableOpacity >

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('NewPostScreen')} >
          <AntDesign name="plussquareo" size={24} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="hearto" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <FontAwesome5 name="facebook-messenger" size={24} color="white" />
        </TouchableOpacity>

      </View>
      
    </View>
  )
}
const styles=StyleSheet.create({
 container:{
     
     justifyContent:"space-between",
     alignItems:"center",
     flexDirection:"row",
     //backgroundColor:"white",


 },
 logo:{
   width:100,
   height:50,
   resizeMode:"contain",
   //backgroundColor:"red",
   
   
 },

 iconContainer:{
  flexDirection:"row",
  justifyContent:"space-between",
  //backgroundColor:"green",
  marginRight:12,

 },

 icon:{
 marginLeft:10,
 },

 unreadBadge:{
  backgroundColor:"red",
  position:"absolute",
  left:10,
  bottom:12,
  height:18,
  width:25,
  borderRadius:25,
  alignItems:"center",
  justifyContent:"center",
  zIndex:100,
  
 },

 unreadBadgeText:{
  color:"white",
  fontWeight:'600',
  
 },
})

export default Header;