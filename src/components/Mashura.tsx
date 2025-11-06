import { StyleSheet, View } from 'react-native';
import Requests from './Requests';
import InputRequest from './InputRequest';

// Move to helper file
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-bitwise
    var r = (Math.random() * 16) | 0,
      // eslint-disable-next-line no-bitwise
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
const generateUserIdIfNotProvided = (userId?: string) => {
  return userId ?? generateUUID();
};

const Mashura = ({
  minChars,
  userId,
}: {
  minChars?: number;
  userId?: string;
}) => {
  return (
    <View style={styles.mashuraContainer}>
      <InputRequest minChars={minChars} />
      <Requests userId={generateUserIdIfNotProvided(userId)} />
    </View>
  );
};

export default Mashura;

const styles = StyleSheet.create({
  mashuraContainer: {
    gap: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
});
