import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return(
        <>
            <Stack.Screen options={{ title: '哦豁! 404'}} />
            <View style={styles.container}>
                <Link href="/" style={styles.button} >回到首页</Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25292e',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    }
})