import React from "react";
import {View, Text, StyleSheet} from "react-native";

interface Prop4Component{
    number: number;
}

const Prop4Component: React.FC<Prop4Component> = ({ number = 1 }) => {
    return(
        <View>
            <Text style={styles.container}>{number}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        color: 'red',
    },
});

export default Prop4Component;