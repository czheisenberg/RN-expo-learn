import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>关于我们</Text>
        </View>
    )
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
    }
})

export default AboutScreen;