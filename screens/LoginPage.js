import react from "react";

import { View, Text, Button } from "react-native-web";

export default function LoginPage(){
    return(
        <View>
            <Text>Login page</Text>
            <Button
                onPress={() => {console.log("okii")}}
                title="OKII"
            />
                {/* <Text>OKII</Text>
            </Button> */}
        </View>
    );
}