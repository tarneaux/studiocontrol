import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Lumix_GX80 from './cameras.js';


const lumix = new Lumix_GX80("192.168.54.1");


export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Reinit" onPress={reinit_camera} />
      <Button title="shoot a photo" onPress={shootPhoto}></Button>
    </View>
  );
}

function shootPhoto() {
  lumix.takePicture();
}

function reinit_camera() {
  lumix.init_camera();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
