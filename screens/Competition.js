import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Competition({navigation}){
    return(
        <>
            <Text> Competition Page</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("Menu")}}>
                <Text>BACK</Text>
            </TouchableOpacity>
        </>
    );
}