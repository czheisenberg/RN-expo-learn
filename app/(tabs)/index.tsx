import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import ImageViewer from "../components/ImageViewer";
import Button from "../components/Button";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="选择图片" theme="primary" />
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