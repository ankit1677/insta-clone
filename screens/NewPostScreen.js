import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'
import FormikPostUploader from '../components/newPost/FormikPostUploader'

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor:"black", flex:1}}>
      <AddNewPost navigation={navigation}/>
      <FormikPostUploader navigation={navigation}/>
    </SafeAreaView>
  )
}

export default NewPostScreen

