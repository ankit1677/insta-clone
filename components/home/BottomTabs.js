import { StyleSheet, View, Image } from 'react-native'
import React ,{useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { bottomTabIcons } from '../../assets-insta/Bottom Tab Icons';
import { Divider } from 'react-native-elements';



const BottomTabs = () => {
    const[activeTab,setActiveTab]=useState('Home');
    console.log(activeTab,"activeTab");
    
  return (

    <View style={styles.wrapper}>
        <Divider orientation='vertical' width={1} />
        <View style={styles.container}>
            {bottomTabIcons.map((icon, index) => {
                    return (
                <TouchableOpacity key ={index} onPress={()=>setActiveTab(icon.name)}>

                    <Image source={{uri:activeTab===icon.name ? icon.active : icon.inactive}} style={[styles.icon,icon.name==="Profile" ? styles.profilePic() : null,activeTab==="Profile" && icon.name===activeTab ? styles.profilePic(activeTab):null]}/>
                </TouchableOpacity>
                
                    )
            })}
        </View>
    </View>

  )
        }
  
        

export default BottomTabs

const styles = StyleSheet.create({
    icon:{
        width:30,
        height:30,
        margin:10,

    },
    container:{
        flexDirection:"row", 
    justifyContent:"space-around",
    alignItems:"center",
    paddingTop:10,
    height:50 ,
    //backgroundColor:"blue",

},
wrapper:{
    //backgroundColor:"green",
    position:"absolute",
    width:'100%',
    zIndex:999,
    bottom:'3%',
    backgroundColor:"#000",

},

 profilePic:(activeTab='')=>({
    
    borderColor:"#fff",
    borderWidth: activeTab==="Profile" ? 2 : 0,
    borderRadius:50,
})
})