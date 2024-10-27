import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import ImageViewer from "../components/ImageViewer";
import Button from "../components/Button";
import * as ImagePicker from 'expo-image-picker';
import CircleButton from "../components/CircleButton";
import IconButton from "../components/IconButton";
import EmojiPicker from "../components/EmojiPicker";
import EmojiList from "../components/EmojiList";
import EmojiSticker from "../components/EmojiSticker";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {

  const [selectedImage, setSelectedImage ] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);

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
      setSelectedImage(result.assets[0].uri ? result.assets[0].uri : undefined)
      setShowAppOptions(true);
    }else{
      alert('你未选择任何图片!');
    }
  }
  const onReset = () =>{
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };
  const onSaveImageAsync = async () =>{
    //
  };
  return (
    <GestureHandlerRootView
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="重置" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="保存" onPress={onSaveImageAsync} />
          </View>
        </View>
      ): (
        <View style={styles.footerContainer}>
          <Button label="选择图片" theme="primary" onPress={pickImageAsync} />
          <Button label="使用这张" onPress={() => setShowAppOptions(true)}/>
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
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
    },
    optionsContainer: {
      position: 'absolute',
      bottom: 80,
    },
    optionsRow: {
      alignItems: 'center',
      flexDirection: 'row',
    }
})