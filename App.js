import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Demo from "./component/Demo2"
//import Light from "./component/Light"
//import PizzaTranslator from "./component/Start"
//import Scroller from './component/Scroller';
//import FlatList from "./component/FlatListDemo"
import FlatListSelector from "./component/FlatListSelector"



export default function App() {
  return (
    <View style={styles.container}>
      
      <FlatListSelector />
      
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