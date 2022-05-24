import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import quizzes from './../components/Competitions/quizzes-options'
import TopPanel from "../components/TopPanel";
export default function Competition({ navigation }) {
    return (
        <ImageBackground source={require('./../assets/background.png')} style={styles.image}>

            <View style={styles.container}>
                <TopPanel />
                {
                    quizzes.map(q => (
                        <TouchableOpacity
                            key={q.quizID} style={styles.card} onPress={() => { navigation.navigate("Quiz", { name: `${q.quizID}` }) }}>
                            <Text style={styles.cardText}>{q.name}</Text>
                        </TouchableOpacity>
                    ))
                }
                <TouchableOpacity onPress={() => { navigation.navigate("Menu") }} style={styles.bck}>
                    <Text>BACK</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100%",
        minWidth: "100%",
        overflow : "scroll",
        paddingVertical : "2rem"
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: 'cover',
    },
    card: {
        backgroundColor: "rgba(0, 100, 255, 0.7)",
        minHeight: "15%",
        minWidth: "75%",
        borderRadius: "1rem",
        marginVertical: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    bck: {
        backgroundColor: "rgba(0, 100, 255, 0.7)",
        minHeight: "5%",
        minWidth: "30%",
        borderRadius: "1rem",
        marginVertical: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    cardText: {
        marginBottom: "0.5rem",
        fontFamily: "FredokaOne_400Regular",
        fontSize: "1.5rem"
    }
});