import react, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage({ navigation }) {

    const [email, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginBtn = async () => {
        console.log(email, password);
        // navigation.navigate('Main');

        const uri = 'http://localhost:3000/register'

        const data = JSON.stringify({email, password})
        console.log(data)

        var myHeaders = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        
        var requestOptions = {
            method: 'POST',
            mode: 'cors',
            Headers: myHeaders,
            body: data,
        };
        
        fetch(uri, requestOptions)
            .then(response => response.text().then(console.log(response)))
            .then(result => console.log(result, "okiii"))
            .catch(error => console.log('error', error));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.field}>UserEmail
                <TextInput style={styles.fieldInput}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder={"UserEmail"}
                />
            </Text>

            <Text style={styles.field}>Password
                <TextInput style={styles.fieldInput}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={"Password"}
                    secureTextEntry={true}

                />
            </Text>



            <TouchableOpacity style={styles.button}
                onPress={() => { loginBtn() }}
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
    button: {
        backgroundColor: "rgb(0, 100, 255)",
        paddingHorizontal: "1rem",
        paddingVertical: "0.5rem",
        marginVertical: "1rem"
    }
});