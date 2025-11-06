import { Text, View, StyleSheet } from 'react-native';
import Mashura from 'react-native-mashura';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feature Request Page</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          This is a example page for react-native-mashura.
        </Text>
        <Mashura />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ddd',
    paddingTop: 60,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  contentText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});
