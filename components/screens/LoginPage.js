import react, {useState} from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage({navigation}){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginBtn = () => {
        console.log(username, password);
        navigation.navigate('Main')

    };

    return(
        <View style={styles.container}>
            <Text style={styles.field}>Username
            <TextInput style={styles.fieldInput} 
                onChange={(e) =>  setUsername(e.target.value)}
                placeholder={"Username"}
            />
            </Text>

            <Text style={styles.field}>Password
            <TextInput style={styles.fieldInput} 
                onChange={(e) =>  setPassword(e.target.value)}
                placeholder={"Password"}
                secureTextEntry={true}
                
            />
            </Text>



            <TouchableOpacity style={styles.button}
                onPress={() => {loginBtn()}}
            >
                <Text>Login</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    field: {
        width: "20rem",
        marginVertical: "1rem"
    },
    fieldInput: {
       marginLeft: "1rem",
       borderBottomWidth: 1,
    },
    button:{
        backgroundColor: "rgb(0, 100, 255)",
        paddingHorizontal: "1rem",
        paddingVertical: "0.5rem",
        marginVertical: "1rem"
    }
});