import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function AR({navigation}){
    return(
        <>
            <Text> AR Page</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("Menu")}}>
                <Text>BACK</Text>
            </TouchableOpacity>
        </>
    );
}