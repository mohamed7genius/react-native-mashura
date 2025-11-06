import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { RequestType } from '../types/requests';
import { useState } from 'react';
import Loading from './Loading';

const Request = ({
  title,
  description,
  votesIds,
  userId,
}: RequestType & { userId: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleVote = async () => {
    setIsLoading(true);
    // API call should be here with error/success modals
    // To show loading
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  };

  // votesIds.includes(userId)

  return (
    <View style={styles.requestContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.numberOfVotes}>{votesIds.length}</Text>
        <TouchableOpacity
          disabled={isLoading}
          onPress={handleVote}
          style={[
            styles.voteButton,
            votesIds.includes(userId) && styles.vottedButton,
          ]}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <Text style={styles.voteButtonText}>Upvote</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.requestTitle}>{title}</Text>
        <Text style={styles.requestDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({
  requestContainer: {
    gap: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  innerContainer: {
    gap: 5,
    alignItems: 'center',
  },
  numberOfVotes: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  voteButton: {
    backgroundColor: '#1c8dcd',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    minWidth: 65,
  },
  voteButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  vottedButton: {
    opacity: 0.5,
  },
  requestTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  requestDescription: {
    fontSize: 16,
  },
});
