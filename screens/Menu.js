import react, {useState} from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import TopPanel from "../components/TopPanel";
import options from './../components/Menu/options'



export default function Menu({navigation}){

    return(
        <ImageBackground source={require('./../assets/background.png')} style={styles.image}>

        <View style={styles.container}
        >
            <TopPanel />
            {
                options.map(op => (
                    <TouchableOpacity
                        style={styles.card} key={op.name} onPress={() => {navigation.navigate(op.redirect)}}>
                            <ImageBackground source={`${op.background}`} style={styles.icon}>
                        <Text style={styles.cardText}>{op.name}</Text>
                            </ImageBackground>
                    </TouchableOpacity>
                ))
            }
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        minWidth: "100%"
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: 'cover',
    },
    card: {
        backgroundColor: "rgb(0, 100, 255)",
        minHeight: "20%",
        minWidth: "75%",
        borderRadius: "1rem",
        marginVertical: "3rem",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        overflow: "hidden"       
    },

    cardText : {
        marginBottom: "0.5rem",
        fontFamily: "FredokaOne_400Regular",
        fontSize: "1.5rem"
    },
    icon: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        resizeMode: 'cover',
        width: "100%",
        height: "100%",
        borderRadius: "1rem"
    }
});