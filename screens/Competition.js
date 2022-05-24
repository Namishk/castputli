import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import quizzes from './../components/Competitions/quizzes-options'
export default function Competition({navigation}){
    return(
        <View style={styles.container}>
            <Text> Competition Page</Text>
            {
                quizzes.map(q => (
                    <TouchableOpacity 
                        key={q.quizID} style={styles.card} onPress={() => {navigation.navigate("Quiz", {name : `${q.quizID}`})}}>
                            <Text style={styles.cardText}>{q.name}</Text>
                    </TouchableOpacity>
                ))
            }
            <TouchableOpacity onPress={() => {navigation.navigate("Menu")}}>
                <Text>BACK</Text>
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

    card: {
        backgroundColor: "rgb(0, 100, 255)",
        minHeight: "15%",
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