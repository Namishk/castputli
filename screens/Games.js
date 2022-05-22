import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Games({navigation}){
    return(
        <>
            <Text> Games Page</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("Menu")}}>
                <Text>BACK</Text>
            </TouchableOpacity>
        </>
    );
}