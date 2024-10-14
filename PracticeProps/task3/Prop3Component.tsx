import React from "react";
import {View, Text, StyleSheet} from 'react-native';

interface Prop3Component{
    message: string;
}

const Prop3Component: React.FC<Prop3Component> = ({ message = 'Default Hello' }) => {
    return (
        <View>
            <Text style={styles.container}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        color: 'white',
    },
});

export default Prop3Component;