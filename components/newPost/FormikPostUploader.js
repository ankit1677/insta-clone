
import { View, Text,StyleSheet,TextInput,Image } from 'react-native'
import React,{useState}   from 'react'
import { Formik } from 'formik'
import { Button, Divider } from 'react-native-elements'
import * as yup from 'yup'

const validation_schema=yup.object().shape({imageUrl:yup.string().url().required("Enter a valid URL"),caption:yup.string().max(2200,'Caption Limit Reached').required("Enter a caption")})

const place_holder_image="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=612x612&w=0&h=jPhUdbj_7nWHUp0dsKRf4DMGaHiC16kg_FSjRRGoZEI="

const FormikPostUploader = ({navigation}) => {

  const [tab_Image, settab_Image] = useState(place_holder_image)
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validation_schema}
        initialValues={{imageUrl:'',caption:''}}
        onSubmit={values => {
          console.log(values)
          console.log('Your Post was submitted successfully')
          navigation.navigate('Homescreen')
        
        }}
        validateOnMount={true}>
          {({ handleChange, handleBlur, handleSubmit, values,errors,isValid }) => (
            <>
              <View style={{flexDirection:"row",padding:10}}>
                <Image source={{uri: tab_Image ? tab_Image : place_holder_image}} style={{height:90,width:90}}/>
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