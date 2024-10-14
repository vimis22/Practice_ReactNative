import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface FullNameProps {
    firstName: string;
    lastName: string;
}

const Prop2Component: React.FC<FullNameProps> = ({ firstName, lastName }) => {
    return (
        <View>
            <Text style={styles.container}>{firstName} {lastName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        color: 'blue',
    },
});

export default Prop2Component;