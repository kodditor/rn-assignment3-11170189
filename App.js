import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text>Hello, Devs</Text>
          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: flex,
    flexDirection: 'column',
    gap: '1.5rem',
  },
  title: {
    fontSize: '25px',
    fontWeight: '700'
  }
});
