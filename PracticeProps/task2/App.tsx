import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from "react";
import Prop1Component from './Prop2Component'

export default function App() {
  return (
    <View style={styles.container}>
      <Prop1Component firstName="Vivek" lastName={"Misra"}></Prop1Component>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});
