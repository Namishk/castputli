import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
export default function Quiz({ route, navigation}) {
    const {name, id} = route.params;
    return(
        <View>
            <Text>Quiz Page</Text>
            <Text>{name} and id {id}</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("Menu")}}>
                <Text>BACK</Text>
            </TouchableOpacity>
        </View>
    );

};