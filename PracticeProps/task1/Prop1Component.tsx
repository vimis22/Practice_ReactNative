import React from 'react';
import {View, Text} from 'react-native';

interface ChildProps{
    message: string;
}

const ChildComponent: React.FC<ChildProps> = ({message}) => {
    return(
        <View>
            <Text>{message}</Text>
        </View>
    )
}

export default ChildComponent;