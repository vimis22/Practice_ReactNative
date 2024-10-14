import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Prop5Component from './Prop5Component';
export default function App() {
  return (
    <View style={styles.container}>
      <Prop5Component showmessage={true}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
