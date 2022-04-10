import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'


const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView} horizontal showsHorizontalScrollIndicator={false}>
          {USERS.map((item,index)=>(
            <View key={index}>
                <Image 
                source={{uri:item.image}}
                style={styles.story}      
                />

                <Text style={{color:"white"}}>
                    {
                        item.user.length>11 ? item.user.slice(0,10).toLowerCase()+'.. ':item.user.toLowerCase()+" "

                    }
                </Text>
            </View>
              
              
          
          ))}
      </ScrollView>
      
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    container:{
        marginBottom:13,


    },
    story:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:6,
        borderWidth:1,
        borderColor:"#ff8501",
        justifyContent:"center",
        alignItems:"center",

    },
    ScrollView:{
        
    }
})