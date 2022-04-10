import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react';
import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native';
import {POSTS} from '../../data/posts' ;
import { AntDesign,Feather,Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

let count_obj = [{id:0,count:false},{id:1,count:false}];
//console.log(count_obj,"hhhhhhh");

const Post = () => {

    
    

  return (
    <View style={{flex:1}}>

    
        <ScrollView> 
            {POSTS.map((post,id)=>(
            <View style={{marginBottom:30}} key={id} >
                <Divider width={1} orientation="vertical"/>
                <PostHeader post={post} />
                <PostImage post={post}/>
                <View style={{marginHorizontal:15,marginTop:10}}>
                    <PostFooter />
                    <Likes post={post}/>
                    <Caption post={post}/>
                    
                        
                    <Comments_state 
                        post={post} 
                        
                    />

                    

                    
                    
                    

                </View>
                
            </View>
                
            ))}
            

        </ScrollView>
    </View>
    
  )
};

export default Post

const PostHeader =({post})=>{
    return (
    <View style={{
        flexDirection:'row', 
        justifyContent:"space-between", 
        margin:5,
        alignItems:"center" }}>
        <View style={{flexDirection:'row', alignItems:"center",}}>
            <Image source={{uri:post.profile_picture}} style={styles.story}/>
            <Text style={{color:'white', marginLeft:5,fontWeight:"600"}}>{post.user}</Text>
        </View>

        <Text style={{color:'white', fontWeight:"900"}}>...</Text>

        
    </View>
)}

const PostImage=({post})=>{
    return(
        <View style={{width:'100%', height:450,marginBottom:15}}>
            <Image 
                source={{uri:post.imageUrl}}
                style={{height:'100%', resizeMode:"cover"}}
            /> 

        </View>
        
    )
};


const PostFooter=()=>(

    <View>

    
        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
            <View style={{flexDirection:"row", } }>
                <TouchableOpacity style={styles.icon}>
                    <AntDesign name="hearto" size={30} color="white"  />

                </TouchableOpacity >

                <TouchableOpacity style={styles.icon}>
                    <Feather name="message-circle" size={30} color="white" />

                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="paper-plane-outline" size={30} color="white" />
        
                    
                </TouchableOpacity>
                
                
                
            </View>
            
            
            <View>
                <TouchableOpacity style={styles.icon}>
                    
                    <Ionicons name="bookmark-outline" size={30} color="white" />
                        
                </TouchableOpacity>

                

            </View>
            
            
        </View>

        

        

    </View>
);

const Likes=({post})=>(
    <View style={{marginTop:5}}>
        <Text style={{color:'white', fontWeight:"600"}}>{post.likes} likes</Text>
    </View>
);
const Caption=({post})=>(
    <View>
        <Text>
            <Text style={{color:"white",fontWeight:"700"}}>{post.user}</Text>
            <Text style={{color:"white",fontWeight:"300"}}>{post.caption}</Text>

        </Text>
        
    </View>
)

const Comments_state=({post})=>{
    id=post.id;
    const index_a = count_obj.map(e => e.id).indexOf(id);
    //console.log(id);
    const [counted,setCounted] = useState(false);

    const onPress = () => {
        id=post.id
        //console.log("##",id);
        const index = count_obj.map(e => e.id).indexOf(id);
        //console.log(index,"hgtyyy");
        count_obj[index].count=!count_obj[index].count;
        setCounted(!counted);

    }
    //const index = Data.findIndex(item => item.name === 'John');
    if (count_obj[index_a].count===true){
        return(
            <View>
                <TouchableOpacity onPress={onPress}>
                    <Comments_main post={post}/>

                </TouchableOpacity>
                
                <Comments post={post}/>

            </View>
            
        )
    }
    return(
        <View>
            <TouchableOpacity onPress={onPress}>
                    <Comments_main post={post}/>

                </TouchableOpacity>
        </View>
    )
}


const Comments_main=({post})=>{
    
        if(post.comments.length===1){
            return(
                <Text style={{color:"gray", marginTop:5}}>View Comment</Text>
            )
        }
        else if(post.comments.length>1){
            return(
                <Text style={{color:"gray",marginTop:5}}>View {post.comments.length} Comments</Text>
            )
        }

        return (null)
        
   
}


const Comments=({post})=>(
    <View style={{marginTop:5}}>
            
        {post.comments.map((comment,index)=>(
            <View key={index}>
                <Text>
                    <Text style={{color:"white" ,fontWeight:"700"}}>{comment.user}</Text> 
                    <Text style={{color:"white", fontWeight:"300"}}> {comment.comment}</Text>
                </Text>
            </View>
            
        ))}
            
    </View>
);









const styles = StyleSheet.create({

    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:6,
        borderWidth:1.6,
        borderColor:"#ff8501",
        justifyContent:"center",
        alignItems:"center",

    },

    icon:{
        
        marginRight:10,
   //backgroundColor:"red",
        
    },
})


