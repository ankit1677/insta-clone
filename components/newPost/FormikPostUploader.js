
import { View, Text,StyleSheet,TextInput,Image } from 'react-native'
import React,{useState,useEffect}   from 'react'
import { Formik } from 'formik'
import { Button, Divider } from 'react-native-elements'
import * as yup from 'yup'
import validUrl from 'valid-url'
import {db,firebase} from '../../firebase'

const validation_schema=yup.object().shape({imageUrl:yup.string().url().required("Enter a valid URL"),caption:yup.string().max(2200,'Caption Limit Reached').required("Enter a caption")})

const place_holder_image="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=612x612&w=0&h=jPhUdbj_7nWHUp0dsKRf4DMGaHiC16kg_FSjRRGoZEI="

const FormikPostUploader = ({navigation}) => {

  const [tab_Image, settab_Image] = useState(place_holder_image)
  const [currentLoggedInUser, setcurrentLoggedInUser] = useState(null)


  const getUsername = () => {
    const user = firebase.auth().currentUser
    const unsubscribe = db.collection('users').
          where('owner_uid','==',user.uid).
          limit(1).onSnapshot(snapshot => 
          snapshot.docs.map(doc=>{
            setcurrentLoggedInUser({username:doc.data().username,
              profilePicture:doc.data().profile_pic
            })
          }))
          return unsubscribe  
  }

useEffect(()=>{
  getUsername()
},[])

const uploadPostToFirebase = (imageUrl,caption) => {
  const unsubscribe = db.collection('users').doc(firebase.auth().currentUser.email).collection('posts')
  .add({
    imageUrl:imageUrl,
    user:currentLoggedInUser.username,
    profilePicture:currentLoggedInUser.profilePicture,
    owner_uid:firebase.auth().currentUser.uid,
    caption:caption,
    createdAt:firebase.firestore.FieldValue.serverTimestamp(),
    likes:0,
    likes_by_users:[],
    comments:[],
  })
  .then(()=>navigation.navigate('Homescreen'))

  return unsubscribe
}



  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validation_schema}
        initialValues={{imageUrl:'',caption:''}}
        onSubmit={values => {
          uploadPostToFirebase(values.imageUrl,values.caption)
        
        }}
        validateOnMount={true}>
          {({ handleChange, handleBlur, handleSubmit, values,errors,isValid }) => (
            <>
              <View style={{flexDirection:"row",padding:10}}>
                <Image source={{uri: validUrl.isUri(tab_Image) ? tab_Image : place_holder_image}} style={{height:90,width:90}}/>
                <TextInput
                onChange={(e)=>{settab_Image(e.nativeEvent.text)}}
                name="imageUrl"
                placeholder='Image URL'
                placeholderTextColor={'white'}
                style={styles.textInput}
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
                />
                {errors.imageUrl && <Text style={{fontSize:10,color:'red'}}>{errors.imageUrl}</Text>}
              </View>

              <Divider orientation='vertical' style={{marginTop:10}}/>
              <TextInput
              name="caption"
              placeholder='Caption'
              placeholderTextColor={'white'}
              style={styles.textInput_comments}
              onChangeText={handleChange('caption')}
              onBlur={handleBlur('caption')}
              value={values.caption}
              multiline={true}
              
              />
              {errors.caption && <Text style={{fontSize:10,color:'red'}}>{errors.caption}</Text>}

              <Button onPress={handleSubmit} title="Share" disabled={!isValid}/>


            </>

          )}

      </Formik>
    </View>
  )
}


export default FormikPostUploader

const styles = StyleSheet.create({
  container:{
      flex:1,

  },
  textInput:{
    color:"white",
    fontSize:13,
    marginLeft:10,
    //backgroundColor:"green"
  },
  textInput_comments:{
    color:"white",
    height:100,
  },
})


//image string url required
//caption string max 2200 