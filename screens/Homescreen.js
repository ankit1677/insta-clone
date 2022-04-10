import React from 'react';
import {View,Text,SafeAreaView,StyleSheet} from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import BottomTabs from '../components/home/BottomTabs';

const Homescreen =({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>
            <Stories/>
            <Post/>
            <BottomTabs/>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",

    },
})
export default Homescreen;