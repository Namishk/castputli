import react, {useState} from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";

const TopPanel = () => {

    return(
        <View style={styles.container}>
                <Text style={{fontFamily: "FredokaOne_400Regular", fontSize: "2rem"}} >castputli</Text> 
        </View>
    );
};

export default TopPanel;

const styles = StyleSheet.create({
    container : {
        display : "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        minWidth: "100%"

    },
    icon: {
        width: "2rem",
        height: "2rem"
    }
});