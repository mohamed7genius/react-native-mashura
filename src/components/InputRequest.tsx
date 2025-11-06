import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Loading from './Loading';

const InputRequest = ({ minChars = 20 }: { minChars?: number }) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isValidText = (str: string) => {
    let trimmed = str.trim();
    return trimmed.length >= minChars;
  };

  const handleSend = async () => {
    if (text.trim().length === 0) {
      Alert.alert('A request cannot be empty');
      return;
    }

    if (minChars && !isValidText(text)) {
      Alert.alert(`Please enter at least ${minChars} characters`);
      return;
    }

    setIsLoading(true);
    // API call should be here with error/success modals
    // To show loading
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Suggest a new feature"
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSend}
        disabled={isLoading}
      >
        {isLoading ? <Loading /> : <Text style={styles.buttonText}>Send</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default InputRequest;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#1c8dcd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1, // to have same height as input
    borderColor: '#1c8dcd',
    minWidth: 70,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
