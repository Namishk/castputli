import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
export default function Quiz({ route, navigation}) {
    const {name, id} = route.params;
    return(
        <ImageBackground source={require('./../assets/background.png')} style={styles.image}>

        <View>
            <Text>Quiz Page</Text>
            <Text>{name} and id {id}</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("Menu")}}>
                <Text>BACK</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );

};


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100%",
        minWidth : "100%",
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: 'cover',
    },
});