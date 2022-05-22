import react, {useState} from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";



export default function Menu({navigation}){

    const options = [
        {
            name: "Games",
            redirect: "Games"
        },
        {
            name : "AR Tutorials",
            redirect: "AR"
        },
        {
            name : "Competition",
            redirect : "Competition"
        }
    ];


    return(
        <View style={styles.container}
        >
            {
                options.map(op => (
                    <TouchableOpacity
                        style={styles.card}key={op.name} onPress={() => {navigation.navigate(op.redirect)}}>
                        <Text style={styles.cardText}>{op.name}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    card: {
        backgroundColor: "rgb(0, 100, 255)",
        minHeight: "25%",
        minWidth: "70%",
        borderRadius: "1rem",
        marginVertical: "1rem",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"        
    },

    cardText : {
        marginBottom: "0.5rem"
    }
});