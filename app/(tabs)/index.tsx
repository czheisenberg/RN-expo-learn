import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import ImageViewer from "../components/ImageViewer";
import Button from "../components/Button";
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {

  const [selectedImage, setSelectedImage ] = useState<string | undefined>(undefined);

  // 从设备的媒体库中读取文件
  // launchImageLibraryAsync()接收一个对象来指定不同的选项。这个对象是ImagePickerOptions对象，我们在调用方法时传递它。
  // 当allowsEditing设置为true时，用户可以在Android和iOS上的选择过程中裁剪图像。
  const pickImageAsync = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled){
      console.log(result);
      setSelectedImage(result.assets[0].uri)
    }else{
      alert('你未选择任何图片!');
    }
  }
  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label="选择图片" theme="primary" onPress={pickImageAsync} />
        <Button label="使用这张" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#25292e',
    },
    text: {
      color: '#fff',
    },
    button: {
      fontSize: 20,
      color: '#fff',
      textDecorationLine: 'underline'
    },
    imageContainer: {
      flex: 1
    },
    footerContainer: {
      flex: 1/3,
      alignItems: 'center'
    }
})