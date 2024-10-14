import { StyleSheet, View} from 'react-native';
import Prop3Component from "./Prop3Component";

export default function App() {
  return (
    <View style={styles.container}>
      <Prop3Component message={"Teksten står i App, men er skabt i Prop3Component."}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33afff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
