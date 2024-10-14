import React from "react";
import {View, Text, StyleSheet} from "react-native";

interface Prop5Component{
    showmessage: boolean;
}

const Prop5Component: React.FC<Prop5Component> = ({ showmessage }) => {
    return(
        <View>
            {showmessage ? <Text>Jeg er synlig.</Text> : <Text>Jeg er IKKE synlig.</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        color: 'darkgreen',
    }
});

export default Prop5Component;