import React, {useEffect, useState} from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType } from 'expo-camera';

export default function AR({ navigation }) {
    // const [hasPermission, setHasPermission] = useState(null);
    // const [type, setType] = useState(CameraType.back);

    // useEffect(() => {
    //     (async () => {
    //         const { status } = await Camera.requestCameraPermissionsAsync();
    //         setHasPermission(status === 'granted');
    //     })();
    // }, []);

    // if (hasPermission === null) {
    //     return <View />;
    // }
    // if (hasPermission === false) {
    //     return <Text>No access to camera</Text>;
    // }

    // // return (
    // //     <>
    // //         <Text> AR Page</Text>
    // //         <TouchableOpacity onPress={() => { navigation.navigate("Menu") }}>
    // //             <Text>BACK</Text>
    // //         </TouchableOpacity>
    // //     </>
    // // );
    // return (
    //     <View style={styles.container}>
    //       <Camera style={styles.camera} type={type}>
    //         <View style={styles.buttonContainer}>
    //           <TouchableOpacity
    //             style={styles.button}
    //             onPress={() => {
    //             //   setType(type === CameraType.back ? CameraType.front : CameraType.back);
    //             navigation.navigate("Menu")
    //             }}>
    //             <Text style={styles.text}> BACK </Text>
    //           </TouchableOpacity>
    //         </View>
    //       </Camera>
    //     </View>
    //   );
    useEffect(() => {
      window.location.href = "http://localhost:3000/";
    }, []);
  
    return(<></>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });
  