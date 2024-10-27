import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>首页</Text>
      <Link
        href="/about"
        style={styles.button}
      >
        关于我们
      </Link>
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
    }
})