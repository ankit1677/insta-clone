import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react' 
import { MaterialIcons } from '@expo/vector-icons';


const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('Homescreen')}>
            <MaterialIcons name="keyboard-arrow-left" size={30} color="white"  />

        </TouchableOpacity>
        
        <Text style={{color:"white", fontWeight:"700",fontSize:20,alignSelf:"center"}}>New Post</Text>
        <Text>{/* This is just to center the above text box. It's a hack bro...*/}</Text>
    </View>
  )
}

export default AddNewPost

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:10,

    },
})